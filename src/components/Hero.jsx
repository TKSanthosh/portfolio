import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

import { profileData } from '../constants/data';

const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            Hello, I'm
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            {profileData.name}
                        </h1>
                        <h3 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
                            {profileData.role}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
                            {profileData.shortIntro}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors flex items-center"
                            >
                                View My Work <ArrowRight size={20} className="ml-2" />
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full font-medium transition-colors flex items-center"
                            >
                                Download Resume <Download size={20} className="ml-2" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-1">
                            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 overflow-hidden flex items-center justify-center">
                                {/* Placeholder for profile image */}
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-8 -left-4 w-20 h-20 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 right-10 w-20 h-20 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
