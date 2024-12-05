'use client';
import "./../app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import {useInView} from "react-intersection-observer";
import {Poppins} from 'next/font/google';

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"]
});

export default function BlogsPage() {
    const [blogTrigger, blogIsInView] = useInView({threshold: 1, triggerOnce: true});

    return (
        <div className={poppins.className}>
            <Head>
                <title>Blogs | Clarity Path</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Liam Giles" />
                <meta name="description" content="Adult ADHD service Clarity Path" />
            </Head>

            <Navbar />
            
            <div className="bg-offwhite h-svh">
                <div ref={blogTrigger} className={blogIsInView ? "motion-safe:animate-slideInFromBottom md:motion-safe:animate-slideInFromBottom2" : "opacity-0"}>
                    <div className="px-[10%] max-md:px-[5%] py-12 max-md:py-8 align-center">
                        <h2 className="text-center text-2xl pb-4 xl:text-3xl xl:pb-8"><b>Blogs</b></h2>
                        <p className="md:text-lg max-md:text-md pb-4 xl:text-xl text-center">
                            Nothing to see here yet! Watch this space.
                        </p>
                    </div>
                </div>
            </div>
            
            <Footer />
            
        </div>
    );
}