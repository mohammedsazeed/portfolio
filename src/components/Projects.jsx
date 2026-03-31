import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data/projects";
import TiltCard from "./TiltCard";

const ease = [0.16, 1, 0.3, 1];

function ImageModal({ src, alt, onClose }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} />
        <button className="modal-close" onClick={onClose}>✕</button>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className="section" id="projects" ref={ref} data-inview={isInView}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
      >
        <p className="section-label">Projects</p>
        <h2 className="section-title">Architecture & Systems I've Built</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <TiltCard
            key={project.title}
            className="project-card"
          >
            <motion.div
              initial={{ opacity: 0, y: 60, rotateY: 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.2 + i * 0.15 }}
            >
            <div className="project-gradient" style={{ background: project.gradient }} />
            <div
              className="project-image-wrap"
              onClick={() => setModalImg({ src: project.image, alt: project.title })}
            >
              <motion.img
                className="project-image"
                src={project.image}
                alt={project.title}
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="project-image-overlay">
                <span>🔍 View Architecture</span>
              </div>
            </div>
            <div className="project-body">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
              >
                {project.title}
              </motion.h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="project-tag"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>

      <AnimatePresence>
        {modalImg && (
          <ImageModal
            src={modalImg.src}
            alt={modalImg.alt}
            onClose={() => setModalImg(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
