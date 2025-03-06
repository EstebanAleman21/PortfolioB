"use client"

import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import logoSvg from "../assets/logo.png"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="text-pastel-pink">Marketing Creativo</span> & <span className="text-pastel-blue">Estratégico</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
              Exhibiendo trabajos de diseño que impulsan la participación y generan resultados.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button 
                className="bg-pastel-purple hover:bg-pastel-purple/90 text-white"
                onClick={() => {
                    document.getElementById('work')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                    });
                }}
                >
                Ver mi trabajo
            </Button>
              <Button variant="outline" className="border-pastel-pink text-pastel-pink hover:bg-pastel-pink/10"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
              }>
                Contactame
              </Button>
            </div>
          </div>
          <motion.div
            className="relative h-[300px] md:h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-pastel-yellow rounded-full opacity-30"></div>
            <div className="absolute top-1/4 right-1/4 w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-pastel-pink rounded-full opacity-20"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-pastel-blue rounded-full opacity-20"></div>
            <img
                src={logoSvg}
                alt="Portfolio B"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-transparent"
                />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

