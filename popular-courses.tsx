import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Eye, Users } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Maîtriser React et Next.js",
    students: 234,
    revenue: "4,680 €",
    completion: 72,
    status: "published",
  },
  {
    id: 2,
    title: "Marketing Digital pour Débutants",
    students: 189,
    revenue: "3,780 €",
    completion: 65,
    status: "published",
  },
  {
    id: 3,
    title: "Design UI/UX Moderne",
    students: 156,
    revenue: "3,120 €",
    completion: 58,
    status: "published",
  },
]

export function PopularCourses() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Cours populaires</CardTitle>
            <CardDescription>Vos cours les plus performants</CardDescription>
          </div>
          <Button variant="outline" asChild>
            <Link href="/dashboard/courses">Voir tous les cours</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h4 className="font-semibold">{course.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students} étudiants
                    </span>
                    <span className="font-medium text-success">{course.revenue}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Publié</Badge>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/dashboard/courses/${course.id}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Taux de complétion</span>
                  <span className="font-medium">{course.completion}%</span>
                </div>
                <Progress value={course.completion} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
