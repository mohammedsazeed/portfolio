import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, certifications } from "../data/profile";
import {
  FiCode,
  FiCloud,
  FiDatabase,
  FiBarChart2,
  FiSettings,
  FiShield,
  FiCpu,
  FiLayers,
} from "react-icons/fi";

const ease = [0.16, 1, 0.3, 1];

const categories = ["Languages", "Cloud", "Databases", "Data", "DevOps", "Security", "AI/ML", "Architecture"];
const categoryIcons = {
  Languages: <FiCode />,
  Cloud: <FiCloud />,
  Databases: <FiDatabase />,
  Data: <FiBarChart2 />,
  DevOps: <FiSettings />,
  Security: <FiShield />,
  "AI/ML": <FiCpu />,
  Architecture: <FiLayers />,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const grouped = categories.map((cat) => ({
    name: cat,
    icon: categoryIcons[cat],
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <section className="section" id="skills" ref={ref} data-inview={isInView}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
      >
        <p className="section-label">Skills & Certifications</p>
        <h2 className="section-title">What I work with</h2>
      </motion.div>

      <div className="skills-categories">
        {grouped.map((group, gi) => (
          <motion.div
            key={group.name}
            className="skill-category"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 + gi * 0.1 }}
          >
            <div className="skill-category-header">
              <span className="skill-category-icon">{group.icon}</span>
              <span className="skill-category-name">{group.name}</span>
            </div>
            <div className="skill-category-items">
              {group.items.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="skill-chip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, ease, delay: 0.2 + gi * 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                >
                  <span className="skill-chip-name">{skill.name}</span>
                  <span className="skill-chip-bar">
                    <motion.span
                      className="skill-chip-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.3 + gi * 0.1 + i * 0.05 }}
                    />
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="certs-grid"
        style={{ marginTop: 48 }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        {certifications.map((cert, i) => (
          <motion.a
            key={cert.name}
            className="cert-card"
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.9 + i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              className="cert-badge-img"
              src={cert.badge}
              alt={cert.name}
              loading="lazy"
            />
            <div>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-period">{cert.period}</div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
