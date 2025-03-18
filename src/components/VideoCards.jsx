import React from 'react';
const VideoCards = ({ title, videoCard }) => {

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