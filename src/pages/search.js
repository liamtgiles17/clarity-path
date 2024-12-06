'use client';
import "./../app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Link from "next/link";
import {useInView} from "react-intersection-observer";
import {Poppins} from 'next/font/google';

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"]
});

export default function SearchPage() {
    const [searchTrigger, searchIsInView] = useInView({threshold: 0, triggerOnce: true});

    return (
        <div className={poppins.className}>
            <Head>
                <title>Search | Clarity Path</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Liam Giles" />
                <meta name="description" content="Adult ADHD service Clarity Path" />
            </Head>

            <Navbar />
            
            <div className="bg-offwhite h-svh">
                <div ref={searchTrigger} className={searchIsInView ? "motion-safe:animate-slideInFromBottom md:motion-safe:animate-slideInFromBottom2" : "opacity-0"}>
                    <div className="px-[10%] max-md:px-[5%] py-12 max-md:py-8 align-center">
                        <h2 className="text-center text-2xl pb-4 xl:text-3xl xl:pb-8"><b>Search</b></h2>
                        <p className="md:text-lg max-md:text-md pb-4 xl:text-xl text-center">
                            Sorry, nothing matches your query. Come back later when we have more content! Go <Link href="/" className="hover:underline text-blue-500">home</Link>.
                        </p>
                    </div>
                </div>
            </div>
            
            <Footer />
            
        </div>
    );
}