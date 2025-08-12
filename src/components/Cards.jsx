import { useCallback, useEffect, useRef, useState } from 'react';

const Cards = ({ title, card, classo, classs, classc, slider, button }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  // Duplicate cards for seamless infinite scroll
  const cardsToShow = [...card, ...card, ...card, ...card, ...card, ...card, ...card];

  const scrollAmountRef = useRef(0);

  // Scroll right by one card
  const scrollRight = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const firstRealCard = container.children[1];
      const cardWidth = firstRealCard.offsetWidth;
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
      scrollAmountRef.current += cardWidth;

      // If we've scrolled past the original set, reset to start
      if (scrollAmountRef.current >= cardWidth * card.length) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "auto" });
          scrollAmountRef.current = 0;
        }, 500); // Wait for smooth scroll to finish
      }
    }
  }, [card]);

  // Scroll left by one card
  const scrollLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const firstRealCard = container.children[1];
      const cardWidth = firstRealCard.offsetWidth;
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      scrollAmountRef.current -= cardWidth;

      // If we've scrolled before the start, reset to end
      if (scrollAmountRef.current < 0) {
        setTimeout(() => {
          container.scrollTo({ left: cardWidth * card.length, behavior: "auto" });
          scrollAmountRef.current = cardWidth * card.length;
        }, 500);
      }
    }
  };

  useEffect(() => {
    // Center the scroll at the start
    if (containerRef.current && card.length > 0) {
      containerRef.current.scrollTo({ left: 0, behavior: "auto" });
      scrollAmountRef.current = 0;
    }
  }, [card]);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 2500);

    return () => clearInterval(interval);
  }, [scrollRight]);

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

        <div ref={ containerRef } className={ slider }>
          { cardsToShow.map((item, index) => (
            <div
              key={ index + '-' + (item.id ?? 'card') }
              className={ classc }
              onMouseEnter={ () => setHoveredIndex(index) }
              onMouseLeave={ () => setHoveredIndex(null) }
            >
              { hoveredIndex == index ? (<span className={ classo }>
                { item.title }
              </span>) : " " }
              <img src={ item.src } alt="Hover to change" className={ classs } />
            </div>
          )) }
        </div>
      </div>
    </>
  );
};

export default Cards;

