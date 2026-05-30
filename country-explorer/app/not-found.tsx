"use client";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 text-white">
            <h1 className="text-5xl font-bold text-cyan-300">404</h1>

            <p className="mt-4 text-gray-300 text-lg">
                Oops! The page you are looking for does not exist.
            </p>

            <Link
                href="/countries"
                className="mt-6 px-6 py-3 rounded-xl bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/30 transition shadow-[0_0_20px_rgba(0,255,255,0.15)]"
            >
                Go to Countries
            </Link>
        </main>
    )
}