import { useEffect } from 'react'
import { gsap, ScrollTrigger } from './rolagem.js'

/*
 * Túnel de cartas da galeria (adaptado do "Perspective Tunnel Hero" do 21st.dev).
 * O original prende a roda do mouse (preventDefault) e depende do framer-motion. Aqui a rolagem da
 * página continua livre: as cartas viajam do fundo para perto da câmera conforme a seção passa pela
 * tela (ScrollTrigger com scrub), e só transform/opacity são animados. No celular são menos cartas,
 * sem paralaxe de ponteiro. Com movimento reduzido, as cartas ficam paradas em profundidades fixas.
 */
const ANGULO_OURO = (137.5 * Math.PI) / 180
const TRECHO = 0.55 // fração do trajeto em que cada carta fica visível

export function useTunel(palcoRef, { desktop = 10, movel = 6 } = {}) {
  useEffect(() => {
    const palco = palcoRef.current
    if (!palco) return
    const cartas = [...palco.querySelectorAll('[data-carta]')]
    const tunel = palco.querySelector('[data-tunel]')
    let ctx = null
    let largura = 0

    const montar = () => {
      ctx?.revert()
      largura = palco.clientWidth
      const h = palco.clientHeight
      const eMovel = window.matchMedia('(max-width: 767px)').matches
      const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const n = Math.min(eMovel ? movel : desktop, cartas.length)
      const longe = eMovel ? -950 : -1500
      const perto = eMovel ? 140 : 220

      ctx = gsap.context(() => {
        cartas.forEach((c, i) => {
          if (i >= n) { gsap.set(c, { display: 'none' }); return }
          const ang = i * ANGULO_OURO
          const fx = eMovel ? 0.4 + (i % 3) * 0.07 : 0.28 + (i % 3) * 0.08
          const fy = eMovel ? 0.3 + (i % 2) * 0.1 : 0.26 + (i % 2) * 0.09
          gsap.set(c, {
            display: '',
            xPercent: -50,
            yPercent: -50,
            x: Math.cos(ang) * largura * fx,
            y: Math.sin(ang) * h * fy,
            rotation: (i % 2 ? -1 : 1) * (3 + (i % 5) * 2),
            z: reduz ? -250 + i * 30 : longe,
            opacity: reduz ? 1 : 0,
            force3D: true,
          })
        })
        if (reduz) return

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { trigger: palco, start: 'top bottom', end: 'bottom top', scrub: 0.5, invalidateOnRefresh: true },
        })
        for (let i = 0; i < n; i++) {
          const ini = (i / n) * (1 - TRECHO)
          tl.fromTo(cartas[i], { z: longe }, { z: perto, duration: TRECHO }, ini)
            .to(cartas[i], { opacity: 1, duration: TRECHO * 0.2 }, ini)
            .to(cartas[i], { opacity: 0, duration: TRECHO * 0.18 }, ini + TRECHO * 0.82)
        }

        // paralaxe leve do mouse, só onde existe mouse
        if (!eMovel && tunel && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
          const qx = gsap.quickTo(tunel, 'x', { duration: 0.9, ease: 'power3.out' })
          const qy = gsap.quickTo(tunel, 'y', { duration: 0.9, ease: 'power3.out' })
          const mover = (e) => {
            qx(-(e.clientX / window.innerWidth - 0.5) * 36)
            qy(-(e.clientY / window.innerHeight - 0.5) * 24)
          }
          window.addEventListener('pointermove', mover, { passive: true })
          return () => window.removeEventListener('pointermove', mover)
        }
      }, palco)
    }

    montar()
    // refaz só quando a LARGURA muda (a barra de endereço do celular muda a altura o tempo todo)
    const ro = new ResizeObserver(() => { if (palco.clientWidth !== largura) { montar(); ScrollTrigger.refresh() } })
    ro.observe(palco)
    // pausa a flutuação (CSS) quando a seção está fora da tela
    const io = new IntersectionObserver(([e]) => palco.classList.toggle('galeria__palco--fora', !e.isIntersecting), { rootMargin: '120px 0px' })
    io.observe(palco)
    return () => { ro.disconnect(); io.disconnect(); ctx?.revert() }
  }, [palcoRef, desktop, movel])
}
