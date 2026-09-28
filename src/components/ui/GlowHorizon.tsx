import type { CSSProperties } from 'react'

type Arc = {
  color: string
  /**
   * Recuo em px em relacao ao contorno branco, que ocupa a caixa inteira.
   * Em px (e nao proporcional) para o fio de luz ter a mesma espessura em
   * qualquer tamanho de tela.
   */
  inset: number
  blur?: number
  shadow?: string
  /** Entra deslizando de cima, com este atraso em segundos. */
  enterDelay?: number
}

// Pintadas nesta ordem: a ultima (cor do fundo) cobre o miolo das demais e
// deixa so a borda brilhando, como um horizonte visto de cima.
const arcs: Arc[] = [
  { color: '#eafbff', inset: 0, shadow: '0 -4px 23px 0 rgba(234, 251, 255, 0.71)' },
  { color: 'var(--color-cyan)', inset: 34, blur: 31, enterDelay: 0.6 },
  { color: 'var(--color-brand)', inset: 22, blur: 21, enterDelay: 0 },
  { color: 'var(--color-void)', inset: 34, blur: 51, enterDelay: 0 },
]

/**
 * Horizonte luminoso: uma elipse enorme com o contorno brilhando nas cores da
 * marca. Baseado no GlowHorizon feito com framer-motion, mas a entrada e em
 * CSS (mesma curva, duracao e atrasos), sem JavaScript no cliente — ver
 * `.glow-horizon-*` no globals.css.
 *
 * O contorno inferior fica na base da caixa: posicione e dimensione pelo
 * `className` (ex.: `bottom-16 h-[140%] w-[135%]`), deixando o topo da elipse
 * para fora da secao.
 */
export function GlowHorizon({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-1/2 isolate -translate-x-1/2 ${className}`.trim()}
    >
      <div className="glow-horizon absolute inset-0">
        {arcs.map((arc) => {
          const style: CSSProperties = {
            inset: arc.inset,
            background: arc.color,
            filter: arc.blur ? `blur(${arc.blur}px)` : undefined,
            boxShadow: arc.shadow,
            animationDelay: arc.enterDelay ? `${arc.enterDelay}s` : undefined,
          }

          return (
            <span
              key={arc.color}
              className={`absolute rounded-[100%] ${
                arc.enterDelay === undefined ? '' : 'glow-horizon-arc'
              }`.trim()}
              style={style}
            />
          )
        })}
      </div>
    </div>
  )
}
