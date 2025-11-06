import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentStudents = [
  {
    name: "Sophie Martin",
    email: "sophie.m@example.com",
    course: "Développement Web",
    avatar: "/diverse-woman-portrait.png",
  },
  {
    name: "Thomas Dubois",
    email: "thomas.d@example.com",
    course: "Marketing Digital",
    avatar: "/man.jpg",
  },
  {
    name: "Marie Laurent",
    email: "marie.l@example.com",
    course: "Design UI/UX",
    avatar: "/diverse-woman-portrait.png",
  },
  {
    name: "Lucas Bernard",
    email: "lucas.b@example.com",
    course: "Photographie",
    avatar: "/man.jpg",
  },
]

export function RecentStudents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nouveaux étudiants</CardTitle>
        <CardDescription>Les dernières inscriptions à vos cours</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentStudents.map((student) => (
            <div key={student.email} className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                <AvatarFallback>
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{student.name}</p>
                <p className="text-sm text-muted-foreground">{student.course}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
