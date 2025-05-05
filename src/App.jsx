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
      {/* <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none flex items-center">
        <ScrollText />
      </div> */}
      <div className="relative my-10 z-10">
        <HeroSection />
      </div>
      <div><Projects /></div>
    </div>
  )
}

export default App
