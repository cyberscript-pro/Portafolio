import { FaDocker, FaGitAlt, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpo, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";

export const skills = [
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "NextJS", icon: RiNextjsFill },
  { name: "TailwindCSS", icon: RiTailwindCssFill },
  { name: "React Native with Expo", icon: SiExpo },
  { name: "NodeJS", icon: RiNodejsFill },
  { name: "Java", icon: FaJava },
  { name: "Git", icon: FaGitAlt },
  { name: "Docker", icon: FaDocker },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 7,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 16,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 15,
        text: "Tecnologías conocidas",
        lineRight: false,
        lineRightMobile: false,
        isFinally: true
    },
];

export const experiences = [
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
      date: "2025 / Abril - Mayo",
      responsibilities: [
        "Desarrollé un juego en java usando Swing.",
        "Diseñé y implementado un sistema de gestión de inventarios en java.",
        "Optimización de algoritmos y estructuras de datos.",
      ],
    },
    {
      position: "FullStack Developer",
      company: "Cliente",
      date: "2025 / Enero - Abril",
      responsibilities: [
        "Desarrollé un sistema de gestión de flota en Next.js.",
        "Diseñé y implementé el diseño del front-end de un sistema de gestión de flota.",
        "Diseñé y implementé el back-end del sistema.",
      ],
    },
  ];