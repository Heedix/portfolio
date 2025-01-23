import './Pill.css'
import {useState} from "react";

interface PillProps {
    text: string;
}

export default function Pill({ text }: PillProps) {
    const [textState] = useState(text);

    return (
        <div className="pill">
            <p className="pillText">{textState}</p>
        </div>
    )
}
