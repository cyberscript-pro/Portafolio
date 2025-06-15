export default function ExperienceSection() {
  const experiences = [
    {
      position: "Software Developer",
      company: "Xetid",
      date: "2025 - Presente",
      responsibilities: [
        "Desarrollo de APIs con Django Rest Framework.",
        "Desarrollo de aplicaciones mobiles con Java.",
      ],
    },
    {
      position: "Java Developer",
      company: "Cliente",
      date: "2025 - Abril - Mayo",
      responsibilities: [
        "Desarrollé un juego en java usando Swing.",
        "Diseñé y implementado un sistema de gestión de inventarios en java.",
        "Optimización de algoritmos y estructuras de datos.",
      ],
    },
    {
      position: "FullStack Developer",
      company: "Cliente",
      date: "2025 - Enero - Abril",
      responsibilities: [
        "Desarrollé un sistema de gestión de flota en Next.js.",
        "Diseñé y implementé el diseño del front-end de un sistema de gestión de flota.",
        "Diseñé y implementé el back-end del sistema.",
      ],
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Experiencia
      </h2>
      <div className="border-l border-gray-300 dark:border-zinc-700 pl-4">
        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-10 gap-2">
            <div className="absolute mr-2 w-3 h-3 bg-blue-600 rounded-full -left-6 top-1.5"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {exp.position}{" "}
              <span className="text-sm text-gray-500">· {exp.company}</span>
            </h3>
            <p className="text-sm text-gray-500 mb-2">{exp.date}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              {exp.responsibilities.map((res, j) => (
                <li key={j}>{res}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
