import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profileData } from '../constants/data';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href={profileData.social.email} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center justify-center">
                        Built with <Heart size={12} className="mx-1 text-red-500 fill-current" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
