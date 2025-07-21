import './ProjectSection.css'
import Pill from "../Pill/Pill.tsx";
import AnimatedLinkPill from "../AnimatedLinkPill/AnimatedLinkPill.tsx";
import {useEffect, useState} from "react";

export default function ProjectSection() {
    return (
        <div className="projectSection" id="projectSection">
            <SingleProjectSection
                id={'currentFocus'}
                title={'Portfolio'}
                subtitle={'My portfolio page'}
                description={`
                    This is my personal portfolio website, built with React 18.\n
                    It serves as a central platform to showcase my projects, skills, and experience in software development.\n
                    The site features an interactive user interface and modern UI/UX design.\n
                    All components of this web application are built and deployed using GitHub Actions with Docker on a VPS.`}
                previewVideoSrc={'/assets/heedix-gallery-preview.mp4'}
                designDescription={`
                    The design of my portfolio website follows a minimalistic and clean aesthetic, inspired by modern web development standards.\n
                    The color scheme is kept simple to maintain clarity and ensure that the content remains the primary focus.\n
                    The layout is fully responsive and intuitive, allowing visitors to seamlessly navigate and explore my projects on any device.`}
                designPreview={{source: '/assets/heedix-gallery-preview.mp4', type: 'video'}}
                technologiesUsed={['React', 'TypeScript', 'Node.js', 'Vite', 'Figma', 'Git', 'Nginx', 'GitHub Actions', 'Docker', 'Traefik']}
                links={[
                    {text: 'Website', link: 'https://heedix.de/', icon: 'website'},
                    {text: 'GitHub', link: 'https://github.com/Heedix/portfolio/', icon: 'github'},
                ]}
                direction={'right'}
            />

            <SingleProjectSection
                title={'Heedix Gallery'}
                subtitle={'Image hosting service'}
                description={`
                    This is an Angular 17-based web application designed for hosting images.\n
                    It is primarily focused on photography and includes features such as metadata extraction, allowing users to view details like the camera model, make, and settings used to capture the image.\n
                    The backend is powered by an Express.js-based REST API.\n
                    All components of this web application are built and deployed using GitHub Actions with Docker on a VPS.`}
                previewVideoSrc={'/assets/heedix-gallery-preview.mp4'}
                designDescription={`
                    The design of Heedix Gallery is inspired by the minimalistic and clean look of photography websites.\n
                    The color scheme is kept simple to ensure that the images are the main focus.\n
                    The layout is designed to be responsive and intuitive, allowing users to easily navigate the website and view images on any device.`}
                designPreview={{source: '/assets/heedix-gallery-preview.mp4', type: 'video'}}
                technologiesUsed={['Angular', 'TypeScript', 'Node.js', 'Express.js', 'JavaScript', 'PostgreSQL', 'Figma', 'Git', 'Nginx', 'GitHub Actions', 'Docker', 'Traefik']}
                links={[
                    {text: 'Live Demo', link: 'https://gallery.heedix.de/', icon: 'website'},
                    {text: 'GitHub', link: 'https://github.com/Heedix/heedix-gallery/', icon: 'github'}
                ]}
                direction={'left'}
            />

            <SingleProjectSection
                title={'Filmverleih'}
                subtitle={'Movie rental service'}
                description={`
                    This is a Java-based desktop application for managing a movie rental service built as part of a university project in "Programmieren 3".\n
                    It features a user-friendly interface that allows workers to rent out and return movies, manage customer accounts, and track inventory.\n
                    In addition, the application includes a way to add, edit, and delete movies from the database.\n
                    The application is built using JavaFX for the frontend and Hibernate for the backend.\n`}
                previewVideoSrc={''}
                designDescription={`
                    The design of Quantum Vortex is inspired by the aesthetics of digital movie rental platforms, featuring a dark-themed interface that enhances the visibility of movie covers and information.\n
                    The color scheme combines black and dark gray with bright yellow highlights, ensuring clear navigation elements while maintaining a modern and cinematic look.\n
                    The layout is structured for functionality, with distinct sections for login, movie browsing, and rental management.
                     It follows an intuitive design, allowing users to seamlessly search, view, and manage movies. The use of high-contrast buttons and structured grids ensures an efficient and user-friendly experience.\n`}
                designPreview={{source: '', type: ''}}
                technologiesUsed={['Java', 'Maven', 'JavaFx', 'Hibernate', 'PostgreSQL', 'Figma', 'Git']}
                links={[
                    {text: 'GitHub', link: 'https://github.com/MarcOhneMarc/prog3-Filmverleih/', icon: 'github'}
                ]}
                direction={'right'}
            />
        </div>
    )
}

