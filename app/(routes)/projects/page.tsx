"use client";
import BottomBar from "@/src/common/components/BottomBar";
import Header from "@/src/common/components/Header";
import { PageTransition } from "@/src/common/components/PageTransition";
import ProjectCard from "@/src/common/components/ProjectCard";
import { StackItem } from "@/src/common/components/TecnoStat";
import { projects } from "@/src/common/services/utils";

function ProjectScreen() {
  return (
    <div className="w-full min-h-screen bg-black pb-30">
      <PageTransition />
      <Header />
      <section className="pt-3 pb-6 px-6 text-white ">
        {/* <div className="sticky top-0 z-10 backdrop-blur-md"> */}
          <h2 className="text-3xl font-bold text-center p-10">Proyectos</h2>
        {/* </div> */}
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
              stack={project.stack as any as StackItem[]}
            />
          ))}
        </div>
      </section>

      {/* <BottomBar /> */}
    </div>
  );
}

export default ProjectScreen;
