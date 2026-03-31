import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMessageSquare, FiLinkedin } from "react-icons/fi";
import { testimonials } from "../data/casestudy";

const ease = [0.16, 1, 0.3, 1];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" id="testimonials" ref={ref} data-inview={isInView}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
      >
        <p className="section-label">Testimonials</p>
        <h2 className="section-title">What clients say</h2>
      </motion.div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40, rotateX: 5 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <FiMessageSquare className="testimonial-icon" />
            <p className="testimonial-quote">"{t.quote}"</p>
            <div className="testimonial-author">
              <span className="testimonial-name">{t.name}</span>
              <span className="testimonial-role">
                {t.role}, {t.company}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="testimonials-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease, delay: 0.6 }}
      >
        <a
          href="https://www.linkedin.com/in/mohammed-sazeed-a2b209165/"
          target="_blank"
          rel="noopener noreferrer"
          className="testimonials-link"
        >
          <FiLinkedin /> View all recommendations on LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
