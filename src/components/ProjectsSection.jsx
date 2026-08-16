import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, Layers, MapPin, Calendar, TrendingUp, ShieldCheck } from 'lucide-react';
import { projectsData } from '../constants/data';

const ProjectsSection = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Enterprise Applications</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Mission-critical event management platforms, high-concurrency exam delivery engines, and item configuration systems engineered for IQVIA and Sify Technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-gray-50 dark:bg-gray-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/80 dark:border-gray-700/80 flex flex-col justify-between"
                        >
                            <div className="p-6 sm:p-7 flex-grow flex flex-col">
                                
                                {/* Header: Company & Enterprise Tag */}
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className="inline-flex items-center text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full border border-blue-200/50 dark:border-blue-800/50">
                                        <Building2 size={12} className="mr-1.5" />
                                        {project.company}
                                    </span>

                                    <span className="inline-flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-200/60 dark:bg-gray-700/60 px-2.5 py-1 rounded-lg">
                                        <ShieldCheck size={13} className="mr-1 text-gray-600 dark:text-gray-300" />
                                        Enterprise System
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                                    {project.title}
                                </h3>

                                <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
                                    <span className="flex items-center"><MapPin size={12} className="mr-1 text-red-500" />{project.location}</span>
                                    <span>•</span>
                                    <span className="flex items-center"><Calendar size={12} className="mr-1 text-blue-500" />{project.period}</span>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                {/* Impact Metrics Pills */}
                                {project.metrics && (
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.metrics.map((metric, i) => (
                                            <span key={i} className="inline-flex items-center px-2.5 py-1 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 text-xs font-bold rounded-lg border border-green-200/60 dark:border-green-800/40">
                                                <TrendingUp size={12} className="mr-1 text-green-600" />
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Key Highlights */}
                                <div className="mb-6 flex-grow space-y-2">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center">
                                        <Layers size={14} className="mr-1.5 text-blue-600" /> Key Architectural Contributions:
                                    </h4>
                                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle2 size={14} className="text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200/80 dark:border-gray-700/80 mt-auto">
                                    {project.tech.map((tag) => (
                                        <span key={tag} className="px-2.5 py-1 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-xs rounded-md font-semibold border border-gray-200 dark:border-gray-800 shadow-2xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
