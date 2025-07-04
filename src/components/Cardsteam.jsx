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

import React, { useRef} from 'react';

const Cardsteam = ({ card, classc, slider, button }) => {
    const containerRef = useRef(null);

    // Scroll left
    const scrollLeft = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const firstRealCard = container.children[1]; // or whichever is your real first card
            const cardWidth = firstRealCard.offsetWidth;
            containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
    };

    // Scroll right
    const scrollRight = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const firstRealCard = container.children[1]; // or whichever is your real first card
            const cardWidth = firstRealCard.offsetWidth;
            containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
    };
    return (
        <>
            <div className='slider-wrapper'>
                <div className='nav-buttons'>
                    <button onClick={scrollLeft} className={`${button} left`}>
                        <img src="/arrow-back.png" alt="arrow-back" />
                    </button>
                    <button onClick={scrollRight} className={`${button} right`}>
                        <img src="/arrow-forward.png" alt="arrow-forward" />
                    </button>
                </div>

                <div ref={containerRef} className={slider}>
                    {card.map((item, index) => (
                        <div key={item.id} className={classc}>
                            <img
                                src={item.src}
                                alt="Hover to change"
                                className={`team-member team-member${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cardsteam;