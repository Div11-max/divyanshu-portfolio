
const certifications = [
    {
        title: "Managing Projects with AI",
        organization: "AI CERTs",
        platform: "Coursera",
        date: "Oct 2026",
        category: "Project Management",
        file: "/certificates/ai-certs-managing-projects-with-ai.pdf",
    },
    {
        title: "Foundations of Data Science",
        organization: "Google",
        platform: "Coursera",
        date: "Mar 2025",
        category: "Data Science",
        file: "/certificates/google-foundations-data-science.pdf",
    },
    {
        title: "Get Started with Python",
        organization: "Google",
        platform: "Coursera",
        date: "Mar 2025",
        category: "Programming",
        file: "/certificates/google-get-started-python.pdf",
    },
    {
        title: "Business Analytics with Excel",
        organization: "Simplilearn",
        platform: "SkillUp",
        date: "Dec 2023",
        category: "Analytics",
        file: "/certificates/business-analytics-excel.pdf",
    },
    {
        title: "Excel Automation using ChatGPT",
        organization: "Simplilearn",
        platform: "SkillUp",
        date: "Dec 2023",
        category: "Analytics",
        file: "/certificates/excel-automation-chatgpt.pdf",
    },
    {
        title: "Data Science Training",
        organization: "Internshala",
        platform: "Internshala Trainings",
        date: "Jan 2024",
        category: "Data Science",
        file: "/certificates/data-science-training.pdf",
    },
    {
        title: "Complete AI & Machine Learning, Data Science Bootcamp",
        organization: "Udemy",
        platform: "Udemy",
        date: "Jan 2025",
        category: "AI / ML",
        file: "/certificates/ai-ml-data-science-bootcamp.pdf",
    },
    {
        title: "Complete Python Bootcamp From Zero to Hero in Python",
        organization: "Udemy",
        platform: "Udemy",
        date: "Jan 2025",
        category: "Programming",
        file: "/certificates/python-bootcamp.pdf",
    },
    {
        title: "Lung Tissue Classification Using a Hybrid Model",
        organization: "SparrowAI",
        platform: "Project Certificate",
        date: "Dec 2025",
        category: "Artificial Intelligence",
        file: "/certificates/lung-tissue-classification.pdf",
    },
];

const internships = [
    {
        title: "Software Developer Intern",
        organization: "RnR Innotech Pvt. Ltd.",
        period: "May 2026 — July 2026",
        description:
            "Completed a 2-month internship involving Python and React JS with hands-on experience in full-stack development, backend development, and frontend integration.",
        technologies: [
            "Python",
            "React JS",
            "Full-Stack Development",
        ],
        file: "/certificates/rnr-innotech-internship.pdf",
    },
    {
        title: "Software Development Intern",
        organization: "Bushel Technologies Pvt. Ltd.",
        period: "May 2025 — July 2025",
        description:
            "Worked on web application development and created Study Planner using Python, JavaScript, HTML, CSS, Git, and Replit AI.",
        technologies: [
            "Python",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "Replit AI",
        ],
        file: "/certificates/bushel-internship.pdf",
    },
];

function Certifications() {
    return (
        <section
            id="certifications"
            className="border-t border-white/10 bg-black px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                        Certifications & Experience
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Learning beyond the classroom.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Certifications, technical training, and professional
                        credentials that reflect my continuous learning and
                        practical experience.
                    </p>
                </div>

                {/* Certifications */}
                <div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white">
                            Certifications
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Professional courses and technical credentials.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {certifications.map((certificate) => (
                            <article
                                key={certificate.title}
                                className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.04]"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-lg font-semibold text-blue-400">
                                        {certificate.organization.charAt(0)}
                                    </div>

                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-500">
                                        {certificate.date}
                                    </span>
                                </div>

                                <div className="mt-7 flex-1">
                                    <p className="text-sm font-medium text-blue-400">
                                        {certificate.organization}
                                    </p>

                                    <h4 className="mt-2 text-xl font-semibold leading-snug text-white">
                                        {certificate.title}
                                    </h4>

                                    <p className="mt-3 text-sm text-gray-500">
                                        {certificate.platform}
                                    </p>

                                    <span className="mt-5 inline-block rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                                        {certificate.category}
                                    </span>
                                </div>

                                <a
                                    href={certificate.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-medium text-gray-400 transition hover:text-white"
                                >
                                    <span>View Certificate</span>
                                    <span className="text-lg text-blue-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                        ↗
                                    </span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Internships */}
                <div className="mt-24">
                    <div className="mb-8">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                            Professional Experience
                        </p>

                        <h3 className="text-2xl font-semibold text-white">
                            Internship Experience
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Practical experience through industry projects
                            and software development work.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {internships.map((internship) => (
                            <article
                                key={internship.organization}
                                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.04]"
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-blue-400">
                                            {internship.organization}
                                        </p>

                                        <h4 className="mt-2 text-2xl font-semibold text-white">
                                            {internship.title}
                                        </h4>
                                    </div>

                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                                        {internship.period}
                                    </span>
                                </div>

                                <p className="mt-5 text-sm leading-7 text-gray-400">
                                    {internship.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {internship.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={internship.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-medium text-gray-400 transition hover:text-white"
                                >
                                    <span>View Internship Certificate</span>
                                    <span className="text-lg text-blue-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                        ↗
                                    </span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Certifications;
