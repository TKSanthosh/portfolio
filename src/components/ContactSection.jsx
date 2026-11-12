import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Copy, Check, AlertCircle, RotateCcw, ExternalLink, Loader2 } from 'lucide-react';
import { profileData } from '../constants/data';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        'bot-field': ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);
    const [submitError, setSubmitError] = useState('');
    const [copiedItem, setCopiedItem] = useState(null);

    const handleChange = (e) => {
        if (submitError) setSubmitError('');
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const copyToClipboard = (text, itemLabel) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(itemLabel);
        setTimeout(() => setCopiedItem(null), 2500);
    };

    const buildMailtoHref = () => {
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        return `mailto:${profileData.social.email}?subject=${subject}&body=${body}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        const trimmedData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
        };

        if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
            setSubmitError('Please fill in your name, email address, and message before sending.');
            setIsSubmitting(false);
            return;
        }

        try {
            const payload = new URLSearchParams({
                'form-name': 'contact',
                subject: `New Portfolio Message from ${trimmedData.name}`,
                'bot-field': formData['bot-field'],
                name: trimmedData.name,
                email: trimmedData.email,
                message: trimmedData.message,
            });

            const response = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: payload.toString(),
            });

            if (!response.ok) {
                throw new Error(`Submission failed with status ${response.status}`);
            }

            setSubmittedData({
                ...trimmedData,
                sentAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
            setFormData({ name: '', email: '', message: '', 'bot-field': '' });
        } catch (err) {
            setSubmitError(
                'Could not deliver the form right now. Please try again or send directly using your email app.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setSubmittedData(null);
        setSubmitError('');
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

                        {submittedData ? (
                            <div className="p-6 sm:p-7 bg-blue-50/80 dark:bg-blue-950/50 rounded-2xl border border-blue-200 dark:border-blue-800 space-y-5">
                                <div className="flex items-start space-x-3.5">
                                    <div className="p-2.5 bg-blue-600 text-white rounded-xl flex-shrink-0">
                                        <CheckCircle size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                            Thanks, {submittedData.name}! Your message has been delivered.
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                                            Received at {submittedData.sentAt}. Santhosh will reply to <span className="font-semibold text-gray-900 dark:text-white">{submittedData.email}</span> shortly.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-blue-100 dark:border-gray-800 space-y-1.5">
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Message Summary</span>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line break-words">
                                        {submittedData.message}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="px-5 py-2.5 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-white text-white dark:text-gray-900 text-xs sm:text-sm font-semibold rounded-xl transition-colors inline-flex items-center space-x-2 cursor-pointer"
                                >
                                    <RotateCcw size={15} />
                                    <span>Send Another Message</span>
                                </button>
                            </div>
                        ) : (
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <input
                                    type="hidden"
                                    name="subject"
                                    value={`New Portfolio Message from ${formData.name || 'Visitor'}`}
                                />
                                <p className="hidden" aria-hidden="true">
                                    <label>
                                        Don’t fill this out if you’re human:
                                        <input
                                            type="text"
                                            name="bot-field"
                                            value={formData['bot-field']}
                                            onChange={handleChange}
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </label>
                                </p>

                                {submitError && (
                                    <div className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl space-y-2.5">
                                        <div className="flex items-start space-x-2.5 text-red-700 dark:text-red-300 text-xs sm:text-sm font-medium">
                                            <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                                            <span>{submitError}</span>
                                        </div>
                                        <a
                                            href={buildMailtoHref()}
                                            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            <ExternalLink size={14} />
                                            <span>Open in your Email App instead</span>
                                        </a>
                                    </div>
                                )}

                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        disabled={isSubmitting}
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white text-sm disabled:opacity-60"
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
                                        disabled={isSubmitting}
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white text-sm disabled:opacity-60"
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
                                        disabled={isSubmitting}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white text-sm disabled:opacity-60"
                                        placeholder="Hi Santhosh, I'd like to discuss a project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            <span>Sending Message...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={18} />
                                        </>
                                    )}
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
