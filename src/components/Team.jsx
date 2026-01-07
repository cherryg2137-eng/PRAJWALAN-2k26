import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TeamCard from './TeamCard';
import aakashImg from '../assets/aakash_tech_final.jpg';
import abhiImg from '../assets/abhi_marketing_v3.png';
import mounikaImg from '../assets/mounika_tech.jpg';
import charanImg from '../assets/charan_tech.png';
import madhuImg from '../assets/madhu_design_v4.png';
import prapurnaImg from '../assets/prapurna_design_v2.jpg';
import satyaImg from '../assets/satya_design_v2.png';
import meghanaImg from '../assets/meghana_design_v2.png';
import deepakImg from '../assets/deepak_design_v2.png';
import manasaImg from '../assets/manasa_art.png';
import hasiniImg from '../assets/hasini_art.png';
import ramyaImg from '../assets/ramya_art.png';
import amruthaImg from '../assets/amrutha_marketing.jpg';
import amithImg from '../assets/amith_marketing.png';
import bhargaviImg from '../assets/bhargavi_marketing.png';
import chaitanyaImg from '../assets/chaitanya_marketing.png';
import hemanthImg from '../assets/hemanth_marketing.png';
import niharikaImg from '../assets/niharika_marketing.png';
import ganaImg from '../assets/gana_marketing.png';
import rishikImg from '../assets/rishik_marketing.png';
import deepakChiefImg from '../assets/deepak_chief.png';
import venkatChiefImg from '../assets/venkat_chief.png';
import anushaChiefImg from '../assets/anusha_chief.png';
import lokeshChiefImg from '../assets/lokesh_chief.png';

const Team = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    // 1.5. Festival Chiefs (Restored)
    const chiefs = [
        {
            id: 'c1',
            name: "Deepak",
            img: deepakChiefImg,
            socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
        {
            id: 'c2',
            name: "Venkat Sai",
            img: venkatChiefImg,
            socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
        {
            id: 'c3',
            name: "Anusha",
            img: anushaChiefImg,
            socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
        {
            id: 'c4',
            name: "Lokesh Gandhi",
            img: lokeshChiefImg,
            socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        }
    ];

    // 2. Technical Team (Existing)
    const techTeam = [
        {
            id: 5,
            name: "Aakash",
            img: aakashImg,
            socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
        {
            id: 6,
            name: "Charan",
            img: charanImg,
            socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
        {
            id: 7,
            name: "Mounika",
            img: mounikaImg,
            socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        }
    ];

    // 3. Designing Team
    const designTeam = [
        { id: 'd1', name: "Madhu", img: madhuImg },
        { id: 'd2', name: "Prapurna", img: prapurnaImg },
        { id: 'd3', name: "Satya", img: satyaImg },
        { id: 'd4', name: "Meghana", img: meghanaImg },
        { id: 'd5', name: "Deepak Vardhan", img: deepakImg },
    ].map(m => ({ ...m, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } }));

    // 4. Art & Craft Team
    const artTeam = [
        { id: 'a1', name: "Suneetha", img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767783114/Gemini_Generated_Image_td2a3ltd2a3ltd2a_imtlox.png" },
        { id: 'a2', name: "Manasa", img: manasaImg },
        { id: 'a3', name: "Hasini", img: hasiniImg },
        { id: 'a4', name: "Ramya", img: ramyaImg },
    ].map(m => ({ ...m, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } }));

    // 5. Marketing Team
    const marketingTeam = [
        { id: 'm1', name: "Amrutha", img: amruthaImg },
        { id: 'm2', name: "Amith", img: amithImg },
        { id: 'm3', name: "Abhi", img: abhiImg },
        { id: 'm4', name: "Bhargavi", img: bhargaviImg },
        { id: 'm5', name: "Chaitanya", img: chaitanyaImg },
        { id: 'm6', name: "Hemanth", img: hemanthImg },
        { id: 'm7', name: "Niharika", img: niharikaImg },
        { id: 'm8', name: "Rishik", img: rishikImg },
        { id: 'm9', name: "Gana", img: ganaImg },
    ].map(m => ({ ...m, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } }));


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
