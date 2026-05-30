"use client";

import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import {searchCountries} from "@/lib/api"
import CountryCard from "./CountryCard";

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

export default function CountrySearch() {
    const [searchTerm, setSearchTerm ] = useState('')
    const [results, setResults] = useState<Country[]>([])   
    const [loading, setLoading] = useState(false)
    const [hasSearched, setHasSearched] = useState(false)
    
    const handleSearch = async () => {
        if (!searchTerm.trim()) return;

        setLoading(true);
        setHasSearched(true);

        const data = await searchCountries(searchTerm);

        setResults(data || []);
        setLoading(false);
    }

    return (
        <section className="px-6 md:px-16 py-10">
            
            <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                    <button onClick={handleSearch}>
                        <HiOutlineSearch
                            size={20}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-300"
                        />
                    </button>

                    <input
                        type="search"
                        placeholder="Search for countries..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-cyan-700/20 border border-cyan-200/30 text-cyan-300"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="my-4 text-center">
                {!hasSearched && (
                    <p className="text-gray-400">
                        Start searching by entering a country name
                    </p>
                )}

                {hasSearched && loading && (
                    <p className="text-cyan-300">Searching...</p>
                )}

                {hasSearched && !loading && results.length === 0 && (
                    <p className="text-red-400">No results found</p>
                )}

                {results.length > 0 && (
                    <p className="text-green-400">
                        Found {results.length} result(s)
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1">
                {results.map((country) => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </section>
    )
}