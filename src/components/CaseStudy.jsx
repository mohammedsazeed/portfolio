import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { caseStudy } from "../data/casestudy";

const ease = [0.16, 1, 0.3, 1];

export default function CaseStudy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" id="casestudy" ref={ref} data-inview={isInView}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
      >
        <p className="section-label">Case Study</p>
        <h2 className="section-title">{caseStudy.title}</h2>
      </motion.div>

      <motion.p
        className="cs-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
      >
        {caseStudy.intro}
      </motion.p>

      <div className="cs-grid">
        {caseStudy.sections.map((s, i) => (
          <motion.div
            key={s.title}
            className="cs-card"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
          >
            <span className="cs-icon">{s.icon}</span>
            <h3 className="cs-card-title">{s.title}</h3>
            <p className="cs-card-desc">{s.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="cs-outcome"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease, delay: 1 }}
      >
        <span className="cs-outcome-icon">🚀</span>
        <p>{caseStudy.outcome}</p>
      </motion.div>
    </section>
  );
}
