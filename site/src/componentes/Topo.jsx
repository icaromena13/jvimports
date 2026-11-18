import { useEffect, useRef, useState } from 'react'
import { Marca, Escudo } from './Marca.jsx'
import { Icone } from './Icone.jsx'
import { NavLiquida } from './NavLiquida.jsx'
import { NAV, MENSAGEM_PADRAO, MENSAGENS, linkConversa, canalConversa } from '../dados/conteudo.js'
import { irPara, aoRolar } from '../lib/rolagem.js'

export function Topo() {
  const [escuro, setEscuro] = useState(false)
  useEffect(() => {
    // a cápsula escurece sobre as seções azul-marinho; um observador numa faixa fina no alto da
    // tela faz isso sem medir nada a cada quadro de rolagem
    const sobre = new Set()
    const io = new IntersectionObserver((entradas) => {
      for (const e of entradas) (e.isIntersecting ? sobre.add(e.target) : sobre.delete(e.target))
      setEscuro(sobre.size > 0)
    }, { rootMargin: '-30px 0px -93% 0px', threshold: 0 })
    const alvos = () => document.querySelectorAll('[data-fundo-escuro]').forEach((s) => io.observe(s))
    alvos()
    const t = setTimeout(alvos, 1500)
    return () => { clearTimeout(t); io.disconnect() }
  }, [])
  const clicar = (e, alvo) => { e.preventDefault(); irPara(alvo) }

  // item ativo do menu = seção que ocupa a faixa do meio da tela; depois de um clique, a gota
  // fica parada no item escolhido até a rolagem terminar (senão ela passaria por todos os outros)
  const [ativo, setAtivo] = useState(0)
  const travaAte = useRef(0)
  useEffect(() => {
    const io = new IntersectionObserver((entradas) => {
      if (performance.now() < travaAte.current) return
      for (const e of entradas) {
        if (!e.isIntersecting) continue
        const i = NAV.findIndex((n) => n.alvo === `#${e.target.id}`)
        if (i >= 0) setAtivo(i)
      }
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 })
    const alvos = () => NAV.forEach((n) => { const s = document.querySelector(n.alvo); if (s) io.observe(s) })
    alvos()
    const t = setTimeout(alvos, 1500)
    return () => { clearTimeout(t); io.disconnect() }
  }, [])
  const escolher = (e, item) => { travaAte.current = performance.now() + 1700; clicar(e, item.href) }
  return (
    <header className={`topo ${escuro ? 'topo--escuro' : ''}`}>
      <div className="topo__barra">
        <a href="#inicio" onClick={(e) => clicar(e, '#inicio')} aria-label="JV Imports, início"><Marca compacta /></a>
        <div className="topo__links">
          <NavLiquida
            items={NAV.map((n) => ({ label: n.rotulo, href: n.alvo }))}
            active={ativo}
            onChange={setAtivo}
            onNavigate={escolher}
            tone={escuro ? 'dark' : 'light'}
          />
        </div>
        <BotaoConversa compacto mensagem={MENSAGENS.topo} />
      </div>
    </header>
  )
}

export function BotaoConversa({ texto, mensagem, grande = false, clara = false, compacto = false }) {
  const mover = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  const canal = canalConversa()
  return (
    // compacto (topo) é ação de apoio: azul. Grande (hero, final) é a ação principal: laranja.
    <a className={`pilula ${grande ? 'pilula--grande' : ''} ${clara ? 'pilula--clara' : ''} ${compacto ? 'pilula--azul' : ''}`} href={linkConversa(mensagem)} data-mensagem={mensagem || MENSAGEM_PADRAO} target="_blank" rel="noopener" onPointerMove={mover}>
      <Icone nome={canal === 'WhatsApp' ? 'whatsapp' : 'instagram'} />
      <span>{texto || (compacto ? 'Falar com o JV' : `Chamar no ${canal}`)}</span>
      {!compacto && <Icone nome="seta" className="pilula__seta" />}
    </a>
  )
}

// Cartão fixo no canto (o cartão de QR do Bevel), aparece depois do primeiro scroll
export function FlutuanteConversa() {
  const [visivel, setVisivel] = useState(false)
  useEffect(() => {
    // aparece depois do hero e some perto da chamada final (só lê o scrollY por quadro)
    let perto = false
    let passou = false
    const decidir = () => setVisivel(passou && !perto)
    const io = new IntersectionObserver(([e]) => { perto = e.isIntersecting || e.boundingClientRect.top < 0; decidir() }, { rootMargin: '0px 0px -20% 0px' })
    const t = setTimeout(() => { const fim = document.querySelector('#final'); if (fim) io.observe(fim) }, 300)
    const sair = aoRolar((y) => { const p = y > window.innerHeight * 0.5; if (p !== passou) { passou = p; decidir() } })
    return () => { clearTimeout(t); io.disconnect(); sair() }
  }, [])
  return (
    <a className={`flutuante-conversa ${visivel ? 'visivel' : ''}`} href={linkConversa()} data-mensagem={MENSAGEM_PADRAO} target="_blank" rel="noopener" aria-label="Fale com o JV no WhatsApp">
      <span className="flutuante-conversa__icone"><Escudo cor="var(--laranja)" /></span>
      <span className="flutuante-conversa__texto">
        <strong>Fale com o JV</strong>
        <small>{canalConversa() === 'WhatsApp' ? 'Resposta rápida no WhatsApp' : 'Resposta rápida no Direct'}</small>
      </span>
    </a>
  )
}
