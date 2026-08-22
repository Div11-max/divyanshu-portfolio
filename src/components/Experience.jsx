const experiences = [
    {
        number: "01",
        role: "Software Developer Intern",
        company: "RnR Innotech Pvt. Ltd.",
        location: "Nagpur, Maharashtra",
        period: "25 May 2026 — 24 July 2026",

        description:
            "Completed a 2-month software development internship working with Python and React JS. Gained practical experience in full-stack development, backend development, frontend integration, and building project features in a real development environment.",

        highlights: [
            "Worked with Python and React JS",
            "Contributed to full-stack development",
            "Worked on backend development and frontend integration",
            "Built and contributed to project features",
        ],

        technologies: [
            "Python",
            "React JS",
            "Full-Stack Development",
            "Backend Development",
            "Frontend Integration",
        ],

        certificate: "/certificates/rnr-innotech-internship.pdf",
    },

    {
        number: "02",
        role: "Software Development Intern",
        company: "Bushel Technologies Pvt. Ltd.",
        location: "Nagpur, Maharashtra",
        period: "15 May 2025 — 15 July 2025",

        description:
            "Worked on web application development and created Study Planner under the supervision of technical managers. Gained practical exposure to modern software development processes including code review, task management, and development best practices.",

        highlights: [
            "Created Study Planner",
            "Worked on web application development",
            "Used Python, JavaScript, HTML and CSS",
            "Worked with Git and Replit AI",
            "Learned code review and task management practices",
        ],

        technologies: [
            "Python",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "Replit AI",
        ],

        certificate: "/certificates/bushel-internship.pdf",
    },
];

function Experience() {
    return (
        <section
            id="experience"
            className="overflow-hidden border-t border-white/10 bg-black px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                        Experience
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Where I've worked.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Hands-on experience across software development,
                        web applications, and full-stack development.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Timeline line */}
                    <div className="absolute left-[7px] top-2 hidden h-[calc(100%-8px)] w-px bg-white/10 md:block" />

                    <div className="space-y-12">

                        {experiences.map((experience) => (
                            <article
                                key={experience.number}
                                className="relative md:pl-16"
                            >

                                {/* Timeline dot */}
                                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-blue-400 bg-black md:block" />

                                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] lg:p-10">

                                    {/* Header */}
                                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                                        <div>
                                            <p className="text-sm font-medium text-blue-400">
                                                {experience.number}
                                            </p>

                                            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                                                {experience.role}
                                            </h3>

                                            <p className="mt-2 text-lg text-gray-300">
                                                {experience.company}
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {experience.location}
                                            </p>
                                        </div>

                                        <div className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
                                            {experience.period}
                                        </div>

                                    </div>

                                    {/* Description */}
                                    <p className="mt-8 max-w-5xl text-base leading-8 text-gray-400">
                                        {experience.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="mt-8">

                                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
                                            Highlights
                                        </p>

                                        <ul className="space-y-3">
                                            {experience.highlights.map((highlight) => (
                                                <li
                                                    key={highlight}
                                                    className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />

                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>

                                    {/* Technologies */}
                                    <div className="mt-8 flex flex-wrap gap-2">
                                        {experience.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300 transition hover:border-white/20 hover:text-white"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Certificate */}
                                    <div className="mt-8 border-t border-white/10 pt-7">

                                        <a
                                            href={experience.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/10 px-5 py-3 text-sm font-medium text-blue-300 transition duration-300 hover:border-blue-400/40 hover:bg-blue-400/20 hover:text-white"
                                        >
                                            <span>
                                                View Internship Certificate
                                            </span>

                                            <span className="text-lg">
                                                ↗
                                            </span>
                                        </a>

                                    </div>

                                </div>
                            </article>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;