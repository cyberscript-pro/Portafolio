"use client";
import ExperienceSection from "./ExperienceSection";
import Header from "./Header";
import SkillsSection from "./SkillsSection";

function HeroSection() {
  return (
    <section>
      <Header />

      <div className="max-w-3xl mx-auto md:px-8 px-2">
        <blockquote className="italic pt-4 text-gray-400 text-[13px] md:text-base">
          "Transformo ideas en experiencias digitales intuitivas."
        </blockquote>
      </div>

      <ExperienceSection />
      <SkillsSection />
    </section>
  );
}

export default HeroSection;
