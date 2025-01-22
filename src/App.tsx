import './App.css'
import LandingPageInfo from './components/LandingPageInfo/LandingPageInfo.tsx'
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {

  return (
    <>
        <div>
            <Navbar />
        </div>
        <div className="landingPageInfoContainer">
            <LandingPageInfo />
        </div>
    </>
  )
}

export default App
