import { motion } from "framer-motion";

function About() {
  const stats = [
    { value: "3+", label: "Projects Completed" },
    { value: "100+", label: "Problems Solved" },
    { value: "Fresher", label: "Experience" },
    { value: "100%", label: "Passion" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h4 className="text-indigo-400 uppercase tracking-widest">
            About Me
          </h4>

          <h2 className="text-5xl font-bold mt-2">Get to know me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-center">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
              <img
                src="/images/profile.jpg"
                alt="Akhilesh"
                className="rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-lg leading-8">
              I'm{" "}
              <span className="text-indigo-400 font-semibold">
                Akhilesh Kumar Rauniyar
              </span>
              , a passionate Full Stack Developer from Lucknow. I enjoy building
              scalable web applications using React.js, Laravel, PHP, MySQL and
              JavaScript. My goal is to create software that solves real-world
              problems with clean UI and efficient code.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <div>
                <p className="text-gray-500">Name</p>
                <h3>Akhilesh Kumar Rauniyar</h3>
              </div>

              <div>
                <p className="text-gray-500">Location</p>
                <h3>Lucknow, Uttar Pradesh</h3>
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <h3 className="break-all">akhileshrauniyar2001@gmail.com</h3>
              </div>

              <div>
                <p className="text-gray-500">Experience</p>
                <h3>Fresher</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 text-center"
            >
              <h2 className="text-4xl font-bold text-indigo-400">
                {item.value}
              </h2>

              <p className="mt-3 text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
