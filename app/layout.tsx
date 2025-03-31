'use client';
import { Hubballi } from "next/font/google";
import React from "react";
import "./globals.css";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import SocialMediaButton from "../components/SocialMediaButton";
import { links } from "../data/links";
import { useTab, TabProvider } from "../context/TabContext";

const hubballi = Hubballi({
  weight: ["400"],
  subsets: ["latin"],
});

function NavItems() {
  const { setActiveTab, activeTab } = useTab();
  
  const tabs = [
    { id: 'projects', label: 'Side Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'research', label: 'Research' },
    { id: 'presentation', label: 'Presentation' },
    { id: 'teaching', label: 'Teaching' },
  ];

  return (
    <div className="flex flex-wrap gap-x-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`mb-5 px-2 rounded-lg ${activeTab === tab.id ? 'bg-gray-200' : 'text-gray-400'}`}
          style={{ fontSize: 24 }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hubballi.className}`}>
        <GoogleAnalytics gaId="G-B1TRQFQPF3" />
        <TabProvider>
          <div className="max-w-screen-xl w-full flex lg:flex-row md:flex-row flex-col items-center mx-auto gap-y-10 gap-x-5 mt-12 px-5">
            <img
              src="/img/github_photo.png"
              width={400}
              height={419}
              alt="Haries' Profile Picture"
              style={{ borderRadius: "50%" }}
            />
            <div className="flex flex-col">
              <p style={{ fontSize: 50 }} className="leading-10 mb-4">
                Hi! I am <span className="text-gray-300">Muhamad</span> Haries{" "}
                <span className="text-gray-300">Ramdhani</span>
              </p>
              <div className="flex flex-row gap-x-2 mb-8">
                {links.map((link) => (
                  <SocialMediaButton
                    key={link.image_filename}
                    url={link.url}
                    image_filename={link.image_filename}
                  />
                ))}
              </div>
              <p
                            style={{ fontSize: 24 }}
                            className="leading-7 text-justify"
                        >
                            I am a second-year PhD Student in Medical Sciences
                            at the Institute of Medical Sciences, University of
                            Aberdeen in{" "}
                            <Link
                                href="https://www.morganlab.co.uk/"
                                className="text-indigo-400"
                            >
                                Morgan Lab
                            </Link>
                            , supervised by{" "}
                            <Link
                                href="https://www.abdn.ac.uk/people/michael.morgan"
                                className="text-indigo-400"
                            >
                                Dr. Michael Morgan
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="https://www.abdn.ac.uk/ims/profiles/c.debari"
                                className="text-indigo-400"
                            >
                                Prof. Cosimo de Bari
                            </Link>
                            . My research interests are in bioinformatics
                            software and algorithm development, also the
                            utilization of omics data to understand the
                            complexity of biological systems through data
                            visualization and machine learning.
                            <br />
                            <br />
                            Prior to my PhD, I received my BSc in Molecular
                            Biology and Genetics from{" "}
                            <Link
                                href="https://www.gtu.edu.tr/?languageId=2"
                                className="text-indigo-400"
                            >
                                Gebze Technical University
                            </Link>
                            , Turkey{" "}
                            <Link
                                href="https://www.turkiyeburslari.gov.tr/"
                                className="text-indigo-400"
                            >
                                (Turkish scholarship)
                            </Link>{" "}
                            and after that worked as a Data Scientist for{" "}
                            <Link
                                href="https://www.linkedin.com/company/homecreditindonesia/"
                                className="text-indigo-400"
                            >
                                Home Credit
                            </Link>
                            .
                            <br />
                            <br />
                            Currently as part of my PhD, I&apos;m working on the
                            development of robust and scalable computational and
                            statistical methods for differential cell crosstalk
                            analysis, funded by{" "}
                            <Link
                                href="https://www.abdn.ac.uk/smmsn/"
                                className="text-indigo-400"
                            >
                                The School of Medicine, Medical Sciences and
                                Nutrition
                            </Link>{" "}
                            through the IMS studentship.
                        </p>
            </div>
          </div>
          <div className="max-w-screen-xl w-full flex flex-col items-start gap-x-5 mt-12 mx-auto px-5">
            <NavItems />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
              {children}
            </div>
          </div>
          <div className="max-w-screen-xl w-full flex flex-col items-center gap-x-5 mt-12 mx-auto px-5">
            <p>Haries Ramdhani © 2025.</p>
          </div>
        </TabProvider>
      </body>
    </html>
  );
}