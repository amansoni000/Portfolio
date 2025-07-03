import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-400">Aman</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-sm text-gray-300">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 text-2xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-2">
          <ul className="flex flex-col space-y-4 text-gray-300">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)} // close menu on click
                  className="block hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
