'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ target, duration = 2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target);
      if (start === end) return;

      const totalMs = duration * 1000;
      const incrementTime = totalMs / end;

      let timer = setInterval(() => {
        start += 1;
        if (ref.current) ref.current.innerText = start;
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return <span ref={ref}>0</span>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
};

export default function Metrics() {
  return (
    <section className="metrics-section">
      <div className="container">
        <motion.div
          className="metrics-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="metric-item" variants={itemVariants}>
            <span className="metric-num" id="cnt1">
              <Counter target="900" /><span className="metric-unit">+</span>
            </span>
            <div className="metric-label">Happy Clients</div>
          </motion.div>

          <motion.div className="metric-item delay-1" variants={itemVariants}>
            <span className="metric-num" id="cnt2">
              <Counter target="3000" /><span className="metric-unit">+</span>
            </span>
            <div className="metric-label">Projects Completed</div>
          </motion.div>

          <motion.div className="metric-item delay-2" variants={itemVariants}>
            <span className="metric-num" id="cnt3">
              <Counter target="15" /><span className="metric-unit">+</span>
            </span>
            <div className="metric-label">Years of Experience</div>
          </motion.div>

          <motion.div className="metric-item delay-3" variants={itemVariants}>
            <span className="metric-num">
              24<span className="metric-unit">×7</span>
            </span>
            <div className="metric-label">Emergency Support</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
