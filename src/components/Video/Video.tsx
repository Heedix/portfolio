import './Video.css';
import { useState } from "react";

interface VideoProps {
    source: string;
}

export default function Video({ source }: VideoProps) {
    const [sourceState] = useState(source);
    const [fullScreen, setFullScreen] = useState(false);

    function onClick() {
        setFullScreen(!fullScreen);
    }

    return (
        <div
            className={`videoContainer ${fullScreen ? 'fullScreen' : ''}`}
            onClick={onClick}
        >
            <video
                src={sourceState}
                className="video"
                onMouseEnter={e => e.currentTarget.play()}
                onMouseLeave={e => e.currentTarget.pause()}
            ></video>
        </div>
    );
}