"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, GripVertical, Edit, Trash2, Video, FileText, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const modules = [
  {
    id: 1,
    title: "Introduction à React",
    lessons: [
      { id: 1, title: "Qu'est-ce que React ?", type: "video", duration: "10:30", completed: true },
      { id: 2, title: "Installation et configuration", type: "video", duration: "15:20", completed: true },
      { id: 3, title: "Votre premier composant", type: "video", duration: "12:45", completed: false },
    ],
  },
  {
    id: 2,
    title: "Les fondamentaux",
    lessons: [
      { id: 4, title: "JSX et les composants", type: "video", duration: "18:30", completed: false },
      { id: 5, title: "Props et State", type: "video", duration: "20:15", completed: false },
      { id: 6, title: "Exercice pratique", type: "text", duration: "30 min", completed: false },
    ],
  },
]

export function CourseModules() {
  const [isAddingModule, setIsAddingModule] = useState(false)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Modules et leçons</CardTitle>
              <CardDescription>Organisez votre contenu en modules et leçons</CardDescription>
            </div>
            <Button onClick={() => setIsAddingModule(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Nouveau module
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module) => (
              <AccordionItem key={module.id} value={`module-${module.id}`} className="rounded-lg border border-border">
                <AccordionTrigger className="px-4 hover:no-underline">
                  <div className="flex flex-1 items-center gap-3">
                    <GripVertical className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold">{module.title}</div>
                      <div className="text-sm text-muted-foreground">{module.lessons.length} leçons</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-2 pt-2">
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                      >
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                        {lesson.type === "video" ? (
                          <Video className="h-4 w-4 text-primary" />
                        ) : (
                          <FileText className="h-4 w-4 text-primary" />
                        )}
                        <div className="flex-1">
                          <div className="font-medium">{lesson.title}</div>
                          <div className="text-sm text-muted-foreground">{lesson.duration}</div>
                        </div>
                        {lesson.completed && <CheckCircle className="h-4 w-4 text-success" />}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="mt-2 w-full gap-2 bg-transparent">
                      <Plus className="h-4 w-4" />
                      Ajouter une leçon
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {isAddingModule && (
            <Card className="mt-4">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Input placeholder="Titre du module" />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsAddingModule(false)}>
                      Annuler
                    </Button>
                    <Button onClick={() => setIsAddingModule(false)}>Créer le module</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
