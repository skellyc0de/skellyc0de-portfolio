import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function CustomCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: 'power2.out',
            });
        };

        const enlarge = () => {
            gsap.to(cursorRef.current, {
                backgroundColor: 'white',
                height: 37,
                width: 37,
                duration: 0.2,
                ease: 'power2.out',
            });
        };

        const shrink = () => {
            gsap.to(cursorRef.current, {
                backgroundColor: 'transparent',
                height: 29,
                width: 29,
                duration: 0.05,
                ease: 'power2.out',
            });
        };

        window.addEventListener('mousemove', moveCursor);

        const elementsToTrack = document.querySelectorAll('button, a, .Button-Subheading, .Subheading');

        elementsToTrack.forEach((el) => {
            el.addEventListener('mouseenter', enlarge);
            el.addEventListener('mouseleave', shrink);
        });


        return () => {
            window.removeEventListener('mousemove', moveCursor);
            elementsToTrack.forEach((el) => {
                el.removeEventListener('mouseenter', enlarge);
                el.removeEventListener('mouseleave', shrink);
            });
        };
    }, []);

    return <div className="custom-cursor" ref={cursorRef}></div>;
}

export default CustomCursor;
