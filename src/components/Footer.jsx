import React from 'react';

const Footer = () => {
    return (
        <footer className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center text-white">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source
                        src="https://res.cloudinary.com/ddgbeprge/video/upload/v1767087516/Thunderstorm_Animation_Video_Generation_rbecf8.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay to darken video for text readability */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center h-full min-h-screen py-8">
                {/* Centered Content (Title & Contact) */}
                <div className="flex-grow flex flex-col justify-center items-center w-full">
                    {/* Main Title */}
                    <h1 className="text-5xl md:text-8xl font-black font-orbitron tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-2 text-center">
                        PRAJWALAN
                        <span className="block text-2xl md:text-3xl mt-2 tracking-[0.5em] text-violet-300 font-bold">2K26</span>
                    </h1>

                    {/* Contact Us Section */}
                    <div className="mt-12 text-center">
                        <h3 className="text-xl md:text-2xl font-orbitron tracking-[0.3em] text-gray-300 mb-6 uppercase border-b border-gray-500/30 pb-2 inline-block">
                            Contact Us
                        </h3>

                        <div className="flex gap-8 justify-center items-center">
                            {[
                                { icon: "bi-instagram", href: "#" },
                                { icon: "bi-facebook", href: "#" },
                                { icon: "bi-envelope", href: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-violet-500/50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <i className={`bi ${social.icon} text-2xl md:text-3xl text-gray-300 group-hover:text-white transition-colors relative z-10`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="w-full text-center border-t border-white/10 pt-6 mt-4">
                    <p className="text-[10px] md:text-xs text-gray-400 font-rajdhani tracking-widest opacity-60 uppercase">
                        Copyright &copy; {new Date().getFullYear()} | All rights reserved
                    </p>
                    <p className="text-[10px] md:text-xs text-violet-400/60 font-rajdhani tracking-widest mt-1 uppercase">
                        Made in collaboration with ML Club NIT Silchar
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
