function About() {
    return (
        <section
            id="about"
            className="border-t border-white/10 bg-black px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-5xl">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                        About Me
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Turning ideas, data, and technology
                        <br />
                        into practical solutions.
                    </h2>
                </div>

                {/* About Content */}
                <div className="mt-16 max-w-5xl">

                    <p className="text-lg leading-8 text-gray-400 sm:text-xl sm:leading-9">
                        I'm a Computer Science and Data Science student at
                        NMIMS, passionate about data science, machine learning,
                        software development, and solving real-world problems
                        through technology.
                    </p>

                    <p className="mt-7 text-lg leading-8 text-gray-400 sm:text-xl sm:leading-9">
                        My work spans data analysis, machine learning, web
                        development, and intelligent systems. I enjoy taking
                        problems from an initial idea to practical working
                        solutions by combining analytical thinking with
                        software engineering.
                    </p>

                    <p className="mt-7 text-lg leading-8 text-gray-400 sm:text-xl sm:leading-9">
                        Currently, I'm focused on strengthening my skills in
                        data science, software development, and artificial
                        intelligence while building projects with meaningful
                        real-world applications.
                    </p>

                    {/* Stats */}
                    <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">

                        {/* CGPA */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                            <p className="text-4xl font-semibold text-white">
                                3.35
                            </p>

                            <p className="mt-2 text-sm text-gray-500">
                                CGPA / 4.0
                            </p>
                        </div>

                        {/* Projects */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                            <p className="text-4xl font-semibold text-white">
                                8+
                            </p>

                            <p className="mt-2 text-sm text-gray-500">
                                Projects Built
                            </p>
                        </div>

                        {/* Internships */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                            <p className="text-4xl font-semibold text-white">
                                2+
                            </p>

                            <p className="mt-2 text-sm text-gray-500">
                                Internships
                            </p>
                        </div>

                        {/* Graduation */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                            <p className="text-4xl font-semibold text-white">
                                2027
                            </p>

                            <p className="mt-2 text-sm text-gray-500">
                                Expected Graduation
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;