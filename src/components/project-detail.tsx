"use client"

import { useState, useEffect, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { projects } from "../data/projects.ts"


export default function ProjectDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    
    // Find the project data directly from projects.ts
    const project = projects.find(p => p.id === Number(id))

    // Create a displayImages array that always has at least the main image
    const displayImages = useMemo(() => {
        if (!project) return [];
        
        // If images array exists and has elements, use it
        if (project.images && project.images.length > 0) return project.images;
        
        // Otherwise, fall back to the main image if it exists
        if (project.image) return [project.image];
        
        return [];
      }, [project]);
      
      const hasMultipleImages = displayImages.length > 1;
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
  if (!project) {
    return (
      <div className="container px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
        <Button 
          className="bg-pastel-purple hover:bg-pastel-purple/90 text-white"
          onClick={() => navigate(-1)}
        >
          Volver
        </Button>
      </div>
    )
  }

  const nextImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => 
      prev === displayImages.length - 1 ? 0 : prev + 1
    )
  }
  
  const prevImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? displayImages.length - 1 : prev - 1
    )
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <Button 
          variant="ghost"
          className="mb-8 flex items-center text-pastel-purple"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a proyectos
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Project details sidebar */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-pastel-purple mb-6">
              {project.title}
            </h1>
            
            <p className="text-gray-600 mb-8">
              {project.description}
            </p>
            
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div>
                <h3 className="text-sm text-gray-500 uppercase font-medium">Cliente</h3>
                <p className="text-gray-900">{project.client}</p>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500 uppercase font-medium">Año</h3>
                <p className="text-gray-900">{project.year}</p>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500 uppercase font-medium">Servicios</h3>
                <ul className="text-gray-900">
                  {project.services && project.services.map((service, index) => (
                    <li key={index} className="inline-block mr-2">
                      {service}{index < (project.services?.length ?? 0) - 1 ? "," : ""}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Image carousel */}
      <div className="lg:col-span-3 order-1 lg:order-2">
        <div className="relative overflow-hidden rounded-xl bg-gray-50">
          {displayImages.length > 0 ? (
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src={displayImages[currentImageIndex]}
                alt={`${project.title} - imagen ${currentImageIndex + 1}`}
                className="w-full object-contain mx-auto"
                style={{ maxHeight: "500px", minHeight: "300px" }} 
              />
            </motion.div>
          ) : (
            <div className="flex items-center justify-center" style={{ height: "400px" }}>
              <p className="text-gray-400">No hay imágenes disponibles</p>
            </div>
          )}
          
          {/* Only show navigation buttons if there are multiple images */}
          {hasMultipleImages && (
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevImage}
                className="rounded-full bg-white/80 border-pastel-purple text-pastel-purple hover:bg-white h-12 w-12"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextImage}
                className="rounded-full bg-white/80 border-pastel-purple text-pastel-purple hover:bg-white h-12 w-12"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          )}
        </div>
        
        {/* Only show thumbnails if there are multiple images */}
        {hasMultipleImages && (
          <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
            {displayImages.map((image, index) => (
              <button
                key={index}
                className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 transition-all
                  ${currentImageIndex === index ? 'ring-2 ring-pastel-purple' : 'opacity-70'}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </button>
            ))}
          </div>
        )}
      </div>
        </div>
      </div>
    </section>
  )
}