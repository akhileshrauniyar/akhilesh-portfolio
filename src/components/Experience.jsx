import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const timeline = [
  {
    icon: <FaGraduationCap />,
    title: "3 Years Diploma In Information Technology",
    company: "Mahamaya Polytechnic of Information Technology",
    year: "2020 - 2023",
    description:
      "Learn and Built full-stack web applications using React, JavaScript, Laravel, PHP, and MySQL.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Developer",
    company: "Personal Projects",
    year: "2025 - Present",
    description:
      "Built full-stack web applications including SnapLink, Online Quiz System, and Kashi E-Darshan Clone using React, JavaScript, Laravel, PHP, and MySQL.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Technology in Computer Science",
    company: "B.N. College of Engineering and Technology, Lucknow",
    year: "2023 - 2026",
    description:
      "Studied web development, databases, software engineering, data structures, and object-oriented programming while developing real-world projects.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h4 className="text-indigo-400 uppercase tracking-widest">Journey</h4>

          <h2 className="text-5xl font-bold mt-2">Experience & Education</h2>
        </motion.div>

        <div className="relative border-l-2 border-indigo-500 ml-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-14 ml-10"
            >
              <div className="absolute -left-6 bg-indigo-600 p-3 rounded-full text-white">
                {item.icon}
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-indigo-500 transition">
                <span className="text-indigo-400 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

                <h4 className="text-gray-400">{item.company}</h4>

                <p className="text-gray-400 mt-4 leading-8">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
