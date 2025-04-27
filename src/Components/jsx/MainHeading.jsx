import { useRef, useEffect } from 'react';
import { EnterAnimSlide, handleMouseMoveEffect, addDistortionEffect } from '../js/Animations.js';

function MainHeading() {
    const mainRef = useRef([]);

    function setRefs(el, index) {
        if (el && !mainRef.current[index]) {
            mainRef.current[index] = el;
        }
    }

    useEffect(() => {
        EnterAnimSlide(mainRef.current, 1);

        setTimeout(() => {
        EnterAnimSlide(mainRef.current, 2);
        }, 300);

        setTimeout(() => {
            const cleanupMouseMoveEffect = handleMouseMoveEffect(mainRef);
            return cleanupMouseMoveEffect;
        }, 1000);
    }, []);

    useEffect(() => {
        const headingText = mainRef.current[1];
        const cleanupDistortionEffect = addDistortionEffect(headingText);

        return cleanupDistortionEffect;
    }, []);

    return (
        <main style={{position: 'relative', width: '100%', height: '100vh'}}>
            <div className='grain-overlay'/>
            <main className='Main'>
                <h1 className='Heading' ref={el => setRefs(el, 1)}>skellycode</h1>
                <h1 className='Subheading' style={{opacity: 0, marginTop: 95}} ref={el => setRefs(el, 2)}>portfolio</h1>
            </main>
        </main>
    );
}

export default MainHeading;
