import './SocialIcons.css'
import SocialIcon from "./SocialIcon/SocialIcon.tsx";

export default function SocialIcons() {

    return (
        <div className="socialIcons">
            <SocialIcon link="https://github.com/heedix" icon="github" />
            <SocialIcon link="https://www.linkedin.com/in/jannis-austgen-93a8a627a/" icon="linkedin" />
            <SocialIcon link="https://www.instagram.com/_heedix/" icon="instagram" />
        </div>
    )
}