import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="text-indigo-400 uppercase tracking-widest">Contact</h4>

          <h2 className="text-5xl font-bold mt-2">Let's Work Together</h2>

          <p className="text-gray-400 mt-5">
            Feel free to reach out for opportunities, collaborations, or just to
            say hello.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-5">
              <FaEnvelope className="text-indigo-400 text-3xl" />

              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-400">akhileshrauniyar2001@gmail.com</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-5">
              <FaPhone className="text-green-400 text-3xl" />

              <div>
                <h3 className="font-semibold text-xl">Phone</h3>
                <p className="text-gray-400">+91 8858608898</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-5">
              <FaMapMarkerAlt className="text-red-400 text-3xl" />

              <div>
                <h3 className="font-semibold text-xl">Location</h3>
                <p className="text-gray-400">Lucknow, Uttar Pradesh</p>
              </div>
            </div>

            <div className="flex gap-5 mt-6">
              <a
                href="https://github.com/akhileshrauniyar"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-indigo-600 transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/akhilesh-kumar-rauniyar-9185a1298/"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-blue-600 transition"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/rakhilesh20"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-4 rounded-full hover:bg-green-600 transition"
              >
                <SiGeeksforgeeks size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#111827] p-4 rounded-xl outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#111827] p-4 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#111827] p-4 rounded-xl outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-[#111827] p-4 rounded-xl outline-none"
            />

            <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl font-semibold transition">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
