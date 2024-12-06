'use client';
import "./../app/globals.css";
import {carouselTheme, tabsTheme} from "../app/flowbiteThemes.js";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import {Button, Tabs, Carousel} from "flowbite-react";
import {useInView} from "react-intersection-observer";
import {Poppins} from 'next/font/google';
import {useMediaQuery} from 'react-responsive';

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"]
});

export default function AboutPage() {
    const [heroTrigger, heroIsInView] = useInView({threshold: 0, triggerOnce: true});
    const [aboutTrigger, aboutIsInView] = useInView({threshold: 0.5, triggerOnce: true});
    const [whatTrigger, whatIsInView] = useInView({threshold: 0.5, triggerOnce: true});
    const [ourTrigger, ourIsInView] = useInView({threshold: 0.5, triggerOnce: true});
    const [testTrigger, testIsInView] = useInView({threshold: 0.5, triggerOnce: true});
    const isExtraSmall = useMediaQuery({minWidth: 480});
    const isExtraLarge = useMediaQuery({minWidth: 1500});

    return (
        <div className={poppins.className}>
            <Head>
                <title>Clarity Path | Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Liam Giles" />
                <meta name="description" content="Adult ADHD service Clarity Path" />
            </Head>

            <Navbar />

            {/* HERO SECTION */}
            <div className="bg-home-hero max-md:bg-home-hero-mob bg-cover md:bg-center">
                <div ref={heroTrigger} className={heroIsInView ? "motion-safe:animate-slideInFromBottom md:motion-safe:animate-slideInFromBottom2" : "opacity-0"}>
                    <div className="flex flex-col items-center justify-center py-80 max-md:py-48 max-sm:py-32 px-[20%]">
                        <h1 className="text-white text-5xl pb-6 text-center"><b>We are here to help</b></h1>
                        <p className="text-white text-xl text-center pb-4"><b>As one of the largest organisations in the UK helping adults with ADHD, we pledge to improve public awareness, open pathways to diagnosis, and offer services to support those suffering.</b></p>
                        <Link href="/services">
                        <Button color="indigo" pill size="lg" className="cursor-pointer bg-opacity-0 hover:bg-opacity-10">
                            <div className="flex flex-row space-x-2 items-center text-white">
                                <p>Our Services</p>
                                <ArrowRightIcon className="size-4" />
                            </div>
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ABOUT US */}
            <div className="bg-offwhite">
                <div ref={aboutTrigger} className={aboutIsInView ? "motion-safe:animate-slideInFromLeft md:motion-safe:animate-slideInFromLeft2" : "opacity-0"}>
                    <div className="px-[10%] max-md:px-[5%] py-12 max-md:py-8 align-center">
                        <h2 className="text-center text-2xl pb-4 xl:text-3xl xl:pb-8"><b>About Us</b></h2>
                        <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                            At <b className="text-indigo-500">Clarity Path</b>, we are dedicated to helping adults with ADHD unlock their full potential. Our mission is to provide personalised support, strategies, and tools designed to help individuals gain clarity, enhance focus, and lead more organized, fulfilling lives.
                        </p>
                        <p className="md:text-lg max-md:text-md pb-4 xl:text-xl max-lg:hidden">
                            We understand that living with ADHD can bring unique challenges, but we believe that with the right guidance, every individual can thrive. Our team of experienced coaches and specialists works one-on-one with clients to develop tailored solutions that address their specific needs, helping them to manage distractions, increase productivity, and achieve their personal and professional goals.
                        </p>
                        <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                            Whether you&apos;re looking for strategies to stay focused, build better habits, or improve time management, Clarity Path is here to support you on your journey toward greater clarity and success.
                        </p>
                        <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                            <b>Let us help you find the path that works for you.</b>
                        </p>
                    </div>
                </div>
            </div>

            {/* WHAT IS ADHD? */}
            <div className="bg-offwhite-darker">
                <div ref={whatTrigger} className={whatIsInView ? "motion-safe:animate-slideInFromRight md:motion-safe:animate-slideInFromRight2" : "opacity-0"}>
                    <div className="max-md:py-8 md:py-12 align-center">
                        <h2 className="text-center text-2xl pb-4 xl:text-3xl xl:pb-8"><b>What is ADHD?</b></h2>
                        <div className="w-full h-full">
                            <div className="md:px-[10%] max-md:px-[5%]">
                                <div className="bg-cover sm:hidden" style={{backgroundImage: `linear-gradient(to right, rgba(231, 231, 231, 1) 0%, rgba(231, 231, 231, 1) 30%, rgba(231, 231, 231, 0.3) 70%, rgba(231, 231, 231, 0.3) 80%, rgba(231, 231, 231, 1) 100%), linear-gradient(to bottom, rgba(231, 231, 231, 1) 0%, rgba(231, 231, 231, 0) 15%, rgba(231, 231, 231, 0) 85%, rgba(231, 231, 231, 1) 100%), url(/clarity-path/stock6small${isExtraSmall ? "2" : ""}.avif)`}}>
                                    <div className="max-md:pb-2 text-left mr-[40%]">
                                        <p className="pb-4 md:text-lg max-md:text-md xl:text-xl">
                                            ADHD, or <b>Attention-Deficit/Hyperactivity Disorder</b>, is a neurodevelopmental condition that affects a person&apos;s ability to focus, control impulses, and manage activity levels appropriately for a given situation.
                                        </p>
                                        <p className="md:text-lg max-md:text-md xl:text-xl">
                                            Many people with ADHD can lead successful and fulfilling lives with the right support. Early intervention, understanding, and accommodations can make a significant difference. This is where we come in.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-cover max-sm:hidden" style={{backgroundImage: "linear-gradient(to right, rgba(231, 231, 231, 1) 0%, rgba(231, 231, 231, 1) 30%, rgba(231, 231, 231, 0.3) 70%, rgba(231, 231, 231, 0.3) 80%, rgba(231, 231, 231, 1) 100%), linear-gradient(to bottom, rgba(231, 231, 231, 1) 0%, rgba(231, 231, 231, 0) 15%, rgba(231, 231, 231, 0) 85%, rgba(231, 231, 231, 1) 100%), url(/clarity-path/stock6big.avif)"}}>
                                    <div className="max-md:pb-2 text-left mr-[50%]">
                                        <p className="pb-4 md:text-lg max-md:text-md xl:text-xl">
                                            ADHD, or <b>Attention-Deficit/Hyperactivity Disorder</b>, is a neurodevelopmental condition that affects a person&apos;s ability to focus, control impulses, and manage activity levels appropriately for a given situation. It&apos;s a common disorder, often diagnosed in childhood, but it can persist into adolescence and adulthood.
                                        </p>
                                        <p className="md:text-lg max-md:text-md xl:text-xl">
                                            Many people with ADHD can lead successful and fulfilling lives with the right support. Early intervention, understanding, and accommodations can make a significant difference. This is where we come in.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link href="/adhd">
                            <Button color="indigo" pill size="lg" className="cursor-pointer bg-opacity-0 hover:bg-opacity-10">
                                <div className="flex flex-row space-x-2 items-center text-indigo-800">
                                    <p>See more</p>
                                    <ArrowRightIcon className="size-4" />
                                </div>
                            </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* OUR SERVICES */}
            <div className="bg-offwhite">
                <div ref={ourTrigger} className={ourIsInView ? "motion-safe:animate-slideInFromLeft md:motion-safe:animate-slideInFromLeft2" : "opacity-0"}>
                    <div className="px-[10%] max-md:px-[5%] py-12 max-md:py-8 align-center">
                        <h2 className="text-center text-2xl pb-4 xl:text-3xl xl:pb-8"><b>Our Services</b></h2>
                        <div className="justify-items-center sm:hidden">
                            <Tabs variant="fullWidth" theme={tabsTheme}>
                                <Tabs.Item active title="Diagnostic">
                                    <div className="bg-indigo-500 bg-opacity-70 rounded-lg px-2 py-2 max-w-[110vw]">
                                        <Image className="w-full h-full rounded-lg border-[2px] border-indigo-300" src="/clarity-path/stock2.avif" alt="diagnostic" width={100} height={100}></Image>
                                        <div className="pt-2">
                                            <p className="pb-2">Our specialized diagnostic service is designed to provide clarity and support for adults seeking answers about ADHD. Using a compassionate, evidence-based approach, we help you uncover whether ADHD might be impacting your life and offer tailored recommendations for next steps.</p>
                                            <p><b>Your path to clarity starts here.</b></p>
                                        </div>
                                    </div>
                                </Tabs.Item>
                                <Tabs.Item active title="Therapeutic">
                                    <div className="bg-indigo-500 bg-opacity-70 rounded-lg px-2 py-2 max-w-[110vw]">
                                        <Image className="w-full h-full rounded-lg border-[2px] border-indigo-300" src="/clarity-path/stock3.avif" alt="therapeutic" width={100} height={100}></Image>
                                        <div className="pt-2">
                                            <p className="pb-2">Through personalized therapy, we help you develop practical strategies to improve focus, organization, and emotional regulation. Our experienced professionals work with you to address specific concerns, whether it&apos;s navigating workplace demands, building stronger relationships, or boosting self-confidence.</p>
                                            <p><b>Let us help you find your path forward.</b></p>
                                        </div>
                                    </div>
                                </Tabs.Item>
                                <Tabs.Item active title="Achievement">
                                    <div className="bg-indigo-500 bg-opacity-70 rounded-lg px-2 py-2 max-w-[110vw]">
                                        <Image className="w-full h-full rounded-lg border-[2px] border-indigo-300" src="/clarity-path/stock8.avif" alt="achievement" width={100} height={100}></Image>
                                        <div className="pt-2">
                                            <p className="pb-2">At Clarity Path, we know that understanding and managing ADHD is just the beginning. Our Achievement Service is designed to help you take the next step—transforming newfound clarity and skills into meaningful progress toward your goals.</p>
                                            <p><b>Step into a future of possibility and achievement with Clarity Path.</b></p>
                                        </div>
                                    </div>
                                </Tabs.Item>
                            </Tabs>
                        </div>
                        <div className="max-sm:hidden">
                            <Tabs variant="underline" theme={tabsTheme}>
                                <Tabs.Item active title="Diagnostic">
                                    <div className="grid grid-cols-2 gap-x-8 bg-indigo-500 bg-opacity-70 rounded-lg px-2 py-2 items-center">
                                        <div className="xl:text-xl md:text-lg max-md:text-md">
                                            <p className="pb-2">Our specialized diagnostic service is designed to provide clarity and support for adults seeking answers about ADHD. Using a compassionate, evidence-based approach, we help you uncover whether ADHD might be impacting your life and offer tailored recommendations for next steps.</p>
                                            <p><b>Your path to clarity starts here.</b></p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <Image className="w-full max-w-[36rem] h-auto rounded-lg border-indigo-300 border-[3px]" src="/clarity-path/stock2.avif" alt="diagnostic" width={100} height={100}></Image>
                                        </div>
                                    </div>
                                </Tabs.Item>
                                <Tabs.Item active title="Therapeutic">
                                    <div className="grid grid-cols-2 gap-x-8 bg-indigo-500 bg-opacity-70 rounded-lg px-2 py-2 items-center">
                                        <div className="xl:text-xl md:text-lg max-md:text-md">
                                            <p className="pb-2">Through personalized therapy, we help you develop practical strategies to improve focus, organization, and emotional regulation. Our experienced professionals work with you to address specific concerns, whether it&apos;s navigating workplace demands, building stronger relationships, or boosting self-confidence.</p>
                                            <p><b>Let us help you find your path forward.</b></p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <Image className="w-full max-w-[36rem] h-auto rounded-lg border-indigo-300 border-[3px]" src="/clarity-path/stock3.avif" alt="therapeutic" width={100} height={100}></Image>
                                        </div>
                                    </div>
                                </Tabs.Item>
                                <Tabs.Item active title="Achievement">
                                    <div className="grid grid-cols-2 gap-x-8 bg-indigo-500 bg-opacity-70 rounded-lg px-2 py-2 items-center">
                                        <div className="xl:text-xl md:text-lg max-md:text-md">
                                            <p className="pb-2">At Clarity Path, we know that understanding and managing ADHD is just the beginning. Our Achievement Service is designed to help you take the next step—transforming newfound clarity and skills into meaningful progress toward your goals.</p>
                                            <p><b>Step into a future of possibility and achievement with Clarity Path.</b></p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <Image className="w-full max-w-[36rem] h-auto rounded-lg border-indigo-300 border-[3px]" src="/clarity-path/stock8.avif" alt="achievement" width={100} height={100}></Image>
                                        </div>
                                    </div>
                                </Tabs.Item>
                            </Tabs>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link href="/services">
                            <Button color="indigo" pill size="lg" className="cursor-pointer bg-opacity-0 hover:bg-opacity-10">
                                <div className="flex flex-row space-x-2 items-center text-indigo-800">
                                    <p>See more</p>
                                    <ArrowRightIcon className="size-4" />
                                </div>
                            </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* TESTIMONIALS */}
            <div className="bg-offwhite-darker">
                <div className="px-[10%] max-md:px-[5%] py-12 max-md:py-8 align-center">
                    <div ref={testTrigger} className={testIsInView ? "motion-safe:animate-slideInFromRight md:motion-safe:animate-slideInFromRight2" : "opacity-0"}>
                        <h2 className="text-center text-2xl pb-4 xl:text-3xl xl:pb-8"><b>Testimonials</b></h2>
                        <p className="text-center pb-4 xl:pb-8 md:text-lg max-md:text-md xl:text-xl">
                            Read some of the opinions expressed by people that have used and benefited from our services.
                        </p>

                        <div className="h-[36rem] max-sm:hidden">
                            <Carousel indicators={false} theme={carouselTheme} pauseOnHover={true} slideInterval={6000} className="">
                                <div className="bg-cover py-24 md:py-48 xl:py-64 px-2 bg-no-repeat w-full h-full bg-center" style={{backgroundImage: `linear-gradient(to right, rgba(231, 231, 231, 1) 0%, rgba(231, 231, 231, 0.2) 60%, rgba(231, 231, 231, 0.2) 85%, rgba(231, 231, 231, 1) 100%), url(/clarity-path/testimonial1${isExtraLarge ? "large" : ""}.avif)`}}>
                                    <div className="md:text-lg max-md:text-md xl:text-xl mr-[70%]">
                                        <p className="pb-2"><b>Fake Name, 24</b></p>
                                        <p><i>&quot;Clarity Path helped me understand what was really going on in my mind, and allowed me to take a step back so I could tackle each issue head on. Now, months later, I&apos;m achieving things I never could have dreamed of previously.&quot;</i></p>
                                    </div>
                                </div>
                            
                                <div className="bg-cover py-24 md:py-48 xl:py-64 px-2 bg-no-repeat w-full h-full" style={{backgroundImage: `linear-gradient(to left, rgba(231, 231, 231, 1) 0%, rgba(231, 231, 231, 0.2) 60%, rgba(231, 231, 231, 0.2) 85%, rgba(231, 231, 231, 1) 100%), url(/clarity-path/testimonial2.avif)`}}>
                                    <div className="md:text-lg max-md:text-md xl:text-xl ml-[70%] text-right">
                                        <p className="pb-2"><b>This Guy, 29</b></p>
                                        <p><i>&quot;Working with Clarity Path has been a game-changer for me. As an adult with ADHD, I struggled with staying organized and focused, both in my career and personal life. The personalized strategies and support I received have helped me manage my distractions and set achievable goals.&quot;</i></p>
                                    </div>
                                </div>

                                <div className="bg-cover py-24 md:py-48 xl:py-64 px-2 bg-no-repeat w-full h-full bg-center" style={{backgroundImage: `linear-gradient(to right, rgba(231, 231, 231, 1) 0%, rgba(231, 231, 231, 0.2) 60%, rgba(231, 231, 231, 0.2) 85%, rgba(231, 231, 231, 1) 100%), url(/clarity-path/testimonial3${isExtraLarge ? "large" : ""}.avif)`}}>
                                    <div className="md:text-lg max-md:text-md xl:text-xl mr-[70%]">
                                        <p className="pb-2"><b>Some One, 32</b></p>
                                        <p><i>&quot;I didn&apos;t realize how much ADHD was affecting my daily life until I found Clarity Path. The practical tools and strategies they&apos;ve provided have helped me improve my time management, reduce overwhelm, and stay focused on what matters most.&quot;</i></p>
                                    </div>
                                </div>
                            </Carousel>
                        </div>

                        <div className="h-[32rem] sm:hidden overflow-y-scroll">
                            <Carousel indicators={false} theme={carouselTheme} slide={false} className="">
                                <div className="px-2 py-2 rounded-lg w-full h-full inline-block bg-gray-500">
                                    <Image className="border-[2px] border-gray-400 rounded-lg w-full h-max" src="/clarity-path/testimonial1.avif" alt="testimonial1" width={100} height={100}></Image>
                                    <div className="text-md text-offwhite pt-2">
                                        <p className="pb-2"><b>Fake Name, 24</b></p>
                                        <p><i>&quot;Clarity Path helped me understand what was really going on in my mind, and allowed me to take a step back so I could tackle each issue head on. Now, months later, I&apos;m achieving things I never could have dreamed of previously.&quot;</i></p>
                                    </div>
                                </div>
                                <div className="px-2 py-2 rounded-lg w-full h-full inline-block bg-gray-500">
                                    <Image className="border-[2px] border-gray-400 rounded-lg w-full h-max" src="/clarity-path/testimonial2.avif" alt="testimonial2" width={100} height={100}></Image>
                                    <div className="text-md text-offwhite pt-2">
                                        <p className="pb-2"><b>This Guy, 29</b></p>
                                        <p><i>&quot;Working with Clarity Path has been a game-changer for me. As an adult with ADHD, I struggled with staying organized and focused, both in my career and personal life. The personalized strategies and support I received have helped me manage my distractions and set achievable goals.&quot;</i></p>
                                    </div>
                                </div>
                                <div className="px-2 py-2 rounded-lg w-full h-full inline-block bg-gray-500">
                                    <Image className="border-[2px] border-gray-400 rounded-lg w-full h-max" src="/clarity-path/testimonial3.avif" alt="testimonial3" width={100} height={100}></Image>
                                    <div className="text-md text-offwhite pt-2">
                                        <p className="pb-2"><b>Some One, 32</b></p>
                                        <p><i>&quot;I didn&apos;t realize how much ADHD was affecting my daily life until I found Clarity Path. The practical tools and strategies they&apos;ve provided have helped me improve my time management, reduce overwhelm, and stay focused on what matters most.&quot;</i></p>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}