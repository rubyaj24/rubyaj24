import HeroSection from "./components/HeroSection"
import GradientBackground from "./components/GradientBackground"
import ScrollText from "./components/ScrollText"
import "./styles/gradient.css"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <GradientBackground />
      </div>
      <div className="absolute opacity-5 text-7xl inset-0 z-10 flex items-center justify-center pointer-events-none">
        <ScrollText />
      </div>
      <div className="relative z-20 w-full mx-auto">
        <div className="flex justify-center my-10">
          <HeroSection />
        </div>
        <Projects />
        <footer className="p-4 text-center text-zinc-400 mt-10">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Amaljith M V. All rights reserved.
          </p>
          <p className="text-sm">
            Built with <span className="text-red-500">❤️</span> using Vite+React and Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
