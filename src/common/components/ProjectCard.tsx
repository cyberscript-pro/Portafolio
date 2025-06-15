import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  demo: string;
  repo: string;
  disabled?: boolean;
  disabledRepo?: boolean;
};

function ProjectCard({ ...project }: ProjectCardProps) {
  return (
    <div
      key={project.title}
      className="relative rounded-xl overflow-hidden border border-gray-700 group"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="object-cover w-full h-60 transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-3">{project.description}</p>
        <div className="flex gap-3">
          <button
            onClick={() => {
              if (!project.disabled) {
                window.open(project.demo, "_blank", "noopener,noreferrer");
              }
            }}
            disabled={project.disabled}
            className={`text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded ${
              project.disabled
                ? "opacity-60 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            aria-disabled={project.disabled}
          >
            Demo
          </button>
          <button
            onClick={() => {
              if (!project.disabledRepo) {
                window.open(project.repo, "_blank", "noopener,noreferrer");
              }
            }}
            disabled={project.disabledRepo}
            className={`text-sm bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded ${
              project.disabledRepo
                ? "opacity-60 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            aria-disabled={project.disabledRepo}
          >
            Código
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
