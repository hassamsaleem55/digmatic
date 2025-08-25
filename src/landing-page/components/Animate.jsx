import { useState } from "react";
import { motion } from "framer-motion";

/* ============================
   🎬 Animation Variants Library
=============================== */
export const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

/* ============================
   ⚙️ Base Animation Settings
=============================== */
const baseAnimationProps = {
  initial: "hidden",
  whileInView: "visible",
  transition: { duration: 0.5, ease: "easeOut" },
};

/* ============================
   🧩 Generic Animated Component
=============================== */
export function Animated({
  as = "div", // default tag
  id,
  className,
  children,
  onClick,
  viewport = { amount: 0.3 },
  variants = animations.fadeInUp,
}) {
  // const [key, setKey] = useState(0);
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      // key={key}
      id={id}
      className={className}
      variants={variants}
      viewport={viewport}
      {...baseAnimationProps}
      onClick={onClick}
      // onViewportLeave={() => {
      //   if (!viewport?.once) {
      //     setKey((prev) => prev + 1); // re-trigger animation
      //   }
      // }}
    >
      {children}
    </MotionComponent>
  );
}
