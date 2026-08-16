import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, MapPin, Sparkles, Building2, Eye, Copy, Check } from 'lucide-react';
import { profileData } from '../constants/data';
import ResumeModal from './ResumeModal';

const Hero = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [copiedItem, setCopiedItem] = useState(null);

    const copyToClipboard = (text, itemLabel) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(itemLabel);
        setTimeout(() => setCopiedItem(null), 2500);
    };

    return (
        <>
            <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 py-12 md:py-20 relative">
                
                {/* Toast Notification */}
                <AnimatePresence>
                    {copiedItem && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-gray-900 text-white text-xs font-bold rounded-2xl shadow-xl border border-gray-700 flex items-center space-x-2"
                        >
                            <Check size={16} className="text-green-400" />
                            <span>Copied {copiedItem} to clipboard!</span>
                        </motion.div>
                    )}
                </AnimatePresence>

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
                                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-6 border border-blue-200/60 dark:border-blue-700/50 shadow-xs">
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
                                        className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center justify-center group"
                                    >
                                        View My Work <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    
                                    <button
                                        onClick={() => setIsResumeOpen(true)}
                                        className="w-full sm:w-auto px-7 py-3.5 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-white text-white dark:text-gray-900 rounded-xl font-semibold shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
                                    >
                                        <Eye size={18} />
                                        <span>Preview Resume</span>
                                    </button>

                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-6 py-3.5 border-2 border-blue-600/80 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center"
                                    >
                                        <Download size={18} className="mr-2" />
                                        <span>PDF</span>
                                    </a>
                                </div>

                                {/* Social & Contact Quick Bar */}
                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-gray-600 dark:text-gray-400">
                                    <a 
                                        href={profileData.social.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="GitHub" 
                                        className="p-2.5 bg-white dark:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl shadow-xs transition-colors border border-gray-100 dark:border-gray-700/60"
                                        title="GitHub Profile"
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a 
                                        href={profileData.social.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="LinkedIn" 
                                        className="p-2.5 bg-white dark:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl shadow-xs transition-colors border border-gray-100 dark:border-gray-700/60"
                                        title="LinkedIn Profile"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <button 
                                        onClick={() => copyToClipboard(profileData.social.email, 'Email')}
                                        className="px-3.5 py-2 bg-white dark:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl shadow-xs transition-colors border border-gray-100 dark:border-gray-700/60 flex items-center text-xs font-semibold"
                                        title="Copy Email"
                                    >
                                        <Mail size={15} className="mr-2 text-blue-600" />
                                        <span>{profileData.social.email}</span>
                                        <Copy size={13} className="ml-2 opacity-60 hover:opacity-100" />
                                    </button>
                                    <button 
                                        onClick={() => copyToClipboard(profileData.social.mobile, 'Phone Number')}
                                        className="px-3.5 py-2 bg-white dark:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl shadow-xs transition-colors border border-gray-100 dark:border-gray-700/60 flex items-center text-xs font-semibold"
                                        title="Copy Phone Number"
                                    >
                                        <Phone size={15} className="mr-2 text-blue-600" />
                                        <span>{profileData.social.mobile}</span>
                                        <Copy size={13} className="ml-2 opacity-60 hover:opacity-100" />
                                    </button>
                                    <div className="px-3.5 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-xs border border-gray-100 dark:border-gray-700/60 flex items-center text-xs font-semibold">
                                        <MapPin size={15} className="mr-1.5 text-red-500" /> 
                                        <span>{profileData.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Key Stats Card Grid */}
                        <div className="lg:w-5/12 w-full flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-full max-w-md"
                            >
                                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/80 dark:border-gray-700/80 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                                    <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Engineering Metrics</h3>
                                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-900/40 px-2.5 py-1 rounded-md">Verified</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3.5">
                                        {profileData.stats.map((stat, idx) => (
                                            <div key={idx} className="p-3.5 bg-gray-50 dark:bg-gray-900/60 rounded-2xl border border-gray-100 dark:border-gray-800 transition-all hover:border-blue-200 dark:hover:border-blue-800">
                                                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">
                                                    {stat.value}
                                                </div>
                                                <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 leading-snug">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-4 bg-blue-50/60 dark:bg-blue-950/40 rounded-2xl border border-blue-100 dark:border-blue-900/50 flex items-center space-x-3">
                                        <span className="text-2xl">⚡</span>
                                        <p className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed font-medium">
                                            Specialized in Node.js, Express.js, React.js, MySQL, MongoDB, AWS, and enterprise REST API performance optimization.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Resume Modal */}
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </>
    );
};

export default Hero;
