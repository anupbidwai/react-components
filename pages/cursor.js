import Cursor from "@/components/Common/Cursor";
import { useRef } from 'react';

const PageCursor = () => {
    const vRef = useRef();
    return (
        <Cursor ref={vRef}>
            <video src="/video.mp4" muted loop playsInline />
        </Cursor>
    )
}

export default PageCursor;