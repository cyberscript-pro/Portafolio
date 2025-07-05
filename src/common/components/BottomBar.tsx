"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, LayoutDashboard } from "lucide-react";
import { BsPersonCircle } from "react-icons/bs";
import { MotionTransition } from "./MotionTransition";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: LayoutDashboard },
  { href: "/contact-me", label: "Contact Me", icon: BsPersonCircle },
];

export default function BottomBar() {
  const pathname = usePathname();

  const isIncluded = pathname.search("portfolio");

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-4"
    >
      {/*
       className="fixed left-1/2 -translate-x-1/2 bg-white/15 shadow-lg border border-gray-200 dark:border-gray-700 rounded-4xl max-w-md px-4 flex gap-2 justify-between items-center backdrop-blur-md" */}
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 background-blur-md">
          {navItems.map(({ href, label, icon: Icon }) => (
            <div
              key={label}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-purple-900 ${
                pathname == href ? "bg-purple-900" : ""
              } ${
                isIncluded == 1 && href == "/portfolio" ? "bg-purple-900" : ""
              }`}
            >
              <Link href={href}>
                <Icon className="w-6 h-6" />
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
}
