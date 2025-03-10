"use client";

import React from 'react';
import '../globals.css';
import Link from "next/link";
import { usePathname } from 'next/navigation';

function Sidebar() {
    const pathname = usePathname();

    const isActive = (page) => pathname === `/${page}`;

    return (
        <div className="flex sticky h-screen grid grid-rows-12 col-span-2 sm:col-span-1 bg-purple-700">
            <div className="row-span-2 flex justify-center items-center text-3xl font-mono">
                <Link href="/">
                    <img src="/resources/LSU-white.png" alt="LSU" className="size-25 xl:p-10" />
                </Link>
            </div>

            <div className="flex grid grid-rows-8 pe-6 row-span-5">
                <hr className="ms-6 border-gray-200"/>

                {[
                    { name: "DASHBOARD", href: "", icon: "M3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2 3v10h14V7H5zm3 2h4v2H8V9zm0 4h6v2H8v-2z"},
                    { name: "ALUMNI DIRECTORY", href: "app-main-pages/alumni-directory", icon: "M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" },
                    { name: "JOBS", href: "app-main-pages/jobs", icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" },
                    { name: "EVENTS", href: "app-main-pages/events", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" },
                    { name: "RESOURCES", href: "app-main-pages/resources", icon: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" }
                ].map((item, index) => (
                    <div className="grid grid-cols-12" key={index}>
                        <div
                            className={`col-span-1 ${
                                isActive(item.href) ? 'bg-yellow-600 w-2' : ''
                            }`}
                        ></div>
                        <div
                            className={`flex items-center ms-6 font-mono text-xs md:text-lg col-span-11 ${
                                isActive(item.href) ? 'text-yellow-600' : 'text-gray-200 hover:text-yellow-600'
                            }`}
                        >
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 me-3">
                                <path d={item.icon} />
                            </svg>
                            <Link href={`/${item.href}`}><b>{item.name}</b></Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row-span-3 grid grid-rows-5 pe-6 text-xs md:text-sm">
                <hr className="row-span-1 border-gray-200 ms-6"></hr>
                <div className="row-span-1 font-mono text-white hover:text-purple-300 ms-12"><Link href="https://discord.gg/st8Hh6Ny">WAD Discord</Link></div>
                <div className="row-span-1 font-mono text-white hover:text-purple-300 pt-4 sm:pt-0 ms-12"><Link href="https://tigerlink.lsu.edu/WAD/club_signup">Get Involved</Link></div>
                <div className="row-span-1 font-mono text-white hover:text-purple-300 pt-8 sm:pt-0 ms-12"><Link href="/about">About WAD</Link></div>
            </div>

            <div className="row-span-2 flex justify-center items-center">
                <button className="grid grid-cols-3 text-white bg-purple-300 hover:bg-purple-900 rounded-md px-5 py-4">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 col-span-1 text-center">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                    <div className="col-span-2">Log Out</div>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;