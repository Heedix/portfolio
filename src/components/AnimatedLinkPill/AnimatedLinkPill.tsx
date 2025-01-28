import './AnimatedLinkPill.css'
import {useState} from "react";

interface AnimatedLinkPillProps {
    text: string;
    link: string;
}

export default function AnimatedLinkPill({text, link}: AnimatedLinkPillProps) {
    const [textState] = useState(text);
    const [linkState] = useState(link);

    return (
        <a href={linkState} className="animatedLinkPillLink">
            <div className="animatedLinkPill">
                <div className="animatedLinkPillTextContainer">
                    <p>{textState}</p>
                </div>
                <div className="animatedLinkPillInnerContainer">
                    <div className="animatedLinkPillArrowContainer">
                        <svg className="animatedLinkPillArrow" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="60" height="10" x="2" y="27" fill="#fff" rx="5"/>
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    )
}
