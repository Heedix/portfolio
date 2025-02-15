import './SocialIcon.css'
import {useEffect, useState} from "react";

import websiteIcon from '../../../assets/icons/website.png';
import messengerIcon from '../../../assets/icons/messenger.svg';
import githubIcon from '../../../assets/icons/github.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';
import youtubeIcon from '../../../assets/icons/youtube.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import twitterIcon from '../../../assets/icons/x.svg';
import facebookIcon from '../../../assets/icons/facebook.svg';
import redditIcon from '../../../assets/icons/reddit.svg';
import twitchIcon from '../../../assets/icons/twitch.svg';
import discordIcon from '../../../assets/icons/discord.svg';
import spotifyIcon from '../../../assets/icons/spotify.svg';
import tiktokIcon from '../../../assets/icons/tiktok.svg';

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
        <a className="socialIconLink" href={linkState} target="_blank">
            <div className="socialIconContainer">
                <img src={iconSrc} alt={iconState} className="socialIcon"></img>
            </div>
        </a>
    )
}