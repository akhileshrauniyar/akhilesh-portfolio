import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { Link } from "react-scroll";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold text-indigo-400">
              Akhilesh<span className="text-white">.</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Full Stack Developer passionate about building scalable web
              applications with React, Laravel, JavaScript and MySQL.
            </p>
          </div>

          {/* Center */}

          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <div className="space-y-3">
              <Link
                to="home"
                smooth={true}
                className="block cursor-pointer hover:text-indigo-400"
              >
                Home
              </Link>

              <Link
                to="about"
                smooth={true}
                className="block cursor-pointer hover:text-indigo-400"
              >
                About
              </Link>

              <Link
                to="skills"
                smooth={true}
                className="block cursor-pointer hover:text-indigo-400"
              >
                Skills
              </Link>

              <Link
                to="projects"
                smooth={true}
                className="block cursor-pointer hover:text-indigo-400"
              >
                Projects
              </Link>

              <Link
                to="contact"
                smooth={true}
                className="block cursor-pointer hover:text-indigo-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right */}

          <div>
            <h3 className="text-xl font-semibold mb-5">Connect</h3>

            <div className="flex gap-5">
              <a
                href="https://github.com/akhileshrauniyar"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-indigo-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/akhilesh-kumar-rauniyar-9185a1298/"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/rakhilesh20"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-green-600 transition"
              >
                <SiGeeksforgeeks />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center">
            © {year} Akhilesh Kumar Rauniyar. All Rights Reserved.
          </p>

          <Link
            to="home"
            smooth={true}
            duration={600}
            className="mt-5 md:mt-0 cursor-pointer bg-indigo-600 hover:bg-indigo-500 p-4 rounded-full transition"
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
