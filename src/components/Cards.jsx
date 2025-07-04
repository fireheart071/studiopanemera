// import React, { useRef, useState } from 'react';
// const Cards = ({ title, card, classo, classs, classc, slider, button }) => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

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
//                             onMouseEnter={() => setHoveredIndex(index)}
//                             onMouseLeave={() => setHoveredIndex(null)}
//                         >
//                             {hoveredIndex === index ? (
//                                 <img src={item.src} alt="Hover to change" className={classs} />
//                             ) : (
//                                 <div className={classo}>
//                                     <h1>{item.title}</h1>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div>
//                 <h1>{title}</h1>
//             </div>
//         </>
//     )
// }

// export default Cards;

import React, { useRef, useState, useEffect } from 'react';

const Cards = ({ title, card, classo, classs, classc, slider, button }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
        const container = containerRef.current;
        const firstRealCard = container.children[1]; // or whichever is your real first card
        const cardWidth = firstRealCard.offsetWidth;
      containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
        const container = containerRef.current;
        const firstRealCard = container.children[1]; // or whichever is your real first card
        const cardWidth = firstRealCard.offsetWidth;
      containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (containerRef.current && card.length > 0) {
      const container = containerRef.current;
      const cardsArray = container.children;
      const cardCount = cardsArray.length;
      const middleIndex = Math.round(cardCount / 2);
      const cardWidth = cardsArray[middleIndex].offsetWidth;
      const containerWidth = container.offsetWidth;

      // Scroll so that the middle card is centered
      const scrollPosition = cardWidth * middleIndex - containerWidth / 2 + cardWidth / 2;
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  }, [card]);

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

      {/* <div>
        <h1>{title}</h1>
      </div> */}
    </>
  );
};

export default Cards;

