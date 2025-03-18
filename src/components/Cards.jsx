import React, { useRef, useState } from 'react';
const Cards = ({ title, card, classo, classs, classc, slider, button }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const containerRef = useRef(null);

    // Function to move left
    const scrollLeft = () => {
        if (containerRef.current) {
            const cardWidth = containerRef.current.firstChild.offsetWidth;
            containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
    };

    // Function to move right
    const scrollRight = () => {
        if (containerRef.current) {
            const cardWidth = containerRef.current.firstChild.offsetWidth;
            containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
    };


    return (
        <>
            <div className='slider-wrapper'>
                <div className='nav-buttons'>
                    <button onClick={scrollLeft} className={`${button} left`}><img src="/arrow-back.png" alt="arrow-back" /></button>
                    <button onClick={scrollRight} className={`${button} right`}><img src="/arrow-forward.png" alt="arrow-forward" /></button>
                </div>
                <div ref={containerRef} className={slider}>
                    {card.map((item, index) => (
                        <div
                            key={item.id}
                            className={classc}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {hoveredIndex === index ? (
                                <img src={item.src} alt="Hover to change" className={classs} />
                            ) : (
                                <div className={classo}>
                                    <h1>{item.title}</h1>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1>{title}</h1>
            </div>
        </>
    )
}

export default Cards;