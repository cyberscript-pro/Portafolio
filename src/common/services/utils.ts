import { FaDocker, FaGitAlt, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiDart,
  SiExpo,
  SiKotlin,
  SiPrisma,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { FaFlutter, FaGolang } from "react-icons/fa6";

export const skills = [
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "NextJS", icon: RiNextjsFill },
  { name: ".NET", icon: TbBrandCSharp },
  { name: "Flutter", icon: FaFlutter },
  { name: "Kotlin", icon: SiKotlin },
  { name: "TailwindCSS", icon: RiTailwindCssFill },
  { name: "React Native with Expo", icon: SiExpo },
  { name: "NodeJS", icon: RiNodejsFill },
  { name: "Java", icon: FaJava },
  { name: "Go", icon: FaGolang },
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
    isFinally: true,
  },
];

export const experiences = [
  {
    position: "FullStack Developer",
    company: "Cliente",
    date: "2025 - Presente",
    responsibilities: [
      "Frontend moderno en Next.js con TailwindCSS y animaciones fluidas usando Framer Motion.",
      "Gestión completa de datos y autenticación con Supabase.",
      "Implementación de autenticación segura mediante OAuth de Google.",
      "APIs eficientes desarrolladas directamente en Next.js para consumir datos de Supabase.",
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
    position: "Software Developer",
    company: "Cliente",
    date: "2025 / Enero - Abril",
    responsibilities: [
      "Desarrollé un sistema de gestión de flota en Next.js.",
      "Diseñé y implementé el diseño del front-end de un sistema de gestión de flota.",
      "Diseñé y implementé el back-end del sistema.",
    ],
  },
];

export const projects = [
  {
    title: "Angie Shop",
    description: "Desarrollo de una tienda en línea para productos varios",
    image: "/angie-shop.avif",
    demo: "https://angie-shop.vercel.app",
    repo: "https://github.com/lianthonygg/AngieShop",
    stack: [
      { icon: RiNextjsFill, name: "Next.js" },
      { icon: FaReact, name: "React" },
      { icon: RiTailwindCssFill, name: "TailwindCSS" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiSupabase, name: "Supabase" },
    ],
  },
  {
    title: "MyBiz",
    description:
      "Desarrollo de una aplicación móvil para la gestión de negocios y finanzas.",
    image: "/mybiz.avif",
    demo: "",
    repo: "https://github.com/lianthonygg/Finances-App",
    disabled: true,
    stack: [
      { icon: SiDart, name: "Dart" },
      { icon: FaFlutter, name: "Flutter" },
    ],
  },
  {
    title: "Gestión de Flota",
    description: "Sistema de Gestión de Flota",
    image: "/flota.avif",
    demo: "https://az-flota.vercel.app",
    repo: "https://github.com/lianthonygg/AzFlota",
    stack: [
      { icon: RiNextjsFill, name: "Next.js" },
      { icon: FaReact, name: "React" },
      { icon: RiTailwindCssFill, name: "TailwindCSS" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiPrisma, name: "Prisma" },
    ],
  },
  {
    title: "Plataforma de Contratación",
    description:
      "Desarrollo de una plataforma de contratación para freelancers",
    image: "/development.avif",
    demo: "",
    repo: "https://github.com/orgs/Guaraperos-SRL/",
    disabled: true,
    stack: [
      { icon: SiExpo, name: "Expo" },
      { icon: FaReact, name: "React Native" },
      { icon: RiNextjsFill, name: "Next.js" },
      { icon: TbBrandCSharp, name: "ASP.NET" },
    ],
  },
];
