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

export default function OurServices() {
    const [firstTrigger, firstIsInView] = useInView({threshold: 0.5, triggerOnce: true});
    const [secondTrigger, secondIsInView] = useInView({threshold: 0.5, triggerOnce: true});
    const [thirdTrigger, thirdIsInView] = useInView({threshold: 0.5, triggerOnce: true});

    return (
        <div className={poppins.className}>
            <Head>
                <title>Our Services | Clarity Path</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Liam Giles" />
                <meta name="description" content="Adult ADHD service Clarity Path" />
            </Head>

            <Navbar />
            
            <div className="bg-offwhite">
                <div className="px-[10%] max-md:px-[5%] py-12 max-md:py-8 align-center">
                    <h2 className="text-center text-2xl pb-4 xl:text-3xl xl:pb-8"><b>Our Services</b></h2>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl text-center">
                        From gaining a clear diagnosis to building essential skills and achieving your goals, our comprehensive services are designed to empower you to thrive.
                    </p>
                </div>
            </div>

            <div className="bg-diagnostic bg-cover bg-center">
                <div ref={firstTrigger} className={firstIsInView ? "motion-safe:animate-slideInFromLeft md:motion-safe:animate-slideInFromLeft2" : "opacity-0"}>
                    <div className="py-12 max-md:px-[10%] px-[30%] text-indigo-600">
                        <div className="bg-black bg-opacity-80 rounded-lg border-indigo-600 border-[2px] px-2 py-2">
                            <h2 className="text-center text-2xl pb-2 xl:text-3xl xl:pb-8"><b>Diagnostic Service</b></h2>
                            <p className="md:text-lg max-md:text-md xl:text-xl text-center">
                                <b>Gain Clarity About ADHD in Adulthood</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-offwhite">
                <div className="px-[10%] max-md:px-[5%] py-12 max-md:py-8 align-center">
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        Many adults with ADHD go undiagnosed, navigating life without fully understanding why they face certain challenges. At Clarity Path, our comprehensive diagnostic service helps uncover whether ADHD might be influencing your experiences.
                    </p>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        Using evidence-based assessments and one-on-one consultations, we dive deep into your history, current challenges, and strengths. Our compassionate approach ensures you feel understood and supported every step of the way.
                    </p>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        By the end of the process, you&apos;ll receive a clear diagnosis, a personalized summary of findings, and tailored recommendations for the next steps—empowering you to take charge of your life with greater confidence.
                    </p>
                </div>
            </div>

            <div className="bg-therapeutic bg-cover bg-center">
                <div ref={secondTrigger} className={secondIsInView ? "motion-safe:animate-slideInFromRight md:motion-safe:animate-slideInFromRight2" : "opacity-0"}>
                    <div className="py-12 max-md:px-[10%] px-[30%] text-indigo-600">
                        <div className="bg-black bg-opacity-80 rounded-lg border-indigo-600 border-[2px] px-2 py-2">
                            <h2 className="text-center text-2xl pb-2 xl:text-3xl xl:pb-8"><b>Therapeutic Service</b></h2>
                            <p className="md:text-lg max-md:text-md xl:text-xl text-center">
                                <b>Build Skills to Thrive with ADHD</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-offwhite">
                <div className="px-[10%] max-md:px-[5%] py-12 max-md:py-8 align-center">
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        Understanding ADHD is just the beginning. Our therapeutic services focus on equipping you with the tools and strategies needed to manage symptoms effectively and build a life that works for you.
                    </p>
                    <p className="md:text-lg max-md:text-md pb-1 xl:text-xl">
                        Through personalized, practical sessions, we help you:
                    </p>
                    <ul className="md:text-lg max-md:text-md pb-4 pl-2 xl:text-xl">
                        <li>• Improve focus and productivity.</li>
                        <li>• Develop better organization and time-management skills.</li>
                        <li>• Navigate emotional challenges like frustration or overwhelm.</li>
                        <li>• Strengthen relationships and communication.</li>
                    </ul>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        Our expert therapists work with you to identify your unique strengths and challenges, offering guidance tailored to your goals and lifestyle. Together, we&apos;ll create a roadmap to help you thrive—not despite ADHD, but because of your ability to harness it.
                    </p>
                </div>
            </div>

            <div className="bg-achievement bg-cover bg-center">
                <div ref={thirdTrigger} className={thirdIsInView ? "motion-safe:animate-slideInFromLeft md:motion-safe:animate-slideInFromLeft2" : "opacity-0"}>
                    <div className="py-12 max-md:px-[10%] px-[30%] text-indigo-600">
                        <div className="bg-black bg-opacity-80 rounded-lg border-indigo-600 border-[2px] px-2 py-2">
                            <h2 className="text-center text-2xl pb-2 xl:text-3xl xl:pb-8"><b>Achievement Service</b></h2>
                            <p className="md:text-lg max-md:text-md xl:text-xl text-center">
                                <b>Turn Your Potential Into Progress</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-offwhite">
                <div className="px-[10%] max-md:px-[5%] py-12 max-md:py-8 align-center">
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        After diagnosis and therapy, the next step is applying what you&apos;ve learned to achieve meaningful goals. Our Achievement Service bridges the gap between understanding your ADHD and reaching your full potential.
                    </p>
                    <p className="md:text-lg max-md:text-md pb-1 xl:text-xl">
                        We provide ongoing support to help you:
                    </p>
                    <ul className="md:text-lg max-md:text-md pb-4 pl-2 xl:text-xl">
                        <li>• Stay on track with personal and professional goals.</li>
                        <li>• Overcome procrastination and barriers to success.</li>
                        <li>• Implement sustainable habits and routines.</li>
                        <li>• Celebrate milestones and progress.</li>
                    </ul>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        Whether you&apos;re advancing in your career, strengthening relationships, or striving for a balanced life, we&apos;re here to guide and cheer you on every step of the way. With Clarity Path, achievement isn&apos;t just a dream—it&apos;s a plan in action.
                    </p>
                </div>
            </div>
            
            <Footer />
            
        </div>
    );
}