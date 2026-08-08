import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0B1120]/70 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-3xl font-bold text-indigo-400">
          Akhilesh<span className="text-white">.</span>
        </h1>

        <ul className="hidden md:flex gap-10">
          {links.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-indigo-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          className="hidden md:block bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-full transition"
        >
          Resume
        </a>

        <button onClick={() => setMenu(!menu)} className="md:hidden text-2xl">
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menu && (
        <div className="md:hidden bg-[#111827]">
          {links.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={() => setMenu(false)}
              className="block px-8 py-5 border-b border-white/10 cursor-pointer hover:bg-indigo-600"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
