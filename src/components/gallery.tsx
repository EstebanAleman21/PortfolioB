import { useState } from "react"
import { Button } from "../components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
// For Next.js use: import { useRouter } from "next/navigation"

// Import the same projects data or fetch it
import { projects, categories } from "../data/projects" 
// If you don't have a data file, move the projects and categories arrays into a separate file

export default function Gallery() {
  const [filter, setFilter] = useState("all")
  const navigate = useNavigate()
  // For Next.js use: const router = useRouter()

  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex items-center mb-8 gap-4">
        <Button
          variant="outline"
          className="border-pastel-purple text-pastel-purple"
          onClick={() => navigate(-1)}
          // For Next.js use: onClick={() => router.back()}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
        
        <h1 className="text-3xl font-serif font-bold text-pastel-purple">Galería de Proyectos</h1>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          className={filter === "all" ? "bg-pastel-purple text-white" : "border-pastel-purple text-pastel-purple"}
          onClick={() => setFilter("all")}
        >
          Todos
        </Button>
        
        {categories.map(category => (
          <Button
            key={category.id}
            variant={filter === category.id ? "default" : "outline"}
            className={filter === category.id ? "bg-pastel-purple text-white" : "border-pastel-purple text-pastel-purple"}
            onClick={() => setFilter(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="group relative overflow-hidden rounded-xl">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <h4 className="text-white font-medium text-lg">{project.title}</h4>
                <Button variant="link" className="text-pastel-pink p-0 h-auto">
                  Ver Detalles
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}