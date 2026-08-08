import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SnapLink",
    image: "/images/projects/snaplink.png",
    description:
      "A modern URL shortener with authentication, analytics, QR code generation, and dashboard built using React and Laravel.",
    tech: ["React", "CSS", "MongoDb", "Next.js"],
    github: "https://github.com/akhileshrauniyar",
    demo: "#",
  },
  {
    title: "Online Quiz System",
    image: "/images/projects/quiz.png",
    description:
      "A web-based quiz management system with user authentication, timer, result analysis, and admin dashboard.",
    tech: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/akhileshrauniyar",
    demo: "#",
  },
  {
    title: "Kashi E-Darshan Clone",
    image: "/images/projects/kashi.png",
    description:
      "A responsive tourism portal inspired by Kashi Vishwanath's digital platform with booking and information modules.",
    tech: ["PHP", "CSS", "MySQL", "Laravel"],
    github: "https://github.com/akhileshrauniyar",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="text-indigo-400 uppercase tracking-widest">
            My Projects
          </h4>

          <h2 className="text-5xl font-bold mt-2">Featured Work</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-indigo-500 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-600/20 border border-indigo-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-full"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-indigo-500 px-5 py-3 rounded-full hover:bg-indigo-600"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
