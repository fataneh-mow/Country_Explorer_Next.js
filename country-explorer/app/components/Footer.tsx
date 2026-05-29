export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-white/9 backdrop-blur-md mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
                <div className="flex items-center gap-5">
                    <p>
                    © 2026 Country Explorer | All rights reserved.
                    </p>
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        className="hover:text-cyan-300 transition-colors"
                    >
                        Next.js
                    </a>
                </div>
            </div>
        </footer>
    );
}