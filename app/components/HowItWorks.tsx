"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { satoshi } from "../fonts";

// --- Types ---
interface Item {
    id: number;
    title: string;
    desc: string;
    color: string; // Tailwind text color for icon
    glow: string;  // Hex color for the glow effect
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const items: Item[] = [
    {
        id: 1,
        title: "Ingest Documents & Code",
        desc: "It imports PDF, DOCX, HTML and scanned files, preserving original structure, headings, tables, and references.",
        color: "text-orange-500",
        glow: "#f97316",
        Icon: (props) => (<svg viewBox="0 0 24 24" fill="none" {...props}><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M7 8h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M7 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>),
    },
    {
        id: 2,
        title: "Extract Rules & Entities",
        desc: "AI identifies inputs, outputs, thresholds, definitions, formulas, and dependencies—from both policy text and code blocks.",
        color: "text-pink-500",
        glow: "#ec4899",
        Icon: (props) => (<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 8l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>),
    },
    {
        id: 3,
        title: "Detect Ambiguities & Conflicts",
        desc: "Flags unclear, missing, or contradictory rules using a 9-type ambiguity classifier.",
        color: "text-cyan-500",
        glow: "#06b6d4",
        Icon: (props) => (<svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" /><path d="M12 8v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M12 16h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>),
    },
    {
        id: 4,
        title: "Review & Approve",
        desc: "SMEs resolve issues, approve extracted rules, and maintain auditable decision history.",
        color: "text-green-500",
        glow: "#22c55e",
        Icon: (props) => (<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M12 5v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>),
    },
    {
        id: 5,
        title: "Generate DMN & Drools",
        desc: "Produces validated DMN tables, FEEL expressions, DRL files, and KJAR packages.",
        color: "text-blue-500",
        glow: "#3b82f6",
        Icon: (props) => (<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M4 6h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M4 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M4 18h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>),
    },
    {
        id: 6,
        title: "Validate, Simulate & Test",
        desc: "Runs validations, simulates scenarios, and generates pytest suites to ensure compliance.",
        color: "text-fuchsia-500",
        glow: "#d946ef",
        Icon: (props) => (<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.6" /></svg>),
    },
];

// --- Sub-Components ---

// The Card that lights up
const ActiveCard = ({ item, index, isActive }: { item: Item; index: number; isActive: boolean }) => {
    return (
        <motion.div
            className={cn(
                "relative flex items-center justify-between w-full z-20",
                // On mobile: always flex-row (content on right of line)
                // On desktop (md:): alternate based on index
                "flex-row md:flex-row",
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Mobile Node Indicator */}
            <div className="md:hidden flex-shrink-0 w-8 flex items-center justify-center relative">
                <div
                    className={cn(
                        "w-3 h-3 rounded-full border-2 z-30 transition-all duration-300",
                        isActive ? "bg-white scale-110" : "bg-gray-200 border-gray-100"
                    )}
                    style={{
                        borderColor: isActive ? item.glow : undefined
                    }}
                />
            </div>

            {/* Content Box */}
            <div className="flex-1 md:w-[42%] md:flex-none group">
                <div
                    className={cn(
                        "p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl border transition-all duration-500 relative overflow-hidden",
                        isActive
                            ? "bg-white shadow-[0_0_30px_8px_rgba(0,0,0,0.04)]"
                            : "bg-gray-50 border-gray-100 grayscale opacity-60 scale-95"
                    )}
                >
                    {/* Icon Badge */}
                    <div className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-500",
                        isActive ? "bg-gray-50" : "bg-gray-200"
                    )}>
                        <div className={cn("transition-all duration-500", isActive ? item.color : "text-gray-400")}>
                            <item.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                    </div>

                    <h3 className={cn(
                        "text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 transition-colors duration-500",
                        isActive ? "text-gray-900" : "text-gray-500"
                    )}>
                        {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
            </div>

            {/* Connector Line (Horizontal) - Hidden on mobile */}
            <div className="hidden md:flex w-[16%] items-center justify-center relative h-20">
                {/* We use an SVG here to draw the horizontal connector dynamically */}
                <ConnectorLine isActive={isActive} color={item.glow} isLeft={index % 2 !== 0} />

                {/* Central Node */}
                <div className={cn(
                    "w-4 h-4 rounded-full border-2 z-30 transition-all duration-300 shadow-lg",
                    isActive ? "scale-125 bg-white border-white" : "bg-gray-200 border-gray-100"
                )}
                    style={{
                        borderColor: isActive ? item.glow : undefined
                    }}
                />
            </div>

            {/* Empty side for layout balance - Hidden on mobile */}
            <div className="hidden md:block w-[42%]" />
        </motion.div>
    );
};

// The Horizontal Line that shoots out from the center
const ConnectorLine = ({ isActive, color, isLeft }: { isActive: boolean; color: string; isLeft: boolean }) => {
    return (
        <svg className="absolute top-1/2 -translate-y-1/2 w-full h-[4px] overflow-visible pointer-events-none">
            {/* Background Line */}
            <line
                x1={isLeft ? "100%" : "0%"}
                y1="0"
                x2={isLeft ? "0%" : "100%"}
                y2="0"
                stroke="#e5e7eb"
                strokeWidth="2"
                strokeDasharray="4 4"
            />
            {/* Active Glowing Line */}
            <motion.line
                x1={isLeft ? "100%" : "0%"}
                y1="0"
                x2={isLeft ? "0%" : "100%"}
                y2="0"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isActive ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            />
        </svg>
    );
}


// --- Main Component ---

export default function HowItWorksEnhanced() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCard, setActiveCard] = useState(0);

