import React, { useEffect } from 'react';
const VideoCards = ({ title, videoCard }) => {
    useEffect(() => {
        // Disable right-click
        const disableRightClick = (event) => {
            event.preventDefault();
        };

        // Disable common shortcuts
        const disableShortcuts = (event) => {
            if (
                event.ctrlKey &&
                ["s", "u", "i", "j"].includes(event.key.toLowerCase()) // Ctrl+S, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J
            ) {
                event.preventDefault();
            }
            if (event.key === "F12") {
                event.preventDefault();
            }
        };

        document.addEventListener("contextmenu", disableRightClick);
        document.addEventListener("keydown", disableShortcuts);

        return () => {
            document.removeEventListener("contextmenu", disableRightClick);
            document.removeEventListener("keydown", disableShortcuts);
        };
    }, []);

    return (
        <>
            <div className='video-container'>
                {videoCard.map((item, index) => (
                    <video key={item.id} autoPlay muted loop className={`vid${index + 1}`}>
                        <source src={item.src} type="video/mp4" />
                    </video>
                ))}
            </div>
            <div><h1>{title}</h1></div>
        </>
    )
}

export default VideoCards;