import './ProjectSection.css'
import Pill from "../Pill/Pill.tsx";
import AnimatedLinkPill from "../AnimatedLinkPill/AnimatedLinkPill.tsx";
import {useEffect, useState} from "react";

export default function ProjectSection() {

    return (
        <div className="projectSection">
            <SingleProjectSection
                title={'Portfolio'}
                subtitle={'My portfolio page'}
                description={`
                This is my personal portfolio website, built with React 18.\n
                It serves as a central platform to showcase my projects, skills, and experience in software development.\n
                The site features an interactive user interface and modern UI/UX design.\n
                All components of this web application are built and deployed using GitHub Actions with Docker on a VPS.`}
                previewVideoSrc={'src/assets/heedix-gallery-preview.mp4'}
                designDescription={`
                The design of my portfolio website follows a minimalistic and clean aesthetic, inspired by modern web development standards.\n
                The color scheme is kept simple to maintain clarity and ensure that the content remains the primary focus.\n
                The layout is fully responsive and intuitive, allowing visitors to seamlessly navigate and explore my projects on any device.`}
                designPreview={{source: 'src/assets/heedix-gallery-preview.mp4', type: 'video'}}
                technologiesUsed={['React', 'TypeScript', 'Figma', 'Git', 'Nginx', 'GitHub Actions', 'Docker']}
                links={[
                    {text: 'Website', link: 'https://heedix.de/', icon: 'website'},
                    {text: 'GitHub', link: 'https://github.com/Heedix/portfolio/', icon: 'github'},
                ]}
                direction={'right'}
                leftUnderlineWidth={100}
            />

            <SingleProjectSection
                title={'Heedix Gallery'}
                subtitle={'Image hosting service'}
                description={`
                    This is an Angular 17-based web application designed for hosting images.\n
                    It is primarily focused on photography and includes features such as metadata extraction, allowing users to view details like the camera model, make, and settings used to capture the image.\n
                    The backend is powered by an Express.js-based REST API.\n
                    All components of this web application are built and deployed using GitHub Actions with Docker on a VPS.`}
                previewVideoSrc={'src/assets/heedix-gallery-preview.mp4'}
                designDescription={`
                    The design of Heedix Gallery is inspired by the minimalistic and clean look of photography websites.\n
                    The color scheme is kept simple to ensure that the images are the main focus.\n
                    The layout is designed to be responsive and intuitive, allowing users to easily navigate the website and view images on any device.`}
                designPreview={{source: 'src/assets/heedix-gallery-preview.mp4', type: 'video'}}
                technologiesUsed={['Angular', 'TypeScript', 'Node.js', 'Express.js', 'JavaScript', 'PostgreSQL', 'Figma', 'Git', 'Nginx', 'GitHub Actions', 'Docker']}
                links={[
                    {text: 'Live Demo', link: 'https://gallery.heedix.de/', icon: 'website'},
                    {text: 'GitHub', link: 'https://github.com/Heedix/heedix-gallery/', icon: 'github'}
                ]}
                direction={'left'}
                leftUnderlineWidth={92}
            />
        </div>
    )
}

interface SingleProjectSectionProps {
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
                                  title,
                                  subtitle,
                                  description,
                                  previewVideoSrc,
                                  designDescription,
                                  designPreview,
                                  technologiesUsed,
                                  links,
                                  direction,
                                  leftUnderlineWidth,
                                  rightUnderlineWidth
                              }: SingleProjectSectionProps) {

    const [isScreenSmaller1200, setIsScreenSmaller1200] = useState(window.innerWidth < 1200);

    useEffect(() => {
        const handleResize = () => setIsScreenSmaller1200(window.innerWidth < 1200);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="singleProjectSection">
            <div className="singleProjectSectionRow1" style={
                isScreenSmaller1200 && direction === 'right' ? {flexDirection: 'column-reverse'} : isScreenSmaller1200 && direction === 'left' ? {flexDirection: 'column'} :
                direction === 'left' ? {gridTemplateColumns: '2fr 3fr'} : {gridTemplateColumns: '3fr 2fr'}
            }>
                {direction === 'right' ? (<div className="singleProjectSectionRow1VideoContainer">
                    <video
                        src={previewVideoSrc}
                        muted
                        loop
                        className="singleProjectSectionRow1Video"
                        onMouseOver={e => e.currentTarget.play()}
                        onMouseOut={e => e.currentTarget.pause()}
                    />
                </div>) : null}
                <div className="singleProjectSectionRow1Column2">
                    <div className="singleProjectSectionRow1HeaderContainer margin25lr">
                        <h1 className="singleProjectSectionRow1Header">{title}</h1>
                        <div
                            className="singleProjectSectionRow1HeaderUnderline singleProjectSectionRow1HeaderUnderlineLeft"
                            style={leftUnderlineWidth ? {width: leftUnderlineWidth + '%'} : {width: 0}}/>
                        <div
                            className="singleProjectSectionRow1HeaderUnderline singleProjectSectionRow1HeaderUnderlineRight"
                            style={rightUnderlineWidth ? {width: rightUnderlineWidth + '%'} : {width: 0}}/>
                    </div>
                    <hr/>
                    <h2 className="singleProjectSectionRow1Subtitle margin25lr">{subtitle}</h2>
                    <p className="singleProjectSectionRow1Description margin25lr">
                        {description.split('\n').map((line) => (
                            <div>{line}</div>
                        ))}
                    </p>
                </div>
                {direction === 'left' ? (<div className="singleProjectSectionRow1VideoContainer">
                    <video
                        src={previewVideoSrc}
                        muted
                        loop
                        className="singleProjectSectionRow1Video"
                        onMouseOver={e => e.currentTarget.play()}
                        onMouseOut={e => e.currentTarget.pause()}
                    />
                </div>) : null}
            </div>
            <div className="singleProjectSectionRow2" style={
                isScreenSmaller1200 && direction === 'right' ? {flexDirection: 'column'} : isScreenSmaller1200 && direction === 'left' ? {flexDirection: 'column-reverse'} :
                direction === 'left' ? {gridTemplateColumns: '3fr 2fr'} : {gridTemplateColumns: '2fr 3fr'}
            }>
                {direction === 'right' ? <div className="singleProjectSectionRow2Column1">
                    <h2 className="singleProjectSectionRow2Header margin25lr">Design</h2>
                    <hr/>
                    <p className="singleProjectSectionRow2Description margin25lr">
                        {designDescription.split('\n').map((line) => (
                            <div>{line}</div>
                        ))}
                    </p>
                </div> : null}
                <div className="singleProjectSectionRow2Column2">
                    {designPreview.type === 'video' ? (
                        <video
                            src={designPreview.source}
                            muted
                            loop
                            className="singleProjectSectionRow2Video"
                            onMouseOver={e => e.currentTarget.play()}
                            onMouseOut={e => e.currentTarget.pause()}
                        />
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
                    <p className="singleProjectSectionRow2Description margin25lr">
                        {designDescription.split('\n').map((line) => (
                            <div>{line}</div>
                        ))}
                    </p>
                </div> : null}
            </div>
            <hr className="divider"/>
            <div className="singleProjectSectionTechnologiesUsed">
                <h2 className="singleProjectSectionTechnologiesUsedHeader">Technologies Used:</h2>
                <div className="pillsContainer">
                    {technologiesUsed.map((technology) => (
                        <Pill text={technology}/>
                    ))}
                </div>
            </div>
            <div className="singleProjectSectionLinks">
                {links.map((link) => (
                    <AnimatedLinkPill text={link.text} link={link.link} icon={link.icon}/>
                ))}
            </div>
        </div>
    )
}
