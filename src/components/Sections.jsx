import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import aboutBg from '../assets/about-bg.png';
import faqBg from '../assets/faq_bg.png';
import modulesBg from '../assets/modules_bg.png';
import modulesNewBg from '../assets/modules_new_bg.png';
import modulesBgFinal from '../assets/modules_bg_final.jpg';
import modulesAlienBg from '../assets/modules_alien_bg.jpg';
import modules4kBg from '../assets/modules_4k_bg.jpg';
import modulesFinalV2 from '../assets/modules_final_v2.png';

// Import Module Detail Images
import imgWebDev from '../assets/generated/module_web_dev_1767207732136.png';
import imgCyberSec from '../assets/generated/module_cyber_security_1767207752536.png';
import imgML from '../assets/generated/module_machine_learning_1767207769069.png';
import imgIoT from '../assets/generated/module_iot_1767207786926.png';
import imgWeb3 from '../assets/generated/module_web3_1767207806213.png';
import imgAppDev from '../assets/generated/module_app_dev_1767207823039.png';

// --- Shared Animation Variants ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

// --- Components ---

const Section = ({ id, title, children, className = "", ...props }) => (
    <section id={id} className={`w-full py-8 relative z-10 flex flex-col justify-center ${className} bg-bg-dark`} {...props}>
        <div className="container mx-auto px-6">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
            >
                <motion.div variants={itemVariants} className="flex items-center justify-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
                        <div className="w-64 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent blur-sm"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                        {title}
                    </h2>
                </motion.div>
                {children}
            </motion.div>
        </div>
    </section>
);

