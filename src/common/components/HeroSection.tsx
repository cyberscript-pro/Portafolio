"use client";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import ExperienceSection from "./ExperienceSection";
import Header from "./Header";
import SkillsSection from "./SkillsSection";


function HeroSection() {
  return (
    <section>
      <Header />

      <div className="max-w-3xl mx-auto md:px-8 px-2">
        <blockquote className="italic pt-4 text-gray-400 text-[13px]">
          "Transformo ideas en experiencias digitales intuitivas."
        </blockquote>
      </div>

      <ExperienceSection />
      <SkillsSection />
    </section>
  );
}

export default HeroSection;
