import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, MapPin, Building2, Eye, Copy, Check } from 'lucide-react';
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
            <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50/60 dark:bg-gray-950 transition-colors duration-300 py-12 md:py-20 relative">
                
                {/* Toast Notification */}
                <AnimatePresence>
                    {copiedItem && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-gray-900 text-white text-xs font-bold rounded-2xl shadow-xl border border-gray-700 flex items-center space-x-2"
                        >
                            <Check size={15} className="text-emerald-400" />
                            <span>Copied {copiedItem} to clipboard</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        
                        {/* Left Column: Core Intro */}
                        <div className="lg:w-7/12 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Role & Company Badge */}
                                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-6 border border-blue-100 dark:border-blue-900/50">
                                    <Building2 size={14} className="text-blue-600 dark:text-blue-400" />
                                    <span>{profileData.role}</span>
                                    <span className="text-gray-400">•</span>
                                    <span>{profileData.currentCompany}</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                    Hi, I'm <span className="text-blue-600 dark:text-blue-400">{profileData.name}</span>
                                </h1>

                                <h2 className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
                                    Full Stack & Backend Software Engineer
                                </h2>

                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                    {profileData.shortIntro}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
                                    <a
                                        href="#projects"
                                        className="w-full sm:w-auto px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md transition-all duration-150 flex items-center justify-center group text-sm"
                                    >
                                        View Work <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    
                                    <button
                                        onClick={() => setIsResumeOpen(true)}
                                        className="w-full sm:w-auto px-7 py-3 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-white text-white dark:text-gray-900 rounded-xl font-semibold shadow-xs transition-all duration-150 flex items-center justify-center space-x-2 text-sm cursor-pointer"
                                    >
                                        <Eye size={16} />
                                        <span>Preview Resume</span>
                                    </button>

                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl font-semibold transition-all duration-150 flex items-center justify-center text-sm"
                                    >
                                        <Download size={16} className="mr-2" />
                                        <span>PDF</span>
                                    </a>
                                </div>

                                {/* Social Links & Contact */}
                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-gray-600 dark:text-gray-400">
                                    <a 
                                        href={profileData.social.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="GitHub" 
                                        className="p-2.5 bg-white dark:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors shadow-2xs"
                                        title="GitHub"
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a 
                                        href={profileData.social.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="LinkedIn" 
                                        className="p-2.5 bg-white dark:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors shadow-2xs"
                                        title="LinkedIn"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <button 
                                        onClick={() => copyToClipboard(profileData.social.email, 'Email')}
                                        className="px-3.5 py-2 bg-white dark:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors shadow-2xs flex items-center text-xs font-semibold cursor-pointer"
                                        title="Copy Email"
                                    >
                                        <Mail size={14} className="mr-2 text-blue-600" />
                                        <span>{profileData.social.email}</span>
                                        <Copy size={12} className="ml-2 opacity-50 hover:opacity-100" />
                                    </button>
                                    <button 
                                        onClick={() => copyToClipboard(profileData.social.mobile, 'Phone Number')}
                                        className="px-3.5 py-2 bg-white dark:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors shadow-2xs flex items-center text-xs font-semibold cursor-pointer"
                                        title="Copy Phone Number"
                                    >
                                        <Phone size={14} className="mr-2 text-blue-600" />
                                        <span>{profileData.social.mobile}</span>
                                        <Copy size={12} className="ml-2 opacity-50 hover:opacity-100" />
                                    </button>
                                    <div className="px-3.5 py-2 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-2xs flex items-center text-xs font-semibold">
                                        <MapPin size={14} className="mr-1.5 text-red-500" /> 
                                        <span>{profileData.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Experience Metrics */}
                        <div className="lg:w-5/12 w-full flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.15 }}
                                className="w-full max-w-md"
                            >
                                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 sm:p-7 rounded-3xl shadow-sm space-y-5">
                                    <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3.5">
                                        <h3 className="text-base font-bold text-gray-900 dark:text-white">Highlights & Metrics</h3>
                                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Overview</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        {profileData.stats.map((stat, idx) => (
                                            <div key={idx} className="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-800">
                                                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                                                    {stat.value}
                                                </div>
                                                <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                                        Focusing on Node.js, Express.js, React.js, MySQL, MongoDB, AWS, and REST API design.
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
