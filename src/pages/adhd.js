'use client';
import "./../app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import {Poppins} from 'next/font/google';

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"]
});

export default function WhatIsADHD() {
    return (
        <div className={poppins.className}>
            <Head>
                <title>What Is ADHD? | Clarity Path</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Liam Giles" />
                <meta name="description" content="Adult ADHD service Clarity Path" />
            </Head>

            <Navbar />
            
            <div className="bg-offwhite">
                <div className="px-[10%] max-md:px-[5%] py-12 max-md:py-8 align-center">
                    <h2 className="text-center text-2xl pb-4 xl:text-3xl xl:pb-8"><b>What is ADHD?</b></h2>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        Attention-Deficit/Hyperactivity Disorder, or ADHD, is a neurodevelopmental condition that affects how individuals think, focus, and regulate their impulses and behaviors. While it is often diagnosed in childhood, many adults live with ADHD without realizing it, leading to challenges in various areas of life such as work, relationships, and personal well-being.
                    </p>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        ADHD is characterized by a persistent pattern of inattention, hyperactivity, and impulsivity that interferes with everyday functioning. While everyone experiences occasional lapses in focus or bursts of energy, those with ADHD experience these symptoms to a degree that significantly impacts their lives. ADHD is not just a matter of being &quot;distracted&quot; or &quot;disorganized&quot;; it&apos;s a condition rooted in how the brain processes information and regulates behavior.
                    </p>
                    
                    <h3 className="pb-4 text-xl xl:text-2xl"><b>Symptoms</b></h3>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        ADHD symptoms are generally grouped into two broad categories: inattention and hyperactivity-impulsivity. While individuals with ADHD may experience both, some may predominantly exhibit one category over the other.
                    </p>
                    <p className="md:text-lg max-md:text-md pb-1 pl-2 xl:text-xl">
                        1. <b>Inattention</b>:
                    </p>
                    <ul className="md:text-lg max-md:text-md pb-4 pl-4 xl:text-xl">
                        <li>• Difficulty sustaining focus on tasks or conversations.</li>
                        <li>• Frequent careless mistakes in work or daily tasks.</li>
                        <li>• Easily distracted by unrelated stimuli or thoughts.</li>
                        <li>• Struggling to follow through with tasks or complete assignments.</li>
                        <li>• Forgetfulness in daily activities and losing track of important items.</li>
                        <li>• Difficulty organizing tasks and activities.</li>
                    </ul>
                    <p className="md:text-lg max-md:text-md pb-1 pl-2 xl:text-xl">
                        2. <b>Hyperactivity</b> and <b>Impulsivity</b>:
                    </p>
                    <ul className="md:text-lg max-md:text-md pb-4 pl-4 xl:text-xl">
                        <li>• Fidgeting, squirming, or an inability to remain still.</li>
                        <li>• Difficulty staying quiet in situations where it&apos;s expected, such as during meetings or conversations.</li>
                        <li>• Interrupting others or being unable to wait for one&apos;s turn in conversations or activities.</li>
                        <li>• Acting impulsively without considering the consequences.</li>
                        <li>• Restlessness and an overwhelming urge to keep moving.</li>
                    </ul>

                    <h3 className="pb-4 text-xl xl:text-2xl"><b>Causes and Risk Factors</b></h3>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        The exact causes of ADHD are not fully understood, but a combination of genetic, environmental, and neurobiological factors contribute to its development.
                    </p>
                    <ul className="md:text-lg max-md:text-md pb-4 pl-2 xl:text-xl">
                        <li>• <b>Genetics</b>: ADHD often runs in families, suggesting a hereditary link. Specific genes related to the regulation of neurotransmitters (chemical messengers in the brain) are believed to play a role.</li>
                        <li>• <b>Brain Structure and Function</b>: Research shows that individuals with ADHD may have differences in the size and activity of brain regions responsible for attention, impulse control, and executive function.</li>
                        <li>• <b>Prenatal and Early Life Factors</b>: Exposure to substances such as alcohol, tobacco, or drugs during pregnancy, premature birth, or lead exposure in early childhood may increase the risk of developing ADHD.</li>
                    </ul>

                    <h3 className="pb-4 text-xl xl:text-2xl"><b>Diagnosis</b></h3>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        ADHD is diagnosed based on a comprehensive evaluation by a healthcare professional, typically involving interviews, behavioral assessments, and questionnaires. For adults, this process may also include a detailed review of childhood symptoms.
                    </p>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        A proper diagnosis is important, as many symptoms of ADHD overlap with other conditions such as anxiety, depression, or learning disabilities. An accurate assessment helps rule out other possible causes of the symptoms and allows for tailored treatment options.
                    </p>

                    <h3 className="pb-4 text-xl xl:text-2xl"><b>Life with ADHD</b></h3>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        ADHD can impact various aspects of life, including work, education, social interactions, and self-esteem. Adults with ADHD may struggle with procrastination, time management, staying organized, and maintaining focus in both professional and personal settings. Additionally, they may experience feelings of frustration, low self-worth, or anxiety due to the constant challenge of managing their symptoms.
                    </p>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        However, with the right support and coping strategies, adults with ADHD can lead fulfilling and successful lives. Many individuals with ADHD have unique strengths, including creativity, high energy, and the ability to think outside the box. ADHD does not define a person—it&apos;s simply one aspect of their overall identity.
                    </p>

                    <h3 className="pb-4 text-xl xl:text-2xl"><b>Treatment & Management</b></h3>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        ADHD is a lifelong condition, but with the right strategies and support, its symptoms can be effectively managed. Treatment often involves a combination of behavioral strategies, medication, and lifestyle changes. Here are some common approaches:
                    </p>
                    <ul className="md:text-lg max-md:text-md pb-4 pl-2 xl:text-xl">
                        <li>• <b>Behavioral Therapy</b>: A therapist can help individuals with ADHD develop strategies for managing daily tasks, improving organizational skills, and reducing impulsivity. Cognitive-behavioral therapy (CBT) is commonly used to help adults with ADHD reframe negative thought patterns and develop healthier behaviors.</li>
                        <li>• <b>Medication</b>: Stimulant medications like methylphenidate and amphetamines are commonly prescribed to help regulate attention and reduce hyperactivity. Non-stimulant medications like atomoxetine may also be used for those who don&apos;t respond well to stimulants.</li>
                        <li>• <b>Coaching and Support</b>: ADHD coaching can help individuals set goals, improve time management, and create systems to stay organized. Support groups and peer counseling are also beneficial for providing understanding and encouragement.</li>
                        <li>• <b>Lifestyle Adjustments</b>: Regular exercise, a balanced diet, and adequate sleep can significantly improve symptoms. Building a structured routine and breaking tasks into smaller, manageable steps can also help reduce overwhelm.</li>
                    </ul>

                    <h3 className="pb-4 text-xl xl:text-2xl"><b>The Path Forward</b></h3>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        ADHD is not a limitation; it&apos;s an aspect of the brain&apos;s wiring that can be harnessed with the right approach. Many adults with ADHD find success in their careers, relationships, and personal lives by leveraging their strengths and learning effective strategies to manage challenges.
                    </p>
                    <p className="md:text-lg max-md:text-md pb-4 xl:text-xl">
                        At Clarity Path, we are here to help you navigate this journey, offering diagnosis, therapeutic support, and tools for achievement. If you think you may have ADHD or are struggling with symptoms, don&apos;t hesitate to reach out. With the right guidance, you can gain clarity, build confidence, and unlock your full potential.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}