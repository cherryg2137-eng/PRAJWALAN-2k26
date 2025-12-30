import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import aboutBg from '../assets/about-bg.png';
import faqBg from '../assets/faq_bg.png';

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

const Section = ({ id, title, children, className = "" }) => (
    <section id={id} className={`min-h-screen py-24 relative z-10 flex flex-col justify-center ${className} bg-bg-dark`}>
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
            className="min-h-screen py-24 relative z-10 flex flex-col justify-center items-center bg-bg-dark overflow-hidden group/section"
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
                    className="flex items-center justify-center mb-16"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 font-orbitron font-bold drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                            &lt;
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-gray-400 uppercase tracking-[0.2em] font-orbitron drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                            ABOUT
                        </h2>
                        <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400 font-orbitron font-bold drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                            &gt;
                        </span>
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
    <Section id="domains" className="relative py-32 bg-[#05010d] overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 relative z-10">
            <h2 className="text-6xl md:text-8xl font-black text-white font-orbitron tracking-tighter uppercase drop-shadow-[0_0_25px_rgba(45,212,191,0.3)]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-500">WAR</span> ZONES
            </h2>
            <p className="text-teal-400/80 font-rajdhani tracking-[0.5em] text-sm uppercase mt-4">Select Deployment Vector</p>
        </motion.div>

        {/* Accordion Container */}
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
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={domain.img}
                            alt={domain.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:filter-none filter grayscale-[0.8] brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">

                        {/* Top ID */}
                        <div className="flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
                            <span className="text-teal-400 font-rajdhani font-bold text-xl md:text-2xl">0{idx + 1}</span>
                            <i className="bi bi-crosshair text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                        </div>

                        {/* Text Container */}
                        <div className="relative h-full flex flex-col justify-end">

                            {/* Vertical Text (Visible when collapsed in some designs, or just let CSS handle) */}
                            {/* We will rely on the expansion to show the main horizontal text clearly */}

                            <h3 className="text-3xl md:text-5xl font-black text-white font-orbitron tracking-tighter uppercase mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-100">
                                {domain.name}
                            </h3>
                            <p className="text-teal-300 font-rajdhani uppercase tracking-widest text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-200">
                                // {domain.role}
                            </p>

                            {/* Collapsed State Text (Vertical) */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 origin-center whitespace-nowrap group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                <span className="text-gray-500 font-bold font-orbitron tracking-widest text-lg uppercase">{domain.name}</span>
                            </div>
                        </div>
                    </div>

                    {/* Active Border */}
                    <div className="absolute inset-0 border border-white/10 group-hover:border-teal-400/50 rounded-2xl transition-colors duration-500"></div>
                </motion.div>
            ))}
        </div>
    </Section>
);

