import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export function Hero({ title, subtitle, ctaText, ctaHref, secondaryCtaText, secondaryCtaHref }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">{subtitle}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-2xl bg-primary px-8 text-base hover:bg-primary/90">
              <Link href={ctaHref}>
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 text-base bg-transparent">
                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-primary/5 to-transparent" />
    </section>
  )
}
