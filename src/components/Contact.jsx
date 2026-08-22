function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-white/10 bg-black px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                        Contact
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Let's build something
                        <span className="text-blue-400"> together.</span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        I'm always open to discussing interesting projects,
                        internships, collaborations, research, and opportunities
                        in software development and data science.
                    </p>
                </div>

                {/* Contact cards */}
                <div className="mt-16 grid gap-6 lg:grid-cols-2">

                    {/* Email */}
                    <a
                        href="mailto:divyanshupatil1109@gmail.com"
                        className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                    >
                        <div className="flex items-start justify-between">
                            <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
                                Email
                            </span>

                            <span className="text-xl text-gray-600 transition group-hover:text-white">
                                ↗
                            </span>
                        </div>

                        <p className="mt-8 break-all text-xl font-medium text-white">
                            divyanshupatil1109@gmail.com
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            Send me an email
                        </p>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/divyanshu-patil-029a71294/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                    >
                        <div className="flex items-start justify-between">
                            <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
                                LinkedIn
                            </span>

                            <span className="text-xl text-gray-600 transition group-hover:text-white">
                                ↗
                            </span>
                        </div>

                        <p className="mt-8 text-xl font-medium text-white">
                            Connect with me
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            View my LinkedIn profile
                        </p>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Div11-max"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                    >
                        <div className="flex items-start justify-between">
                            <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
                                GitHub
                            </span>

                            <span className="text-xl text-gray-600 transition group-hover:text-white">
                                ↗
                            </span>
                        </div>

                        <p className="mt-8 text-xl font-medium text-white">
                            View my work
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            Explore my projects and code
                        </p>
                    </a>

                </div>

                {/* Resume selection */}
                <div className="mt-8">

                    <div className="mb-6">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                            Resumes
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold text-white">
                            Choose the resume for your role.
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Select the version that best matches the opportunity.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">

                        {/* Software Resume */}
                        <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.04]">

                            <div className="flex items-start justify-between">

                                <div>
                                    <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
                                        Software
                                    </span>

                                    <h3 className="mt-4 text-2xl font-semibold text-white">
                                        Software Development Resume
                                    </h3>
                                </div>

                                <span className="text-xl text-gray-600 group-hover:text-blue-400">
                                    ↗
                                </span>

                            </div>

                            <p className="mt-4 text-sm leading-6 text-gray-500">
                                Best suited for software development, full-stack,
                                backend, frontend, and engineering roles.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">

                                <a
                                    href="/documents/Divyanshu_Patil_Software.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
                                >
                                    View PDF ↗
                                </a>

                                <a
                                    href="/documents/Divyanshu_Patil_Software.pdf"
                                    download="Divyanshu_Patil_Software.pdf"
                                    className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
                                >
                                    Download ↓
                                </a>

                            </div>

                        </div>

                        {/* Data Resume */}
                        <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.04]">

                            <div className="flex items-start justify-between">

                                <div>
                                    <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
                                        Data
                                    </span>

                                    <h3 className="mt-4 text-2xl font-semibold text-white">
                                        Data Science Resume
                                    </h3>
                                </div>

                                <span className="text-xl text-gray-600 group-hover:text-blue-400">
                                    ↗
                                </span>

                            </div>

                            <p className="mt-4 text-sm leading-6 text-gray-500">
                                Best suited for data science, machine learning,
                                analytics, AI, and data-focused roles.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">

                                <a
                                    href="/documents/Data_Resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
                                >
                                    View PDF ↗
                                </a>

                                <a
                                    href="/documents/Data_Resume.pdf"
                                    download="Data_Resume.pdf"
                                    className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
                                >
                                    Download ↓
                                </a>

                            </div>

                        </div>

                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 border-t border-white/10 pt-10">

                    <p className="text-sm text-gray-600">
                        Have an idea, opportunity, or project in mind?
                    </p>

                    <a
                        href="mailto:divyanshupatil1109@gmail.com"
                        className="mt-3 inline-block text-2xl font-medium text-white transition hover:text-blue-400"
                    >
                        Say hello →
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Contact;