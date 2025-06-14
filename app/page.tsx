"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import BottomBar from "@/src/common/components/BottomBar";
import ThemeToggle from "@/src/common/components/ThemeToggle";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="min-h-screen relative pb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/photo.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-0" />

      <div className="absolute inset-0 z-10">
        <header className="flex justify-between items-center p-3">
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
          <ThemeToggle />
        </header>
        <main>
          <section className="max-w-3xl mx-auto md:px-8 backdrop-blur-xs rounded-xl px-6 py-10">
            <h4 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-cyan-500 after:mx-auto after:mt-2">
              Sobre mí
            </h4>
            <p
              className={`${poppins.className} text-lg text-gray-700 dark:text-gray-300 leading-relaxed`}
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
          </section>
          <blockquote className="italic text-gray-400 text-md">
            "Transformo ideas en experiencias digitales intuitivas."
          </blockquote>
        </main>
      </div>
      <BottomBar />
    </div>
  );
}
