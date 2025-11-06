"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Bold, Italic, List, ListOrdered, LinkIcon, ImageIcon, Video } from "lucide-react"

export function CourseContentEditor() {
  const [content, setContent] = useState("")

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Description du cours</CardTitle>
          <CardDescription>Décrivez en détail ce que vos étudiants vont apprendre</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="short-description">Description courte</Label>
            <Textarea id="short-description" placeholder="Un résumé accrocheur de votre cours..." rows={3} />
          </div>

          <div className="space-y-2">
            <Label>Description complète</Label>
            <div className="rounded-lg border border-border">
              {/* Toolbar */}
              <div className="flex flex-wrap gap-1 border-b border-border bg-muted/30 p-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bold className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Italic className="h-4 w-4" />
                </Button>
                <div className="mx-1 w-px bg-border" />
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ListOrdered className="h-4 w-4" />
                </Button>
                <div className="mx-1 w-px bg-border" />
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <LinkIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Video className="h-4 w-4" />
                </Button>
              </div>
              {/* Editor */}
              <Textarea
                placeholder="Décrivez votre cours en détail..."
                className="min-h-[300px] border-0 focus-visible:ring-0"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ce que vous allez apprendre</CardTitle>
          <CardDescription>Listez les objectifs d'apprentissage clés</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <Input placeholder={`Objectif ${i}`} />
            </div>
          ))}
          <Button variant="outline" size="sm">
            Ajouter un objectif
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Prérequis</CardTitle>
          <CardDescription>Qu'est-ce que les étudiants doivent savoir avant de commencer ?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <Input placeholder={`Prérequis ${i}`} />
            </div>
          ))}
          <Button variant="outline" size="sm">
            Ajouter un prérequis
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
