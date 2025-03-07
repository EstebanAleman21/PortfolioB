"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "../components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pastel-purple/20 bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-pastel-purple">Portfolio</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {["Home", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-pastel-purple hover:text-pastel-pink transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-pastel-purple"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-pastel-purple/20 p-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {["Home", "Work", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-pastel-purple hover:text-pastel-pink transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

