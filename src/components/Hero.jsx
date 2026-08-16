import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, MapPin, Sparkles, Building2 } from 'lucide-react';
import { profileData } from '../constants/data';

const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* Left Column: Text Content */}
                    <div className="lg:w-7/12 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Current Position Pill */}
                            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-6 border border-blue-200/60 dark:border-blue-700/50 shadow-sm">
                                <Sparkles size={14} className="text-blue-600 dark:text-blue-400 animate-pulse" />
                                <span>{profileData.role}</span>
                                <span className="text-gray-400">•</span>
                                <span className="flex items-center"><Building2 size={13} className="mr-1 inline" /> {profileData.currentCompany}</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                Hi, I'm <span className="text-blue-600 dark:text-blue-400">{profileData.name}</span>
                            </h1>

                            <h2 className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
                                Enterprise Web Application & API Architect
                            </h2>

                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                {profileData.shortIntro}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                                <a
                                    href="#projects"
                                    className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center justify-center group"
                                >
                                    View My Work <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-8 py-3.5 border-2 border-blue-600/80 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center"
                                >
                                    Download Resume <Download size={18} className="ml-2" />
                                </a>
                            </div>

                            {/* Social / Contact Quick Bar */}
                            <div className="flex items-center justify-center lg:justify-start space-x-6 text-gray-600 dark:text-gray-400">
                                <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                    <Github size={20} />
                                </a>
                                <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                    <Linkedin size={20} />
                                </a>
                                <a href={profileData.social.email} aria-label="Email" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                    <Mail size={20} />
                                </a>
                                <a href={`tel:${profileData.social.mobile}`} aria-label="Phone" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center text-xs font-medium px-3">
                                    <Phone size={16} className="mr-1.5" /> {profileData.social.mobile}
                                </a>
                                <div className="flex items-center text-xs font-medium px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                    <MapPin size={16} className="mr-1 text-red-500" /> {profileData.location}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Key Stats Card Grid & Visual Element */}
                    <div className="lg:w-5/12 w-full flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-full max-w-md"
                        >
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/80 dark:border-gray-700/80 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Engineering Impact</h3>
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-900/40 px-2.5 py-1 rounded-md">Highlights</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {profileData.stats.map((stat, idx) => (
                                        <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-900/60 rounded-2xl border border-gray-100 dark:border-gray-800 transition-all hover:border-blue-200 dark:hover:border-blue-800">
                                            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 leading-snug">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 bg-blue-50/60 dark:bg-blue-950/40 rounded-2xl border border-blue-100 dark:border-blue-900/50 flex items-center space-x-3">
                                    <span className="text-2xl">⚡</span>
                                    <p className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed font-medium">
                                        Specializing in Node.js, Express.js, React.js, MySQL, MongoDB, and REST API performance tuning.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
