import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMail, FiLinkedin, FiPhone } from "react-icons/fi";
import { profile } from "../data/profile";
import MagneticButton from "./MagneticButton";

const ease = [0.16, 1, 0.3, 1];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const links = [
    { icon: <FiMail />, label: profile.email, href: `mailto:${profile.email}` },
    { icon: <FiPhone />, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: <FiLinkedin />, label: "LinkedIn", href: profile.socials.linkedin },
  ];

  return (
    <section className="section" id="contact" ref={ref} data-inview={isInView}>
      <div className="contact-content">
        <motion.p
          className="section-label"
          style={{ justifyContent: "center" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          Contact
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          Let's build something together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Got a cloud project, need an AWS architect, or just want to chat about
          serverless? I'm always open to new opportunities.
        </motion.p>

        <div className="contact-links">
          {links.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.1 }}
            >
              <MagneticButton
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact-link"
              >
                {l.icon} {l.label}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
