import { useCallback, useEffect, useRef, useState } from 'react';

const Cards = ({ title, card, classo, classs, classc, slider, button }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
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
    // detect mobile/small screens so we can show titles without hover
    const mq = window.matchMedia?.('(max-width: 875px)');
    const set = () => setIsMobile(!!mq?.matches);
    set();
    try {
      mq?.addEventListener?.('change', set);
    } catch {
      // Safari fallback
      mq?.addListener?.(set);
    }
    return () => {
      try {
        mq?.removeEventListener?.('change', set);
      } catch {
        mq?.removeListener?.(set);
      }
    };
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
          <button onClick={ scrollLeft } className={ `${button} left` } aria-label="Scroll left">
            <img src="/arrow-back.png" alt="Scroll left" />
          </button>
          <button onClick={ scrollRight } className={ `${button} right` } aria-label="Scroll right">
            <img src="/arrow-forward.png" alt="Scroll right" />
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
              { (hoveredIndex == index || isMobile) ? (
                <span className={ classo }>
                  { item.title }
                </span>
              ) : " " }
              <img
                src={ item.src }
                alt={ item.title ?? 'Service image' }
                className={ classs }
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
          )) }
        </div>
      </div>
    </>
  );
};

export default Cards;

