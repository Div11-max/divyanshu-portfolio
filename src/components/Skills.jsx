const skillCategories = [
    {
        number: "01",
        title: "Programming",
        description: "Languages I use to build solutions and applications.",
        skills: ["Python", "SQL", "C++", "JavaScript"],
    },
    {
        number: "02",
        title: "Web Development",
        description: "Building full-stack applications with APIs and authentication.",
        skills: [
            "React.js",
            "Django REST Framework",
            "REST APIs",
            "JWT Authentication",
            "HTML",
            "CSS",
        ],
    },
    {
        number: "03",
        title: "Data Science",
        description: "Tools and techniques for working with and understanding data.",
        skills: [
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Data Cleaning",
            "Data Preprocessing",
            "EDA",
            "Data Visualization",
        ],
    },
    {
        number: "04",
        title: "Machine Learning",
        description: "Machine learning and computer vision approaches used across my projects.",
        skills: [
            "Classification",
            "Regression",
            "LightGBM",
            "CatBoost",
            "XGBoost",
            "CNN",
            "U-Net",
            "PyTorch",
            "OpenCV",
            "Model Evaluation",
        ],
    },
    {
        number: "05",
        title: "Databases & Tools",
        description: "Data storage, analysis, and development tools.",
        skills: [
            "PostgreSQL",
            "Relational Databases",
            "Microsoft Excel",
            "Git",
            "GitHub",
        ],
    },
    {
        number: "06",
        title: "Core CS",
        description: "Fundamental computer science concepts behind my work.",
        skills: [
            "DSA",
            "Graph Algorithms",
            "OOP",
            "RBAC",
            "Analytical Problem Solving",
        ],
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="border-t border-white/10 bg-black px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                        Skills
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Tools I use to turn problems into solutions.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        A combination of programming, data science, machine learning,
                        analytics, and core computer science skills.
                    </p>
                </div>

                {/* Skill cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category) => (
                        <div
                            key={category.number}
                            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
                        >
                            {/* Number */}
                            <div className="flex items-start justify-between">
                                <span className="text-sm font-medium text-blue-400">
                                    {category.number}
                                </span>

                                <span className="text-gray-700 transition group-hover:text-gray-500">
                                    →
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="mt-8 text-xl font-semibold text-white">
                                {category.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                {category.description}
                            </p>

                            {/* Skills */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300 transition group-hover:border-white/15"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;