import { IconType } from "react-icons";

interface SkillProgressProps {
  skill: string;
  percent: number;
  icon: any;
}

export default function SkillProgress({
  skill,
  percent,
  icon,
}: SkillProgressProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {skill}
          </span>
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {percent}%
        </span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-zinc-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-blue-500 dark:bg-blue-400 transition-all duration-700 ease-in-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
