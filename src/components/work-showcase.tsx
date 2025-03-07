"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { useNavigate } from "react-router-dom"
import { categories, projects } from "../data/projects.ts"

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState("posters")
  const carouselRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate();

  const filteredProjects = projects.filter((project) => project.category === activeCategory)

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef
      const scrollAmount =
        direction === "left" ? current.scrollLeft - current.offsetWidth : current.scrollLeft + current.offsetWidth

      current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="work" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl md:text-5xl text-pastel-purple mb-4">
            Mi trabajo
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Explora mi portafolio de proyectos, organizados por área.
          </p>
        </div>

        <Tabs defaultValue="posters" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-pastel-blue/10">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-pastel-blue data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-pastel-purple">{category.name}</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll("left")}
                    className="rounded-full border-pastel-purple text-pastel-purple hover:bg-pastel-purple/10 h-12 w-12"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll("right")}
                    className="rounded-full border-pastel-purple text-pastel-purple hover:bg-pastel-purple/10 h-12 w-12"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </div>
              </div>

              <div
                ref={carouselRef}
                className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="min-w-[280px] md:min-w-[350px] snap-start"
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <div className="group relative overflow-hidden rounded-xl h-[280px] md:h-[350px]">
                    <div className="h-full w-full flex items-center justify-center bg-gray-50">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <h4 className="text-white font-medium text-lg">{project.title}</h4>
                        <Button 
                          variant="link" 
                          className="text-pastel-pink p-0 h-auto"
                          onClick={() => navigate(`/project/${project.id}`)}
                        >
                          Ver Proyecto
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <Button 
            className="bg-pastel-purple hover:bg-pastel-purple/90 text-white"
            onClick={() => navigate('/gallery')}
          >
            Ver Todo
          </Button>
        </div>
      </div>
    </section>
  )
}