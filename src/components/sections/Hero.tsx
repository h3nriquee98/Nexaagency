import { ArrowRight, Star } from 'lucide-react'
import { ButtonExternal, ButtonLink } from '@/components/ui/Button'
import { GlowHorizon } from '@/components/ui/GlowHorizon'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { WhatsAppIcon } from '@/components/ui/BrandIcons'
import type { Dictionary } from '@/i18n/dictionaries'
import { instagramHandle, site, whatsappLink } from '@/config/site'

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict
  const ctaHref = whatsappLink(hero.whatsappMessage)

  return (
    // Texto centralizado sob a curva de luz. O padding de baixo reserva o
    // espaco do horizonte, que fica ancorado na base da secao; no celular os
    // respiros encolhem para o hero nao passar muito de uma tela.
    <section
      id="inicio"
      className="relative isolate flex items-center overflow-hidden pt-28 pb-36 lg:min-h-[100svh] md:pt-32 md:pb-44"
    >
      {/* h-[140%] joga o topo da elipse para fora da secao; o minimo de
          largura mantem a curva suave em telas estreitas. */}
      <GlowHorizon className="-z-10 bottom-14 h-[140%] w-[max(135%,40rem)] md:bottom-16" />

      <div className="shell flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur">
          <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_var(--color-cyan)]" />
          {hero.badge}
        </span>

        {/* No celular a fonte acompanha a largura da tela: assim o titulo
            em portugues cabe em 3 linhas de 360px a 430px. */}
        <h1 className="mt-5 max-w-4xl text-[clamp(2rem,8.6vw,3rem)] leading-[1.04] font-semibold md:mt-7 md:text-[clamp(2.4rem,6vw,4.75rem)]">
          {hero.titleLead}{' '}
          <span className="text-gradient">{hero.titleAccent}</span>{' '}
          {hero.titleTail}
        </h1>

        <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted md:mt-7 md:text-lg">
          {hero.description}
        </p>

        <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center md:mt-9">
          <ButtonExternal href={ctaHref} size="lg">
            <WhatsAppIcon className="size-5" />
            {hero.primaryCta}
          </ButtonExternal>
          <ButtonLink href="#projetos" variant="secondary" size="lg">
            {hero.secondaryCta}
            <ArrowRight aria-hidden className="size-4" />
          </ButtonLink>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:mt-10">
          <p className="inline-flex items-center gap-2 text-xs text-muted">
            <span className="flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-3.5 fill-cyan text-cyan" />
              ))}
            </span>
            <span className="font-display text-sm font-semibold text-ink">5.0</span>
            {hero.scoreCard.label}
          </p>

          <div className="flex items-center gap-3">
            <SocialLinks label={hero.socialLabel} />
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 min-w-0 items-center truncate text-xs text-muted transition hover:text-cyan"
            >
              {instagramHandle()}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
