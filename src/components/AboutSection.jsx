import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code, GraduationCap } from 'lucide-react';
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
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                            I'm {profileData.name}, a {profileData.role}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed whitespace-pre-line">
                            {profileData.longIntro}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 mb-8">
                            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                <Briefcase className="mx-auto text-blue-600 mb-2" size={24} />
                                <h4 className="font-bold text-gray-900 dark:text-white">{profileData.experience}</h4>
                                <p className="text-sm text-gray-500">Experience</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                <Code className="mx-auto text-blue-600 mb-2" size={24} />
                                <h4 className="font-bold text-gray-900 dark:text-white">MERN</h4>
                                <p className="text-sm text-gray-500">Stack</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                                <Award className="mx-auto text-blue-600 mb-2" size={24} />
                                <h4 className="font-bold text-gray-900 dark:text-white">{profileData.certifications.length}+</h4>
                                <p className="text-sm text-gray-500">Certifications</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                    <GraduationCap className="mr-2 text-blue-600" size={24} /> Education
                                </h4>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <h5 className="font-bold text-gray-900 dark:text-white">{profileData.education.degree}</h5>
                                    <p className="text-gray-600 dark:text-gray-400">{profileData.education.college}</p>
                                    <p className="text-sm text-gray-500 mt-1">Year: {profileData.education.year} | CGPA: {profileData.education.cgpa}</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                    <Award className="mr-2 text-blue-600" size={24} /> Certifications
                                </h4>
                                <div className="space-y-3">
                                    {profileData.certifications.map((cert, index) => (
                                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                                            <div>
                                                <h5 className="font-bold text-gray-900 dark:text-white">{cert.title}</h5>
                                                <p className="text-sm text-gray-500">{cert.issuer}</p>
                                            </div>
                                            <span className="text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">{cert.year}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Achievements Section */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Achievements</h3>
                            <ul className="space-y-4">
                                {profileData.achievements.map((achievement, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                        <p className="ml-4 text-gray-700 dark:text-gray-300">{achievement}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
