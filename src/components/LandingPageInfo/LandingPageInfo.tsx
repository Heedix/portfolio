import './LandingPageInfo.css'
//import profilePicture from '../../assets/profile-picture.jpg';
import profilePicture from '../../assets/profile-picture.jpg';
import kachow from '../../assets/kachow.png';
import Pill from "../Pill/Pill.tsx";
import SocialIcons from "../SocialIcons/SocialIcons.tsx";

export default function LandingPageInfo() {

    function scrollToId(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <div className="landingPageInfo" id="aboutSection">
                <div className="socialIconsAndProfileContainer">
                    <div className="profilePictureContainerWrapper">
                        <div className="profilePictureContainer">
                            <img src={profilePicture} alt="profile-picture" className="profilePicture"></img>
                            <img src={kachow} alt="kachow" className="kachow"></img>
                        </div>
                    </div>
                    <SocialIcons />
                </div>
                <div className="profileInfoContainer">
                    <h1 className="profileHeader">Portfolio</h1>
                    <hr className="dividerPortfolioName"></hr>
                    <div className="greeting">
                        <h2 className="hiThere">Hi there! 👋 I'm</h2>
                        <div className="nameContainer">
                            <h2 className="name">Jannis Austgen</h2>
                        </div>
                    </div>
                    <p className="profileDescription">🎓 Computer Science Student passionate about building innovative and efficient software solutions.</p>
                    <p className="profileDescription">💡 I thrive on tackling challenges in web and desktop application development, creating intuitive user interfaces, and robust, reliable software.</p>
                    <p className="profileDescription">🚀 Feel free to check out my projects and connect with me.</p>
                </div>
                <hr className="rowDivider"/>
                <div className="programmingLanguagesContainer, PFTCContainers">
                    <h2 className="programmingLanguagesHeader">⌨️Programming Languages:</h2>
                    <div className="pillsContainer">
                        <Pill text={'Java'}></Pill>
                        <Pill text={'TypeScript'}></Pill>
                        <Pill text={'JavaScript'}></Pill>
                        <Pill text={'C'}></Pill>
                        <Pill text={'HTML'}></Pill>
                        <Pill text={'CSS'}></Pill>
                        <Pill text={'SQL'}></Pill>
                    </div>
                </div>
                <hr className="rowDivider"/>
                <div className="frameworksContainer, PFTCContainers">
                    <h2 className="frameworksHeader">🖼️Frameworks:</h2>
                    <div className="pillsContainer">
                        <Pill text={'AngularJS'}></Pill>
                        <Pill text={'React'}></Pill>
                        <Pill text={'Express.js'}></Pill>
                        <Pill text={'Maven'}></Pill>
                        <Pill text={'Hibernate'}></Pill>
                        <Pill text={'JavaFX'}></Pill>
                        <Pill text={'JUnit'}></Pill>
                        <Pill text={'Playwright'}></Pill>
                    </div>
                </div>
                <hr className="rowDivider"/>
                <div className="toolsContainer, PFTCContainers">
                    <h2 className="toolsHeader">🛠️Tools:</h2>
                    <div className="pillsContainer">
                        <Pill text={'Git'}></Pill>
                        <Pill text={'Unix/linux'}></Pill>
                        <Pill text={'Docker'}></Pill>
                        <Pill text={'Github Actions'}></Pill>
                        <Pill text={'Figma'}></Pill>
                    </div>
                </div>
                <hr className="rowDivider"/>
                <div className="currentFocusContainer, PFTCContainers">
                    <h2 className="currentFocusHeader">🔎Current Focus:</h2>
                    <p>
                        Currently I'm focussing on building a website displaying my recent projects, <br/>
                        while showcasing some of my web development skills.
                    </p>
                    <div className="currentFocusLearnMoreContainer">
                        <p className="currentFocusLearnMore">Learn more</p>
                        <svg className="learnMoreArrowsSvg" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => scrollToId('currentFocus')}>
                            <g id="learnMoreArrowContainer" clipPath="url(#clip0_79_2)">
                                <path id="arrow1" d="M31.208 38.97a1 1 0 0 0 1.584 0L58.473 5.61A1 1 0 0 0 57.681 4H6.319a1 1 0 0 0-.792 1.61l25.68 33.36Z"/>
                                <path id="arrow2" d="M31.208 38.97a1 1 0 0 0 1.584 0L58.473 5.61A1 1 0 0 0 57.681 4H6.319a1 1 0 0 0-.792 1.61l25.68 33.36Z"/>
                                <path id="arrow3" d="M31.208 59.97a1 1 0 0 0 1.584 0l25.681-33.36a1 1 0 0 0-.792-1.61H6.319a1 1 0 0 0-.792 1.61l25.68 33.36Z"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
