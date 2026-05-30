import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center text-white">
      
      <h1 className="text-4xl md:text-6xl font-bold text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
       Welcome To World Explorer
      </h1>

      <p className="mt-4 text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed">
        Here you can explore more about countries around the world and learn about their flags, capitals,
        populations, currencies, and languages.
      </p>

      <div className="mt-10 max-w-3xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.05)]">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Discover the World in One Place 🌍
        </h2>

        <p className="mt-3 text-gray-400 text-sm md:text-base">
          Browse detailed information about every country including flags,
          capitals, regions, populations, and more.
        </p>
      </div>

      <div className="mt-10 flex gap-6 text-sm md:text-base">
        <Link href="/countries" className="hover:text-cyan-300 transition">
          Countries
        </Link>
        <Link href="/search" className="hover:text-cyan-300 transition">
          Search
        </Link>
        <Link href="/about" className="hover:text-cyan-300 transition">
          About
        </Link>
        <a href="https://jsonplaceholder.typicode.com" target="_blank"
          className="hover:text-cyan-300 transition"
        >
          Learn more about countries free api
        </a>
      </div>

      <Link
        href="/countries"
        className="mt-10 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 transition shadow-[0_0_25px_rgba(0,255,255,0.15)]"
      >
        Explore Countries →
      </Link>
    </main>
  );
}