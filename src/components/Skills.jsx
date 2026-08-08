import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";

import { SiMysql, SiCodeigniter } from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    title: "HTML5",
    desc: "Semantic & Modern HTML",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    title: "CSS3",
    desc: "Responsive UI Design",
  },
  {
    icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
    title: "JavaScript",
    desc: "ES6+ Development",
  },
  {
    icon: <FaReact className="text-cyan-400 text-5xl" />,
    title: "React.js",
    desc: "SPA Development",
  },
  {
    icon: <FaPhp className="text-indigo-400 text-5xl" />,
    title: "PHP",
    desc: "Backend Development",
  },
  {
    icon: <FaLaravel className="text-red-500 text-5xl" />,
    title: "Laravel",
    desc: "MVC Framework",
  },
  {
    icon: <SiMysql className="text-blue-400 text-5xl" />,
    title: "MySQL",
    desc: "Database Management",
  },
  {
    icon: <SiCodeigniter className="text-orange-400 text-5xl" />,
    title: "CodeIgniter",
    desc: "PHP Framework",
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="text-indigo-400 uppercase tracking-widest">
            My Skills
          </h4>

          <h2 className="text-5xl font-bold mt-2">Technologies I Work With</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:border-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
            >
              <div className="flex justify-center mb-6">{skill.icon}</div>

              <h3 className="text-2xl font-bold">{skill.title}</h3>

              <p className="text-gray-400 mt-3">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