export const About = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isHovered, setIsHovered] = React.useState(false);

    const mouseX = useTransform(x, [0, window.innerWidth], [-40, 40]);
    const mouseY = useTransform(y, [0, window.innerHeight], [-40, 40]);

    const handleMouseMove = (event) => {
        x.set(event.clientX);
        y.set(event.clientY);
    };

    return (
        <div
            id="about"
            className="w-full py-8 relative z-10 flex flex-col justify-center items-center bg-bg-dark overflow-hidden group/section"
            onMouseMove={handleMouseMove}
        >
            {/* Background Image with Floating Effect and 360 Rotation */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%] z-0"
                animate={{
                    filter: isHovered ? "brightness(1.4) contrast(1.1)" : "brightness(0.6) contrast(1)",
                    scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {/* Rotating Lighting Overlay - 360 Animation */}
                <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-[200%] h-[200%] -left-[50%] -top-[50%] bg-gradient-to-tr from-transparent via-violet-500/20 to-transparent"
                    />
                </div>

                {/* Additional Light Burst on Hover */}
                <motion.div
                    className="absolute inset-0 z-20 bg-gradient-to-b from-violet-500/20 via-transparent to-black pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                ></motion.div>

                <motion.div
                    className="w-full h-full"
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src={aboutBg}
                        alt="About Background"
                        className="w-full h-full object-cover opacity-50 blur-[1px] transition-all duration-700 group-hover/section:opacity-70 group-hover/section:blur-0"
                    />
                </motion.div>

                {/* Ambient Darken/Lighten Pulse on Hover */}
                <div className="absolute inset-0 bg-black/60 group-hover/section:bg-black/40 transition-colors duration-700"></div>

                {/* Dynamic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-transparent to-bg-dark"></div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                    className="flex items-center justify-center mb-24 mt-12"
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

                            <h2 className="relative z-10 text-2xl md:text-4xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                                ABOUT
                            </h2>
                        </div>

                        {/* Right Bracket */}
                        <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                            <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>

                {/* Main Content Card */}
                <div className="flex justify-center">
                    <motion.div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full max-w-4xl glass-panel p-10 md:p-16 relative overflow-hidden group border border-violet-500/20 backdrop-blur-md bg-violet-900/5 transition-all duration-500"
                    >
                        {/* Inner circular glow - subtle constant pulse */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[80px] animate-pulse"></div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h3 className="text-4xl md:text-6xl font-black mb-8 font-orbitron tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-100 to-violet-900 drop-shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                                PRAJWALAN
                            </h3>

                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-rajdhani max-w-3xl mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                Prajwalan is a technology-focused innovation marathon that brings together students and developers to solve real-world problems using modern engineering and artificial intelligence. Participants collaborate in teams to design, build, and prototype impactful solutions across domains such as AI, web development, data science, and emerging technologies. Guided by mentors and evaluated by experts, teams focus on practical, scalable, and user-centric systems rather than theoretical ideas.
                            </p>

                            <button className="relative px-10 py-3 bg-[#1a1033] border border-violet-500/50 hover:border-violet-400 text-violet-400 hover:text-white transition-all duration-300 font-orbitron tracking-widest text-sm uppercase group/btn overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                                <span className="relative z-10">Know More</span>
                                <div className="absolute inset-0 bg-violet-600/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// --- ACCORDION DOMAINS COMPONENT ---
export const Domains = () => (
    /* 
    <Section id="domains" className="relative py-32 bg-[#05010d] overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

        
        <motion.div variants={itemVariants} className="text-center mb-16 relative z-10">
            <h2 className="text-6xl md:text-8xl font-black text-white font-orbitron tracking-tighter uppercase drop-shadow-[0_0_25px_rgba(45,212,191,0.3)]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-500">WAR</span> ZONES
            </h2>
            <p className="text-teal-400/80 font-orbitron tracking-[0.5em] text-sm uppercase mt-4">Select Deployment Vector</p>
        </motion.div>

        
        <div className="flex flex-col md:flex-row h-[80vh] w-full max-w-[90vw] mx-auto gap-2 md:gap-4 px-4 overflow-hidden">
            {[
                {
                    id: "01",
                    name: "WEB OPS",
                    role: "Development",
                    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    id: "02",
                    name: "NEURAL NETS",
                    role: "Intelligence",
                    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
                },
                {
                    id: "03",
                    name: "CYBER SEC",
                    role: "Defense",
                    img: "https://images.unsplash.com/photo-1563206767-5b1d972b9fb9?q=80&w=1974&auto=format&fit=crop"
                },
                {
                    id: "04",
                    name: "IOT CORE",
                    role: "Hardware",
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    id: "05",
                    name: "BLOCKCHAIN",
                    role: "Decentralized",
                    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2632&auto=format&fit=crop"
                },
            ].map((domain, idx) => (
                <motion.div
                    key={idx}
                    className="relative flex-1 min-w-[60px] md:min-w-[80px] h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group"
                    whileHover={{ flexGrow: 10 }} // Framer motion or just CSS
                    style={{ flexGrow: 1 }}
                >
                    
                    <div className="absolute inset-0">
                        <img
                            src={domain.img}
                            alt={domain.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:filter-none filter grayscale-[0.8] brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>

                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">

                        
                        <div className="flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
                            <span className="text-teal-400 font-orbitron font-bold text-xl md:text-2xl">0{idx + 1}</span>
                            <i className="bi bi-crosshair text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                        </div>

                        
                        <div className="relative h-full flex flex-col justify-end">

                            
                            

                            <h3 className="text-3xl md:text-5xl font-black text-white font-orbitron tracking-tighter uppercase mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-100">
                                {domain.name}
                            </h3>
                            <p className="text-teal-300 font-orbitron uppercase tracking-widest text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-200">
                                // {domain.role}
                            </p>

                            
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 origin-center whitespace-nowrap group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                <span className="text-gray-500 font-bold font-orbitron tracking-widest text-lg uppercase">{domain.name}</span>
                            </div>
                        </div>
                    </div>

                    
                    <div className="absolute inset-0 border border-white/10 group-hover:border-teal-400/50 rounded-2xl transition-colors duration-500"></div>
                </motion.div>
            ))}
        </div>
    </Section>
    */
    null
);

export const Gallery = () => {
    const [selectedId, setSelectedId] = React.useState(null);

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

    // Parallax Transforms (Different depths for different layers)
    const xHero = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
    const yHero = useTransform(mouseY, [-0.5, 0.5], [20, -20]);

    const xBack = useTransform(mouseX, [-0.5, 0.5], [-40, 40]);
    const yBack = useTransform(mouseY, [-0.5, 0.5], [-40, 40]);

    const xFore = useTransform(mouseX, [-0.5, 0.5], [60, -60]);
    // Luxury Gallery Data (Hackathon Masonry)
    const items = [
        // 1. Main Feature - The Arena (Large)
        { id: '1', title: 'The Arena', category: 'Main Stage', img: "/assets/gallery/stage.png", colSpan: 'md:col-span-8', rowSpan: 'md:row-span-2', height: 'h-[500px] md:h-[600px]' },

        // 2. Side Detail - Innovators (Small)
        { id: '2', title: 'Innovators', category: 'Teams', img: "/assets/gallery/team.png", colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1', height: 'h-[240px] md:h-[290px]' },

        // 3. Side Detail - The Summit (Small)
        { id: '3', title: 'The Summit', category: 'Finale', img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949892/IMG_4351_imryqr.jpg", colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1', height: 'h-[240px] md:h-[290px]' },

        // 4. Bottom Row - Deep Focus (Medium)
        { id: '4', title: 'Deep Focus', category: 'Hackathon', img: "/assets/gallery/neural.png", colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1', height: 'h-[300px]' },

        // 5. Bottom Row - Victory (Medium)
        { id: '5', title: 'Victory', category: 'Awards', img: "/assets/gallery/trophy.png", colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1', height: 'h-[300px]' },

        // 6. Bottom Row - Network (Medium)
        { id: '6', title: 'Network', category: 'Community', img: "https://images.unsplash.com/photo-1517433456452-f96cb9365b99?auto=format&fit=crop&q=80&w=400", colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1', height: 'h-[300px]' },
    ];

    return (
        <section id="gallery" className="relative w-full bg-[#050505] flex flex-col items-center justify-center pt-24 pb-32 px-4 md:px-12">

            {/* Header - FAQ Style Match */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 relative z-10 px-4 mt-12"
            >
                <h2 className="text-4xl md:text-6xl font-dune text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 tracking-[0.1em] mb-4 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                    GALLERY
                </h2>
                <p className="text-violet-200 font-rajdhani tracking-[0.2em] text-xs md:text-sm max-w-lg mx-auto opacity-80 leading-relaxed">
                    A visual archive of innovation, competition, and triumph.
                </p>
                <div className="h-[1px] w-20 bg-violet-600/50 mx-auto mt-6 shadow-[0_0_10px_#7c3aed]"></div>
            </motion.div>

            {/* Masonry Grid - Structured & Luxury */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-[1600px] mx-auto">
                {items.map((item) => (
                    <motion.div
                        layoutId={`card-container-${item.id}`}
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`relative group cursor-pointer overflow-hidden rounded-sm bg-[#111] shadow-lg ${item.colSpan} ${item.rowSpan} ${item.height}`}
                    >
                        <motion.div className="w-full h-full relative overflow-hidden">
                            {/* Image */}
                            <motion.img
                                layoutId={`card-image-${item.id}`}
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                            />

                            {/* Professional Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>

                            {/* Minimal Label - Bottom Left */}
                            <div className="absolute bottom-8 left-8 z-20">
                                <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 delay-75">
                                    <div className="w-6 h-[1px] bg-[#d4af37]"></div>
                                    <p className="text-[#d4af37] text-[10px] font-orbitron tracking-[0.2em] uppercase">{item.category}</p>
                                </div>
                                <h3 className="text-[#f5f5f7] font-orbitron text-2xl font-light tracking-wider drop-shadow-md">{item.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Cinematic Full Screen Lightbox */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={`card-container-${selectedId}`}
                        className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/40 hover:text-white text-xs font-orbitron tracking-[0.2em] uppercase transition-colors duration-300 z-50 pointer-events-auto border border-white/10 px-4 py-2 rounded-full hover:bg-white/5"
                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                        >
                            Close
                        </button>

                        <div
                            className="relative w-full h-full flex flex-col md:flex-row max-w-[1920px] mx-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Expanded Image - Focused */}
                            <motion.div
                                className="relative w-full md:w-3/4 h-2/3 md:h-full overflow-hidden"
                                layoutId={`card-image-${selectedId}`}
                            >
                                <motion.img
                                    src={items.find(i => i.id === selectedId).img}
                                    className="w-full h-full object-contain md:object-cover bg-[#050505]"
                                />
                            </motion.div>

                            {/* Details Panel - Professional Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="w-full md:w-1/4 h-1/3 md:h-full bg-[#080808] p-10 md:p-16 flex flex-col justify-center text-left border-l border-white/5"
                            >
                                <span className="text-[#d4af37] font-orbitron tracking-[0.3em] text-xs uppercase mb-8 flex items-center gap-4">
                                    <span className="w-12 h-[1px] bg-[#d4af37]"></span>
                                    {items.find(i => i.id === selectedId).category}
                                </span>
                                <h2 className="text-4xl md:text-5xl text-[#f5f5f7] font-orbitron font-light mb-8 leading-tight">{items.find(i => i.id === selectedId).title}</h2>
                                <p className="text-gray-500 font-rajdhani leading-relaxed text-sm md:text-base font-light mb-12">
                                    A defining moment from the event. This visual output represents the dedication, innovation, and spirit of competition that drives our community forward.
                                </p>

                                <div className="mt-auto opacity-30">
                                    <p className="text-[10px] font-mono text-gray-400">IMG_ID: {items.find(i => i.id === selectedId).id}_RAW</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export const PastWinners = () => {
    // Data for winners
    const winners = [
        {
            place: 2,
            title: "Trendsetters",
            prize: "Silver",
            img: imgAppDev,
            gradient: "from-cyan-500/20 to-blue-600/5",
            border: "border-cyan-500/30",
            glow: "shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)]",
            text: "text-cyan-200",
            delay: 0.2
        },
        {
            place: 1,
            title: "Innovators X",
            prize: "Gold",
            img: imgML,
            gradient: "from-amber-500/20 to-orange-600/5",
            border: "border-amber-500/40",
            glow: "shadow-[0_0_60px_-10px_rgba(245,158,11,0.4)]",
            text: "text-amber-200",
            delay: 0,
            scale: 1.1
        },
        {
            place: 3,
            title: "Dream Coders",
            prize: "Bronze",
            img: imgIoT,
            gradient: "from-rose-500/20 to-pink-600/5",
            border: "border-rose-500/30",
            glow: "shadow-[0_0_40px_-10px_rgba(244,63,94,0.3)]",
            text: "text-rose-200",
            delay: 0.4
        }
    ];

    return (
        <section id="past-winners" className="py-8 bg-[#05010d] relative overflow-hidden flex flex-col items-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] -z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-0 pointer-events-none"></div>

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
                className="flex items-center justify-center mb-24 mt-12"
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

                        <h2 className="relative z-10 text-2xl md:text-4xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                            HALL OF LEGENDS
                        </h2>
                    </div>

                    {/* Right Bracket */}
                    <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                        <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </motion.div>

            {/* Ethereal Floating Grid */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full min-h-[500px]">
                {winners.map((winner, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: winner.delay, duration: 0.8, ease: "easeOut" }}
                        className={`relative group ${winner.place === 1 ? 'md:-mt-12 z-20' : 'z-10'}`}
                    >
                        {/* Floating Animation Wrapper */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 4 + idx,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 0.5
                            }}
                            className="relative"
                        >
                            {/* Glass Card */}
                            <div className={`
                                    relative w-[85vw] md:w-[320px] 
                                    ${winner.place === 1 ? 'h-[460px]' : 'h-[380px]'}
                                    rounded-[2.5rem] overflow-hidden backdrop-blur-3xl
                                    bg-gradient-to-b ${winner.gradient}
                                    border ${winner.border}
                                    ${winner.glow}
                                    transition-all duration-500 group-hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.2)]
                                `}>
                                {/* Noise Texture Overlay */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

                                {/* Inner Light Reflection */}
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                                {/* Content Container */}
                                <div className="absolute inset-0 flex flex-col items-center p-8">

                                    {/* Rank Badge (Floating) */}
                                    <div className="absolute top-6 right-6">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md shadow-inner`}>
                                            <span className={`font-orbitron font-bold text-sm ${winner.text}`}>#{winner.place}</span>
                                        </div>
                                    </div>

                                    {/* Avatar with Ring */}
                                    <div className="relative mt-8 mb-6 group-hover:scale-105 transition-transform duration-700 ease-out">
                                        {/* Rotating Ring */}
                                        <div className={`absolute -inset-4 rounded-full border border-white/5 border-t-${winner.text.split('-')[1]}-400/50 animate-[spin_10s_linear_infinite]`}></div>
                                        <div className={`absolute -inset-1 rounded-full bg-gradient-to-tr ${winner.gradient} blur-md opacity-40`}></div>
                                        <img
                                            src={winner.img}
                                            alt={winner.title}
                                            className="w-32 h-32 rounded-full object-cover relative z-10 border-2 border-white/10 shadow-2xl"
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <div className="text-center mt-auto mb-8 relative z-10">
                                        <h4 className="text-3xl font-bold text-white font-orbitron mb-2 tracking-wide drop-shadow-lg">
                                            {winner.title}
                                        </h4>
                                        <div className="flex items-center justify-center gap-2 mb-4">
                                            <span className={`h-px w-6 bg-current opacity-50 ${winner.text}`}></span>
                                            <span className={`font-rajdhani uppercase tracking-[0.2em] text-sm font-semibold ${winner.text}`}>
                                                {winner.prize}
                                            </span>
                                            <span className={`h-px w-6 bg-current opacity-50 ${winner.text}`}></span>
                                        </div>
                                        <p className="text-white/40 font-rajdhani text-xs tracking-wider">
                                            PROJECT: {winner.place === 1 ? 'SENTINEL AI' : winner.place === 2 ? 'NOVA FINANCE' : 'ECHO HEALTH'}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Interactive Layer */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

        </section >
    );
};

// --- TIMELINE COMPONENT ---
export const Timeline = () => {
    const events = [
        {
            date: "25",
            month: "DEC",
            title: "REGISTRATION",
            subtitle: "INITIATION",
            details: ["Portal Opens", "Team Formation"],
            icon: "bi-person-plus-fill"
        },
        {
            date: "20",
            month: "JAN",
            title: "ROUND 1",
            subtitle: "QUALIFIERS",
            details: ["MVP Submission", "Code Validation"],
            icon: "bi-laptop"
        },
        {
            date: "15",
            month: "FEB",
            title: "ROUND 2",
            subtitle: "ELIMINATION",
            details: ["Live Demo", "Deep Tech Review"],
            icon: "bi-broadcast"
        },
        {
            date: "12",
            month: "MAR",
            title: "HAVOC",
            subtitle: "FINALE",
            details: ["24H Marathon", "Grand Finale"],
            icon: "bi-trophy-fill"
        }
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="timeline" ref={containerRef} className="py-8 relative z-10 overflow-hidden flex flex-col items-center bg-[#05010d]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
                className="flex items-center justify-center mb-24 mt-12"
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

                        <h2 className="relative z-10 text-2xl md:text-4xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                            TIMELINE
                        </h2>
                    </div>

                    {/* Right Bracket */}
                    <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                        <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </motion.div>

            {/* Vertical Rhombus Stack Layout */}
            <div className="w-full max-w-5xl px-4 relative flex flex-col items-center gap-24">

                {/* Scroll-Linked Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-violet-900/30 -translate-x-1/2 z-0">
                    <motion.div
                        className="w-full bg-violet-500 origin-top shadow-[0_0_20px_#8b5cf6]"
                        style={{ scaleY, height: "100%" }}
                    />
                </div>

                {events.map((event, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            bounce: 0.4
                        }}
                        className={`relative z-10 flex items-center justify-center w-full gap-8 md:gap-20 ${idx % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'}`}
                    >
                        {/* Central Rhombus Node (Date) */}
                        <motion.div
                            className="relative group flex-shrink-0 z-20"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            {/* Outer Glow Ring */}
                            <div className="absolute inset-0 bg-violet-500 blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* Rhombus Container */}
                            <div className="w-24 h-24 bg-black/80 backdrop-blur-sm border-2 border-violet-500 rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)] group-hover:border-white/50 transition-colors duration-300">
                                {/* Inner Content (Un-rotated) */}
                                <div className="-rotate-45 text-center">
                                    <span className="block text-2xl font-black text-white font-orbitron leading-none drop-shadow-md">{event.date}</span>
                                    <span className="block text-xs font-bold text-violet-400 font-orbitron tracking-widest mt-1">{event.month}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Connection Line (Hoz) */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`hidden md:block absolute top-1/2 ${idx % 2 === 0 ? 'left-1/2 origin-left' : 'right-1/2 origin-right'} w-[calc(50%-5rem)] h-[1px] bg-gradient-to-r from-violet-500 to-transparent z-0`}
                        ></motion.div>

                        {/* Content Card */}
                        <motion.div
                            className={`w-full md:w-[40%] flex flex-col ${idx % 2 === 0 ? 'md:text-left items-center md:items-start' : 'md:text-right items-center md:items-end'}`}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div
                                className="group/card relative p-6 bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-violet-900/20 hover:border-violet-400/50 clip-path-polygon w-full shadow-lg"
                                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)" }}
                            >
                                <h3 className="text-2xl font-black font-orbitron text-white mb-1 uppercase tracking-wider group-hover/card:text-violet-300 transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-violet-500 font-bold font-orbitron tracking-[0.2em] mb-4 uppercase text-xs">
                                    {event.subtitle}
                                </p>

                                <ul className={`flex flex-col gap-1 text-gray-300 font-orbitron text-sm ${idx % 2 === 0 ? 'items-center md:items-start' : 'items-center md:items-end'}`}>
                                    {event.details.map((detail, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            {idx % 2 !== 0 && <i className="bi bi-caret-left-fill text-violet-500 text-xs"></i>}
                                            {detail}
                                            {idx % 2 === 0 && <i className="bi bi-caret-right-fill text-violet-500 text-xs"></i>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// --- PRIZES COMPONENT ---
export const Prizes = () => {
    const bounties = [
        {
            id: '01',
            rank: 'Runner Up',
            amount: '15,000',
            currency: 'INR',
            color: 'text-cyan-400',
            bg: 'bg-cyan-500/10',
            border: 'border-cyan-500/20',
            icon: "bi-shield-check",
            desc: "Outstanding execution and technical prowess."
        },
        {
            id: '00',
            rank: 'Champion',
            amount: '20,000',
            currency: 'INR',
            color: 'text-amber-400',
            bg: 'bg-amber-500/10',
            border: 'border-amber-500/30',
            icon: "bi-trophy",
            desc: "The ultimate innovation that redefines boundaries.",
            featured: true
        },
        {
            id: '02',
            rank: '2nd Runner Up',
            amount: '10,000',
            currency: 'INR',
            color: 'text-rose-400',
            bg: 'bg-rose-500/10',
            border: 'border-rose-500/20',
            icon: "bi-award",
            desc: "Exceptional creativity and problem solving."
        }
    ];

    return (
        <section id="prizes" className="py-8 bg-bg-dark relative overflow-hidden flex flex-col items-center">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none"></div>

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
                className="flex items-center justify-center mb-24 mt-12"
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

                        <h2 className="relative z-10 text-2xl md:text-4xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                            PRIZES
                        </h2>
                    </div>

                    {/* Right Bracket */}
                    <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                        <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {bounties.map((bounty, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className={`
                                relative group p-px overflow-hidden clip-path-polygon
                                ${bounty.featured ? 'md:-mt-8 md:mb-8 z-20' : 'z-10'}
                            `}
                            style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
                        >
                            {/* Animated Gradient Border using CSS mask or internal divs */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50`}></div>
                            <div className={`absolute inset-0 bg-gradient-to-b ${bounty.bg} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

                            {/* Glass Content */}
                            <div className="relative bg-[#0F0A1F]/90 backdrop-blur-xl h-full p-8 flex flex-col items-center text-center border border-white/5 group-hover:border-white/10 transition-colors clip-path-polygon" style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}>

                                {/* Top Icon Glow */}
                                <div className={`w-16 h-16 ${bounty.bg} flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500 clip-path-polygon`} style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)" }}>
                                    <i className={`${bounty.icon} ${bounty.color} text-3xl drop-shadow-md`}></i>
                                    <div className={`absolute inset-0 ${bounty.bg} blur-xl opacity-50`}></div>
                                </div>

                                <h3 className="text-white font-orbitron text-2xl font-bold tracking-wide mb-2">
                                    {bounty.rank}
                                </h3>
                                <p className="text-gray-400 font-rajdhani text-sm mb-8 max-w-[200px] leading-relaxed">
                                    {bounty.desc}
                                </p>

                                {/* Prize Amount */}
                                <div className="mt-auto relative">
                                    <span className={`block text-5xl md:text-6xl font-black font-orbitron ${bounty.color} tracking-tighter drop-shadow-lg scale-100 group-hover:scale-110 transition-transform duration-300`}>
                                        {bounty.amount}
                                    </span>
                                    <span className="block text-white/30 font-bold tracking-[0.3em] text-xs mt-2 font-orbitron">
                                        {bounty.currency}
                                    </span>
                                </div>

                                {/* Bottom Decorative Line */}
                                <div className={`w-1/2 h-1 rounded-full ${bounty.bg.replace('/10', '/50')} mt-8`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- PURPLE MARQUEE SPONSORS ---
export const Sponsors = () => {
    // Row 1: Tech Giants
    const row1Sponsors = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Zomato", url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" }
    ];

    // Row 2: Dev & Cloud
    const row2Sponsors = [
        { name: "Facebook", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
        { name: "PayPal", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" }
    ];

    // Duplicate for marquee loop
    const marqueeRow1 = [...row1Sponsors, ...row1Sponsors, ...row1Sponsors, ...row1Sponsors];
    const marqueeRow2 = [...row2Sponsors, ...row2Sponsors, ...row2Sponsors, ...row2Sponsors];

    return (
        <Section id="sponsors" className="pt-8 pb-16 bg-black relative overflow-hidden" title="">
            {/* Header */}
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

                        <h2 className="relative z-10 text-2xl md:text-4xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                            SPONSORS
                        </h2>
                    </div>

                    {/* Right Bracket */}
                    <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                        <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </motion.div>

            {/* Marquee Container */}
            <div className="flex flex-col gap-16 relative z-10 overflow-hidden opacity-90 hover:opacity-100 transition-opacity duration-500 group">

                {/* Row 1: Left to Right */}
                <div className="flex overflow-visible relative w-full py-4">
                    <div className="flex gap-20 items-center whitespace-nowrap animate-marquee-reverse group-hover:paused will-change-transform">
                        {marqueeRow1.map((brand, idx) => (
                            <div key={`row1-${idx}`} className="w-28 md:w-40 flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={brand.url}
                                    alt={brand.name}
                                    className="w-full h-12 object-contain transition-transform duration-300 hover:scale-125 drop-shadow-[0_0_5px_rgba(139,92,246,0.3)] hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                                    style={{
                                        filter: "brightness(0.9) sepia(1) hue-rotate(240deg) saturate(3) contrast(1.1)"
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex overflow-visible relative w-full py-4">
                    <div className="flex gap-20 items-center whitespace-nowrap animate-marquee group-hover:paused will-change-transform">
                        {marqueeRow2.map((brand, idx) => (
                            <div key={`row2-${idx}`} className="w-28 md:w-40 flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={brand.url}
                                    alt={brand.name}
                                    className="w-full h-12 object-contain transition-transform duration-300 hover:scale-125 drop-shadow-[0_0_5px_rgba(139,92,246,0.3)] hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                                    style={{
                                        filter: "brightness(0.9) sepia(1) hue-rotate(240deg) saturate(3) contrast(1.1)"
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background elements to match the misty look */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-900/5 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

        </Section>
    );
};

// --- HOLOGRAPHIC TERMINAL FAQ ---
export const FAQs = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    // Parallax Motion Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

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

    const questions = [
        { q: "WHAT IS PRAJWALAN 2026?", a: "Prajwalan is a national-level technical symposium hosted by SRKR Engineering College." },
        { q: "WHO CAN PARTICIPATE?", a: "Students from any engineering or degree college with a valid ID card." },
        { q: "HOW DO I REGISTER?", a: "Registration is available through our official portal. Early bird offers are live." },
        { q: "IS IT AN INDIVIDUAL OR TEAM EVENT?", a: "Both individual and team events are available depending on the specific challenge." },
        { q: "WILL THERE BE PRIZES?", a: "Yes, cash prizes and certificates will be awarded to top performers in all categories." }
    ];

    return (
        <section
            id="faqs"
            className="w-full flex flex-col justify-start pt-32 pb-32 bg-bg-dark relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    src={faqBg}
                    alt="FAQ Background"
                    className="w-full h-full object-cover"
                    style={{
                        x: translateX,
                        y: translateY,
                        scale: 1.1
                    }}
                />
                {/* Darker overlay for better text contrast matching reference */}
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90"></div>
            </div>

            <motion.div variants={itemVariants} className="text-center mb-12 relative z-10 px-4">
                <h2 className="text-4xl md:text-6xl font-dune text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 tracking-[0.1em] mb-4 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                    F A Q
                </h2>
                <p className="text-violet-200 font-rajdhani tracking-[0.2em] text-xs md:text-sm max-w-lg mx-auto opacity-80 leading-relaxed">
                    Find answers to the most common questions about Prajwalan 2026.
                </p>
                <div className="h-[1px] w-20 bg-violet-600/50 mx-auto mt-6 shadow-[0_0_10px_#7c3aed]"></div>
            </motion.div>

            <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col gap-4">
                {questions.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={false}
                        animate={{ backgroundColor: openIndex === idx ? "rgba(139, 92, 246, 0.08)" : "transparent" }}
                        className="border-b border-violet-500/20 overflow-hidden transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex items-center justify-between py-4 text-left group hover:bg-violet-500/5 px-4 rounded-lg transition-colors"
                        >
                            <span className={`font-rajdhani tracking-wider text-sm md:text-base transition-colors uppercase pr-8 ${openIndex === idx ? 'text-violet-300' : 'text-violet-400/80 group-hover:text-violet-300'}`}>
                                {item.q}
                            </span>
                            <motion.i
                                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                className={`bi bi-chevron-down text-base flex-shrink-0 transition-colors ${openIndex === idx ? 'text-violet-400' : 'text-violet-500/50 group-hover:text-violet-400'}`}
                            ></motion.i>
                        </button>

                        {/* Expanded Content */}
                        <AnimatePresence initial={false}>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="pb-4 px-4">
                                        <p className="text-gray-300 font-rajdhani text-base tracking-wide leading-relaxed pl-4 border-l-2 border-violet-500/30 ml-2">
                                            {item.a}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
// --- MODULES COMPONENT (Redesigned) ---
export const Modules = () => {
    // Parallax Motion Values (Hero-style)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    // Map normalized -0.5 to 0.5 input to pixel movement
    const bgX = useTransform(xSpring, [-0.5, 0.5], ["-40px", "40px"]);
    const bgY = useTransform(ySpring, [-0.5, 0.5], ["-40px", "40px"]);

    // Map input to 3D rotation
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();
        const xPos = (clientX / width) - 0.5;
        const yPos = (clientY / height) - 0.5;
        x.set(xPos);
        y.set(yPos);
    };

    // Dotted Ring Component
    const DottedRing = ({ size = 60, color = "#a855f7" }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* The Main Dotted Ring */}
            <circle
                cx="50" cy="50" r="38"
                stroke={color}
                strokeWidth="6"
                strokeDasharray="12 12"
                strokeLinecap="round"
                className="opacity-80"
            />
            {/* The Thin Outer Boundary */}
            <circle
                cx="50" cy="50" r="49"
                stroke={color}
                strokeWidth="0.5"
                className="opacity-50"
            />
        </svg>
    );

    // Modules Data with "Organic" Positioning
    const modules = [
        {
            id: 1,
            title: "Web Development",
            desc: "Challenge yourself to build scalable, responsive, and user-centric web applications that solve real-world problems. Utilize modern frameworks and cloud technologies to create seamless digital experiences that define the future of the internet.",
            top: "calc(15% - 20px)",
            left: "calc(20% + 140px)",
            delay: 0,
            pos: 'bottom',
            img: imgWebDev
        },
        {
            id: 2,
            title: "Cyber Security",
            desc: "Dive into the world of network defense, ethical hacking, and vulnerability assessment to secure critical digital infrastructure. Develop robust solutions that protect user data, prevent cyber threats, and ensure privacy in an increasingly connected world.",
            top: "calc(25% + 140px)",
            left: "calc(65% - 65px)",
            delay: 2,
            pos: 'left',
            img: imgCyberSec
        },
        {
            id: 3,
            title: "Machine Learning",
            desc: "Harness the power of data to build intelligent systems capable of predictive modeling, natural language processing, and computer vision. Create algorithms that learn from experience, automate complex tasks, and uncover hidden patterns to drive innovation.",
            top: "calc(28% + 340px)",
            left: "calc(42% - 70px)",
            delay: 4,
            pos: 'top',
            img: imgML
        },
        {
            id: 4,
            title: "IoT Systems",
            desc: "Bridge the gap between the physical and digital worlds by creating smart, interconnected devices and systems. Design efficient embedded solutions that collect data, automate processes, and improve quality of life through intelligent automation and connectivity.",
            top: "calc(70% - 180px)",
            left: "calc(12% - 170px)",
            delay: 1,
            img: imgIoT
        },
        {
            id: 5,
            title: "Web3 & Blockchain",
            desc: "Explore the frontiers of decentralized technology by building transparent, secure, and immutable applications. Develop smart contracts and decentralized apps (DApps) that redefine trust, finance, and digital ownership in the next generation of the web.",
            top: "calc(80% - 450px)",
            left: "calc(48% + 500px)",
            delay: 3,
            pos: 'bottom',
            img: imgWeb3
        },
        {
            id: 6,
            title: "App Development",
            desc: "Craft intuitive and high-performance mobile applications that deliver exceptional user experiences across various platforms. Focus on mobile-first design, efficient functionality, and seamless integration to solve problems on the go.",
            top: "calc(55% + 108px)",
            left: "calc(82% + 55px)",
            delay: 5,
            pos: 'top',
            img: imgAppDev
        },
    ];

    return (
        <Section
            id="modules"
            title=""
            className="bg-[#050210] relative overflow-hidden py-8 min-h-[900px]"
            onMouseMove={handleMouseMove}
        >

            {/* Background Image - New Final V2 - Shifted down for Header Space */}
            <div className="absolute top-[220px] left-0 right-0 bottom-0 z-0 overflow-hidden" style={{ perspective: "1000px" }}>
                <motion.div
                    className="absolute inset-x-0 inset-y-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${modulesFinalV2})`,
                        backgroundPosition: 'center -50px',
                        x: bgX,
                        y: bgY,
                        rotateX: rotateX,
                        rotateY: rotateY,
                        scale: 1.15 // Slightly Increased scale to avoid edge clipping during rotation
                    }}
                />
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>

                {/* Cinematic Vignette Borders (Reference Match) */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
            </div>

            <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 relative z-10 h-full">

                {/* Header: < MODULES > (Neon & Glowing) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                    className="flex items-center justify-center mb-24 mt-12"
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

                            <h2 className="relative z-10 text-2xl md:text-4xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                                DOMAINS
                            </h2>
                        </div>

                        {/* Right Bracket */}
                        <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                            <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>

                {/* Organic Dotted Map (Desktop Only) */}
                <div className="hidden md:block relative w-full h-[600px] md:h-[700px]">
                    {modules.map((mod) => (
                        <motion.div
                            key={mod.id}
                            className="absolute group"
                            style={{ top: mod.top, left: mod.left }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: mod.id * 0.1 }}
                        >
                            {/* Interactive Container */}
                            <div className="relative flex items-center justify-center cursor-pointer">

                                {/* Rotating Dotted Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10 + mod.delay, repeat: Infinity, ease: "linear" }}
                                    className="group-hover:pause-animation" // Pause is complex in framer, simpler to slow down or use CSS
                                    style={{ transformOrigin: "center" }}
                                >
                                    <div className="transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_#22d3ee]">
                                        <DottedRing color="#a855f7" size={55} />
                                    </div>
                                </motion.div>

                                {/* Center Core Hook with Thin Boundary */}
                                <div className="absolute w-4 h-4 rounded-full border border-violet-300/50 z-10"></div>
                                <div className="absolute w-2 h-2 bg-violet-300 rounded-full shadow-[0_0_10px_#a78bfa] z-20 transition-all duration-300 group-hover:bg-white group-hover:scale-150"></div>

                                {/* Styles for CSS Pause */}
                                <style>{`
                                    .group:hover .group-hover\\:pause-animation {
                                        animation-play-state: paused;
                                    }
                                `}</style>

                                {/* --- Domain Card (Glassmorphic Reveal) --- */}
                                <div className={`absolute w-72 opacity-0 invisible transition-all duration-500 ease-out z-30
                                    ${mod.pos === 'bottom'
                                        ? 'top-16 left-1/2 -translate-x-1/2 translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-6'
                                        : mod.pos === 'top'
                                            ? 'bottom-16 left-1/2 -translate-x-1/2 -translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-6'
                                            : mod.pos === 'left'
                                                ? 'right-14 top-1/2 -translate-y-1/2 -translate-x-4 group-hover:opacity-100 group-hover:visible group-hover:-translate-x-6'
                                                : 'left-14 top-1/2 -translate-y-1/2 translate-x-4 group-hover:opacity-100 group-hover:visible group-hover:translate-x-6'
                                    }`}
                                >
                                    <div className="relative bg-[#0F0A1F]/95 backdrop-blur-xl border border-white/10 group-hover:border-violet-500 transition-colors duration-300 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">

                                        {/* Top Image Section */}
                                        <div className="h-32 w-full relative overflow-hidden group/image">
                                            {/* Domain Image */}
                                            <img
                                                src={mod.img}
                                                alt={mod.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                                            />
                                            {/* Gradient Overlay for Text Readability/Atmosphere */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1F] via-transparent to-transparent opacity-80"></div>

                                            {/* Grid Overlay */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 mixed-blend-overlay"></div>
                                        </div>

                                        {/* Bottom Content Section */}
                                        <div className="p-4 flex flex-col justify-center border-t border-white/5 relative">
                                            {/* Title */}
                                            <h3 className="text-lg font-bold font-orbitron text-amber-400 mb-2 tracking-wide">
                                                {mod.title}
                                            </h3>
                                            <p className="text-xs text-violet-300 font-sans leading-relaxed mb-3 text-left tracking-wide">
                                                {mod.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Connectivity UI Line: Changes based on Position */}
                                    {mod.pos === 'bottom' ? (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                                    ) : mod.pos === 'top' ? (
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-gradient-to-t from-cyan-400 to-transparent"></div>
                                    ) : mod.pos === 'left' ? (
                                        <div className="absolute top-1/2 -right-6 w-6 h-[1px] bg-gradient-to-l from-cyan-400 to-transparent"></div>
                                    ) : (
                                        <div className="absolute top-1/2 -left-6 w-6 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
                                    )}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- MOBILE LAYOUT (Grid) --- */}
                <div className="grid grid-cols-1 gap-6 md:hidden w-full relative z-20 pb-12">
                    {modules.map((mod) => (
                        <motion.div
                            key={mod.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: mod.id * 0.1 }}
                            className="w-full"
                        >
                            <div className="relative bg-[#0F0A1F]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-lg">
                                {/* Image Header */}
                                <div className="h-40 w-full relative overflow-hidden">
                                    <img
                                        src={mod.img}
                                        alt={mod.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1F] to-transparent opacity-90"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6 relative -mt-8">
                                    <div className="absolute -top-6 right-6 w-12 h-12 bg-black rounded-full border border-violet-500/50 flex items-center justify-center shadow-[0_0_15px_#a78bfa]">
                                        <i className="bi bi-cpu text-violet-300"></i>
                                    </div>

                                    <h3 className="text-xl font-bold font-orbitron text-amber-400 mb-2 tracking-wide">
                                        {mod.title}
                                    </h3>
                                    <p className="text-sm text-violet-300 font-sans leading-relaxed mb-4 text-justify tracking-wide">
                                        {mod.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </Section>
    );
};


