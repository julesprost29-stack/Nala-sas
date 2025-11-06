"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  GraduationCap,
  Users,
  CreditCard,
  Settings,
  BarChart3,
  Search,
  ChevronRight,
  Video,
  MessageSquare,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const sections = [
  {
    title: "Démarrage rapide",
    icon: Zap,
    items: [
      { title: "Créer votre compte", href: "#create-account" },
      { title: "Configuration initiale", href: "#initial-setup" },
      { title: "Créer votre premier cours", href: "#first-course" },
      { title: "Publier et vendre", href: "#publish-sell" },
    ],
  },
  {
    title: "Création de cours",
    icon: GraduationCap,
    items: [
      { title: "Structurer votre cours", href: "#structure-course" },
      { title: "Ajouter des leçons", href: "#add-lessons" },
      { title: "Télécharger des vidéos", href: "#upload-videos" },
      { title: "Créer des quiz", href: "#create-quizzes" },
      { title: "Définir les prix", href: "#set-pricing" },
    ],
  },
  {
    title: "Gestion des étudiants",
    icon: Users,
    items: [
      { title: "Suivre les inscriptions", href: "#track-enrollments" },
      { title: "Communiquer avec les étudiants", href: "#communicate" },
      { title: "Gérer les accès", href: "#manage-access" },
      { title: "Certificats de complétion", href: "#certificates" },
    ],
  },
  {
    title: "Paiements et facturation",
    icon: CreditCard,
    items: [
      { title: "Configurer Stripe", href: "#setup-stripe" },
      { title: "Gérer les paiements", href: "#manage-payments" },
      { title: "Suivre vos revenus", href: "#track-revenue" },
      { title: "Remboursements", href: "#refunds" },
    ],
  },
  {
    title: "Analytics et rapports",
    icon: BarChart3,
    items: [
      { title: "Tableau de bord", href: "#dashboard" },
      { title: "Statistiques de vente", href: "#sales-stats" },
      { title: "Engagement des étudiants", href: "#student-engagement" },
      { title: "Rapports personnalisés", href: "#custom-reports" },
    ],
  },
  {
    title: "Paramètres et personnalisation",
    icon: Settings,
    items: [
      { title: "Profil créateur", href: "#creator-profile" },
      { title: "Branding personnalisé", href: "#custom-branding" },
      { title: "Notifications", href: "#notifications" },
      { title: "Intégrations", href: "#integrations" },
    ],
  },
]

const guides = [
  {
    title: "Guide complet du créateur",
    description: "Tout ce que vous devez savoir pour réussir sur Nala",
    icon: BookOpen,
    duration: "30 min",
    href: "#complete-guide",
  },
  {
    title: "Optimiser vos cours",
    description: "Meilleures pratiques pour créer des cours engageants",
    icon: Video,
    duration: "15 min",
    href: "#optimize-courses",
  },
  {
    title: "Marketing et promotion",
    description: "Stratégies pour attirer plus d'étudiants",
    icon: MessageSquare,
    duration: "20 min",
    href: "#marketing",
  },
]

const faqs = [
  {
    question: "Comment créer mon premier cours ?",
    answer:
      "Après avoir créé votre compte, accédez au tableau de bord et cliquez sur 'Créer un cours'. Remplissez les informations de base, ajoutez vos modules et leçons, puis publiez votre cours.",
  },
  {
    question: "Quels sont les frais de la plateforme ?",
    answer:
      "Nala prend une commission de 10% sur chaque vente. Le plan Gratuit permet de créer jusqu'à 3 cours, tandis que les plans Pro et Business offrent des cours illimités avec des frais réduits.",
  },
  {
    question: "Comment recevoir mes paiements ?",
    answer:
      "Les paiements sont traités via Stripe et versés directement sur votre compte bancaire. Vous pouvez configurer vos informations de paiement dans les paramètres de facturation.",
  },
  {
    question: "Puis-je offrir des cours gratuits ?",
    answer:
      "Oui, vous pouvez définir le prix de vos cours à 0€ pour les offrir gratuitement. C'est une excellente stratégie pour attirer des étudiants et construire votre audience.",
  },
  {
    question: "Comment communiquer avec mes étudiants ?",
    answer:
      "Vous pouvez envoyer des messages à vos étudiants via le système de messagerie intégré, créer des annonces de cours, et répondre aux questions dans les commentaires des leçons.",
  },
  {
    question: "Puis-je importer un cours existant ?",
    answer:
      "Oui, vous pouvez importer du contenu depuis d'autres plateformes. Contactez notre support pour obtenir de l'aide avec la migration de vos cours.",
  },
]

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Centre de documentation
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Tout ce dont vous avez besoin pour créer, gérer et vendre vos cours en ligne
            </p>

            {/* Search Bar */}
            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher dans la documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 rounded-2xl pl-12 pr-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Guides de démarrage</h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {guides.map((guide) => (
              <Link key={guide.title} href={guide.href}>
                <Card className="group h-full p-6 transition-all hover:border-primary hover:shadow-lg">
                  <guide.icon className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">{guide.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{guide.duration}</span>
                    <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Documentation complète</h2>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Card key={section.title} className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Questions fréquentes</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="border-t border-border bg-gradient-to-b from-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Besoin d'aide supplémentaire ?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Notre équipe de support est là pour vous aider à réussir
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="rounded-2xl px-8" asChild>
                <Link href="/contact">Contacter le support</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-8 bg-transparent" asChild>
                <Link href="/dashboard">Accéder au tableau de bord</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
