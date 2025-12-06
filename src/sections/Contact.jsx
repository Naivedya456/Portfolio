import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = ({ viewMode }) => {
    const formRef = useRef();
    const [formType, setFormType] = useState('freelance'); // 'freelance' or 'engineer'
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        // Bundle all details into the 'message' field to ensure they appear in the email
        // even if the template is not configured for individual variables.
        const fullMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Request Type: ${formType}
Date: ${new Date().toLocaleDateString()}

Message:
${formData.message}
        `.trim();

        const templateParams = {
            user_name: formData.name, // Keeping for backward compatibility if template uses it
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: fullMessage, // Sending the bundled message
            date: new Date().toLocaleDateString(),
            title: `Portfolio Request: ${formType.charAt(0).toUpperCase() + formType.slice(1)}`
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setIsSending(false);
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.error(error.text);
                setIsSending(false);
                setStatus('error');
            });
    };

    return (
        <div className="min-h-screen bg-dark py-20 px-4 flex items-center justify-center">
            <div className="max-w-5xl w-full">
                <div className="text-center mb-16">
                    <h2 className={`font-medium tracking-widest uppercase mb-2 ${viewMode === 'visual' ? 'text-primary' : 'text-secondary'}`}>
                        Get in Touch
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Let's work together.</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
                            <h4 className="text-xl font-bold text-white mb-6">Contact Details</h4>

                            <div className="space-y-6">
                                <a href="mailto:naibedyabhuyan@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                    <div className={`p-3 rounded-full bg-gray-800 group-hover:bg-${viewMode === 'visual' ? 'primary' : 'secondary'} transition-colors`}>
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">naibedyabhuyan@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+917735837675" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                    <div className={`p-3 rounded-full bg-gray-800 group-hover:bg-${viewMode === 'visual' ? 'primary' : 'secondary'} transition-colors`}>
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="font-medium">+91 77358 37675</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-gray-400">
                                    <div className="p-3 rounded-full bg-gray-800">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="font-medium">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className={`p-4 bg-gray-900 rounded-xl text-gray-400 hover:text-white hover:bg-${viewMode === 'visual' ? 'primary' : 'secondary'} transition-all duration-300 border border-gray-800`}>
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
                        <div className="mb-8">
                            <label className="text-sm font-medium text-gray-400 block mb-3">I need...</label>
                            <div className="flex p-1 bg-gray-800 rounded-lg">
                                <button
                                    onClick={() => setFormType('freelance')}
                                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${formType === 'freelance'
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    A Freelance Developer
                                </button>
                                <button
                                    onClick={() => setFormType('engineer')}
                                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${formType === 'engineer'
                                        ? 'bg-secondary text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    An Engineer
                                </button>
                            </div>
                        </div>

                        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                            {/* Hidden input for request type */}
                            <input type="hidden" name="request_type" value={formType} />

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name" // Matches EmailJS template
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="from_email" // Matches EmailJS template
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-400">Phone <span className="text-gray-600 text-xs">(Optional)</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone" // Matches template if used individually
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400">
                                    {formType === 'freelance' ? 'Tell me about your App/Web project...' : 'Tell me about your IoT/EV project...'}
                                </label>
                                <textarea
                                    id="message"
                                    name="message" // Matches EmailJS template
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder={formType === 'freelance' ? "I need a website for..." : "I need a system design for..."}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full text-white font-medium py-4 rounded-lg transition-all flex items-center justify-center gap-2 ${formType === 'freelance' ? 'bg-primary hover:bg-blue-600' : 'bg-secondary hover:bg-emerald-600'
                                    } ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSending ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2 text-green-400 text-sm"
                                    >
                                        <CheckCircle size={16} />
                                        <span>Message sent successfully! I'll get back to you soon.</span>
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400 text-sm"
                                    >
                                        <AlertCircle size={16} />
                                        <span>Failed to send message. Please try again or email me directly.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
