import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex space-x-4">
        <Link href="/home" className="hover:text-gray-300">
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
          href="/login"
          className="bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-300">
          Sign In
        </Link>
      </div>
    </nav>
  );
}
