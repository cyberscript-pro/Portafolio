"use client";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import ExperienceSection from "./ExperienceSection";
import Header from "./Header";


function HeroSection() {
  return (
    <section>
      <Header />

      <div className="max-w-3xl mx-auto md:px-8 px-2">
        <blockquote className="italic pt-4 text-gray-400 text-md">
          "Transformo ideas en experiencias digitales intuitivas."
        </blockquote>
      </div>

      <ExperienceSection />
    </section>
  );
}

export default HeroSection;