export const Gallery = () => {
    // Aggressive, distorted, high-energy gallery
    const galleryItems = [
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949778/IMG_20250218_094249_vqc5yp.jpg", back: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949847/IMG_20250218_095842_hka3dy.jpg", back: "https://images.unsplash.com/photo-1517433456452-f96cb9365b99?auto=format&fit=crop&q=80&w=400" },
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949892/IMG_4351_imryqr.jpg", back: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=400" },
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766950112/ak32_klt1sv.jpg", back: "https://images.unsplash.com/photo-1563770095-39d46baa5cdd?auto=format&fit=crop&q=80&w=400" },
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949778/IMG_20250218_094249_vqc5yp.jpg", back: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400" },
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949847/IMG_20250218_095842_hka3dy.jpg", back: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400" }
    ];

    return (
        <Section id="gallery" title="THE VAULT" className="bg-[#0b0514]">
            <motion.div variants={itemVariants} className="mb-12 text-center">
                <p className="text-violet-400 font-rajdhani text-xl tracking-widest uppercase">Visual Evidence of Past Chaos</p>
            </motion.div>

            <motion.div variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {galleryItems.map((item, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="group relative h-72 w-full cursor-pointer overflow-hidden border-2 border-transparent hover:border-violet-500 transition-all duration-300 rounded-lg"
                    >
                        {/* Image */}
                        <div className="relative w-full h-full">
                            <img
                                src={item.front}
                                alt={`Gallery ${idx}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter sepia-[0.5] contrast-125 group-hover:sepia-0"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-violet-900/40 group-hover:bg-transparent transition-colors duration-500 mix-blend-hard-light"></div>

                            {/* Glitch Overlay on Hover */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-100 mix-blend-difference"></div>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-violet-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-violet-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export const PastWinners = () => (
    <Section id="past-winners" title="Past Champions">
        <div className="max-w-6xl mx-auto">
            <motion.p variants={itemVariants} className="text-center text-gray-400 mb-12 font-rajdhani text-lg tracking-[0.2em] uppercase">Honoring the victors of the wasteland.</motion.p>

            <div className="mb-0">
                <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center mb-10 text-violet-500 font-orbitron tracking-widest drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">LEGENDS OF 2K25</motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { place: "1st Place", team: "Innovators X", project: "DeepLearn Platform", color: "from-yellow-400 to-yellow-600", border: "border-yellow-500", icon: "bi-trophy-fill", badge: "GOLD" },
                        { place: "2nd Place", team: "Tech Titans", project: "Voice Assistant Pro", color: "from-gray-300 to-gray-500", border: "border-gray-400", icon: "bi-trophy-fill", badge: "SILVER" },
                        { place: "3rd Place", team: "Dream Coders", project: "AR Navigation", color: "from-orange-400 to-orange-600", border: "border-orange-500", icon: "bi-trophy-fill", badge: "BRONZE" }
                    ].map((winner, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className={`glass-panel p-8 flex flex-col items-center text-center relative overflow-hidden group border-t-4 ${winner.border} bg-[#110a1f]`}
                        >
                            <div className="absolute top-0 right-0 p-2 bg-white/10 text-[0.6rem] font-orbitron tracking-widest text-white">{winner.badge}</div>

                            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${winner.color} shadow-[0_0_30px_rgba(255,255,255,0.2)] text-white text-4xl ring-4 ring-black ring-opacity-50`}>
                                <i className={`bi ${winner.icon}`}></i>
                            </div>

                            <span className="text-xs font-bold tracking-[0.3em] mb-2 font-orbitron text-gray-400 uppercase">{winner.place}</span>
                            <h4 className="text-3xl font-black text-white mb-2 font-orbitron tracking-wide">{winner.team}</h4>
                            <p className="text-violet-300 font-rajdhani text-lg bg-violet-900/20 px-4 py-1 rounded-full border border-violet-500/30">{winner.project}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

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
        <section id="timeline" ref={containerRef} className="py-32 relative z-10 overflow-hidden flex flex-col items-center bg-[#05010d]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

            {/* Header */}
            <div className="flex flex-col items-center mb-32 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 font-orbitron tracking-widest uppercase mb-4 drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                >
                    TIMELINE
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 160 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-1.5 bg-violet-600 skew-x-[-20deg] shadow-[0_0_15px_#7c3aed]"
                ></motion.div>
            </div>

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
                            <div className="w-32 h-32 bg-black/80 backdrop-blur-sm border-2 border-violet-500 rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)] group-hover:border-white/50 transition-colors duration-300">
                                {/* Inner Content (Un-rotated) */}
                                <div className="-rotate-45 text-center">
                                    <span className="block text-3xl font-black text-white font-orbitron leading-none drop-shadow-md">{event.date}</span>
                                    <span className="block text-sm font-bold text-violet-400 font-rajdhani tracking-widest mt-1">{event.month}</span>
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
                                className="group/card relative p-8 bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-violet-900/20 hover:border-violet-400/50 clip-path-polygon w-full shadow-lg"
                                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)" }}
                            >
                                <h3 className="text-3xl font-black font-orbitron text-white mb-2 uppercase tracking-wider group-hover/card:text-violet-300 transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-violet-500 font-bold font-rajdhani tracking-[0.2em] mb-6 uppercase text-sm">
                                    {event.subtitle}
                                </p>

                                <ul className={`flex flex-col gap-2 text-gray-300 font-rajdhani ${idx % 2 === 0 ? 'items-center md:items-start' : 'items-center md:items-end'}`}>
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

export const Prizes = () => (
    <Section id="prizes" title="Prizes">
        <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 relative z-10">

            {/* FEATURED SECTION */}
            <motion.div
                variants={itemVariants}
                className="w-full mb-16"
            >
                {/* Headers are built into the cards in the reference, but we can add a subtle separator if needed. 
                    The reference has "FEATURED" badges on the cards themselves. */}

                <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full">
                    {/* Card 1: Grand Winner */}
                    <div className="w-full md:w-1/2 group relative">
                        {/* FEATURED Badge */}
                        <div className="absolute -top-4 left-8 bg-[#eab308] text-black font-black font-orbitron text-xs px-4 py-1 skew-x-[-20deg] z-20 shadow-[0_0_10px_rgba(234,179,8,0.5)] tracking-widest uppercase">
                            FEATURED
                        </div>

                        <div
                            className="h-full bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#0f0718] p-1 relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(234,179,8,0.3)] group-hover:-translate-y-2 clip-path-chamfer"
                            style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
                        >
                            {/* Inner Content */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4c1d95]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Glow Effect on Hover */}
                            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                            <div className="p-8 md:p-12 flex flex-col justify-center h-full relative z-10">
                                <h3 className="text-5xl md:text-6xl font-black text-white font-rajdhani drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                                    <span className="text-[#eab308]">₹</span>45,000
                                </h3>
                                <p className="text-[#eab308] font-orbitron tracking-[0.2em] text-sm md:text-base mt-2 uppercase opacity-90">
                                    GRAND NEURATHON WINNER
                                </p>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute bottom-0 right-0 w-16 h-4 bg-[#eab308] skew-x-[-45deg] translate-y-2 translate-x-4 shadow-[0_0_20px_#eab308]"></div>
                        </div>
                    </div>

                    {/* Card 2: Sustainable */}
                    <div className="w-full md:w-1/2 group relative">
                        {/* FEATURED Badge */}
                        <div className="absolute -top-4 left-8 bg-[#eab308] text-black font-black font-orbitron text-xs px-4 py-1 skew-x-[-20deg] z-20 shadow-[0_0_10px_rgba(234,179,8,0.5)] tracking-widest uppercase">
                            FEATURED
                        </div>

                        <div
                            className="h-full bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#0f0718] p-1 relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(234,179,8,0.3)] group-hover:-translate-y-2"
                            style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
                        >
                            {/* Inner Content */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4c1d95]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Glow Effect */}
                            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                            <div className="p-8 md:p-12 flex flex-col justify-center h-full relative z-10">
                                <h3 className="text-4xl md:text-5xl font-black text-white font-rajdhani drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                                    <span className="text-[#eab308]">₹</span>30,000
                                </h3>
                                <p className="text-[#eab308] font-orbitron tracking-[0.2em] text-xs md:text-sm mt-2 uppercase opacity-90">
                                    MOST SUSTAINABLE SOLUTION
                                </p>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute bottom-0 right-0 w-16 h-4 bg-[#eab308] skew-x-[-45deg] translate-y-2 translate-x-4 shadow-[0_0_20px_#eab308]"></div>
                        </div>
                    </div>
                </div>
            </motion.div>


            {/* MINI MODULES HEADER */}
            <motion.div variants={itemVariants} className="text-center mb-10 w-full">
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-[#eab308] tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]">
                    MINI MODULES
                </h3>
            </motion.div>

            {/* MINI MODULES CARDS */}
            <motion.div variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "MINI MAZE", amount: "1,500" },
                    { title: "CASE STUDY", amount: "2,000" },
                    { title: "QUIZZER", amount: "2,500" }
                ].map((item, idx) => (
                    <div key={idx} className="group relative w-full">
                        {/* MINI MODULES Badge */}
                        <div className="absolute -top-3 left-6 bg-[#eab308] text-black font-black font-orbitron text-[10px] px-3 py-1 skew-x-[-20deg] z-20 shadow-[0_0_10px_rgba(234,179,8,0.5)] tracking-widest uppercase">
                            MINI MODULES
                        </div>

                        <div
                            className="h-full bg-gradient-to-br from-[#1a0b2e] via-[#22103a] to-[#0f0718] relative overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] group-hover:-translate-y-1"
                            style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}
                        >
                            {/* Inner Content */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4c1d95]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="p-8 flex flex-col justify-center h-full relative z-10 pt-12">
                                <h3 className="text-3xl font-black text-white font-rajdhani">
                                    <span className="text-[#eab308]">₹</span>{item.amount}
                                </h3>
                                <p className="text-[#eab308] font-orbitron tracking-[0.1em] text-xs mt-1 uppercase opacity-80">
                                    {item.title}
                                </p>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute bottom-0 right-0 w-10 h-3 bg-[#eab308] skew-x-[-45deg] translate-y-1 translate-x-2 shadow-[0_0_15px_#eab308]"></div>
                        </div>
                    </div>
                ))}
            </motion.div>

        </div>
    </Section>
);

// --- PURPLE MARQUEE SPONSORS ---
export const Sponsors = () => {
    // Row 1: Tech Giants
    const row1Sponsors = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" }
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
        <Section id="sponsors" className="py-24 bg-black relative overflow-hidden" title="">
            {/* Header */}
            <div className="flex items-center justify-center mb-16 relative z-10 w-full">
                {/* Left Bracket */}
                <div className="hidden md:flex items-center justify-center mr-8">
                    <div className="w-4 h-12 bg-transparent border-l-4 border-t-4 border-b-4 border-violet-500 skew-x-[-15deg] shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                    <div className="w-3 h-3 bg-violet-500 ml-2 rotate-45 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                </div>

                {/* Main Title Container */}
                <div className="relative px-12 py-4 bg-gradient-to-r from-transparent via-violet-900/10 to-transparent border-y border-violet-500/30">
                    <h2 className="text-4xl md:text-6xl font-black font-orbitron tracking-[0.1em] text-violet-400 uppercase drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] whitespace-nowrap">
                        SPONSORS
                    </h2>
                    {/* Glow lines */}
                    <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
                </div>

                {/* Right Bracket */}
                <div className="hidden md:flex items-center justify-center ml-8">
                    <div className="w-3 h-3 bg-violet-500 mr-2 rotate-45 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                    <div className="w-4 h-12 bg-transparent border-r-4 border-t-4 border-b-4 border-violet-500 skew-x-[15deg] shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="flex flex-col gap-16 relative z-10 overflow-hidden opacity-90 hover:opacity-100 transition-opacity duration-500 group">

                {/* Row 1: Left to Right (Actually CSS Marquee Logic: 0% to -50% is standard L->R equivalent if negative, wait. )
                    If we want visual Left->Right movement:
                    Start at -50% (left) and move to 0% (right)?
                    Or standard marquee moves Right->Left (content slides left).
                    Let's stick to the previous visual direction.
                    Previous Row 1: x: ["-50%", "0%"] -> moved RIGHT.
                    Previous Row 2: x: ["0%", "-50%"] -> moved LEFT.

                    So Row 1 needs `animate-marquee-reverse` (defined as -50% -> 0%).
                    Row 2 needs `animate-marquee` (defined as 0% -> -50%).
                */}
                <div className="flex overflow-hidden relative w-full">
                    <div className="flex gap-20 items-center whitespace-nowrap animate-marquee-reverse group-hover:paused will-change-transform">
                        {marqueeRow1.map((brand, idx) => (
                            <div key={`row1-${idx}`} className="w-28 md:w-40 flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={brand.url}
                                    alt={brand.name}
                                    className="w-full h-12 object-contain"
                                    style={{
                                        filter: brand.name === "GitHub"
                                            ? "brightness(2.5) sepia(1) hue-rotate(240deg) saturate(2) contrast(1.1) drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))"
                                            : "brightness(0.9) sepia(1) hue-rotate(240deg) saturate(3) contrast(1.1) drop-shadow(0 0 5px rgba(139, 92, 246, 0.3))"
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex overflow-hidden relative w-full">
                    <div className="flex gap-20 items-center whitespace-nowrap animate-marquee group-hover:paused will-change-transform">
                        {marqueeRow2.map((brand, idx) => (
                            <div key={`row2-${idx}`} className="w-28 md:w-40 flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={brand.url}
                                    alt={brand.name}
                                    className="w-full h-12 object-contain"
                                    style={{
                                        filter: "brightness(0.9) sepia(1) hue-rotate(240deg) saturate(3) contrast(1.1) drop-shadow(0 0 5px rgba(139, 92, 246, 0.3))"
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
            className="min-h-screen flex flex-col justify-start pt-32 bg-bg-dark relative overflow-hidden"
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
                            <span className={`font-dune tracking-wider text-sm md:text-base transition-colors uppercase pr-8 ${openIndex === idx ? 'text-violet-300' : 'text-violet-400/80 group-hover:text-violet-300'}`}>
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
