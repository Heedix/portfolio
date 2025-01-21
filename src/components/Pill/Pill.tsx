import './Pill.css'
import {useState} from "react";

interface PillProps {
    text: string;
}

const getRandomGradient = () => {
    const colors = [
        "#7B2EFF30",
        "#33CFFF30",
        "#3357FF30",
        "#FF33A130",
        "#A183FF30",
        "#33FFF530",
    ];
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${color1}, ${color2})`;
};

export default function Pill({ text }: PillProps) {
    const [textState] = useState(text);

    const gradient = getRandomGradient();

    return (
        <div className="pill" style={{ background: `${gradient}` }}>
            <p className="pillText">{textState}</p>
        </div>
    )
}
