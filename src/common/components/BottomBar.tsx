"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BarChart, Home, Settings, Wallet } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Wallet },
  { href: "/about", label: "About", icon: BarChart },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function BottomBar() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl w-[90%] max-w-md px-4 py-2 flex justify-between items-center backdrop-blur-md">
      {navItems.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center text-sm font-medium transition-all duration-300 px-2 py-1 ${
              isActive
                ? "text-purple-600 dark:text-purple-400"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <div
              className={`p-2 rounded-full transition ${
                isActive ? "bg-purple-100 dark:bg-purple-900" : "bg-transparent"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-xs mt-1">{label}</span>
          </Link>
        );
      })}
    </footer>
  );
}
