import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap, Shield, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Zap,
    title: "Création rapide",
    description: "Créez et publiez vos cours en quelques minutes avec notre éditeur intuitif",
  },
  {
    icon: Shield,
    title: "Paiements sécurisés",
    description: "Recevez vos paiements en toute sécurité avec Stripe",
  },
  {
    icon: TrendingUp,
    title: "Analytics avancés",
    description: "Suivez vos performances et optimisez vos revenus",
  },
  {
    icon: Users,
    title: "Gestion d'étudiants",
    description: "Gérez facilement vos étudiants et leur progression",
  },
]

const benefits = [
  "Aucun frais d'installation",
  "Commission de seulement 5%",
  "Paiements instantanés",
  "Support client dédié",
  "Marketplace intégré",
  "Outils marketing inclus",
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          title="La plateforme tout-en-un pour créateurs francophones"
          subtitle="Créez, vendez et gérez vos cours en ligne. Rejoignez des milliers de créateurs qui partagent leur expertise."
          primaryCta={{ text: "Commencer gratuitement", href: "/auth?mode=signup" }}
          secondaryCta={{ text: "Voir la démo", href: "#demo" }}
        />

        {/* Features Section */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Tout ce dont vous avez besoin pour réussir
              </h2>
              <p className="text-lg text-muted-foreground">
                Une plateforme complète pour transformer votre expertise en revenus
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="border-border">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Pourquoi choisir Nala ?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Nous avons conçu Nala pour être la solution la plus simple et la plus rentable pour les créateurs
                  francophones.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10">
                        <Check className="h-4 w-4 text-success" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/auth?mode=signup">Créer mon compte gratuitement</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/20 to-accent/20">
                  <img src="/dashboard-analytics.png" alt="Dashboard Nala" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-primary py-20 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Prêt à partager votre expertise ?</h2>
            <p className="mb-8 text-lg opacity-90">
              Rejoignez des milliers de créateurs qui ont déjà transformé leur passion en revenus
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/auth?mode=signup">Commencer gratuitement</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/pricing">Voir les tarifs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