interface SingleProjectSectionProps {
    id?: string;
    title: string;
    subtitle: string;
    description: string;
    previewVideoSrc: string;
    designDescription: string;
    designPreview: { source: string, type: string };
    technologiesUsed: string[];
    links: { text: string, link: string, icon: string }[];
    direction: 'left' | 'right';
    leftUnderlineWidth?: number;
    rightUnderlineWidth?: number;
}

function SingleProjectSection({
                                  id,
                                  title,
                                  subtitle,
                                  description,
                                  previewVideoSrc,
                                  designDescription,
                                  designPreview,
                                  technologiesUsed,
                                  links,
                                  direction
                              }: SingleProjectSectionProps) {
    const [leftUnderlineWidthState, setLeftUnderlineWidthState] = useState(0);
    const [rightUnderlineWidthState, setRightUnderlineWidthState] = useState(0);
    const [titleState] = useState(title);

    const [isScreenSmaller1200, setIsScreenSmaller1200] = useState(window.innerWidth < 1200);

    useEffect(() => {
        const handleResize = () => setIsScreenSmaller1200(window.innerWidth < 1200);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        let longCharPosition;
        let leftSubtraction = 0;
        let rightSubtraction = 0;
        for (let i = 0; i < titleState.length; i++) {
            switch (titleState.charAt(i)) {
                case 'g':
                    leftSubtraction = (1 / titleState.length * 10);
                    rightSubtraction = (1 / titleState.length * 10);
                    longCharPosition = i;
                    break;
                case 'j':
                    leftSubtraction = (1 / titleState.length * 10);
                    rightSubtraction = -(1 / titleState.length * 5);
                    longCharPosition = i;
                    break;
                case 'p':
                    leftSubtraction = (1 / titleState.length * 10);
                    rightSubtraction = -(1 / titleState.length * 45);
                    longCharPosition = i;
                    break;
                case 'q':
                    leftSubtraction = -(1 / titleState.length * 45);
                    rightSubtraction = (1 / titleState.length * 10);
                    longCharPosition = i;
                    break;
                case 'y':
                    leftSubtraction = (1 / titleState.length * 5);
                    rightSubtraction = -(1 / titleState.length * 30);
                    longCharPosition = i;
                    break;
                case 'Q':
                    leftSubtraction = -(1 / titleState.length * 20);
                    rightSubtraction = (1 / titleState.length * 5);
                    longCharPosition = i;
                    break;
                default:
                    break;

            }
        }
        if (longCharPosition) {
            if (longCharPosition !== 0) {
                setLeftUnderlineWidthState((100 * (longCharPosition) / titleState.length) - leftSubtraction);
            } else {
                setLeftUnderlineWidthState(0);
            }
            if (longCharPosition !== titleState.length - 1) {
                setRightUnderlineWidthState((100 * (titleState.length - longCharPosition -1) / titleState.length) - rightSubtraction);
            } else {
                setRightUnderlineWidthState(0);
            }
        } else {
            setLeftUnderlineWidthState(100);
        }
    }, [titleState]);

    return (
        <div className="singleProjectSection"
             id={id}>
            <div className="singleProjectSectionRow1" style={
                isScreenSmaller1200 && direction === 'right' ? {flexDirection: 'column-reverse'} : isScreenSmaller1200 && direction === 'left' ? {flexDirection: 'column'} :
                direction === 'left' ? {gridTemplateColumns: '2fr 3fr'} : {gridTemplateColumns: '3fr 2fr'}
            }>
                {direction === 'right' ? (<div className="singleProjectSectionRow1VideoContainer">
                    {previewVideoSrc ? (<video
                        src={previewVideoSrc}
                        muted
                        loop
                        className="singleProjectSectionRow1Video"
                        onMouseOver={e => e.currentTarget.play()}
                        onMouseOut={e => e.currentTarget.pause()}
                    />) : null}
                </div>) : null}
                <div className="singleProjectSectionRow1Column2">
                    <div className="singleProjectSectionRow1HeaderContainer margin25lr">
                        <h1 className="singleProjectSectionRow1Header">{title}</h1>
                        <div
                            className="singleProjectSectionRow1HeaderUnderline singleProjectSectionRow1HeaderUnderlineLeft"
                            style={leftUnderlineWidthState ? {width: leftUnderlineWidthState + '%'} : {width: 0}}/>
                        <div
                            className="singleProjectSectionRow1HeaderUnderline singleProjectSectionRow1HeaderUnderlineRight"
                            style={rightUnderlineWidthState ? {width: rightUnderlineWidthState + '%'} : {width: 0}}/>
                    </div>
                    <hr/>
                    <h2 className="singleProjectSectionRow1Subtitle margin25lr">{subtitle}</h2>
                    {description.split('\n').map((line, index) => (
                        <p key={index} className="singleProjectSectionRow1Description margin25lr">{line}</p>
                    ))}
                </div>
                {direction === 'left' ? (<div className="singleProjectSectionRow1VideoContainer">
                    {previewVideoSrc ? (<video
                        src={previewVideoSrc}
                        muted
                        loop
                        className="singleProjectSectionRow1Video"
                        onMouseOver={e => e.currentTarget.play()}
                        onMouseOut={e => e.currentTarget.pause()}
                    />) : null}
                </div>) : null}
            </div>
            <div className="singleProjectSectionRow2" style={
                isScreenSmaller1200 && direction === 'right' ? {flexDirection: 'column'} : isScreenSmaller1200 && direction === 'left' ? {flexDirection: 'column-reverse'} :
                direction === 'left' ? {gridTemplateColumns: '3fr 2fr'} : {gridTemplateColumns: '2fr 3fr'}
            }>
                {direction === 'right' ? <div className="singleProjectSectionRow2Column1">
                    <h2 className="singleProjectSectionRow2Header margin25lr">Design</h2>
                    <hr/>
                    {designDescription.split('\n').map((line, index) => (
                        <p key={index} className="singleProjectSectionRow2Description margin25lr">{line}</p>
                    ))}
                </div> : null}
                <div className="singleProjectSectionRow2Column2">
                    {designPreview.type === 'video' ? (
                        previewVideoSrc ? (<video
                            src={designPreview.source}
                            muted
                            loop
                            className="singleProjectSectionRow2Video"
                            onMouseOver={e => e.currentTarget.play()}
                            onMouseOut={e => e.currentTarget.pause()}
                        />) : null
                    ) : designPreview.type === 'image' ? (
                        <img
                            src={designPreview.source}
                            alt="Design Preview"
                            className="singleProjectSectionRow2Image"
                        />
                    ) : null}
                </div>
                {direction === 'left' ? <div className="singleProjectSectionRow2Column1">
                    <h2 className="singleProjectSectionRow2Header margin25lr">Design</h2>
                    <hr/>
                    {designDescription.split('\n').map((line, index) => (
                        <p key={index} className="singleProjectSectionRow2Description margin25lr">{line}</p>
                    ))}
                </div> : null}
            </div>
            <hr className="divider"/>
            <div className="singleProjectSectionTechnologiesUsed">
                <h2 className="singleProjectSectionTechnologiesUsedHeader">Technologies Used:</h2>
                <div className="pillsContainer">
                    {technologiesUsed.map((technology, index) => (
                        <Pill key={index} text={technology}/>
                    ))}
                </div>
            </div>
            <div className="singleProjectSectionLinks">
                {links.map((link, index) => (
                    <AnimatedLinkPill key={index} text={link.text} link={link.link} icon={link.icon}/>
                ))}
            </div>
        </div>
    )
}
