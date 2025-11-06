"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function CourseSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Tarification</CardTitle>
          <CardDescription>Définissez le prix de votre cours</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="price">Prix (€)</Label>
            <Input id="price" type="number" placeholder="49.99" defaultValue="49.99" />
            <p className="text-sm text-muted-foreground">Vous recevrez 95% du prix (commission Nala : 5%)</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Cours gratuit</Label>
              <p className="text-sm text-muted-foreground">Rendre ce cours accessible gratuitement</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Visibilité</CardTitle>
          <CardDescription>Contrôlez qui peut voir votre cours</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="status">Statut de publication</Label>
            <Select defaultValue="draft">
              <SelectTrigger id="status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Brouillon</SelectItem>
                <SelectItem value="published">Publié</SelectItem>
                <SelectItem value="private">Privé</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Afficher dans le marketplace</Label>
              <p className="text-sm text-muted-foreground">Permettre aux utilisateurs de découvrir votre cours</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Autoriser les avis</Label>
              <p className="text-sm text-muted-foreground">Les étudiants peuvent laisser des avis</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Certificat</CardTitle>
          <CardDescription>Délivrez un certificat à la fin du cours</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Activer le certificat</Label>
              <p className="text-sm text-muted-foreground">Les étudiants recevront un certificat après complétion</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="space-y-2">
            <Label htmlFor="completion">Taux de complétion requis (%)</Label>
            <Input id="completion" type="number" placeholder="80" defaultValue="80" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Zone de danger</CardTitle>
          <CardDescription>Actions irréversibles sur votre cours</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Supprimer ce cours</p>
              <p className="text-sm text-muted-foreground">Cette action est irréversible</p>
            </div>
            <Button variant="destructive">Supprimer</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
