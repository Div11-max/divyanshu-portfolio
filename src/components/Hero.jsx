function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24 lg:px-8"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

            <div className="relative mx-auto w-full max-w-7xl">

                {/* Status */}
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Computer Science & Data Science
                </div>

                {/* Main heading */}
                <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Divyanshu.
                    </span>
                </h1>

                {/* Intro */}
                <p className="mt-8 max-w-3xl text-2xl font-medium leading-relaxed text-gray-200 sm:text-3xl">
                    I turn data into decisions,
                    <br className="hidden sm:block" />
                    ideas into code, and bugs into character development. 😄
                </p>

                {/* Professional description */}
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                    Computer Science & Data Science student building
                    AI-powered systems, machine learning projects, and
                    practical software solutions.
                </p>

                {/* CTA buttons */}
                <div className="mt-10 flex flex-wrap gap-4">

                    <a
                        href="#projects"
                        className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:bg-gray-200"
                    >
                        View My Work →
                    </a>

                    <a
                        href="#contact"
                        className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.05]"
                    >
                        Let's Connect
                    </a>

                </div>

                {/* Social links */}
                <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-500">

                    <a
                        href="https://github.com/Div11-max"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/divyanshu-patil-029a71294/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:divyanshupatil1109@gmail.com"
                        className="transition hover:text-white"
                    >
                        Email
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Hero;