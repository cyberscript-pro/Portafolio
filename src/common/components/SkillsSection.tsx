import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "../services/utils";

function SkillsSection() {
  return (
    <section className="z-0 inset-0 max-w-3xl p-3 mx-auto flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {skills.map((skill, idx) => (
          <SkillCard key={idx} skill={skill.name} icon={<skill.icon />} />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
