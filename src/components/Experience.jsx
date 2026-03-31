import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience, education } from "../data/profile";

const ease = [0.16, 1, 0.3, 1];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" id="experience" ref={ref} data-inview={isInView}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
      >
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've worked</h2>
      </motion.div>

      <div className="exp-list">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.role + exp.company}
            className="exp-card"
            initial={{ opacity: 0, y: 50, x: i % 2 === 0 ? -20 : 20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.2 + i * 0.2 }}
          >
            <div className="exp-header">
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>

            {exp.highlights.map((h, j) => (
              <motion.div
                key={h.project}
                className="exp-highlight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: 0.5 + i * 0.2 + j * 0.1 }}
              >
                <div className="exp-highlight-title">{h.project}</div>
                <div className="exp-highlight-meta">
                  {h.period} · <span>{h.stack}</span>
                </div>
                <ul className="exp-points">
                  {h.points.map((p, k) => (
                    <motion.li
                      key={k}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + i * 0.2 + j * 0.1 + k * 0.05 }}
                    >
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        ))}

        <motion.div
          className="exp-card"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.8 }}
        >
          <div className="exp-header">
            <div>
              <div className="exp-role">🎓 {education.degree}</div>
              <div className="exp-company">{education.school}</div>
            </div>
            <span className="exp-period">{education.period}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
