import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0B1120] pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-indigo-400 text-xl mb-3">👋 Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Akhilesh
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              Kumar Rauniyar
            </span>
          </h1>

          <h2 className="mt-5 text-2xl md:text-3xl font-semibold">
            <span className="text-indigo-400">Full Stack Developer</span>
            <br />
            <span className="text-gray-400 text-xl">
              React • Laravel • JavaScript
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-xl leading-8">
            Passionate Full Stack Developer from Lucknow, India, building
            responsive, scalable and modern web applications using React,
            Laravel and MySQL.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-8">
            <a
              href="/resume.pdf"
              download
              className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-full transition font-semibold"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-indigo-500 px-8 py-4 rounded-full hover:bg-indigo-600 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10 text-3xl">
            <a
              href="https://github.com/akhileshrauniyar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-indigo-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/akhilesh-kumar-rauniyar-9185a1298/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/rakhilesh20"
              target="_blank"
              rel="noreferrer"
            >
              <SiGeeksforgeeks className="hover:text-green-500 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-96 h-96 rounded-full bg-indigo-600 blur-[120px] opacity-30"></div>

          <img
            src="/images/profile.jpg"
            alt="Akhilesh"
            className="relative w-[350px] md:w-[450px] rounded-3xl border-4 border-indigo-500 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
