"use client";

import Link from "next/link";

type Country = {
    name: {
        common: string;
    };

    flags: {
        png: string;
        svg: string;
    };

    capital?: string[];

    region: string;

    population: number;

    cca3: string;
};

type CountryCardProps = {
    country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
    return (
        <section
            className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.08),0_0_50px_rgba(139,92,246,0.08)] transition-all hover:scale-[1.02] hover:border-cyan-400/30"    
        >
            <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-full h-48 object-cover"
            />

            <div className="p-5 space-y-3">
                <h2 className="text-2xl font-bold text-white">
                    {country.name.common}
                </h2>

                <div className="space-y-1 text-gray-300 text-sm">
                    <p>
                        <span className="font-semibold text-cyan-300">
                            Capital:
                        </span>{" "}
                        {country.capital?.[0] || "N/A"}
                    </p>

                    <p>
                        <span className="font-semibold text-cyan-300">
                            Region:
                        </span>{" "}
                        {country.region}
                    </p>

                    <p>
                        <span className="font-semibold text-cyan-300">
                            Population:
                        </span>{" "}
                        {country.population.toLocaleString()}
                    </p>
                </div>

                <Link
                    href={`/countries/${country.cca3}`}
                    className="flex items-center justify-center mt-3 px-5 py-2 rounded-xl bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 font-medium hover:bg-cyan-400/30 hover:shadow-[0_0_20px_rgba(0,255,255,0.25)] transition-all"
                >
                    View Details
                </Link>
            </div>
        </section>
    );
}