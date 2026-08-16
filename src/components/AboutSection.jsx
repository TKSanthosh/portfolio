import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code, GraduationCap, CheckCircle2, Zap, Target, Users, ShieldCheck } from 'lucide-react';
import { profileData } from '../constants/data';

const AboutSection = () => {
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Backend & Full-Stack Engineer focused on performance, scalability, and robust architecture.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Bio & Education (Left Side: 7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {profileData.role} @ <span className="text-blue-600 dark:text-blue-400">{profileData.currentCompany}</span>
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line text-base">
                                {profileData.longIntro}
                            </p>
                        </div>

                        {/* Overview Stats Badges */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/80 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                <Briefcase className="mx-auto text-blue-600 mb-2" size={24} />
                                <h4 className="font-extrabold text-gray-900 dark:text-white text-lg">{profileData.experience}</h4>
                                <p className="text-xs text-gray-500 font-medium">Experience</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/80 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                <Code className="mx-auto text-blue-600 mb-2" size={24} />
                                <h4 className="font-extrabold text-gray-900 dark:text-white text-lg">MERN + AWS</h4>
                                <p className="text-xs text-gray-500 font-medium">Core Stack</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/80 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                <Award className="mx-auto text-blue-600 mb-2" size={24} />
                                <h4 className="font-extrabold text-gray-900 dark:text-white text-lg">{profileData.certifications.length}+</h4>
                                <p className="text-xs text-gray-500 font-medium">Certifications</p>
                            </div>
                        </div>

                        {/* Education & Certifications */}
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                                    <GraduationCap className="mr-2.5 text-blue-600" size={22} /> Education
                                </h4>
                                <div className="bg-gray-50 dark:bg-gray-800/80 p-5 rounded-xl border border-gray-100 dark:border-gray-800">
                                    <h5 className="font-bold text-gray-900 dark:text-white text-base">{profileData.education.degree}</h5>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{profileData.education.college}</p>
                                    <div className="flex items-center space-x-4 mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                        <span>Graduation Year: {profileData.education.year}</span>
                                        <span>•</span>
                                        <span>CGPA: {profileData.education.cgpa}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                                    <Award className="mr-2.5 text-blue-600" size={22} /> Certifications
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {profileData.certifications.map((cert, index) => (
                                        <div key={index} className="bg-gray-50 dark:bg-gray-800/80 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex justify-between items-center">
                                            <div>
                                                <h5 className="font-bold text-gray-900 dark:text-white text-sm">{cert.title}</h5>
                                                <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
                                            </div>
                                            <span className="text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/40 px-2 py-1 rounded-md">{cert.year}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Key Achievements (Right Side: 5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-5"
                    >
                        <div className="bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-blue-50/20 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-800/50 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-lg space-y-6">
                            <div className="flex items-center space-x-3 border-b border-blue-100 dark:border-gray-700 pb-4">
                                <Zap className="text-blue-600 dark:text-blue-400" size={24} />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Key Achievements</h3>
                            </div>

                            <div className="space-y-4">
                                {profileData.achievements.map((achievement, index) => {
                                    const parts = achievement.split(':');
                                    const title = parts[0];
                                    const desc = parts.slice(1).join(':');

                                    return (
                                        <div key={index} className="flex items-start space-x-3 bg-white/70 dark:bg-gray-900/60 p-4 rounded-xl border border-blue-50 dark:border-gray-700/60 shadow-sm">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mt-0.5 text-xs font-bold">
                                                ✓
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white text-sm">{title}</h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">{desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
