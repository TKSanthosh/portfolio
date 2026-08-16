import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { experienceData } from '../constants/data';

const ExperienceSection = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
                        Proven track record at IQVIA and Sify Technologies building enterprise web platforms, high-concurrency exam engines, and robust Node.js microservices.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Timeline Bar */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-gray-800"></div>

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-center w-full ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Timeline Dot Icon */}
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 text-white rounded-full border-4 border-white dark:border-gray-950 z-10 flex items-center justify-center shadow-md">
                                <Briefcase size={16} />
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                                <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 space-y-4">
                                    
                                    {/* Header: Role & Company Badge */}
                                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
                                        <div>
                                            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">{exp.role}</h3>
                                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                                                {exp.company}
                                            </span>
                                        </div>
                                        <span className="text-xs font-bold px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800">
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Meta Row: Location & Project */}
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center">
                                            <MapPin size={13} className="mr-1 text-red-500" />
                                            {exp.location}
                                        </div>
                                        {exp.project && (
                                            <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                                                <Layers size={13} className="mr-1" />
                                                {exp.project}
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl">
                                        "{exp.description}"
                                    </p>

                                    {/* Responsibilities Bullet List */}
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle2 size={15} className="text-blue-500 dark:text-blue-400 mr-2.5 flex-shrink-0 mt-0.5" />
                                                <span className="leading-relaxed">{resp}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-gray-800">
                                        {exp.technologies.map((tech) => (
                                            <span key={tech} className="text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
