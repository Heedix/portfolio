import './HeedixGallerySection.css';
import Pill from "../../Pill/Pill.tsx";
import AnimatedLinkPill from "../../AnimatedLinkPill/AnimatedLinkPill.tsx";

export default function HeedixGallerySection() {

    return (
        <div className="heedixGallerySection">
            <div className="heedixGallerySectionRow1">
                <div className="heedixGallerySectionRow1VideoContainer">
                    <video
                        src="src/assets/heedix-gallery-preview.mp4"
                        muted
                        loop
                        className="heedixGallerySectionRow1Video"
                        onMouseOver={e => e.currentTarget.play()}
                        onMouseOut={e => e.currentTarget.pause()}
                    />
                </div>
                <div className="heedixGallerySectionRow1Column2">
                    <h1 className="heedixGallerySectionRow1Header margin25lr">Heedix Gallery</h1>
                    <hr/>
                    <h2 className="heedixGallerySectionRow1Subtitle margin25lr">Image hosting service</h2>
                    <p className="heedixGallerySectionRow1Description margin25lr">
                        This is an Angular 17-based web application designed for hosting images. <br/>
                        It is primarily focused on photography and includes features such as metadata extraction, allowing users to view details like the camera model, make, and settings used to capture the image. <br/>
                        The backend is powered by an Express.js-based REST API. <br/>
                        All components of this web application are built and deployed using GitHub Actions with Docker on a VPS.
                    </p>
                </div>
            </div>
            <div className="heedixGallerySectionRow2">
                <div className="heedixGallerySectionRow2Column1">
                    <h2 className="heedixGallerySectionRow2Header margin25lr">Design</h2>
                    <hr/>
                    <p className="heedixGallerySectionRow2Description margin25lr">
                        The design of Heedix Gallery is inspired by the minimalistic and clean look of photography websites. <br/>
                        The color scheme is kept simple to ensure that the images are the main focus. <br/>
                        The layout is designed to be responsive and intuitive, allowing users to easily navigate the website and view images on any device.
                    </p>
                </div>
                <div className="heedixGallerySectionRow2Column2">
                    <video
                        src="src/assets/heedix-gallery-preview.mp4"
                        muted
                        loop
                        className="heedixGallerySectionRow2Video"
                        onMouseOver={e => e.currentTarget.play()}
                        onMouseOut={e => e.currentTarget.pause()}
                    />
                </div>
            </div>
            <div className="heedixGallerySectionTechnologiesUsed">
                <h2 className="heedixGallerySectionTechnologiesUsedHeader">Technologies Used:</h2>
                <div className="pillsContainer">
                    <Pill text={'Angular'}></Pill>
                    <Pill text={'TypeScript'}></Pill>
                    <Pill text={'Express.js'}></Pill>
                    <Pill text={'JavaScript'}></Pill>
                    <Pill text={'PostgreSQL'}></Pill>
                    <Pill text={'Figma'}></Pill>
                    <Pill text={'Git'}></Pill>
                    <Pill text={'GitHub Actions'}></Pill>
                    <Pill text={'Docker'}></Pill>
                </div>
            </div>
            <div className="heedixGallerySectionLinks">
                <AnimatedLinkPill text={'Live Demo'} link={'https://heedix.de'} icon={'website'}/>
                <AnimatedLinkPill text={'GitHub'} link={'https://github.com/Heedix/heedix-gallery/'} icon={'github'}/>
            </div>
        </div>
    )
}
