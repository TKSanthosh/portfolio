import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Wrench, Cpu } from 'lucide-react';
import { skillsData } from '../constants/data';

const SkillsSection = () => {
    const categories = [
        { title: 'Backend', skills: skillsData.backend, icon: Server },
        { title: 'Frontend', skills: skillsData.frontend, icon: Layout },
        { title: 'Databases', skills: skillsData.databases, icon: Database },
        { title: 'Tools & Platforms', skills: skillsData.tools, icon: Wrench },
        { title: 'System Architecture', skills: skillsData.systemDesign, icon: Cpu },
    ];

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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Backend frameworks, frontend libraries, database engines, and software design principles I leverage daily.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-900 p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                            >
                                <div className="flex items-center space-x-3 mb-5 border-b border-gray-100 dark:border-gray-800 pb-3">
                                    <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                                        <IconComponent size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 bg-blue-50/80 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
