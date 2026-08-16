import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../constants/data';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center space-x-5 text-gray-500 dark:text-gray-400">
                        <a 
                            href={profileData.social.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-gray-900 dark:hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a 
                            href={profileData.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-gray-900 dark:hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a 
                            href={`mailto:${profileData.social.email}`} 
                            className="hover:text-gray-900 dark:hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
