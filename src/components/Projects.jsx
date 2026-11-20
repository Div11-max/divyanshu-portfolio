const projects = [
    {
        number: "01",
        featured: true,
        title: "AI-Based Timeline-Aware Intelligent Trip Planning System",
        description:
            "A constraint-aware route planner that models the road network as a weighted graph (distance, time, fuel cost, toll charges) and validates budget and travel-time constraints during path exploration. It also recommends intelligent en-route stops within the planned timeline. The prototype is built in Python with the Google Maps Directions API.",
        tags: [
            "Python",
            "Google Maps Directions API",
            "Graph Algorithms",
            "Route Optimization",
            "Constraint-Based Planning",
        ],
        status: "Published · IEEE ICSIT 2026",
    },

    {
        number: "02",
        featured: true,
        title: "JudiSmart — Judicial Case Duration Prediction",
        description:
            "A machine learning framework that predicts case-disposal duration and supports explainable prioritization of pending cases, built on about 8 crore Indian e-Courts records (2010–2018) with 69 engineered features. The final LightGBM model, trained on 51.9 million cases and tested on 7.3 million unseen 2018 cases, reached an MAE of 99.26 days, with 86.66% of predictions within ±180 days.",
        tags: [
            "Python",
            "LightGBM",
            "CatBoost",
            "XGBoost",
            "Machine Learning",
            "LegalTech",
        ],
        status: "ICDEC-2026 · Tentatively Accepted",
    },

    {
        number: "03",
        featured: true,
        title: "Informal Settlement Detection & Growth Forecasting in Mumbai",
        description:
            "A computer vision pipeline that detects informal settlements from aerial imagery of 14 Mumbai locations (2017–2025). 957 images were tiled into 3,609 patches, and a location-disjoint U-Net was trained on quality-filtered pseudo-labels (Dice 0.727, IoU 0.581 agreement on 802 held-out tiles). Persistence, linear, and quadratic forecasts were compared with rolling-origin validation (MAE 1.55 percentage points).",
        tags: [
            "Python",
            "PyTorch",
            "OpenCV",
            "U-Net",
            "Image Segmentation",
            "Aerial Imagery",
        ],
        status: "Computer Vision",
    },

    {
        number: "04",
        featured: false,
        title: "Hindi Fake News Detection",
        description:
            "An NLP project for detecting misleading Hindi news using text preprocessing and TF-IDF features. It compares TF-IDF-based classifiers and uses a calibrated linear Support Vector Machine for the final predictions.",
        tags: [
            "Python",
            "NLP",
            "TF-IDF",
            "Linear SVM",
            "Text Classification",
        ],
        status: "Natural Language Processing",
    },

    {
        number: "05",
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
        number: "06",
        featured: false,
        title: "Accident Severity Prediction",
        description:
            "A machine learning project focused on predicting accident severity, achieving 75.52% accuracy while improving recall for the minority class.",
        tags: [
            "Python",
            "LightGBM",
            "Classification",
            "Model Evaluation",
        ],
        status: "Machine Learning",
    },

    {
        number: "07",
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

    {
        number: "09",
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
        number: "10",
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
        number: "11",
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
                        Research and engineering projects across machine
                        learning, computer vision, NLP, analytics, and
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
        </section>
    );
}

export default Projects;