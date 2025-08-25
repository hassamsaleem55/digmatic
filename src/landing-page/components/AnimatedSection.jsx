"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({ id, className, children }) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // animate once when 30% of section is visible
    >
      {children}
    </motion.section>
  );
}
