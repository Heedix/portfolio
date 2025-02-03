import './AnimatedLinkPill.css'
import {useEffect, useState} from "react";

interface AnimatedLinkPillProps {
    text: string;
    link: string;
    icon?: string;
}

export default function AnimatedLinkPill({text, link, icon}: AnimatedLinkPillProps) {
    const [textState] = useState(text);
    const [linkState] = useState(link);
    const [iconState] = useState(icon);
    const [iconSrc, setIconSrc] = useState('');

    useEffect(() => {
        switch (iconState) {
            case 'website':
                setIconSrc('src/assets/icons/website.svg');
                break;
            case 'messenger':
                setIconSrc('src/assets/icons/messenger.svg');
                break;
            case 'github':
                setIconSrc('src/assets/icons/github.svg');
                break;
            case 'linkedin':
                setIconSrc('src/assets/icons/linkedin.svg');
                break;
            case 'youtube':
                setIconSrc('src/assets/icons/youtube.svg');
                break;
            case 'instagram':
                setIconSrc('src/assets/icons/instagram.svg');
                break;
            case 'twitter':
                setIconSrc('src/assets/icons/x.svg');
                break;
            case 'facebook':
                setIconSrc('src/assets/icons/facebook.svg');
                break;
            case 'reddit':
                setIconSrc('src/assets/icons/reddit.svg');
                break;
            case 'twitch':
                setIconSrc('src/assets/icons/twitch.svg');
                break;
            case 'discord':
                setIconSrc('src/assets/icons/discord.svg');
                break;
            case 'spotify':
                setIconSrc('src/assets/icons/spotify.svg');
                break;
            case 'tiktok':
                setIconSrc('src/assets/icons/tiktok.svg');
                break;
        }
    }, [iconState]);

    return (
        <a href={linkState} target="_blank" className="animatedLinkPillLink">
            <div className="animatedLinkPill">
                {iconSrc && <div className="animatedLinkPillIconContainer">
                    <img src={iconSrc} alt="icon" className="animatedLinkPillIcon"></img>
                </div>}
                <div className="animatedLinkPillTextContainer">
                    <p className="animatedLinkPillText">{textState}</p>
                </div>
                <div className="animatedLinkPillInnerContainer">
                    <div className="animatedLinkPillArrowContainer">
                        <svg className="animatedLinkPillArrow" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
                            <rect width="49" height="8" x="4" y="27.579" fill="#fff" rx="4"/>
                            <path fill="#fff" d="M58.405 28.832a4 4 0 0 1 0 5.494L36.303 57.72a3.231 3.231 0 0 1-4.73-4.402l17.45-19.036a4 4 0 0 0 0-5.406L31.572 9.84a3.23 3.23 0 0 1 4.73-4.402l22.102 23.394Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    )
}
