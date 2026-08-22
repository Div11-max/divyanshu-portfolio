const projects = [
    {
        number: "01",
        featured: true,
        title: "AI-Based Timeline-Aware Intelligent Trip Planning System",
        description:
            "An AI-powered trip planning system focused on timeline-aware route optimization, intelligent en-route stop recommendations, and constraint-based planning.",
        tags: [
            "Artificial Intelligence",
            "Route Optimization",
            "Constraint-Based Planning",
        ],
        status: "IEEE ICSIT 2026",
    },

    {
        number: "02",
        featured: false,
        title: "Image Based Vehicle Classification",
        description:
            "An intelligent image-based vehicle classification system using OpenCV, YOLOv8, feature engineering, and XGBoost to classify Hatchback, Sedan, and SUV with 86.2% accuracy.",
        tags: [
            "Python",
            "OpenCV",
            "YOLOv8",
            "XGBoost",
            "Image Processing",
            "Feature Engineering",
        ],
        status: "Machine Learning",
    },

    {
        number: "03",
        featured: false,
        title: "Accident Severity Prediction",
        description:
            "A machine learning project focused on predicting accident severity, achieving 75.52% accuracy while improving recall for the minority class.",
        tags: [
            "Machine Learning",
            "Classification",
            "Model Evaluation",
        ],
        status: "Machine Learning",
    },

    {
        number: "04",
        featured: false,
        title: "Smart Power Distribution System",
        description:
            "A Smart Energy Distribution System in C++ that simulates and manages an energy grid using a dynamic graph. The system includes role-based access for Admin, Viewer, and Maintenance users and uses graph algorithms to optimize connectivity and distribution routes.",
        tags: [
            "C++",
            "Data Structures",
            "Dijkstra's Algorithm",
            "Floyd-Warshall",
            "Kruskal's Algorithm",
            "RBAC",
        ],
        status: "Algorithms",
    },

    {
        number: "05",
        featured: false,
        title: "Business Modeling with Visualisation",
        description:
            "Solved a transportation optimization problem using linear programming in Excel to minimize distribution costs across sources and destinations. Visualized insights with Tableau through interactive dashboards highlighting cost-effective strategies.",
        tags: [
            "Excel",
            "Linear Programming",
            "Data Modeling",
            "Tableau",
            "Data Visualization",
            "Optimization",
        ],
        status: "Data Analytics",
    },

    {
        number: "06",
        featured: false,
        title: "Expense Tracker App",
        description:
            "A web application that allows users to record daily transactions, track total income and expenses, categorize transactions, and view transactions for a selected date.",
        tags: [
            "Python",
            "Web Applications",
            "Data Management",
            "Transaction Tracking",
        ],
        status: "Web Application",
    },

    {
        number: "07",
        featured: false,
        title: "College Admission System",
        description:
            "Developed a College Admission System using C++ and Object-Oriented Programming principles, with features for student registration, course selection, and admission management.",
        tags: [
            "C++",
            "Object-Oriented Programming",
            "System Design",
            "Problem Solving",
        ],
        status: "Software Development",
    },

    {
        number: "08",
        featured: false,
        title: "Lung Tissue Classification using Hybrid Model",
        description:
            "A medical image analysis project applying Artificial Intelligence and Deep Learning techniques. A hybrid model integrating Convolutional Neural Networks and Machine Learning algorithms was developed to classify lung tissue images.",
        tags: [
            "Artificial Intelligence",
            "Machine Learning",
            "Deep Learning",
            "CNN",
            "Medical Image Analysis",
        ],
        status: "Computer Vision",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="border-t border-white/10 bg-black px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                        Projects
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Things I've built.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        A selection of projects where I have applied programming,
                        data science, machine learning, analytics, and
                        algorithmic problem-solving.
                    </p>
                </div>

                {/* Projects */}
                <div className="space-y-5">
                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] lg:p-10 ${project.featured ? "lg:p-12" : ""
                                }`}
                        >

                            {/* Background glow */}
                            {project.featured && (
                                <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
                            )}

                            <div className="relative grid gap-8 lg:grid-cols-[120px_1fr_auto] lg:items-start">

                                {/* Number */}
                                <div>
                                    <span className="text-sm font-medium text-blue-400">
                                        {project.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div>

                                    {/* Status */}
                                    <div className="flex flex-wrap items-center gap-3">

                                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                                            {project.status}
                                        </span>

                                        {project.featured && (
                                            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                                                Featured Project
                                            </span>
                                        )}

                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-white transition group-hover:text-blue-100 sm:text-3xl">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-5 max-w-3xl text-base leading-7 text-gray-400">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                </div>

                                {/* Arrow */}
                                <div className="hidden lg:block">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-xl text-gray-500 transition duration-300 group-hover:border-white/30 group-hover:text-white">
                                        ↗
                                    </span>
                                </div>

                            </div>
                        </article>
                    ))}
                </div>

            </div>
            {/* Currently Building */}
            <div className="mt-24">

                {/* Section heading */}
                <div className="mb-12 max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                        Currently Building
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        What I'm working on.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Ongoing projects where I'm exploring AI, machine learning,
                        natural language processing, and real-world applications.
                    </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">

                    {/* 01 — Hindi Fake News Detection */}
                    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.04] lg:p-10">

                        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-blue-500/10 blur-[100px]" />

                        <div className="relative">

                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                                    In Progress
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                                    NLP
                                </span>
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                                Hindi Fake News Detection
                            </h3>

                            <p className="mt-5 text-base leading-7 text-gray-400">
                                An NLP-based project focused on detecting potentially
                                fake or misleading Hindi news using text preprocessing,
                                feature engineering, and machine learning-based
                                classification techniques.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    "Python",
                                    "NLP",
                                    "Hindi NLP",
                                    "Text Classification",
                                    "Machine Learning",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </article>


                    {/* 02 — JudiSmart */}
                    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.04] lg:p-10">

                        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-blue-500/10 blur-[100px]" />

                        <div className="relative">

                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                                    In Progress
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                                    AI + LegalTech
                                </span>
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                                JudiSmart — AI-Based Judicial Delay Prediction
                            </h3>

                            <p className="mt-5 text-base leading-7 text-gray-400">
                                An AI-powered judicial decision-support system designed
                                to predict case disposal delays, prioritize pending cases
                                based on urgency and vulnerability, and recommend suitable
                                interventions such as Lok Adalat, Fast Track Courts,
                                Mediation, and Virtual Hearings.
                            </p>

                            <p className="mt-4 text-base leading-7 text-gray-400">
                                The system combines Machine Learning, Large Language Models,
                                and Explainable AI to analyze structured case data and
                                unstructured legal documents, with an interactive dashboard
                                for transparent, data-driven decision support.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    "Machine Learning",
                                    "NLP",
                                    "LLMs",
                                    "Explainable AI",
                                    "SHAP",
                                    "Python",
                                    "LegalTech",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </article>


                    {/* 03 — Informal Settlement Detection */}
                    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.04] lg:p-10">

                        <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-blue-500/10 blur-[100px]" />

                        <div className="relative">

                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                                    In Progress
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                                    Deep Learning
                                </span>
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                                Informal Settlement Detection & Growth Prediction
                            </h3>

                            <p className="mt-5 text-base leading-7 text-gray-400">
                                A deep learning-based system for detecting and mapping
                                informal settlements in Mumbai using multi-temporal
                                aerial imagery, estimating settlement area, and
                                predicting future growth patterns.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    "Deep Learning",
                                    "Computer Vision",
                                    "Image Segmentation",
                                    "U-Net",
                                    "DeepLabV3+",
                                    "ConvLSTM",
                                    "Aerial Imagery",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}

export default Projects;