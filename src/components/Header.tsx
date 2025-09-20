import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full p-4 backdrop-blur-md bg-black z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-3xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Codesign
          </span>
        </div>
        <div className="dark:text-gray-300 text-black text-sm flex items-center space-x-2">
          <p>Made by</p>
          <Link
            href={"https://x.com/TamalCDip"}
            target="_blank"
            className="dark:text-white text-black hover:text-purple-400 transition-colors"
          >
            Tamal
          </Link>
        </div>
      </nav>
    </header>
  );
}
