import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "../src/components/theme-provider"
import Navbar from "../src/components/navbar"
import Hero from "../src/components/hero"
import WorkShowcase from "../src/components/work-showcase"
import Contact from "../src/components/contact"
import Footer from "../src/components/footer"
import Gallery from "../src/components/gallery"
import ProjectDetail from "./components/project-detail"

// Create a HomePage component to contain your current layout
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// Gallery page with the same theme and navbar
function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light">
        <div className="min-h-screen bg-gradient-to-b from-pastel-pink/10 to-pastel-blue/10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App