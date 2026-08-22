function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">

                {/* Logo */}
                <a href="#home" className="text-xl font-bold text-white">
                    DP<span className="text-blue-400">.</span>
                </a>

                {/* Navigation */}
                <div className="hidden gap-8 md:flex">

                    <a
                        href="#home"
                        className="text-gray-300 transition hover:text-white"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="text-gray-300 transition hover:text-white"
                    >
                        About
                    </a>

                    <a
                        href="#education"
                        className="text-gray-300 transition hover:text-white"
                    >
                        Education
                    </a>

                    <a
                        href="#skills"
                        className="text-gray-300 transition hover:text-white"
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className="text-gray-300 transition hover:text-white"
                    >
                        Projects
                    </a>

                    <a
                        href="#experience"
                        className="text-gray-300 transition hover:text-white"
                    >
                        Experience
                    </a>

                    <a
                        href="#certifications"
                        className="text-gray-300 transition hover:text-white"
                    >
                        Certifications
                    </a>

                    <a
                        href="#contact"
                        className="text-gray-300 transition hover:text-white"
                    >
                        Contact
                    </a>

                </div>

                {/* CTA */}
                <a
                    href="#contact"
                    className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:bg-white hover:text-black"
                >
                    Let's Connect
                </a>

            </div>
        </nav>
    );
}

export default Navbar;