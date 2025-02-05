import './SocialIcon.css'
import {useEffect, useState} from "react";

interface SocialIconProps {
    link: string;
    icon: string;
}

export default function SocialIcon({link, icon}: SocialIconProps) {
    const [linkState] = useState(link);
    const [iconState] = useState(icon);
    const [iconSrc, setIconSrc] = useState('');

    useEffect(() => {
        switch (iconState) {
            case 'website':
                setIconSrc('src/assets/icons/website.png');
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
        <a className="socialIconLink" href={linkState} target="_blank">
            <div className="socialIconContainer">
                <img src={iconSrc} alt={iconState} className="socialIcon"></img>
            </div>
        </a>
    )
}