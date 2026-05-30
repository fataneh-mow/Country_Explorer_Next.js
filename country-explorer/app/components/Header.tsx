"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import '../styles/globals.css'

export default function Header () {
    const path = usePathname()
    const activeStyle = "font-bold rounded-xl shadow-[0_0_25px_rgba(0,255,255,0.08),0_0_50px_rgba(139,92,246,0.08)] border border-white/10 backdrop-blur-xl px-2 py-1 hover:bg-cyan-300/5"
    const normalStyle = "text-cyan-300 hover:text-white transition ease-in duration-150"
    return (
            <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">            <nav className="flex items-center justify-center gap-2 md:gap-8 sm:gap-4 my-4 mx-2">
                <Link href={'/'} className={path === "/" ? activeStyle : normalStyle}>Home</Link>
                <Link href={'/countries'} className={path === "/countries" ? activeStyle : normalStyle}>Countries</Link>
                <Link href={'/search'} className={path === "/search" ? activeStyle : normalStyle}>Search</Link>
                <Link href={'/about'} className={path === "/about" ? activeStyle : normalStyle}>About</Link>
            </nav>
            <hr className="text-white/40" />
        </header>
    )
}