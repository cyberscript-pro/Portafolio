import Experience from "./Experience";
import ExperienceTrayectory from "./ExperienceTrayectory";
import { experiences } from "@/src/common/services/utils";

export default function ExperienceSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 pt-12 pb-16">
      <ExperienceTrayectory />

      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Experiencia
      </h2>

      <Experience />
    </section>
  );
}

{
  /* <div className="border-l border-gray-300 dark:border-zinc-700 pl-4">
        {experiences.map((exp, i) => ( */
}
//     <div key={i} className="relative mb-10 gap-2">
//       {/* <div className="absolute mr-2 w-3 h-3 bg-blue-600 rounded-full -left-6 top-1.5"></div> */}
//       <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//         {exp.position}{" "}
//         <span className="text-sm text-gray-500">· {exp.company}</span>
//       </h3>
//       {/* <p className="text-sm text-gray-500 mb-2">{exp.date}</p> */}
//       <time className="sm:absolute left-0 translate-y-0.5 inline-flex  items-center justify-center text-xs font-semibold uppercase w-20  h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{exp.date}</time>
//       <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
//         {exp.responsibilities.map((res, j) => (
//           <li key={j}>{res}</li>
//         ))}
//       </ul>
//     </div>
//   ))}
// </div>
