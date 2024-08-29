import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div>
          <Link
            href="/signin"
            className="bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-300">
            Sign In
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Our Marketing Site
        </h1>
        <p className="text-lg">
          This is a simple dummy site built with Next.js and Tailwind CSS.
        </p>
      </div>
    </>
  );
}
