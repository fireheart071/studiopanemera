// import React, { useRef} from 'react';
// const Cardsteam = ({ card, classc, slider, button }) => {

//     const containerRef = useRef(null);

//     // Function to move left
//     const scrollLeft = () => {
//         if (containerRef.current) {
//             const cardWidth = containerRef.current.firstChild.offsetWidth;
//             containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
//         }
//     };

//     // Function to move right
//     const scrollRight = () => {
//         if (containerRef.current) {
//             const cardWidth = containerRef.current.firstChild.offsetWidth;
//             containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
//         }
//     };


//     return (
//         <>
//             <div className='slider-wrapper'>
//                 <div className='nav-buttons'>
//                     <button onClick={scrollLeft} className={`${button} left`}><img src="/arrow-back.png" alt="arrow-back" /></button>
//                     <button onClick={scrollRight} className={`${button} right`}><img src="/arrow-forward.png" alt="arrow-forward" /></button>
//                 </div>
//                 <div ref={containerRef} className={slider}>
//                     {card.map((item, index) => (
//                         <div
//                             key={item.id}
//                             className={classc}
//                         >
//                                 <img src={item.src} alt="Hover to change" className={`team-member team-member${index + 1}`} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/* <div>
//                 <h1>{title}</h1>
//             </div> */}
//         </>
//     )
// }

// export default Cardsteam;

import { useCallback, useEffect, useRef, useState } from 'react';

const Cardsteam = ({ card, classc, slider, button }) => {
    const containerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const cardsToShow = card.length;
    const clonedCards = [...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card, ...card]; // [clone][original][clone]

    // Scroll left
    const scrollLeft = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const cardWidth = container.children[cardsToShow].offsetWidth;
            container.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
    };

    // Scroll right
    const scrollRight = useCallback(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const cardWidth = container.children[cardsToShow].offsetWidth;
            container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
    }, [cardsToShow]);

    // Infinite scroll effect
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const cardWidth = container.children[cardsToShow].offsetWidth;
        // Set initial scroll to the start of the original cards
        container.scrollLeft = cardWidth * cardsToShow;

        const handleScroll = () => {
            // Use Math.round for pixel-perfect comparison
            if (Math.round(container.scrollLeft) <= Math.round(cardWidth * (cardsToShow - 1))) {
                // Scrolled to left clone, reset to original instantly (no animation)
                container.scrollLeft = cardWidth * cardsToShow;
            } else if (Math.round(container.scrollLeft) >= Math.round(cardWidth * (cardsToShow * 2))) {
                // Scrolled to right clone, reset to original instantly (no animation)
                container.scrollLeft = cardWidth * cardsToShow;
            }
        };
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [cardsToShow]);

    // Auto-scroll effect
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        let intervalId = setInterval(() => {
            if (!isPaused) {
                const cardWidth = container.children[cardsToShow].offsetWidth;
                // If at right boundary, jump instantly before scrolling
                if (Math.round(container.scrollLeft) >= Math.round(cardWidth * (cardsToShow * 2))) {
                    container.scrollLeft = cardWidth * cardsToShow;
                }
                container.scrollBy({ left: cardWidth, behavior: "smooth" });
            }
        }, 2500);
        return () => clearInterval(intervalId);
    }, [isPaused, cardsToShow]);

    // Pause auto-scroll on hover
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleMouseEnter = () => setIsPaused(true);
        const handleMouseLeave = () => setIsPaused(false);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <div className='slider-wrapper'>
                <div className='nav-buttons'>
                    <button onClick={ scrollLeft } className={ `${button} left` }>
                        <img src="/arrow-back.png" alt="arrow-back" />
                    </button>
                    <button onClick={ scrollRight } className={ `${button} right` }>
                        <img src="/arrow-forward.png" alt="arrow-forward" />
                    </button>
                </div>
                <div ref={ containerRef } className={ slider } style={ { overflowX: 'auto', whiteSpace: 'nowrap' } }>
                    {/* Render cloned cards for infinite scroll */ }
                    { clonedCards.map((item, index) => (
                        <div key={ `${item.id}-${index}` } className={ classc }>
                            <img
                                src={ item.src }
                                alt="Hover to change"
                                className={ `team-member team-member${(index % cardsToShow) + 1}` }
                            />
                        </div>
                    )) }
                </div>
            </div>
        </>
    );
};

export default Cardsteam;