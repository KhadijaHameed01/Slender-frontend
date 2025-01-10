import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 shadow-md bg-purple-100 z-50">
      <nav className="p-4 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-3xl font-bold text-gray-800">
          Slender
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                to={path}
                className="text-gray-700 relative group px-3 py-2"
                style={({ isActive }) =>
                  isActive ? { color: "#6A5ACD", fontWeight: "bold" } : {}
                }
              >
                {link}
                {/* Underline hover effect */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Icons and Button */}
        <div className="hidden lg:flex gap-4 items-center">
          <a href="https://www.facebook.com/profile.php?id=61571976560471" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            <FaFacebookF className="w-5 h-5"/>
          </a>
          <a href="/" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">
            <FaDribbble className="w-5 h-5"/>
          </a>
          <a href="/" className="text-gray-600 hover:text-blue-400 transition-colors duration-300">
            <BsTwitterX  className="w-5 h-5"/>
          </a>
          <Link to='/loginform'>
          <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-all duration-300">
            Log In
          </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 text-2xl">
          {isOpen ? <RxCross2 /> : <IoMenu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white shadow-md ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center gap-4 py-6">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                to={path}
                className="text-gray-700 relative group px-3 py-2"
                style={({ isActive }) =>
                  isActive ? { color: "#6A5ACD", fontWeight: "bold" } : {}
                }
              >
                {link}
                {/* Underline hover effect */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
          ))}
        </ul>
          <Link to='/loginform' className="flex items-center justify-center">
          <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-all duration-300">
            Log In
          </button>
          </Link>
      </div>
    </header>
  );
};

export default Navbar;