    // Track Scroll for the main beam
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 30%", "end 80%"],
    });

    // Smooth the scroll value for the beam
    const height = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), {
        stiffness: 500,
        damping: 90,
    });

    // Logic to determine which card should be active based on scroll depth
    // We use a useTransform listener to update React state for the cards
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            // Breakpoints for 6 items: approx 0.16 per item
            // We trigger slightly early to make it feel responsive
            const step = v * items.length;
            setActiveCard(Math.floor(step));
        });
        return () => unsubscribe();
    }, [scrollYProgress]);


    return (
        <section className={`py-12 sm:py-16 md:py-[100px] bg-white relative overflow-hidden ${satoshi.className}`}>
            {/* Header */}
            <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[80%] mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-block bg-[#FFC9F3] text-black font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">How it works?</div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4 max-w-3xl">From policy text to validated<br className="hidden sm:block" /> decision tables</h2>
                    </div>
                </motion.div>
            </div>

            {/* Timeline Container */}
            <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6 relative">

                {/* THE CENTRAL BEAM - Hidden on mobile, shown on md: */}
                <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-20 justify-center pointer-events-none">
                    {/* Static Track */}
                    <div className="h-full w-[2px] bg-gray-100 rounded-full" />

                    {/* Moving Gradient Beam */}
                    <motion.div
                        style={{ height: useTransform(height, (h) => `${h}%`) }}
                        className="absolute top-0 w-[4px] bg-gradient-to-b from-transparent via-blue-500 to-fuchsia-500 rounded-full"
                    >
                        {/* The Spark Head */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-fuchsia-500 animate-pulse z-40" />
                    </motion.div>
                </div>

                {/* Mobile Vertical Line - Shown on mobile only */}
                <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-fuchsia-500 rounded-full pointer-events-none" />

                {/* Cards List */}
                <div className="space-y-8 sm:space-y-12 md:space-y-24 pb-16 sm:pb-24 md:pb-32">
                    {items.map((item, index) => (
                        <ActiveCard
                            key={item.id}
                            item={item}
                            index={index}
                            isActive={activeCard >= index} // Keeps previous cards active
                        // OR use `activeCard === index` if you only want one active at a time
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}