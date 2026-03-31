import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiArrowRight, FiMail, FiDownload } from "react-icons/fi";
import { profile } from "../data/profile";
import MagneticButton from "./MagneticButton";
import FloatingParticles from "./FloatingParticles";

const ease = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.9, ease },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  show: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 0.8, ease },
  },
};

const headings = [
  <>Building <span className="gradient-text">Cloud-Native</span><br />Solutions at Scale</>,
  <>Designing <span className="gradient-text">Serverless</span><br />Architectures on AWS</>,
  <>Engineering <span className="gradient-text">Data Pipelines</span><br />That Deliver</>,
  <>Turning Complex Problems<br />Into <span className="gradient-text">Clean Code</span></>,
];

const taglines = [
  "I design and deliver cloud-native, event-driven solutions that scale to 100K+ daily events at 99.7%+ uptime.",
  "3.5+ years building production-grade serverless systems, data pipelines, and AI/ML integrations on AWS.",
  "From zero-downtime migrations to LLM-powered document processing — I build what matters.",
  "AWS-certified architect who's reduced cloud costs by 35% and maintained 99.9% uptime.",
];

const rotateVariants = {
  enter: { opacity: 0, y: 30, filter: "blur(8px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease } },
  exit: { opacity: 0, y: -30, filter: "blur(8px)", transition: { duration: 0.4, ease } },
};

function RotatingText({ items, interval = 4000, className, as: Tag = "div" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <Tag className={className} style={{ position: "relative" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          variants={rotateVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ display: "inline-block" }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </Tag>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const bgOpacity = useTransform(scrollY, [0, 400], [0.12, 0]);

  return (
    <section className="hero" id="hero">
      <FloatingParticles count={100} />

      <motion.div
        className="hero-banner-bg"
        style={{ y: bgY }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease }}
      >
        <motion.img src={profile.banner} alt="" style={{ opacity: bgOpacity }} />
      </motion.div>

      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero-avatar" variants={scaleIn}>
          <motion.img
            src={profile.avatar}
            alt={profile.name}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.div className="hero-badge" variants={slideUp}>
          <span className="dot" />
          Available for opportunities
        </motion.div>

        <motion.div className="hero-badge" variants={slideUp} style={{ marginTop: "-12px" }}>
          <span className="dot" style={{ background: "#6c63ff", boxShadow: "0 0 8px rgba(108,99,255,0.5)" }} />
          {profile.relocation}
        </motion.div>

        <motion.div variants={slideUp}>
          <RotatingText items={headings} interval={4000} className="hero-rotating-h1" as="h1" />
        </motion.div>

        <motion.div variants={slideUp}>
          <RotatingText items={taglines} interval={4000} className="hero-rotating-tagline" as="p" />
        </motion.div>

        <motion.div className="hero-buttons" variants={slideUp}>
          <MagneticButton href="#projects" className="btn btn-primary">
            View My Work <FiArrowRight />
          </MagneticButton>
          <MagneticButton href={`mailto:${profile.email}`} className="btn btn-outline">
            <FiMail /> Say Hello
          </MagneticButton>
          <MagneticButton href="/Mohammed_Sazeed_Resume.pdf" className="btn btn-outline" download>
            <FiDownload /> Resume
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
