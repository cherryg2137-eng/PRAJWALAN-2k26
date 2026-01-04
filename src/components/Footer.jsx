import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full bg-[#050505] pt-12 pb-6 px-4 md:px-8 font-sans relative overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Main Rounded Card Container */}
            <div className="relative z-10 bg-[#0a0a0a] w-full max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 border border-white/5 shadow-2xl overflow-hidden">

                {/* Inner Subtle Glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-50"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"></div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

                    {/* Brand Column (Span 4) */}
                    <div className="md:col-span-5 flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                                Prajwalan<span className="text-violet-500">.</span>
                            </h2>
                            <div className="space-y-4 text-gray-400 text-sm md:text-base font-light">
                                <a href="mailto:srkraceofficial@gmail.com" className="block hover:text-white transition-colors cursor-pointer">
                                    srkraceofficial@gmail.com
                                </a>
                                <p className="hover:text-white transition-colors cursor-pointer">+91 96661 55020</p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=SRKR+Engineering+College+Bhimavaram+AP"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block max-w-xs leading-relaxed mt-4 hover:text-white transition-colors"
                                >
                                    SRKR Engineering College,<br />
                                    Bhimavaram, AP
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links (Span 2) */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-medium text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-gray-500 text-sm font-medium">
                            {['Home', 'About', 'Events', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-violet-400 transition-colors duration-300 block transform hover:translate-x-1">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal (Span 2) */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-medium text-lg mb-6">Legal</h3>
                        <ul className="space-y-3 text-gray-500 text-sm font-medium">
                            {['Privacy Policy', 'Terms & Conditions', 'Code of Conduct'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-violet-400 transition-colors duration-300 block transform hover:translate-x-1">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Join Us (Span 3) */}
                    <div className="md:col-span-3 flex flex-col">
                        <h3 className="text-white font-medium text-lg mb-4">Join Us!</h3>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            Be a part of the biggest tech fest. We are excited to see you there!
                        </p>

                        <div className="group relative inline-flex items-center justify-between bg-white text-black pl-5 pr-1 py-1 rounded-full w-full max-w-[240px] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-300 cursor-pointer overflow-hidden">
                            <span className="font-semibold text-sm">Register Now</span>
                            <div className="bg-black text-white p-2.5 rounded-full rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
                                <i className="bi bi-arrow-right text-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent my-10"></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs md:text-sm">
                    <p>&copy; 2026 Prajwalan. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {['bi-instagram', 'bi-linkedin', 'bi-youtube'].map((icon, i) => (
                            <a key={i} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-violet-600 hover:text-white transition-all duration-300 text-gray-400">
                                <i className={`bi ${icon}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>



        </footer>
    );
};

export default Footer;
