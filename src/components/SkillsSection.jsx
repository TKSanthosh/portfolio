import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Wrench, Cpu, CheckCircle2, Search } from 'lucide-react';
import { skillsData } from '../constants/data';

const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', title: 'All Skills', icon: Cpu },
        { id: 'backend', title: 'Backend', skills: skillsData.backend, icon: Server },
        { id: 'frontend', title: 'Frontend', skills: skillsData.frontend, icon: Layout },
        { id: 'databases', title: 'Databases', skills: skillsData.databases, icon: Database },
        { id: 'tools', title: 'Tools & Platforms', skills: skillsData.tools, icon: Wrench },
        { id: 'systemDesign', title: 'System Architecture', skills: skillsData.systemDesign, icon: Cpu },
    ];

    const filterCategories = selectedCategory === 'all' 
        ? categories.filter(c => c.id !== 'all')
        : categories.filter(c => c.id === selectedCategory);

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Expertise</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
                        Comprehensive skill matrix across modern web backend frameworks, relational/NoSQL databases, React frontend development, and AWS cloud architecture.
                    </p>
                </motion.div>

                {/* Category Filter & Search Toolbar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
                        {categories.map((cat) => {
                            const IconComponent = cat.icon;
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                                        isActive
                                            ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                                            : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 hover:border-blue-400'
                                    }`}
                                >
                                    <IconComponent size={14} />
                                    <span>{cat.title}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="relative w-full sm:w-64">
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Filter skills..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white"
                        />
                    </div>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        const filteredSkills = category.skills.filter(s => 
                            s.toLowerCase().includes(searchTerm.toLowerCase())
                        );

                        if (searchTerm && filteredSkills.length === 0) return null;

                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800/80 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center space-x-3 mb-5 border-b border-gray-100 dark:border-gray-800 pb-3">
                                        <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                                            <IconComponent size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {filteredSkills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 bg-blue-50/80 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-default border border-blue-100/50 dark:border-blue-800/40"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-5 pt-3 border-t border-gray-50 dark:border-gray-800/50 flex items-center justify-between text-xs text-gray-400 font-medium">
                                    <span>{filteredSkills.length} Core Modules</span>
                                    <span className="text-blue-600 dark:text-blue-400 font-bold">Production Ready</span>
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
