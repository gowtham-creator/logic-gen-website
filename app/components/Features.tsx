export default function FeaturesSection() {
    const features = [
        {
            id: 1,
            color: "bg-purple-300",
            title: "Extract Structured Rules",
            desc:
                "Identify conditions, thresholds, definitions, and dependencies from policy text and code with full source traceability.",
            // simple illustrative SVG (document + magnifier)
            Illustration: () => (
                <svg viewBox="0 0 200 160" className="w-full h-44" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                            <stop offset="0" stopColor="#eef2ff" />
                            <stop offset="1" stopColor="#f8fafc" />
                        </linearGradient>
                    </defs>
                    <rect x="8" y="8" width="110" height="110" rx="8" fill="#ffffff" stroke="#e6eefb" />
                    <rect x="22" y="26" width="78" height="10" rx="3" fill="#ffd773" />
                    <rect x="22" y="44" width="52" height="8" rx="3" fill="#bae6fd" />
                    <rect x="22" y="58" width="68" height="8" rx="3" fill="#bbf7d0" />

                    <g transform="translate(120,40)">
                        <circle cx="30" cy="30" r="28" fill="#dbeafe" />
                        <circle cx="30" cy="30" r="20" fill="#eff6ff" />
                        <path d="M22 30l6 6 12-12" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            ),
        },
        {
            id: 2,
            color: "bg-yellow-300",
            title: "Detect Ambiguities & Gaps",
            desc:
                "Automatically highlights unclear, conflicting, missing, or inconsistent rules using a 9-type ambiguity classifier.",
            Illustration: () => (
                <svg viewBox="0 0 200 160" className="w-full h-44" preserveAspectRatio="xMidYMid meet">
                    <rect x="8" y="8" width="110" height="110" rx="8" fill="#ffffff" stroke="#e6eefb" />
                    <rect x="22" y="28" width="72" height="10" rx="3" fill="#ffdede" />
                    <g transform="translate(120,30)">
                        <circle cx="30" cy="34" r="28" fill="#fff7ed" />
                        <path d="M22 20l16 28 16-28" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="28" y="40" width="4" height="12" rx="2" fill="#f97316" />
                    </g>
                </svg>
            ),
        },
        {
            id: 3,
            color: "bg-violet-300",
            title: "Validate & Test Automatically",
            desc:
                "Generates pytest suites and simulations to verify accuracy, coverage, and compliance across all decision paths.",
            Illustration: () => (
                <svg viewBox="0 0 200 160" className="w-full h-44" preserveAspectRatio="xMidYMid meet">
                    <rect x="8" y="8" width="110" height="110" rx="8" fill="#ffffff" stroke="#e6eefb" />
                    <g transform="translate(120,32)">
                        <rect x="2" y="2" width="56" height="56" rx="8" fill="#eef2ff" />
                        <path d="M20 28l6 6 14-14" stroke="#06b6d4" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <g transform="translate(-34,70)">
                            <rect x="10" y="-20" width="20" height="8" rx="3" fill="#eef2ff" />
                            <rect x="34" y="-20" width="20" height="8" rx="3" fill="#eef2ff" />
                        </g>
                    </g>
                </svg>
            ),
        },
    ];

    return (
        <section className="py-12 sm:py-16 md:py-[100px] bg-[#fafafa] z-10">
            <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[80%] mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center text-center">
                    <div className="inline-block bg-[#DCF2FD] text-black font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">Features</div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4 max-w-3xl">Turn complex policies into clean, executable logic. Instantly.</h2>
                </div>

                {/* top feature list */}
                <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((f) => (
                        <div key={f.id} className="flex flex-row items-start">
                            <div className={`h-4 w-8 sm:h-5 sm:w-11 rounded-full ${f.color} mr-3 sm:mr-5 flex-shrink-0 mt-1`} />
                            <div>
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">{f.title}</h3>
                                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* illustrations / cards */}
                <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {features.map((f) => (
                        <div key={f.id} className="rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col items-center">
                            <div className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden bg-white">
                                <f.Illustration />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
