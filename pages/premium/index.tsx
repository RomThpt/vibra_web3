"use client";

import { DownloadIcon, FileAudioIcon, Music2Icon } from "lucide-react";
import Link from "next/link";

export default function Page() {


    return (
        <div className="flex flex-col min-h-[100dvh]text-white">
            <main className="flex-1">
                <section className="w-full py-14 bg-gradient-to-r from-pink-800/80 to-blue-900/80">
                    <div className="container px-4 md:px-6 text-white">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="flex flex-col justify-center space-y-8">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Vibra Premium</h1>
                                    <p className="max-w-[600px] md:text-xl text-white/70 font-semibold">
                                        Enjoy ad-free music, offline listening, and high-quality audio.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2 min-[400px]:flex-row">
                                    <button
                                        className=" text-white font-bold hover:bg-transparent hover:scale-105 transition duration-150"
                                    >
                                        Get Premium
                                    </button>
                                    <Link
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center hover:scale-105 duration-150 transition rounded-full bg-transparent border border-white text-white px-8 text-sm font-semibold shadow-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-10">
                    <div className="container px-4 md:px-6 dark:text-white">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upgrade to Vibra Premium</h2>
                                <p
                                    className="max-w-[900px] text-white/60 font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                                    Unlock the full Vibra experience with these premium features.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li className="flex items-center gap-4">
                                        <div className="rounded-full bg-blue p-2 text-white">
                                            <Music2Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Ad-free listening</h3>
                                            <p className="text-muted-foreground dark:text-white/80">
                                                Enjoy your music without interruptions.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="rounded-full bg-blue p-2 text-white">
                                            <DownloadIcon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Offline mode</h3>
                                            <p className="text-muted-foreground dark:text-white/80">
                                                Save your favorite songs and listen offline.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="rounded-full bg-blue p-2 text-white">
                                            <FileAudioIcon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">High-quality audio</h3>
                                            <p className="text-muted-foreground dark:text-white/80">
                                                Enjoy your music in crystal-clear sound.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full">
                    <div className="container px-4 md:px-6 text-white">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vibra Premium Plans</h2>
                                <p
                                    className="max-w-[900px] text-white/60 font-semibold md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                                    Choose the plan that's right for you and start enjoying the full Vibra experience.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center py-12 xl:grid-cols-3 gap-8">
                            {/* Basic Plan */}
                            <div className="relative flex flex-col p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all hover:scale-[1.02]">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Test</h3>
                                    <div className="text-4xl font-bold">
                                        $50<span className="text-xl text-white/60">/life</span>
                                    </div>
                                    <ul className="space-y-4 text-left">
                                        <li className="flex items-center gap-2">
                                            <span>✓</span>
                                            <span>Auto refund</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span>✓</span>
                                            <span>High quality audio</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-white/60">
                                            <span>✗</span>
                                            <span>Only one month</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-3 mt-4 font-semibold rounded-full bg-transparent border border-white hover:bg-white hover:text-black transition-colors">
                                        Start Month Trial
                                    </button>
                                </div>
                            </div>

                            {/* Premium Plan (Recommended) */}
                            <div className="relative flex flex-col p-8 bg-gradient-to-br from-pink-600 to-blue-600 rounded-2xl scale-105 shadow-lg">
                                <div className="absolute top-0 right-0 px-4 py-1 text-sm font-bold bg-white text-black rounded-bl-2xl rounded-tr-2xl">
                                    Recommended
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Premium</h3>
                                    <div className="text-4xl font-bold">
                                        $10<span className="text-xl text-white/80">/life</span>
                                    </div>
                                    <ul className="space-y-4 text-left">
                                        <li className="flex items-center gap-2">
                                            <span>✓</span>
                                            <span>Everything in Basic</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span>✓</span>
                                            <span>Lifetime subscribe</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span>✓</span>
                                            <span>Refund if needed after 1 year using our platform</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-3 mt-4 font-semibold text-black bg-white rounded-full hover:bg-opacity-90 transition-opacity">
                                        Go Premium
                                    </button>
                                </div>
                            </div>

                            {/* Family Plan */}
                            <div className="relative flex flex-col p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-400/30 transition-all hover:scale-[1.02]">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Digger</h3>
                                    <div className="text-4xl font-bold">
                                        $15<span className="text-xl text-white/60">/life</span>
                                    </div>
                                    <ul className="space-y-4 text-left">
                                        <li className="flex items-center gap-2">
                                            <span>✓</span>
                                            <span>Everything in Premium</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span>✓</span>
                                            <span>You can upload some song</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span>✓</span>
                                            <span>Digger mix</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-3 mt-4 font-semibold rounded-full bg-transparent border border-white hover:bg-white hover:text-black transition-colors">
                                        Digger Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}