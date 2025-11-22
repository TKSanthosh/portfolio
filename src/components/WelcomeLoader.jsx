import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplitText from './SplitText';

const WelcomeLoader = ({ onLoadingComplete }) => {
    const [exit, setExit] = useState(false);

    const handleAnimationComplete = () => {
        // Add a small delay before exiting to let the user read the text
        setTimeout(() => {
            setExit(true);
            setTimeout(() => {
                onLoadingComplete();
            }, 500); // Wait for exit animation
        }, 1000);
    };

    return (
        <AnimatePresence>
            {!exit && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900"
                >
                    <SplitText
                        text="Welcome"
                        className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400"
                        delay={100}
                        duration={0.8}
                        ease="back.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 50, rotateX: -90 }}
                        to={{ opacity: 1, y: 0, rotateX: 0 }}
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeLoader;
