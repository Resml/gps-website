'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const Counter = ({ target, duration = 2.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, parseInt(target), {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value);
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, target, duration]);

  return <span ref={ref}>0</span>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

export default function Metrics() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isSectionInView) {
      window.dispatchEvent(new CustomEvent('open-chatbot'));
    }
  }, [isSectionInView]);

  return (
    <section ref={sectionRef} className="metrics-section">
      <div className="container">
        <motion.div
          className="metrics-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="metric-item" variants={itemVariants}>
            <span className="metric-num">
              <Counter target="900" /><span className="metric-unit">+</span>
            </span>
            <div className="metric-label">Happy Clients</div>
          </motion.div>

          <motion.div className="metric-item" variants={itemVariants}>
            <span className="metric-num">
              <Counter target="3000" /><span className="metric-unit">+</span>
            </span>
            <div className="metric-label">Projects Completed</div>
          </motion.div>

          <motion.div className="metric-item" variants={itemVariants}>
            <span className="metric-num">
              <Counter target="15" /><span className="metric-unit">+</span>
            </span>
            <div className="metric-label">Years of Experience</div>
          </motion.div>

          <motion.div className="metric-item" variants={itemVariants}>
            <span className="metric-num">
              <Counter target="24" /><span className="metric-unit">×7</span>
            </span>
            <div className="metric-label">Emergency Support</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
