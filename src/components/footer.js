import "./../app/globals.css";
import Link from 'next/link';
import {PhoneIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/react/24/outline";
import {Accordion} from "flowbite-react";

export default function Footer() {
    return (
        <footer className="top-0 w-full bg-offwhite">
            <div className="bg-indigo-800 w-full h-4"></div>

            <div className="text-center w-full px-[2%] max-sm:px-[4%] grid max-md:hidden">
                <div className="sm:grid sm:grid-cols-3 sm:gap-x-[48px] justify-between pt-[2%]">
                    <div className="max-sm:hidden items-center relative after:-top-[0.2vw] after:content-[''] after:absolute after:border-l-[1px] after:border-l-slate-300 after:h-full after:-right-[0.2vw]">
                        <div className="text-indigo-800 text-2xl text-center pb-[5%]">
                            <b>Quick Links</b>
                        </div>
                        <div className="hover:underline text-center pb-2">
                            <Link href="/">Home</Link>
                        </div>
                        <div className="hover:underline text-center pb-2">
                            <Link href="/adhd">What is ADHD?</Link>
                        </div>
                        <div className="hover:underline text-center pb-2">
                            <Link href="/services">Our Services</Link>
                        </div>
                        <div className="hover:underline text-center pb-2">
                            <Link href="/blogs">Blogs</Link>
                        </div>
                        <div className="hover:underline text-center pb-2">
                            <Link href="/contact">Get in Touch</Link>
                        </div>
                    </div>

                    <div className="max-sm:flex max-sm:flex-col max-md:flex-shrink items-center">
                        <div className="text-indigo-800 text-2xl text-center pb-4">
                            <b>Newsletter</b>
                        </div>
                        <div className="pb-4 max-sm:px-6">
                            Our newsletter delivers expert insights, exclusive content, and practical advice straight to your inbox—so you can stay focused, organized, and on the path to success. Subscribe today!
                        </div>
                        <div className="pb-4">
                            <input className="rounded-md py-2 px-2 w-72 max-lg:w-48 bg-slate-200 border-black" type="text" placeholder="Email Address" id="email" autoComplete="true" />
                        </div>
                        <div>
                            <button className="rounded-md py-1 px-2 w-72 max-lg:w-48 bg-indigo-700 hover:bg-indigo-600 text-center text-white"><b>SUBSCRIBE</b></button>
                        </div>
                    </div>

                    <div className="max-sm:hidden items-center relative after:-top-[0.2vw] after:content-[''] after:absolute after:border-r-[1px] after:border-r-slate-300 after:h-full after:-left-[0.2vw]">
                        <div className="text-indigo-800 text-2xl text-center pb-[5%] mx-6">
                            <b>Contact Us</b>
                        </div>
                        <div className="pb-4 flex flex-row items-center justify-center space-x-1">
                            <MapPinIcon className="size-4 max-lg:hidden"></MapPinIcon>
                            <b>123 Anywhere Street, Earth</b>
                        </div>
                        <div className="pb-4 flex flex-row items-center justify-center space-x-1">
                            <EnvelopeIcon className="size-4 max-lg:hidden"></EnvelopeIcon>
                            <b>info@claritypath.org</b>
                        </div>
                        <div className="pb-4 flex flex-row items-center justify-center space-x-1">
                            <PhoneIcon className="size-4 max-lg:hidden"></PhoneIcon>
                            <b>01234567890</b>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:hidden">
                <Accordion collapseAll>
                    <Accordion.Panel>
                        <Accordion.Title><p className="text-xl text-indigo-700">Quick Links</p></Accordion.Title>
                        <Accordion.Content>
                            <div className="flex flex-col items-center justify-center">
                                <div className="hover:underline text-center pb-4">
                                    <Link href="/">Home</Link>
                                </div>
                                <div className="hover:underline text-center pb-4">
                                    <Link href="/adhd">What is ADHD?</Link>
                                </div>
                                <div className="hover:underline text-center pb-4">
                                    <Link href="/services">Our Services</Link>
                                </div>
                                <div className="hover:underline text-center pb-4">
                                    <Link href="/blogs">Blogs</Link>
                                </div>
                                <div className="hover:underline text-center pb-4">
                                    <Link href="/contact">Get in Touch</Link>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title><p className="text-xl text-indigo-700">Newsletter</p></Accordion.Title>
                        <Accordion.Content>
                            <div className="flex flex-col items-center justify-center">
                                <div className="pb-4 max-sm:px-6 text-center">
                                    Our newsletter delivers expert insights, exclusive content, and practical advice straight to your inbox—so you can stay focused, organized, and on the path to success. Subscribe today!
                                </div>
                                <div className="pb-4">
                                    <input className="rounded-md py-2 px-2 w-72 max-lg:w-48 bg-slate-200 border-black" type="text" placeholder="Email Address" id="email" autoComplete="true" />
                                </div>
                                <div>
                                    <button className="rounded-md py-1 px-2 w-72 max-lg:w-48 bg-indigo-700 hover:bg-indigo-600 text-center text-white"><b>SUBSCRIBE</b></button>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title><p className="text-xl text-indigo-700">Contact Us</p></Accordion.Title>
                        <Accordion.Content>
                            <div className="flex flex-col items-center justify-center text-center px-6">
                                <div className="pb-4">
                                    <b>123 Anywhere Street, Earth</b>
                                </div>
                                <div className="pb-4">
                                    <b>info@claritypath.org</b>
                                </div>
                                <div className="">
                                    <b>01234567890</b>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>

            <div className="flex justify-center items-center pt-4 pb-2">
                <Link href="#">
                    <p className="text-indigo-800 hover:bg-offwhite-darker text-sm">BACK TO TOP</p>
                </Link>
            </div>

            <div className="flex justify-center items-center text-xs pb-1"><p>© Copyright 2024, Clarity Path</p></div>
        </footer>
    );
}