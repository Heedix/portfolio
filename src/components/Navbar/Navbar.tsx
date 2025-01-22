import './Navbar.css'
import {useState} from "react";

export default function Navbar() {
    const [isNavbarShown, setIsNavbarShown] = useState(true);

    const toggleNavbar = () => {
        setIsNavbarShown(!isNavbarShown);
    }

    return (
        <>
            <div className="navbarContainer">
                <div className="toggleNavbarButtonContainer">
                    <div className="toggleNavbarButton" onClick={toggleNavbar}></div>
                </div>
                <div className="navbar"
                style={{
                    transform: isNavbarShown ? "translateY(-200%)" : "translateY(0)",
                }}>
                    <div className="navbarAboutContainer">
                        <a href="#about" className="navItem"><h3>About</h3></a>
                        <div className="navbarAboutUnderline underline"></div>
                    </div>
                    <div className="navbarProjectsContainer">
                        <a href="#projects" className="navItem"><h3>Projects</h3></a>
                        <div className="navbarProjectsUnderlineLeft underline"></div>
                        <div className="navbarProjectsUnderlineRight underline"></div>
                    </div>
                    <div className="navbarContactContainer">
                        <a href="#contact" className="navItem"><h3>Contact</h3></a>
                        <div className="navbarContactUnderline underline"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
