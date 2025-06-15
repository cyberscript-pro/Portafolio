import { ReactNode } from "react";
import { IconType } from "react-icons";

interface SkillProgressProps {
  skill: string;
  icon: ReactNode;
}

export default function SkillCard({ skill, icon }: SkillProgressProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 shadow-md rounded-2xl w-32 h-32 hover:scale-105 transition-transform">
      <div className="text-4xl text-blue-500 mb-2">{icon}</div>
      <span className="text-sm text-center font-semibold text-gray-800 dark:text-white">
        {skill}
      </span>
    </div>
  );
}
