import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TeamCard from './TeamCard';

const Team = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const chiefs = [
        {
            id: 1,
            name: "Deepak",
            img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767289300/Deepak_Thota_z84d3o.jpg",
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        },
        {
            id: 2,
            name: "Venkat Sai",
            img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767289439/venkat_zyrp3b.jpg",
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        },
        {
            id: 3,
            name: "Anusha",
            img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767289524/Anusha_gwc8un.jpg",
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        },
        {
            id: 4,
            name: "Lokesh Gandhi",
            img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767289626/gandhi_vlvok9.jpg",
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        }
    ];

    const techTeam = [
        {
            id: 5,
            name: "Aakash",
            img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767290417/AAKASH_v0f0i4.jpg",
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        },
        {
            id: 6,
            name: "Charan",
            img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767290165/charan_kdppkh.jpg",
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        },
        {
            id: 7,
            name: "Mounika",
            img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767290303/Mounika_kgsqrm.jpg",
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        }
    ];

    const sectionVariants = {
        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
        }
    };

    return (
        <section className="min-h-screen w-full pt-24 pb-32 relative bg-[#050505] overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-40 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* --- FESTIVAL CHIEFS SECTION --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                    className="flex items-center justify-center mb-16 relative z-10 w-full mt-12"
                >
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Left Bracket */}
                        <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                            <path d="M35 5 L5 50 L35 95" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <div className="relative overflow-hidden pl-4 pr-2 md:pl-6 md:pr-4 py-2 border-x-2 border-violet-400/80 bg-transparent rounded-xl">
                            {/* Shine Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent skew-x-12"
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "linear",
                                    repeatDelay: 0
                                }}
                            />

                            <h1 className="relative z-10 text-2xl md:text-5xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                                FESTIVAL CHIEFS
                            </h1>
                        </div>

                        {/* Right Bracket */}
                        <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                            <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>

                {/* Chiefs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 max-w-[1400px] mx-auto">
                    {chiefs.map((member, index) => (
                        <TeamCard key={member.id} member={member} delay={index * 0.15} />
                    ))}
                </div>

                {/* --- TECHNICAL TEAM SECTION --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                    className="flex items-center justify-center mb-16 relative z-10 w-full mt-24"
                >
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Left Bracket */}
                        <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                            <path d="M35 5 L5 50 L35 95" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <div className="relative overflow-hidden pl-4 pr-2 md:pl-6 md:pr-4 py-2 border-x-2 border-violet-400/80 bg-transparent rounded-xl">
                            {/* Shine Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent skew-x-12"
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "linear",
                                    repeatDelay: 0
                                }}
                            />

                            <h2 className="relative z-10 text-2xl md:text-5xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                                TECHNICAL TEAM
                            </h2>
                        </div>

                        {/* Right Bracket */}
                        <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                            <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>

                {/* Tech Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-[1100px] mx-auto">
                    {techTeam.map((member, index) => (
                        <TeamCard key={member.id} member={member} delay={index * 0.15} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Team;
