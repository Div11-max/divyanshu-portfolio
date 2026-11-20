
const publications = [
    {
        status: "Published",
        statusStyle: "border-blue-400/20 bg-blue-400/10 text-blue-300",
        venue: "IEEE ICSIT 2026 · IEEE Xplore",
        title:
            "A Timeline-Aware Intelligent Trip Planning System with Integrated En-Route Stops",
        authors:
            "Divyanshu Patil, Ribsun Yadav, Parth Dhadke, Vivek Sondagar",
        link: "https://ieeexplore.ieee.org/document/11765069",
    },
    {
        status: "Tentatively Accepted",
        statusStyle: "border-white/10 bg-white/5 text-gray-400",
        venue:
            "ICDEC-2026 · International Conference on Data Engineering and Communication Systems",
        title:
            "JudiSmart: A Machine Learning Framework for Judicial Case Duration Prediction and Prioritization",
        authors: "Full paper tentatively accepted for oral presentation",
    },
];

// Add your actual positions of responsibility here when ready.
// Keeping this array empty prevents an undefined-variable error.
const leadership = [];

function Publications() {
    return (
        <section
            id="publications"
            className="border-t border-white/10 bg-black px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                        Publications & Leadership
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Research and responsibility.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Conference papers and the student roles I have held
                        at MPSTME.
                    </p>
                </div>

                {/* Publications */}
                <div className="space-y-5">
                    {publications.map((paper) => (
                        <article
                            key={paper.title}
                            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] lg:p-10"
                        >
                            <div className="flex flex-wrap items-center gap-3">
                                <span
                                    className={`rounded-full border px-3 py-1 text-xs ${paper.statusStyle}`}
                                >
                                    {paper.status}
                                </span>

                                <span className="text-sm text-gray-500">
                                    {paper.venue}
                                </span>
                            </div>

                            <h3 className="mt-5 max-w-4xl text-xl font-semibold leading-snug text-white sm:text-2xl">
                                {paper.title}
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-gray-500">
                                {paper.authors}
                            </p>

                            {/* Publication link */}
                            {paper.link && (
                                <a
                                    href={paper.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                                >
                                    View Publication
                                    <span aria-hidden="true">↗</span>
                                </a>
                            )}
                        </article>
                    ))}
                </div>

                {/* Leadership - displayed only when entries exist */}
                {leadership.length > 0 && (
                    <div className="mt-16">

                        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                            Positions of Responsibility
                        </p>

                        <div className="grid gap-5 md:grid-cols-2">
                            {leadership.map((item) => (
                                <div
                                    key={item.organisation}
                                    className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                                >
                                    <p className="text-sm text-blue-400">
                                        {item.period}
                                    </p>

                                    <h3 className="mt-4 text-xl font-semibold text-white">
                                        {item.role}
                                    </h3>

                                    <p className="mt-2 text-gray-400">
                                        {item.organisation}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                )}

            </div>
        </section>
    );
}

export default Publications;
