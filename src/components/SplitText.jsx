import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SplitText = ({
    text,
    className = '',
    delay = 0,
    duration = 0.5,
    ease = 'power2.out',
    splitType = 'chars', // 'chars' or 'words'
    from = { opacity: 0, y: 20 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'left',
    onLetterAnimationComplete,
}) => {
    const containerRef = React.useRef(null);
    const elementsRef = React.useRef([]);

    useGSAP(() => {
        const elements = elementsRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            elements,
                            from,
                            {
                                ...to,
                                duration: duration,
                                ease: ease,
                                stagger: 0.05,
                                delay: delay / 1000, // Convert ms to seconds
                                onComplete: onLetterAnimationComplete,
                            }
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [text, delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete]);

    const words = text.split(' ');

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ textAlign, display: 'inline-block' }}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                    {splitType === 'chars'
                        ? word.split('').map((char, charIndex) => (
                            <span
                                key={charIndex}
                                ref={(el) => {
                                    if (el) elementsRef.current.push(el);
                                }}
                                style={{ display: 'inline-block', opacity: 0 }} // Initial state
                            >
                                {char}
                            </span>
                        ))
                        : (
                            <span
                                ref={(el) => {
                                    if (el) elementsRef.current.push(el);
                                }}
                                style={{ display: 'inline-block', opacity: 0 }}
                            >
                                {word}
                            </span>
                        )}
                    {wordIndex < words.length - 1 && (
                        <span style={{ display: 'inline-block' }}>&nbsp;</span>
                    )}
                </span>
            ))}
        </div>
    );
};

export default SplitText;
