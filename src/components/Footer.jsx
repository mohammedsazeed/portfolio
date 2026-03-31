import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p>© {new Date().getFullYear()} {profile.name}. Crafted with care & caffeine ☕</p>
    </motion.footer>
  );
}
