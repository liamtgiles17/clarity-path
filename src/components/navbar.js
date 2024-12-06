import "./../app/globals.css";
// import Marquee from "@/components/marquee.js";
import Image from "next/image";
import Link from "next/link";
import {MagnifyingGlassIcon, Bars3Icon, HomeIcon, PhoneIcon, HeartIcon, DocumentTextIcon, UserCircleIcon, QuestionMarkCircleIcon} from "@heroicons/react/24/outline";
import {Button, Drawer} from "flowbite-react";
import {useState} from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50">
            <div className="flex flex-row space-y-[42px]">
                {/* <Marquee /> */}

                <div className="flex items-center bg-offwhite p-1 py-2 px-8 justify-between w-full">

                    <div className="flex items-center flex-grow sm:flex-grow-0">
                        <Link href="/"><Image className="cursor-pointer object-contain max-md:w-[60%] md:w-[70%] px-4 -ml-8" alt="logo" src="/clarity-path/logo.avif" priority={true} width={220} height={60} /></Link>
                    </div>
                    
                    <div className="" />
                    <div className="md:hidden">
                        <Button color="indigo" pill size="xs" onClick={() => setIsOpen(true)}>
                            <Bars3Icon className="size-6 cursor-pointer" />
                        </Button>
                        <Drawer className="bg-indigo-600" position="left" open={isOpen} onClose={handleClose}>
                            <Drawer.Items>
                                <div className="text-white">
                                    <div className="pb-4">
                                        <h3 className="text-md"><b>MENU</b></h3>
                                    </div>
                                    <div className="cursor-pointer hover:bg-indigo-400 pb-2 flex flex-row space-x-2 items-center">
                                        <HomeIcon className="size-5 text-center"></HomeIcon>
                                        <Link href="/" onClick={handleClose}><p className="hover:underline text-xl"><b>Home</b></p></Link>
                                    </div>
                                    <hr className="py-2 border-slate-400" />
                                    <div className="cursor-pointer hover:bg-indigo-400 pb-2 flex flex-row space-x-2 items-center">
                                        <QuestionMarkCircleIcon className="size-5 text-center"></QuestionMarkCircleIcon>
                                        <Link href="/adhd" onClick={handleClose}><p className="hover:underline text-xl"><b>What is ADHD?</b></p></Link>
                                    </div>
                                    <hr className="py-2 border-slate-400" />
                                    <div className="cursor-pointer hover:bg-indigo-400 pb-2 flex flex-row space-x-2 items-center">
                                        <HeartIcon className="size-5 text-center"></HeartIcon>
                                        <Link href="/services" onClick={handleClose}><p className="hover:underline text-xl"><b>Our Services</b></p></Link>
                                    </div>
                                    <hr className="py-2 border-slate-400" />
                                    <div className="cursor-pointer hover:bg-indigo-400 pb-2 flex flex-row space-x-2 items-center">
                                        <DocumentTextIcon className="size-5 text-center"></DocumentTextIcon>
                                        <Link href="/blogs" onClick={handleClose}><p className="hover:underline text-xl"><b>Blogs</b></p></Link>
                                    </div>
                                    <hr className="py-2 border-slate-400" />
                                    <div className="cursor-pointer hover:bg-indigo-400 pb-2 flex flex-row space-x-2 items-center">
                                        <PhoneIcon className="size-5 text-center"></PhoneIcon>
                                        <Link href="/contact" onClick={handleClose}><p className="hover:underline text-xl"><b>Get in Touch</b></p></Link>
                                    </div>
                                    <hr className="py-2 border-slate-400" />
                                    <div className="cursor-pointer hover:bg-indigo-400 fixed bottom-12 flex flex-row items-center space-x-2 pb-2">
                                        <UserCircleIcon className="size-5 cursor-pointer" />
                                        <p className="hover:underline text-lg"><b>Log In</b></p>
                                    </div>
                                    <div className="cursor-pointer hover:bg-indigo-400 fixed bottom-2 flex flex-row items-center space-x-2 pb-2">
                                        <MagnifyingGlassIcon className="size-5 cursor-pointer" />
                                        <Link href="/search"><p className="hover:underline text-lg"><b>Search</b></p></Link>
                                    </div>
                                </div>
                            </Drawer.Items>
                        </Drawer>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 max-md:hidden">
                        <UserCircleIcon className="size-6 cursor-pointer" />
                        <Link href="search"><MagnifyingGlassIcon className="size-6 cursor-pointer" /></Link>
                    </div>
                </div>
            </div>

            <div className="bg-indigo-800 flex flex-row space-x-6 text-white pb-2 items-center justify-center pt-2 px-4">
                <div className="cursor-pointer justify-center text-center max-md:hidden">
                    <Link href="/"><p className="hover:underline">Home</p></Link>
                </div>
                <div className="cursor-pointer justify-center text-center max-md:hidden">
                    <Link href="/adhd"><p className="hover:underline">What is ADHD?</p></Link>
                </div>
                <div className="cursor-pointer justify-center text-center max-md:hidden">
                    <Link href="/services"><p className="hover:underline">Our Services</p></Link>
                </div>
                <div className="cursor-pointer justify-center text-center max-md:hidden">
                    <Link href="/blogs"><p className="hover:underline">Blogs</p></Link>
                </div>
                <div className="cursor-pointer justify-center text-center max-md:hidden">
                    <Link href="/contact"><p className="hover:underline">Get in Touch</p></Link>
                </div>
            </div>
        </header>
    );
}