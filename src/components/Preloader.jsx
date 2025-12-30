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
        }, 3000);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    // Complex Circuit / Hex Path
    const circuitPath = "M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z M50,10 L50,30 M90,30 L70,30 M90,70 L70,70 M50,90 L50,70 M10,70 L30,70 M10,30 L30,30 M50,50 L50,50";

    return (
        <AnimatePresence>
            {!loaded && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{
                        clipPath: "circle(0% at 50% 50%)",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    {/* Digital Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"></div>

                    <div className="relative flex flex-col items-center gap-8">
                        {/* --- THE SINGULARITY --- */}
                        <div className="relative w-40 h-40 flex items-center justify-center">

                            {/* Spinning Data Ring */}
                            <motion.div
                                className="absolute inset-0 border border-teal-500/20 rounded-full border-t-teal-400 border-r-teal-400 shadow-[0_0_30px_rgba(45,212,191,0.2)]"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-2 border border-violet-500/20 rounded-full border-b-violet-400 border-l-violet-400 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            />

                            {/* SVG Circuit Draw */}
                            <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-[0_0_25px_rgba(20,184,166,0.8)]">
                                <motion.path
                                    d={circuitPath}
                                    fill="transparent"
                                    stroke="#2dd4bf" // Teal-400
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
                                />
                                <motion.path
                                    d="M50,40 L60,50 L50,60 L40,50 Z"
                                    fill="#a78bfa"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [0, 1.5, 1] }}
                                    transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 2 }}
                                />
                            </svg>

                            {/* Extra Glow Core - New Addition */}
                            <motion.div
                                className="absolute inset-0 bg-teal-400/10 blur-xl rounded-full"
                                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>

                        {/* --- DECODING TEXT --- */}
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-4xl font-bold font-orbitron tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-500">
                                SYSTEM START
                            </h1>

                            <motion.div
                                className="flex gap-1 h-1 w-48 bg-gray-900 rounded-full overflow-hidden"
                            >
                                <motion.div
                                    className="h-full bg-teal-400 shadow-[0_0_10px_#2dd4bf]"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 3, ease: "easeInOut" }}
                                />
                            </motion.div>

                            <div className="flex justify-between w-48 text-[10px] font-mono text-teal-500/60 uppercase tracking-widest mt-1">
                                <span>Init_Seq_09</span>
                                <span className="animate-pulse">Loading...</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
