import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { teamMembers } from "../data"; // 🔹 Impor dari data.ts

export default function Team() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-tight">
        Tim Pengembang
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Foto Profil */}
            <div className="relative w-24 h-24 mx-auto overflow-hidden rounded-full border-4 border-blue-500 shadow-md transition-all duration-500 hover:shadow-blue-400/50">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Nama & Peran */}
            <h3 className="mt-4 text-xl font-semibold text-blue-700 dark:text-blue-300">
              {member.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {member.role}
            </p>

            {/* Ikon Media Sosial */}
            <div className="flex justify-center mt-3 space-x-4">
              <a
                href={member.ig}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
