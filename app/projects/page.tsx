"use client";
import BottomBar from "@/src/common/components/BottomBar";
import ProjectCard from "@/src/common/components/ProjectCard";
import React from "react";

const projects = [
  {
    title: "Gestión de Flota",
    description: "",
    image: "/flota.png",
    demo: "https://az-flota.vercel.app",
    repo: "https://github.com/cyberscript-pro/AzFlota",
  },
  {
    title: "Plataforma de Contratación",
    description: "",
    image: "/development.png",
    demo: "https://az-flota.vercel.app",
    repo: "https://github.com/orgs/Guaraperos-SRL/",
    disabled: true,
  },
];

function ProjectScreen() {
  return (
    <div className="w-full min-h-screen bg-black pb-30">
      <section className="py-16 px-6 text-white ">
        <div className="sticky top-0 z-10 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-center p-10">Proyectos</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              image={project.image}
              demo={project.demo}
              repo={project.repo}
              disabled={project.disabled}
            />
          ))}
        </div>
      </section>

      <BottomBar />
    </div>
  );
}

export default ProjectScreen;
