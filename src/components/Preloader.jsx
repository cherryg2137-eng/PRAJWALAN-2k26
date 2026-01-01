import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
            setTimeout(() => {
                if (onLoadingComplete) onLoadingComplete();
            }, 1000);
        }, 5000);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    const Sparkles = () => {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-[#ffd700] rounded-full opacity-0"
                        style={{
                            width: Math.random() * 2 + 1 + "px",
                            height: Math.random() * 2 + 1 + "px",
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%",
                            filter: "blur(0.5px)"
                        }}
                        animate={{
                            y: [0, -40],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.2, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        );
    };

    return (
        <AnimatePresence>
            {!loaded && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
                    entry={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(20px)",
                        transition: { duration: 1.2, ease: "easeInOut" }
                    }}
                >
                    {/* Background Layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0614] to-[#1a0f3c]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]"></div>

                    <Sparkles />

                    <div className="relative z-10 flex flex-col items-center justify-center w-full px-8">

                        {/* ACE PRESENTS - Grouped for perfect alignment */}
                        <motion.div
                            className="flex flex-col items-center mb-6"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="flex items-baseline gap-4"
                            >
                                <span
                                    className="text-6xl md:text-8xl text-[#ffd700] font-serif font-bold tracking-tighter drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                                >
                                    ACE
                                </span>
                                <span
                                    className="text-2xl md:text-4xl text-[#E0D4FC] opacity-80"
                                    style={{ fontFamily: '"Pacifico", cursive' }}
                                >
                                    Presents
                                </span>
                            </motion.div>

                            {/* Decorative Gold Line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "120%" }}
                                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                                className="h-[1px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mt-2 opacity-50"
                            />
                        </motion.div>

                        {/* PRAJWALAN - The Main Reveal */}
                        <motion.div
                            initial={{ opacity: 0, letterSpacing: "1em", filter: "blur(10px)" }}
                            animate={{ opacity: 1, letterSpacing: "0.4em", filter: "blur(0px)" }}
                            transition={{ duration: 2.5, delay: 2.2, ease: "easeOut" }}
                            className="relative group"
                        >
                            <motion.h1
                                className="text-5xl md:text-[8rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-100 to-violet-400 relative z-10 drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                                style={{
                                    fontFamily: '"Cinzel", serif',
                                    textTransform: 'uppercase'
                                }}
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 4, ease: "easeInOut" }}
                            >
                                Prajwalan
                            </motion.h1>

                            {/* Cute Orbiting Dot */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 w-[120%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, rotate: 360 }}
                                transition={{ opacity: { delay: 3, duration: 1 }, rotate: { duration: 8, repeat: Infinity, ease: "linear" } }}
                            >
                                <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_10px_#22d3ee]"></div>
                            </motion.div>

                            {/* Inner Glow Aura */}
                            <motion.div
                                className="absolute inset-0 blur-[60px] bg-violet-600/20 rounded-full"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1.2 }}
                                transition={{ duration: 3, delay: 2.5 }}
                            />
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;