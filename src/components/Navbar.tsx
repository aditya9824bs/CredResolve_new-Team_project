import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../public/cred_easy.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-white  px-6 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} className="w-40" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `${isActive ? "text-blue-600 font-semibold" : "text-gray-600"}`
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-blue-600 font-semibold" : "text-gray-600"}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-blue-600 font-semibold" : "text-gray-600"}`
            }
          >
            Contact Us
          </NavLink>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#6C5CE7] text-white px-6 py-2 rounded-full font-medium"
          >
            Request for a loan
          </motion.button>

          <div
            className="relative inline-block"

            // onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="bg-[#6C5CE7] text-white px-6 py-2 rounded-md font-medium"
              onMouseEnter={() => setIsHovered(true)}
            >
              Login
            </div>

            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-36 bg-white shadow-lg rounded-md duration-200"
              >
                <ul
                  className="text-black text-sm"
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link to="/api/login">Login</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link to="/api/register">Registration</Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                  }`
                }
              >
                Careers
              </NavLink>

              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6C5CE7] text-white px-6 py-2 rounded-full font-medium w-full text-center"
              >
                Request for a loan
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
