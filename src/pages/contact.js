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

export default function ContactPage() {
    const [detailTrigger, detailIsInView] = useInView({threshold: 0.95, triggerOnce: true});

    return (
        <div className={poppins.className}>
            <Head>
                <title>Get in Touch | Clarity Path</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Liam Giles" />
                <meta name="description" content="Adult ADHD service Clarity Path" />
            </Head>

            <Navbar />
            
            <div className="bg-offwhite">
                <div className="px-[10%] max-md:px-[5%] py-12 max-md:py-8 align-center">
                    <h2 className="text-center text-2xl pb-4 xl:text-3xl xl:pb-8"><b>Get in Touch</b></h2>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">We&apos;re here to support you on your journey toward clarity, confidence, and achievement. Whether you have questions about our services or are ready to book an appointment, simply fill out the form below, and a member of our team will get back to you shortly.</p>
                    <div id="contact-form">
                        <div className="md:grid md:grid-cols-2 md:gap-x-8">
                            <div className="pb-4"><input className="rounded-md py-2 px-2 w-full bg-slate-200 border-black" type="text" placeholder="Name" id="name" /></div>
                            <div className="pb-4"><input className="rounded-md py-2 px-2 w-full bg-slate-200 border-black" type="text" placeholder="Phone Number (optional)" id="phone" autoComplete="true" /></div>
                        </div>
                        <div className="pb-4"><input className="rounded-md py-2 px-2 w-full bg-slate-200 border-black" type="text" placeholder="Email Address" id="email" autoComplete="true" /></div>
                        <div className="pb-4"><input className="rounded-md py-2 px-2 w-full pb-28 bg-slate-200 border-black" type="text" placeholder="Message" id="message" /></div>
                        <div className="flex items-center justify-center">
                            <button className="rounded-md py-2 px-2 max-sm:w-[50%] w-[30%] bg-indigo-700 hover:bg-indigo-600 text-center text-white"><b>SEND</b></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:grid md:grid-cols-2 max-md:grid max-md:grid-rows-2">
                <div className="bg-home-hero-blur bg-cover bg-center">
                    <div ref={detailTrigger} className={detailIsInView ? "motion-safe:animate-slideInFromBottom md:motion-safe:animate-slideInFromLeft2" : "opacity-0"}>
                        <div className="px-[20%] py-48 flex items-center justify-center">
                            <div className="text-white text-center md:text-lg max-md:text-md pb-4 xl:text-xl">
                                <p><b>Clarity Path</b></p>
                                <p>123 Anywhere Street, Earth</p>
                                <p>info@claritypath.org</p>
                                <p>01234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-0 p-0 w-full h-full">
                    <iframe style={{width: "100%", height: "100%"}} referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCVTbLChyde4Xu9W8sHZtSu_v06i6BGKCE&q=Cygnet+Heathers" allowFullScreen></iframe>
                </div>
            </div>

            <Footer />
        </div>
    );
}