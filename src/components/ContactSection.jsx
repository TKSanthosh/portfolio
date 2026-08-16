import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, CheckCircle, Copy, Check } from 'lucide-react';
import { profileData } from '../constants/data';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [copiedItem, setCopiedItem] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const copyToClipboard = (text, itemLabel) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(itemLabel);
        setTimeout(() => setCopiedItem(null), 2500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 4000);
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative">
            
            {/* Toast Notification */}
            <AnimatePresence>
                {copiedItem && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-gray-900 text-white text-xs font-bold rounded-2xl shadow-xl border border-gray-700 flex items-center space-x-2"
                    >
                        <Check size={16} className="text-green-400" />
                        <span>Copied {copiedItem} to clipboard!</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
                        Looking to connect, discuss enterprise software architecture, or explore engineering opportunities? Reach out anytime!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Contact Info (5 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-5 space-y-4"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Contact Details
                        </h3>

                        {/* Email */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/80 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div className="flex items-center">
                                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mr-4">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</h4>
                                    <a 
                                        href={`mailto:${profileData.social.email}`}
                                        className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {profileData.social.email}
                                    </a>
                                </div>
                            </div>
                            <button
                                onClick={() => copyToClipboard(profileData.social.email, 'Email')}
                                className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                title="Copy Email"
                            >
                                <Copy size={16} />
                            </button>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/80 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div className="flex items-center">
                                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mr-4">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone</h4>
                                    <a 
                                        href={`tel:${profileData.social.mobile}`} 
                                        className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {profileData.social.mobile}
                                    </a>
                                </div>
                            </div>
                            <button
                                onClick={() => copyToClipboard(profileData.social.mobile, 'Phone Number')}
                                className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                title="Copy Phone Number"
                            >
                                <Copy size={16} />
                            </button>
                        </div>

                        {/* Location */}
                        <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/80 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mr-4">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Location</h4>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {profileData.location}, India
                                </p>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/80 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div className="flex items-center">
                                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mr-4">
                                    <Linkedin size={22} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">LinkedIn</h4>
                                    <a 
                                        href={profileData.social.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        linkedin.com/in/santhosh-tk
                                    </a>
                                </div>
                            </div>
                            <button
                                onClick={() => copyToClipboard(profileData.social.linkedin, 'LinkedIn Link')}
                                className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                title="Copy LinkedIn Link"
                            >
                                <Copy size={16} />
                            </button>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/80 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div className="flex items-center">
                                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mr-4">
                                    <Github size={22} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">GitHub</h4>
                                    <a 
                                        href={profileData.social.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        github.com/TKSanthosh
                                    </a>
                                </div>
                            </div>
                            <button
                                onClick={() => copyToClipboard(profileData.social.github, 'GitHub Link')}
                                className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                title="Copy GitHub Link"
                            >
                                <Copy size={16} />
                            </button>
                        </div>

                    </motion.div>

                    {/* Contact Form (7 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-7 bg-gray-50 dark:bg-gray-800/80 p-8 sm:p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700/80"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

                        {submitted ? (
                            <div className="p-6 bg-blue-50 dark:bg-blue-950/60 rounded-2xl border border-blue-200 dark:border-blue-800 text-center space-y-3">
                                <CheckCircle className="mx-auto text-blue-600 dark:text-blue-400" size={40} />
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Message Sent Successfully!</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Thank you for reaching out. I will get back to you as soon as possible.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white text-sm"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white text-sm"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white text-sm"
                                        placeholder="Hi Santhosh, I'd like to discuss a project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                                >
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
