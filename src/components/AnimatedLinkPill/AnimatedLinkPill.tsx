import './AnimatedLinkPill.css'
import {useEffect, useState} from "react";

import websiteIcon from '../../assets/icons/website.png';
import messengerIcon from '../../assets/icons/messenger.svg';
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import twitterIcon from '../../assets/icons/x.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import redditIcon from '../../assets/icons/reddit.svg';
import twitchIcon from '../../assets/icons/twitch.svg';
import discordIcon from '../../assets/icons/discord.svg';
import spotifyIcon from '../../assets/icons/spotify.svg';
import tiktokIcon from '../../assets/icons/tiktok.svg';

interface AnimatedLinkPillProps {
    text: string;
    link: string;
    icon?: string;
}

export default function AnimatedLinkPill({text, link, icon}: AnimatedLinkPillProps) {
    const [textState] = useState(text);
    const [linkState] = useState(link);
    const [iconState] = useState(icon);
    const [iconSrc, setIconSrc] = useState(iconState);

    useEffect(() => {
        switch (iconState) {
            case 'website':
                setIconSrc(websiteIcon);
                break;
            case 'messenger':
                setIconSrc(messengerIcon);
                break;
            case 'github':
                setIconSrc(githubIcon);
                break;
            case 'linkedin':
                setIconSrc(linkedinIcon);
                break;
            case 'youtube':
                setIconSrc(youtubeIcon);
                break;
            case 'instagram':
                setIconSrc(instagramIcon);
                break;
            case 'twitter':
                setIconSrc(twitterIcon);
                break;
            case 'facebook':
                setIconSrc(facebookIcon);
                break;
            case 'reddit':
                setIconSrc(redditIcon);
                break;
            case 'twitch':
                setIconSrc(twitchIcon);
                break;
            case 'discord':
                setIconSrc(discordIcon);
                break;
            case 'spotify':
                setIconSrc(spotifyIcon);
                break;
            case 'tiktok':
                setIconSrc(tiktokIcon);
                break;
        }
    }, [iconState]);

    return (
        <a href={linkState} target="_blank" className="animatedLinkPillLink">
            <div className="animatedLinkPill">
                {iconSrc && <div className="animatedLinkPillIconContainer">
                    <img src={iconSrc} alt={iconState} className="animatedLinkPillIcon"></img>
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
