import Link from "next/link";

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CountryDetailsPage({ params }: { params: Promise<{ code: string }> }) {
    const { code } = await params;
    const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`,
        {
            cache: "no-store", // no chach so always fresh data
        }
    )

    if (!res.ok) {
        return <p className="text-red-400">Failed to load country</p>
    }

    const data = await res.json()
    const country = data[0]

    return (
        <section className="px-6 md:px-16 py-10 text-white">
            <Link
                href="/countries"
                className="text-cyan-300 hover:text-white transition"
            >
                ← Back to Countries
            </Link>

            <div className="mt-6 bg-white/10 border border-white/10 rounded-xl p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.08)]">
                
                <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="w-full max-w-md rounded-lg mb-6"
                />

                <h1 className="text-3xl font-bold text-cyan-300">
                    {country.name.common}
                </h1>

                <p className="text-gray-300 mt-1">
                    Official: {country.name.official}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm">
                    <p><span className="text-cyan-300">Capital:</span> {country.capital?.[0] || "N/A"}</p>
                    <p><span className="text-cyan-300">Region:</span> {country.region}</p>
                    <p><span className="text-cyan-300">Subregion:</span> {country.subregion}</p>
                    <p><span className="text-cyan-300">Population:</span> {country.population.toLocaleString()}</p>
                </div>

                <div className="mt-4">
                    <p className="text-cyan-300 font-semibold">Languages:</p>
                    <p className="text-gray-300">
                        {country.languages
                        ? Object.values(country.languages).join(", ")
                        : "N/A"}
                    </p>
                </div>

                <div className="mt-4">
                    <p className="text-cyan-300 font-semibold">Currencies:</p>
                    <p className="text-gray-300">
                        {country.currencies
                        ? Object.values(country.currencies)
                            .map((c: any) => `${c.name} (${c.symbol || "—"})`)
                            .join(", ")
                        : "N/A"}
                    </p>
                </div>

                <div className="mt-4">
                    <p className="text-cyan-300 font-semibold">Time Zones:</p>
                    <p className="text-gray-300">
                        {country.timezones?.join(", ") || "N/A"}
                    </p>
                </div>

                <a
                    href={country.maps.googleMaps}
                    target="_blank"
                    className="inline-block mt-6 px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/30 transition"
                >
                    View on Google Maps
                </a>
            </div>
        </section>
    )
}