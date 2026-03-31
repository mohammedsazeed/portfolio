import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile, stats } from "../data/profile";

const ease = [0.16, 1, 0.3, 1];

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className="number"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease, type: "spring", stiffness: 100 }}
    >
      {value}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" id="about" ref={ref} data-inview={isInView}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
      >
        <p className="section-label">About</p>
        <h2 className="section-title">A bit about me</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          {profile.about}
        </motion.div>

        <div className="about-stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card"
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatedNumber value={s.number} />
              <div className="label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
