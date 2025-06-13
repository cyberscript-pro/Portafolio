import Link from "next/link";

function NavButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {label}
    </Link>
  )
}

export default NavButton;