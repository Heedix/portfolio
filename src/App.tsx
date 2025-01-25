import './App.css'
import LandingPageInfo from './components/LandingPageInfo/LandingPageInfo.tsx'
import Navbar from "./components/Navbar/Navbar.tsx";
import ProjectSection from "./components/PrijectSection/ProjectSection.tsx";

function App() {

  return (
    <>
        <div>
            <Navbar />
        </div>
        <div className="landingPageInfoContainer">
            <LandingPageInfo />
        </div>
        <div className="projectSectionContainer">
            <ProjectSection />
        </div>
    </>
  )
}

export default App
