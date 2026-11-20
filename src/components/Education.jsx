const education = [
    {
        number: "01",
        status: "Currently Studying",
        institution:
            "SVKM's NMIMS Mukesh Patel School of Technology Management & Engineering",
        degree: "B.Tech — Computer Science (Data Science)",
        period: "Jul 2023 — Jun 2027",
        grade: "3.35 / 4.0 CGPA",

        description:
            "Pursuing a Bachelor's degree in Computer Science with a specialization in Data Science, with a focus on software development, data analytics, machine learning, and artificial intelligence.",

        achievements: [
            "Research paper published at IEEE ICSIT 2026 (IEEE Xplore)",
            "Full paper tentatively accepted for oral presentation at ICDEC-2026",
            "Developed multiple projects across Artificial Intelligence, Machine Learning, Data Science, and Software Development",
        ],

        cocurriculars: [
            "Completed three weeks of community service at Sunshine Foundation as part of the academic supplementary course requirement",
            "Participated in academic presentations and project-based activities",
        ],

        featured: true,
    },

    {
        number: "02",
        status: "Completed",
        institution: "Sevasadan Junior College",
        degree: "Higher Secondary — Science",
        period: "Jul 2021 — Jun 2023",
        grade: "77.83%",

        description:
            "Completed higher secondary education in the Science stream, building a foundation in mathematics, science, and analytical problem-solving.",

        featured: false,
    },

    {
        number: "03",
        status: "Completed",
        institution: "Centre Point School — India",
        degree: "Secondary School Certificate (SSC)",
        period: "Jun 2012 — Jun 2022",
        grade: "92.2%",

        description:
            "Completed secondary school education with a strong academic foundation. Participated in basketball and cricket as extracurricular activities.",

        featured: false,
    },
];

function Education() {
    return (
        <section
            id="education"
            className="border-t border-white/10 bg-black px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                        Education
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Where I learned.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        My academic journey from school to Computer Science
                        and Data Science.
                    </p>
                </div>

                {/* Education entries */}
                <div className="space-y-5">

                    {education.map((item) => (
                        <article
                            key={item.number}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] lg:p-10 ${item.featured
                                ? "border-blue-400/50"
                                : ""
                                }`}
                        >

                            {/* Featured glow */}
                            {item.featured && (
                                <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
                            )}

                            <div className="relative">

                                {/* Top row */}
                                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                                    <div>

                                        {/* Number + Status */}
                                        <div className="flex flex-wrap items-center gap-3">

                                            <span className="text-sm font-medium text-blue-400">
                                                {item.number}
                                            </span>

                                            <span
                                                className={`rounded-full border px-3 py-1 text-xs ${item.featured
                                                    ? "border-blue-400/20 bg-blue-400/10 text-blue-300"
                                                    : "border-white/10 bg-white/5 text-gray-400"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>

                                        </div>

                                        {/* Institution */}
                                        <h3 className="mt-5 max-w-5xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                                            {item.institution}
                                        </h3>

                                        {/* Degree */}
                                        <p className="mt-4 text-lg text-gray-300">
                                            {item.degree}
                                        </p>

                                    </div>

                                    {/* Period */}
                                    <div className="w-fit shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
                                        {item.period}
                                    </div>

                                </div>

                                {/* Grade */}
                                <div className="mt-10">

                                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                                        Grade
                                    </p>

                                    <p className="mt-4 text-2xl font-semibold text-white">
                                        {item.grade}
                                    </p>

                                </div>

                                {/* Description */}
                                <p className="mt-8 max-w-5xl text-base leading-8 text-gray-400 sm:text-lg">
                                    {item.description}
                                </p>

                                {/* Achievements + Co-curriculars
                                    Only for NMIMS */}
                                {item.featured && (
                                    <div className="mt-10 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-2">

                                        {/* Achievements */}
                                        <div>

                                            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                                                Achievements
                                            </p>

                                            <div className="mt-5 space-y-4">

                                                {item.achievements.map(
                                                    (achievement) => (
                                                        <div
                                                            key={achievement}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                                                            <p className="text-sm leading-7 text-gray-400 sm:text-base">
                                                                {achievement}
                                                            </p>
                                                        </div>
                                                    )
                                                )}

                                            </div>
                                        </div>

                                        {/* Co-curriculars */}
                                        <div>

                                            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                                                Co-curriculars
                                            </p>

                                            <div className="mt-5 space-y-4">

                                                {item.cocurriculars.map(
                                                    (activity) => (
                                                        <div
                                                            key={activity}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                                                            <p className="text-sm leading-7 text-gray-400 sm:text-base">
                                                                {activity}
                                                            </p>
                                                        </div>
                                                    )
                                                )}

                                            </div>
                                        </div>

                                    </div>
                                )}

                            </div>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Education;