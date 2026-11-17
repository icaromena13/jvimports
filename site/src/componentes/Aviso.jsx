import { useEffect, useState } from 'react'
import { precisaCopiar } from '../dados/conteudo.js'

async function copiar(texto) {
  try {
    await navigator.clipboard.writeText(texto)
    return true
  } catch {
    // contexto sem permissão (http, iframe): cai no método antigo
    const campo = document.createElement('textarea')
    campo.value = texto
    campo.setAttribute('readonly', '')
    campo.style.cssText = 'position:fixed;opacity:0;top:0;left:0'
    document.body.appendChild(campo)
    campo.select()
    let ok = false
    try { ok = document.execCommand('copy') } catch { /* sem cópia */ }
    campo.remove()
    return ok
  }
}

// O Direct do Instagram abre sem texto. Todo link com data-mensagem copia a mensagem no clique
// e este aviso diz ao visitante para colar na conversa.
export function Aviso() {
  const [aviso, setAviso] = useState(null)

  useEffect(() => {
    if (!precisaCopiar()) return
    let t
    const aoClicar = async (e) => {
      const link = e.target.closest?.('a[data-mensagem]')
      if (!link) return
      const mensagem = link.dataset.mensagem
      const ok = await copiar(mensagem)
      setAviso(ok
        ? { titulo: 'Mensagem copiada!', texto: 'Cole na conversa do Direct para enviar.', tecla: true }
        : { titulo: 'Escreva no Direct:', texto: mensagem, tecla: false })
      clearTimeout(t)
      t = setTimeout(() => setAviso(null), 7000)
    }
    document.addEventListener('click', aoClicar)
    return () => { document.removeEventListener('click', aoClicar); clearTimeout(t) }
  }, [])

  return (
    <div className={`copiado ${aviso ? 'copiado--visivel' : ''}`} role="status" aria-live="polite">
      {aviso && (
        <>
          <strong>{aviso.titulo}</strong>
          <span>{aviso.texto}</span>
          {aviso.tecla && <small><kbd>Ctrl</kbd> + <kbd>V</kbd> no computador, ou toque e segure no celular</small>}
        </>
      )}
    </div>
  )
}
