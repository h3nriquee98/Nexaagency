/**
 * Halos de luz azul/ciano posicionados como os arcos luminosos dos cantos
 * da logo. Puramente decorativo — fica atras do conteudo.
 */
export function GlowBackground({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 ${className}`.trim()}>
      <div className="absolute -top-40 -left-32 size-[34rem] rounded-full bg-brand/25 blur-[130px]" />
      <div className="absolute top-10 -right-40 size-[30rem] rounded-full bg-cyan/12 blur-[140px]" />
      <div className="absolute -bottom-52 left-1/3 size-[36rem] rounded-full bg-brand-deep/25 blur-[150px]" />
    </div>
  )
}

/** Textura de ruido sutil, para o fundo escuro nao parecer chapado. */
export function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage: "url(/noise.png)",
      }}
    />
  )
}
