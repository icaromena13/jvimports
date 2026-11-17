import { useEffect, useRef, useState } from 'react'
import { BLACK } from '../dados/conteudo.js'
import { Celular } from '../componentes/Aparelhos.jsx'
import { Icone } from '../componentes/Icone.jsx'
import { BotaoConversa } from '../componentes/Topo.jsx'
import { useRevela } from '../lib/rolagem.js'

// Black Friday: o vídeo toca sozinho, sem som, quando entra na tela (desperta a curiosidade de quem rola)
// e pausa quando sai. Um toque liga o som e volta para o começo.
function VideoPromo() {
  const video = useRef(null)
  const [mudo, setMudo] = useState(true)
  const [tocando, setTocando] = useState(false)
  useEffect(() => {
    const v = video.current
    const calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !calmo) v.play().catch(() => {})
      else v.pause()
    }, { threshold: 0.3 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  const alternarSom = () => {
    const v = video.current
    if (mudo) { v.muted = false; v.currentTime = 0; v.play().catch(() => {}); setMudo(false) }
    else { v.muted = true; setMudo(true) }
  }
  return (
    <div className="black__video">
      <Celular className="black__celular" semBarra escuro>
        <video ref={video} className="black__tela" src={BLACK.video} poster={BLACK.capa} muted loop playsInline preload="metadata"
          onPlay={() => setTocando(true)} onPause={() => setTocando(false)} aria-label="Vídeo da promoção: garrafa de brinde na compra de qualquer celular" />
        <button className={`black__som ${mudo ? '' : 'ligado'}`} onClick={alternarSom} aria-label={mudo ? 'Ouvir o vídeo' : 'Tirar o som'}>
          <Icone nome={mudo ? 'mudo' : 'som'} />
          <span>{mudo ? 'Toque para ouvir' : 'Som ligado'}</span>
        </button>
        {!tocando && mudo && <span className="black__play" aria-hidden="true"><Icone nome="play" /></span>}
      </Celular>
      <span className="black__fita" aria-hidden="true">BLACK FRIDAY</span>
    </div>
  )
}

export function BlackFriday() {
  const ref = useRevela()
  return (
    <section className="black container" id="black-friday" ref={ref} data-fundo-escuro aria-labelledby="black-titulo">
      <div className="black__cartao">
        <div className="black__texto">
          <p className="black__rotulo" data-revela><i />{BLACK.rotulo}</p>
          <h2 id="black-titulo" className="titulo titulo--display">
            <span className="linha-mascara"><span style={{ '--i': 0 }}>{BLACK.titulo[0]}</span></span>
            <span className="linha-mascara"><span style={{ '--i': 1 }} className="black__destaque">{BLACK.titulo[1]}</span></span>
          </h2>
          <p className="texto" data-revela style={{ '--i': 2 }}>{BLACK.texto}</p>
        </div>
        <div className="black__palco" data-revela style={{ '--i': 2 }}><VideoPromo /></div>
        <div className="black__oferta">
          <ul className="black__brindes">
            {BLACK.brindes.map((b, i) => (
              <li key={b.titulo} className={b.destaque ? 'destaque' : ''} data-revela style={{ '--i': i + 3 }}>
                <span className="black__icone"><Icone nome={b.icone} /></span>
                <span><b>{b.titulo}</b><small>{b.texto}</small></span>
                {b.destaque && <em>Especial</em>}
              </li>
            ))}
          </ul>
          <div data-revela style={{ '--i': 7 }}><BotaoConversa grande texto={BLACK.cta} mensagem={BLACK.mensagem} /></div>
        </div>
      </div>
    </section>
  )
}
