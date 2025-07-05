"use client";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

import { FaDocker, FaGitAlt, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpo, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";

import ExperienceSection from "@/src/common/components/ExperienceSection";
import BottomBar from "@/src/common/components/BottomBar";
import SkillCard from "@/src/common/components/SkillCard";
import ReadmeSection from "@/src/common/components/ReadmeSection";
import RadarSkills from "@/src/common/components/RadarSkills";
import { PageTransition } from "@/src/common/components/PageTransition";
import HeroSection from "@/src/common/components/HeroSection";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const skills = [
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "NextJS", icon: <RiNextjsFill /> },
  { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
  { name: "React Native with Expo", icon: <SiExpo /> },
  { name: "NodeJS", icon: <RiNodejsFill /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Docker", icon: <FaDocker /> },
];

export default function Home() {
  return (
    <div
      className="h-screen relative pb-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/photo.png')" }}
    >
      <PageTransition />
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-0" />

      <div className="absolute inset-0 z-10 overflow-auto">
        <HeroSection />
        {/*<header className="flex justify-between items-center p-3 sticky top-0 backdrop-blur-xs z-50">
          <div className="flex gap-2 items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-3xl"
            />
            <h3
              className={`${spaceGrotesk.className} text-lg text-gray-800 dark:text-white`}
            >
              Li Anthony Gomez
            </h3>
          </div>
          
        </header>
        <main>
          <div className="max-w-3xl mx-auto md:px-8 px-2">
            <blockquote className="italic pt-4 text-gray-400 text-md">
              "Transformo ideas en experiencias digitales intuitivas."
            </blockquote>
          </div>

          <ExperienceSection />

          <section className="max-w-3xl p-3 mx-auto flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
              {skills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill.name} icon={skill.icon} />
              ))}
            </div>
          </section>

          <ReadmeSection />
        </main>*/}
        {/* <BottomBar /> */}
      </div>
    </div>
  );
}
