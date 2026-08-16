import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, CheckCircle2, Code, ShieldCheck, Sparkles } from 'lucide-react';
import { profileData, experienceData, skillsData } from '../constants/data';

const ResumeModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('summary');

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity"
                />

                {/* Modal Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden my-8 max-h-[90vh] flex flex-col z-10"
                >
                    {/* Header */}
                    <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative">
                        <div>
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 text-blue-100 text-xs font-semibold mb-2 backdrop-blur-md">
                                <Sparkles size={13} />
                                <span>Official Resume Preview</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{profileData.name}</h2>
                            <p className="text-blue-100 text-sm font-medium mt-0.5">{profileData.role} • {profileData.location}</p>
                        </div>

                        <div className="flex items-center space-x-3 w-full sm:w-auto">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-none px-5 py-2.5 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                            >
                                <Download size={16} />
                                <span>Download PDF</span>
                            </a>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={22} />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 px-6 overflow-x-auto scrollbar-none">
                        {[
                            { id: 'summary', label: 'Summary', icon: Sparkles },
                            { id: 'experience', label: 'Work Experience', icon: Briefcase },
                            { id: 'skills', label: 'Technical Skills', icon: Code },
                            { id: 'education', label: 'Education & Impact', icon: GraduationCap },
                        ].map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 px-5 py-3.5 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                                        isActive
                                            ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-900'
                                            : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                                >
                                    <Icon size={16} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Modal Body */}
                    <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6 text-gray-700 dark:text-gray-300">
                        {activeTab === 'summary' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                <div className="p-5 bg-blue-50/70 dark:bg-blue-950/40 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Profile Summary</h3>
                                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                        {profileData.shortIntro}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center space-x-3">
                                            <Mail size={18} className="text-blue-600" />
                                            <span className="font-semibold">{profileData.social.email}</span>
                                        </div>
                                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center space-x-3">
                                            <Phone size={18} className="text-blue-600" />
                                            <span className="font-semibold">{profileData.social.mobile}</span>
                                        </div>
                                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center space-x-3">
                                            <MapPin size={18} className="text-red-500" />
                                            <span className="font-semibold">{profileData.location}, India</span>
                                        </div>
                                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center space-x-3">
                                            <ExternalLink size={18} className="text-blue-600" />
                                            <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
                                                LinkedIn Profile
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">Key Achievements</h3>
                                    <div className="space-y-3">
                                        {profileData.achievements.map((ach, i) => (
                                            <div key={i} className="flex items-start space-x-3 p-3.5 bg-gray-50 dark:bg-gray-800/80 rounded-xl">
                                                <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm font-medium">{ach}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'experience' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                {experienceData.map((exp) => (
                                    <div key={exp.id} className="p-6 bg-gray-50 dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-4">
                                        <div className="flex flex-wrap justify-between items-start gap-2">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{exp.company} • {exp.location}</p>
                                            </div>
                                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full">
                                                {exp.period}
                                            </span>
                                        </div>

                                        {exp.project && (
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                Project: {exp.project}
                                            </p>
                                        )}

                                        <ul className="space-y-2 text-xs sm:text-sm">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex items-start space-x-2">
                                                    <span className="text-blue-600 font-bold">•</span>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-1.5 pt-2">
                                            {exp.technologies.map((t) => (
                                                <span key={t} className="px-2.5 py-1 bg-white dark:bg-gray-900 text-xs font-semibold rounded-md border border-gray-200 dark:border-gray-700">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'skills' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                {Object.entries(skillsData).map(([key, skills]) => {
                                    const titleMap = {
                                        backend: 'Backend Technologies',
                                        frontend: 'Frontend Technologies',
                                        databases: 'Databases',
                                        tools: 'Tools & Platforms',
                                        systemDesign: 'Architecture & Security'
                                    };
                                    return (
                                        <div key={key} className="space-y-3">
                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                                {titleMap[key] || key}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.map((skill) => (
                                                    <span key={skill} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold rounded-xl border border-blue-100 dark:border-blue-800">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        )}

                        {activeTab === 'education' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                <div className="p-6 bg-gray-50 dark:bg-gray-800/80 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-3">
                                    <div className="flex items-center space-x-2 text-blue-600">
                                        <GraduationCap size={22} />
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Degree & Alma Mater</h3>
                                    </div>
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white">{profileData.education.degree}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{profileData.education.college}</p>
                                    <div className="flex items-center space-x-4 pt-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                                        <span>Graduation: {profileData.education.year}</span>
                                        <span>•</span>
                                        <span>CGPA: {profileData.education.cgpa}</span>
                                    </div>
                                </div>

                                <div className="p-6 bg-blue-50/60 dark:bg-blue-950/40 rounded-2xl border border-blue-100 dark:border-blue-900/50 space-y-4">
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center">
                                        <Award className="mr-2 text-blue-600" size={20} /> Impact Metrics Summary
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                                        {profileData.stats.map((st, idx) => (
                                            <div key={idx} className="p-3 bg-white dark:bg-gray-900 rounded-xl shadow-xs">
                                                <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400">{st.value}</div>
                                                <div className="text-xs text-gray-500 font-medium">{st.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Modal Footer */}
                    <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center text-xs text-gray-500">
                        <span>Santhosh T K • Software Engineer Portfolio</span>
                        <button
                            onClick={onClose}
                            className="px-5 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-xl transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ResumeModal;
