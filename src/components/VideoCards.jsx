import { useEffect, useRef, useState } from 'react';
const VideoCards = ({ title, videoCard }) => {
    const containerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        // Lazy-load video sources when they become visible to avoid heavy initial downloads
        if ('IntersectionObserver' in window) {
            observerRef.current = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const vid = entry.target;
                        const srcEl = vid.querySelector('source[data-src]');
                        if (srcEl && !srcEl.src) {
                            srcEl.src = srcEl.dataset.src;
                            // load and play if it's autoplay
                            vid.load();
                        }
                    }
                });
            }, { root: null, rootMargin: '200px' });

            // Observe all videos
            const vids = containerRef.current?.querySelectorAll('video');
            vids && vids.forEach(v => observerRef.current.observe(v));
        } else {
            // Fallback: set sources immediately
            const vids = containerRef.current?.querySelectorAll('video');
            vids && vids.forEach(v => {
                const srcEl = v.querySelector('source[data-src]');
                if (srcEl && !srcEl.src) {
                    srcEl.src = srcEl.dataset.src;
                    v.load();
                }
            });
        }

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

    // Infinite auto-scroll effect
    const videosToShow = videoCard.length;
    const clonedVideos = [...videoCard, ...videoCard, ...videoCard]; // [clone][original][clone]

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const videoWidth = container.children[videosToShow].offsetWidth;
        // Set initial scroll to the start of the original videos
        container.scrollLeft = videoWidth * videosToShow;
        const handleScroll = () => {
            if (container.scrollLeft <= videoWidth * (videosToShow - 1)) {
                // Scrolled to left clone, reset to original
                container.scrollLeft = videoWidth * videosToShow;
            } else if (container.scrollLeft >= videoWidth * (videosToShow * 2)) {
                // Scrolled to right clone, reset to original
                container.scrollLeft = videoWidth * videosToShow;
            }
        };
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [videosToShow]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        let intervalId = setInterval(() => {
            if (!isPaused) {
                const videoWidth = container.children[videosToShow].offsetWidth;
                container.scrollBy({ left: videoWidth, behavior: "smooth" });
            }
        }, 2500);
        return () => clearInterval(intervalId);
    }, [videosToShow, isPaused]);

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
            <div className='video-container' ref={ containerRef } style={ { overflowX: 'auto', whiteSpace: 'nowrap' } }>
                { clonedVideos.map((item, index) => (
                    <video
                        key={ `${item.id}-${index}` }
                        preload='none'
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={ `vid${(index % videosToShow) + 1}` }
                        aria-hidden={ true }
                        tabIndex={ -1 }
                    >
                        <source data-src={ item.src } type="video/mp4" />
                        {/* videos are muted — no captions provided */ }
                    </video>
                )) }
            </div>
            <div><h1>{ title }</h1></div>
        </>
    )
}

export default VideoCards;