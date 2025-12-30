import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import heroBg from '../assets/hero_bg_final.png';

const Hero = () => {
    // Parallax Motion Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics for realistic feel
    const springConfig = { damping: 25, stiffness: 120 }; // Snappier spring
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    // INVERTED Translation: Mouse Right -> Image Left (Natural Depth)
    const translateX = useTransform(xSpring, [-0.5, 0.5], ["40px", "-40px"]);
    const translateY = useTransform(ySpring, [-0.5, 0.5], ["40px", "-40px"]);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();

        const xPos = (clientX / width) - 0.5;
        const yPos = (clientY / height) - 0.5;

        x.set(xPos);
        y.set(yPos);
    };

    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center relative z-10 overflow-hidden bg-bg-dark"
            onMouseMove={handleMouseMove}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    src={heroBg}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                    style={{
                        x: translateX,
                        y: translateY,
                        scale: 1.1 // Reduced scale
                    }}
                />
                <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-bg-dark/90"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20 pt-20">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                    >
                        {/* Top Tagline */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="flex items-center justify-center gap-4 mb-6"
                        >
                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-violet-500"></div>
                            <span className="text-violet-200 font-rajdhani tracking-[0.3em] uppercase text-sm md:text-base drop-shadow-md">
                                SRKR Engineering College
                            </span>
                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-violet-500"></div>
                        </motion.div>

                        {/* Main Title - Neural Style */}
                        <div className="relative mb-8">
                            <motion.h1
                                className="text-[10vw] leading-none font-black font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-100 to-violet-400 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)] select-none"
                                variants={{
                                    hidden: { scale: 0.9, opacity: 0, filter: "blur(20px)" },
                                    visible: {
                                        scale: 1,
                                        opacity: 1,
                                        filter: "blur(0px)",
                                        transition: { duration: 1.5, ease: "circOut" }
                                    }
                                }}
                            >
                                PRAJWALAN
                            </motion.h1>

                            {/* Overlay/Glitch Effect */}
                            <motion.h1
                                className="absolute inset-0 text-[10vw] leading-none font-black font-orbitron tracking-tighter text-violet-500 mix-blend-overlay blur-[2px] opacity-50 select-none"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    x: [-2, 2, -2],
                                }}
                                transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
                            >
                                PRAJWALAN
                            </motion.h1>
                        </div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="mb-12"
                        >
                            <span className="text-4xl md:text-5xl font-rajdhani font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                                2K26
                            </span>
                        </motion.div>

                        {/* Buttons similar to Neurathon */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                            className="flex flex-col md:flex-row justify-center items-center gap-6"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 rounded-full border border-violet-500/50 bg-violet-900/20 backdrop-blur-md hover:bg-violet-900/40 text-violet-200 font-orbitron font-bold tracking-widest uppercase transition-all min-w-[220px] shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Brochure
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-orbitron font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all min-w-[220px]"
                            >
                                Register Now
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-[0.2em] text-violet-300/70">Scroll Down</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-violet-500 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
