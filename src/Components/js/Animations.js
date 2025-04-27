import gsap from 'gsap';

export const EnterAnimSlide = (element, index) => {
    gsap.fromTo(
        element[index],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.5 }
    );
};

export const EnterAnimFade = (element) => {
    gsap.fromTo(
        element,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.5 }
    );
};

export const handleMouseMoveEffect = (mainRef) => {
    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 40;
        const y = (e.clientY / innerHeight - 0.5) * 40;

        gsap.to(mainRef.current[1], { x: x / 2, y: y / 2, duration: 0.5, ease: "power2.out" });
        gsap.to(mainRef.current[2], { x: x / 3, y: y / 3, duration: 0.5, ease: "power2.out" });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
};

export const addDistortionEffect = (headingText) => {
    const letters = headingText.innerText.split('').map((char) => {
        return `<span class="letter">${char}</span>`;
    }).join('');
    headingText.innerHTML = letters;

    const animateDistortion = (e) => {
        const { clientX: mouseX, clientY: mouseY } = e;

        gsap.to('.letter', {
            x: () => {
                return (mouseX / window.innerWidth - 0.5) * (Math.random() * 30 - 15);
            },
            y: () => {
                return (mouseY / window.innerHeight - 0.5) * (Math.random() * 30 - 15);
            },
            rotation: () => {
                return (Math.random() - 0.5) * 7;
            },
            duration: 0.2,
            stagger: 0.03,
            ease: 'power2.out',
        });
    };

    const resetDistortion = () => {
        gsap.to('.letter', {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.3,
            stagger: 0.03,
            ease: 'power2.out',
        });
    };

    headingText.addEventListener('mouseenter', animateDistortion);
    headingText.addEventListener('mouseleave', resetDistortion);

    return () => {
        headingText.removeEventListener('mouseenter', animateDistortion);
        headingText.removeEventListener('mouseleave', resetDistortion);
    };
};

export const addScrollTextHoverEffect = () => {
    const buttons = document.querySelectorAll('.Button-Subheading');

    buttons.forEach(button => {
        if (button.querySelector('.scroll-letter')) return;

        const originalText = button.textContent.trim();
        button.innerHTML = '';

        for (let i = 0; i < originalText.length; i++) {
            const char = originalText[i];

            const wrapper = document.createElement('span');
            wrapper.classList.add('scroll-letter');
            wrapper.style.display = 'inline-block';
            wrapper.style.position = 'relative';
            wrapper.style.overflow = 'hidden';
            wrapper.style.height = '1.2em';
            wrapper.style.verticalAlign = 'middle';

            const top = document.createElement('span');
            top.classList.add('top');
            top.textContent = char;
            top.style.display = 'block';
            top.style.position = 'relative';
            top.style.transform = 'translateY(0)';
            top.style.lineHeight = '1.2em';

            const bottom = document.createElement('span');
            bottom.classList.add('bottom');
            bottom.textContent = char;
            bottom.style.display = 'block';
            bottom.style.position = 'absolute';
            bottom.style.top = '100%';
            bottom.style.left = '0';
            bottom.style.transform = 'translateY(0)';
            bottom.style.lineHeight = '1.2em';

            wrapper.appendChild(top);
            wrapper.appendChild(bottom);
            button.appendChild(wrapper);
        }

        button.addEventListener('mouseenter', () => {
            const tops = button.querySelectorAll('.top');
            const bottoms = button.querySelectorAll('.bottom');

            gsap.to(tops, {
                y: '-100%',
                duration: 0.3,
                ease: 'power2.out',
                stagger: 0.02
            });

            gsap.to(bottoms, {
                y: '-100%',
                duration: 0.3,
                ease: 'power2.out',
                stagger: 0.02
            });
        });

        button.addEventListener('mouseleave', () => {
            const tops = button.querySelectorAll('.top');
            const bottoms = button.querySelectorAll('.bottom');

            gsap.to(tops, {
                y: '0%',
                duration: 0.3,
                ease: 'power2.out',
                stagger: 0.02
            });

            gsap.to(bottoms, {
                y: '0%',
                duration: 0.3,
                ease: 'power2.out',
                stagger: 0.02
            });
        });
    });
};
