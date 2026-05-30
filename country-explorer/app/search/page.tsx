import CountrySearch from "../components/CountrySearch";

export default function Search() {
    return (
        <section className="min-h-screen px-6 md:px-16 py-12 flex flex-col items-center">
            
            <div className="text-center max-w-2xl mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.25)]">
                    Search Countries
                </h1>

                <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                    Search for any country by name like{" "}
                    <span className="text-cyan-300 font-semibold">Afghanistan</span>,{" "}
                    <span className="text-cyan-300 font-semibold">Japan</span>, and{" "}
                    <span className="text-cyan-300 font-semibold">...</span>
                </p>
            </div>

            <div className="w-full max-w-3xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.08)]">
                <CountrySearch />
            </div>


            <div className="mt-10 text-center text-gray-400 text-sm max-w-xl">
                This page demonstrates <span className="text-cyan-300">client-side interaction</span> using React state, filtering, and API fetching from the REST Countries API.
            </div>
        </section>
    );
}