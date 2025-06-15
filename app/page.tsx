"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

import { FaDocker, FaGitAlt, FaJava, FaReact } from "react-icons/fa";

import BottomBar from "@/src/common/components/BottomBar";
import ThemeToggle from "@/src/common/components/ThemeToggle";
import SkillProgress from "@/src/common/components/SkillProgress";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpo, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import ExperienceSection from "@/src/common/components/ExperienceSection";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="h-screen relative pb-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/photo.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-0" />

      <div className="absolute inset-0 z-10 overflow-auto">
        <header className="flex justify-between items-center p-3 sticky top-0 backdrop-blur-xs z-50">
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
          {/* <ThemeToggle /> */}
        </header>
        <main>
          <section className="max-w-3xl mx-auto md:px-8  rounded-xl px-6 py-10">
            <h4 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-cyan-500 after:mx-auto after:mt-2">
              Sobre mí
            </h4>
            <p
              className={`${poppins.className} text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3`}
            >
              Soy un{" "}
              <span className="font-semibold text-cyan-500">
                Desarrollador FullStack
              </span>{" "}
              con experiencia en la creación de aplicaciones web y móviles.
              Actualmente trabajo en una empresa de tecnología, colaborando en
              el desarrollo de soluciones digitales para clientes de todo el
              mundo. Me apasiona construir productos funcionales, bien diseñados
              y con alto rendimiento.
            </p>

            <blockquote className="italic pt-4 text-gray-400 text-md">
              "Transformo ideas en experiencias digitales intuitivas."
            </blockquote>
          </section>

          <ExperienceSection />

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Skills
            </h2>
            <div className="p-3">
              <SkillProgress icon={<FaJava />} skill="Java" percent={70} />
              <SkillProgress
                icon={<IoLogoJavascript />}
                skill="JavaScript"
                percent={80}
              />
              <SkillProgress
                icon={<SiTypescript />}
                skill="TypeScript"
                percent={90}
              />
              <SkillProgress icon={<FaReact />} skill="React" percent={80} />
              <SkillProgress
                icon={<RiNextjsFill />}
                skill="Next.js"
                percent={80}
              />
              <SkillProgress
                icon={<RiTailwindCssFill />}
                skill="TailwindCSS"
                percent={80}
              />
              <SkillProgress
                icon={<SiExpo />}
                skill="React Native with Expo"
                percent={50}
              />
              <SkillProgress
                icon={<RiNodejsFill />}
                skill="Node.js"
                percent={80}
              />
              <SkillProgress icon={<FaGitAlt />} skill="Git" percent={80} />
              <SkillProgress icon={<FaDocker />} skill="Docker" percent={80} />
            </div>
          </section>
        </main>
        <BottomBar />
      </div>
    </div>
  );
}
