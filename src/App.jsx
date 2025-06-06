import HeroSection from "./components/HeroSection"
import GradientBackground from "./components/GradientBackground"
import ScrollText from "./components/ScrollText"
import "./styles/gradient.css"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="min-h-screen items-center w-full bg-black text-white">
      <div className="fixed inset-0 z-0 w-full">
        <GradientBackground />
      </div>
      <div className="fixed opacity-5 text-7xl inset-0 z-0 flex items-center justify-center pointer-events-none">
        <ScrollText />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="my-10">
          <HeroSection />
        </div>
        <div className="w-full">
          <Projects />
        </div>
        <div className="mt-10 w-full">
          <footer className="w-full p-4 text-center text-zinc-400">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Amaljith M V. All rights reserved.
            </p>
            <p className="text-sm">
              Built with <span className="text-red-500">❤️</span> using Vite+React and Tailwind CSS.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
