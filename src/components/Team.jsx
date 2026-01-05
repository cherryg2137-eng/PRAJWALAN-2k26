import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TeamCard from './TeamCard';

const Team = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 1. Senior Festival Chiefs
    const seniorChiefs = [
        {
            id: 1,
            name: "Akash",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", // Placeholder
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        },
        {
            id: 2,
            name: "Bala Giridhar",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop", // Placeholder
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        }
    ];

    // 1.5. Festival Chiefs (Restored)
    const chiefs = [
        {
            id: 'c1',
            name: "Deepak",
            img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767289300/Deepak_Thota_z84d3o.jpg",
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        },
        {
            id: 'c2',
            name: "Venkat Sai",
            img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767289439/venkat_zyrp3b.jpg",
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        },
        {
            id: 'c3',
            name: "Anusha",
            img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767289524/Anusha_gwc8un.jpg",
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        },
        {
            id: 'c4',
            name: "Lokesh Gandhi",
            img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767289626/gandhi_vlvok9.jpg",
            socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "mailto:example@gmail.com" }
        }
    ];

    // 2. Technical Team (Existing)
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

    // 3. Designing Team
    const designTeam = [
        { id: 'd1', name: "Madhu", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" },
        { id: 'd2', name: "Prapurna", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" },
        { id: 'd3', name: "Satya", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop" },
        { id: 'd4', name: "Meghana", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" },
        { id: 'd5', name: "Deepak Vardhan", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" },
    ].map(m => ({ ...m, socials: { linkedin: "#", instagram: "#", email: "#" } }));

    // 4. Art & Craft Team
    const artTeam = [
        { id: 'a1', name: "Suneetha", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop" },
        { id: 'a2', name: "Manasa", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" },
        { id: 'a3', name: "Hasini", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop" },
        { id: 'a4', name: "Ramya", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop" },
    ].map(m => ({ ...m, socials: { linkedin: "#", instagram: "#", email: "#" } }));

    // 5. Marketing Team
    const marketingTeam = [
        { id: 'm1', name: "Amrutha", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop" },
        { id: 'm2', name: "Amith", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" },
        { id: 'm3', name: "Abhi", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" },
        { id: 'm4', name: "Bhargavi", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" },
        { id: 'm5', name: "Chaitanya", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop" },
        { id: 'm6', name: "Hemanth", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" },
        { id: 'm7', name: "Niharika", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" },
        { id: 'm8', name: "Rishik", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" },
        { id: 'm9', name: "Gana", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1000&auto=format&fit=crop" },
    ].map(m => ({ ...m, socials: { linkedin: "#", instagram: "#", email: "#" } }));


    const sectionVariants = {
        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
        }
    };

    const SectionHeader = ({ title }) => (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
            className="flex items-center justify-center mb-16 relative z-10 w-full mt-24"
        >
            <div className="flex items-center gap-2 md:gap-4">
                <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                    <path d="M35 5 L5 50 L35 95" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="relative overflow-hidden pl-4 pr-2 md:pl-6 md:pr-4 py-2 border-x-2 border-violet-400/80 bg-transparent rounded-xl">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent skew-x-12"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 0 }}
                    />
                    <h2 className="relative z-10 text-2xl md:text-5xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                        {title}
                    </h2>
                </div>

                <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                    <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </motion.div>
    );

    return (
        <section className="min-h-screen w-full pt-12 pb-32 relative bg-[#050505] overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-40 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* 1. SENIOR FESTIVAL CHIEFS */}
                <SectionHeader title="SENIOR FESTIVAL CHIEFS" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 max-w-[900px] mx-auto">
                    {seniorChiefs.map((member, index) => (
                        <TeamCard key={member.id} member={member} delay={index * 0.15} />
                    ))}
                </div>

                {/* 1.5. FESTIVAL CHIEFS */}
                <SectionHeader title="FESTIVAL CHIEFS" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 max-w-[1400px] mx-auto">
                    {chiefs.map((member, index) => (
                        <TeamCard key={member.id} member={member} delay={index * 0.15} />
                    ))}
                </div>

                {/* 2. TECHNICAL TEAM */}
                <SectionHeader title="TECHNICAL TEAM" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-[1100px] mx-auto">
                    {techTeam.map((member, index) => (
                        <TeamCard key={member.id} member={member} delay={index * 0.15} />
                    ))}
                </div>

                {/* 3. DESIGNING TEAM */}
                <SectionHeader title="DESIGNING TEAM" />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-[1400px] mx-auto">
                    {designTeam.map((member, index) => (
                        <TeamCard key={member.id} member={member} delay={index * 0.15} />
                    ))}
                </div>

                {/* 4. ART & CRAFT TEAM */}
                <SectionHeader title="ART & CRAFT TEAM" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-[1400px] mx-auto">
                    {artTeam.map((member, index) => (
                        <TeamCard key={member.id} member={member} delay={index * 0.15} />
                    ))}
                </div>

                {/* 5. MARKETING TEAM */}
                <SectionHeader title="MARKETING TEAM" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1200px] mx-auto justify-center">
                    {marketingTeam.map((member, index) => (
                        <TeamCard key={member.id} member={member} delay={index * 0.15} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Team;
