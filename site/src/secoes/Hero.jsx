import { useEffect, useRef, useState } from 'react'
import { HERO } from '../dados/conteudo.js'
import { Celular, Relogio, ImagemOpcional, FOTOS } from '../componentes/Aparelhos.jsx'
import { Icone } from '../componentes/Icone.jsx'
import { Escudo } from '../componentes/Marca.jsx'
import { BotaoConversa } from '../componentes/Topo.jsx'
import { blackAtiva } from './BlackFriday.jsx'
import { gsap, ScrollTrigger, irPara } from '../lib/rolagem.js'

const hoje = () => {
  const d = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date())
  return d.charAt(0).toUpperCase() + d.slice(1)
}

// sublinha uma palavra do título com o traço laranja desenhado à mão
function grifar(linha, palavra) {
  const i = linha.indexOf(palavra)
  if (i < 0) return linha
  return (
    <>
      {linha.slice(0, i)}
      <span className="hero__grifo">
        {palavra}
        <svg viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true"><path d="M6 26 C90 12 210 8 394 18" /></svg>
      </span>
      {linha.slice(i + palavra.length)}
    </>
  )
}

function TelaBloqueio() {
  return (
    <div className="bloqueio">
      <div className="bloqueio__fundo" />
      <p className="bloqueio__data">{hoje()}</p>
      <p className="bloqueio__hora">9:41</p>
      <div className="bloqueio__avisos">
        {HERO.notificacoes.map((n, i) => (
          <div className="aviso" key={i} style={{ '--i': i }}>
            <span className="aviso__app"><Icone nome="whatsapp" /></span>
            <span className="aviso__corpo">
              <span className="aviso__topo"><b>{n.quem}</b><em>{n.quando}</em></span>
              <span className="aviso__texto">{n.texto}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="bloqueio__rodape"><span /><span /></div>
    </div>
  )
}

function TelaRelogio() {
  return (
    <div className="tela-relogio">
      <span className="tela-relogio__topo"><Escudo cor="var(--laranja)" /> <em>14:21</em></span>
      <b>A caminho</b>
      <span className="tela-relogio__info"><Icone nome="moto" /> 15 min</span>
      <span className="tela-relogio__barra"><i /></span>
    </div>
  )
}

export function Hero() {
  const raiz = useRef(null)
  const progresso = useRef(0)
  const [fotoCostas, setFotoCostas] = useState(null)

  // computador: holofote que segue o mouse e puxa o horizonte de leve na mesma direção
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const el = raiz.current
    let quadro = 0, mx = 0.5, my = 0.35
    const aplicar = () => {
      quadro = 0
      el.style.setProperty('--mx', `${(mx * 100).toFixed(2)}%`)
      el.style.setProperty('--my', `${(my * 100).toFixed(2)}%`)
      el.style.setProperty('--px', `${((mx - 0.5) * 30).toFixed(1)}px`)
      el.style.setProperty('--py', `${((my - 0.5) * 16).toFixed(1)}px`)
    }
    const mover = (e) => {
      const r = el.getBoundingClientRect()
      mx = (e.clientX - r.left) / r.width
      my = (e.clientY - r.top) / r.height
      if (!quadro) quadro = requestAnimationFrame(aplicar)
    }
    el.classList.add('com-mouse')
    el.addEventListener('pointermove', mover)
    return () => { el.removeEventListener('pointermove', mover); cancelAnimationFrame(quadro) }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // os aparelhos sobem de dentro do túnel conforme a rolagem
      gsap.fromTo('.hero__aparelhos', { yPercent: 0 }, {
        yPercent: -34, ease: 'none',
        scrollTrigger: { trigger: raiz.current, start: 'top top', end: 'bottom top', scrub: 0.6 },
      })
      gsap.to('.hero__texto', {
        y: -60, opacity: 0.15, ease: 'none',
        scrollTrigger: { trigger: raiz.current, start: 'top top', end: '55% top', scrub: 0.6 },
      })
      gsap.to('.hero__chip--0', { y: -70, ease: 'none', scrollTrigger: { trigger: raiz.current, start: 'top top', end: 'bottom top', scrub: 0.8 } })
      gsap.to('.hero__chip--1', { y: -120, ease: 'none', scrollTrigger: { trigger: raiz.current, start: 'top top', end: 'bottom top', scrub: 0.8 } })
      gsap.to('.hero__chip--2', { y: -40, ease: 'none', scrollTrigger: { trigger: raiz.current, start: 'top top', end: 'bottom top', scrub: 0.8 } })
      gsap.to('.hero__luz img', { scale: 1.45, yPercent: -8, ease: 'none', scrollTrigger: { trigger: raiz.current, start: 'top top', end: 'bottom top', scrub: 0.8 } })
      gsap.to('.hero__relogio', { y: -50, rotate: -4, ease: 'none', scrollTrigger: { trigger: raiz.current, start: 'top top', end: 'bottom top', scrub: 0.8 } })
      ScrollTrigger.create({
        trigger: raiz.current, start: 'top top', end: 'bottom top',
        onUpdate: (s) => { progresso.current = s.progress },
      })
    }, raiz)
    // entrada do topo da página, logo depois do escudo de carregamento
    const t = setTimeout(() => raiz.current?.classList.add('in'), 950)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <section className="hero" id="inicio" ref={raiz}>
      <div className="hero__campo">
        {/* luz do horizonte: imagem do antigo túnel WebGL + animação leve em CSS */}
        <div className="hero__tunel hero__luz" aria-hidden="true">
          <picture>
            <source media="(max-width: 700px)" srcSet="aparelhos/luz-cel.webp" />
            <img src="aparelhos/luz-pc.webp" alt="" decoding="async" fetchpriority="high" />
          </picture>
        </div>
        <div className="hero__holofote" aria-hidden="true" />
        <div className="hero__texto">
          {blackAtiva() ? (
            <a className="hero__etiqueta" href="#black-friday" onClick={(e) => { e.preventDefault(); irPara('#black-friday') }} data-revela style={{ '--i': 1 }}>
              <b>Black Friday</b><span className="longo">Ganhe uma garrafa personalizada</span><span className="curto">Ganhe uma garrafa de brinde</span><Icone nome="seta" />
            </a>
          ) : (
            <p className="hero__etiqueta hero__etiqueta--fixa" data-revela style={{ '--i': 1 }}><i /><span>Loja de iPhones em Maceió · desde 2020</span></p>
          )}
          <h1 className="titulo titulo--hero">
            {HERO.titulo.map((l, i) => <span className="linha-mascara" key={i}><span style={{ '--i': i + 2 }}>{grifar(l, 'Maceió')}</span></span>)}
          </h1>
          <p className="texto centro" data-revela style={{ '--i': 5 }}>{HERO.texto}</p>
          <div className="hero__acoes" data-revela style={{ '--i': 6 }}>
            <BotaoConversa grande />
          </div>
          <p className="hero__selo" data-revela style={{ '--i': 7 }}>
            <Escudo cor="var(--laranja)" className="hero__selo-escudo" />
            <span>{HERO.selo}</span>
            <i />
            <span>Lacrados e seminovos</span>
          </p>
        </div>
      </div>

      <div className="hero__aparelhos" aria-hidden="true">
        <div className={`hero__palco ${fotoCostas ? 'hero__palco--com-costas' : ''}`}>
          {/* iPhone de costas (foto do ChatGPT) atrás do celular de frente */}
          <ImagemOpcional src={FOTOS.glacial} className="hero__costas" onStatus={setFotoCostas} />
          {/* iPhone 18 Pro Max bordô, a cor nova, do lado direito (espelhando o azul-glacial) */}
          <img src="aparelhos/iphone-18-bordo.webp" className="hero__novo" alt="" decoding="async" />
          <Celular className="hero__celular" escuro semBarra={false}><TelaBloqueio /></Celular>
          <Relogio className="hero__relogio"><TelaRelogio /></Relogio>
          {HERO.chips.map((c, i) => (
            <div key={c.id} className={`hero__chip hero__chip--${i}`}>
              <span className="hero__chip-icone"><Icone nome={c.icone} /></span>
              <span><b>{c.titulo}</b><small>{c.texto}</small></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
