import { getAllCountries } from "@/lib/api";
import CountryCard from "../components/CountryCard";

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

export default async function Countries() {
    const countries = await getAllCountries();
    return (
         <section className="px-6 md:px-16 py-10">
                <h1 className="text-4xl text-center mb-8 md:text-5xl font-bold text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.25)]">
                    Explore Countries
                </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {countries?.map((country: Country) => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </section>
    );
}