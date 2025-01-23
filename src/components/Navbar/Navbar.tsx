import './Navbar.css'
import {useEffect, useState} from "react";

export default function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isCoarsePointer, setIsCoarsePointer] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(pointer: coarse)");
        setIsCoarsePointer(mediaQuery.matches);

        const handleMediaChange = (event: MediaQueryListEvent) => {
            setIsCoarsePointer(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaChange);
        };
    }, []);

    function mouseEnter() {
        if (!isCoarsePointer) {
            setIsNavbarOpen(true);
        }
    }

    function mouseLeave() {
        if (!isCoarsePointer) {
            setIsNavbarOpen(false);
        }
    }

    function toggleNavbarState() {
        setIsNavbarOpen(!isNavbarOpen);
    }

    return (
        <>
            <div className="navbarContainer" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <div className="toggleNavbarButtonContainer">
                    <svg className="toggleNavbarButton" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleNavbarState}>
                        <rect width="60" height="10" x="2" y="7" fill="#fff" rx="5"/>
                        <rect width="60" height="10" x="2" y="27" fill="#fff" rx="5"/>
                        <rect width="60" height="10" x="2" y="47" fill="#fff" rx="5"/>
                    </svg>
                </div>
                <div className="navbar"
                     key={isNavbarOpen ? "open" : "closed"}
                     style={{
                         animation: isNavbarOpen ? "navbar-animation 0.5s forwards" : "navbar-animation 0.5s reverse"
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
