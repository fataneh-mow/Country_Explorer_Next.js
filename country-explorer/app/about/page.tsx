export default function AboutPage() {
    return (
        <section className="min-h-screen px-6 md:px-16 py-12 flex items-center justify-center">
            
            <div className="max-w-3xl w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_40px_rgba(0,255,255,0.08)]">
                
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 text-center drop-shadow-[0_0_20px_rgba(0,255,255,0.25)]">
                    About World Explorer
                </h1>

                <p className="mt-6 text-gray-300 leading-relaxed text-center">
                    <span className="text-cyan-300 font-semibold">World Explorer</span> is a Next.js project that uses real API data to display countries around the world.
                </p>

                <div className="mt-8 space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                    
                    <p>
                        It allows users to browse countries, view detailed information, and search for specific countries.
                    </p>

                    <p>
                        It uses the <span className="text-cyan-300">REST Countries API</span> to fetch real-time country data.
                    </p>

                    <p>
                        It demonstrates themodern Next.js features like App Router and server-side rendering.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-cyan-300 mb-3">
                        What I Practiced
                    </h2>

                    <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                        <li>✔ App Router structure</li>
                        <li>✔ File-based routing</li>
                        <li>✔ Server Components</li>
                        <li>✔ Client Components</li>
                        <li>✔ Data fetching with async/await</li>
                        <li>✔ Static & dynamic rendering</li>
                        <li>✔ API caching strategies</li>
                        <li>✔ Dynamic routes</li>
                    </ul>
                </div>

                <div className="mt-10 text-center text-gray-400 text-sm">
                    Built with Next.js and REST Countries API
                </div>

            </div>
        </section>
    );
}