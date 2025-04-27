import { useRef, useEffect } from 'react';
import { EnterAnimFade, addScrollTextHoverEffect } from '../js/Animations.js';

import logo from '/logo.png';

const SideButtons = () => {
    const MainRef = useRef([]);

    const aboutpage = () => {
        console.log("about page")
    }

    useEffect(() => {
        addScrollTextHoverEffect();

        const cleanupFunctions = [];

        MainRef.current.forEach((el, index) => {
          const timer = setTimeout(() => {
            const cleanup = EnterAnimFade(el, index);
            if (cleanup) cleanupFunctions.push(cleanup);
          }, 1250);

          cleanupFunctions.push(() => clearTimeout(timer));
        });

        return () => {
          cleanupFunctions.forEach(cleanup => cleanup());
        };
      }, []);

    return (
        <div style={{position: 'absolute', width: '100%', height: '100vh', pointerEvents: 'none'}}>

            <h1
                className="Button-Subheading"
                ref={el => MainRef.current[0] = el}
                style={{
                    opacity: 0,
                    textAlign: 'left',
                    bottom: 0,
                }}
                onClick={() => aboutpage()}
            >
                About.
            </h1>

            <h1
                className="Button-Subheading"
                ref={el => MainRef.current[1] = el}
                style={{
                    opacity: 0,
                    position: 'absolute',
                    right: 0,
                }}
            >
                Showcase.
            </h1>

            <h1
                className="Button-Subheading"
                ref={el => MainRef.current[2] = el}
                style={{
                    opacity: 0,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                }}
            >
                Contact.
            </h1>

            <img src={logo} alt="logo" className="Button-Subheading"
                ref={el => MainRef.current[3] = el}
                style={{
                    opacity: 0,
                    position: 'absolute',
                    width: 43,
                    paddingTop: 9,
                }} />
        </div>
    );
};

export default SideButtons;
