'use client';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const problems = [
    {
      title: "Unexpected Breakdown",
      desc: "VMC or CNC spindle fails mid-production, halting entire operations with no warning.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Production Losses Mount",
      desc: "Idle machines, delayed orders, and customer penalties — every hour costs ₹10,000 or more.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Where to Go?",
      desc: "Finding a trusted, technically capable repair shop with fast turnaround and warranty is not easy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  return (
    <section style={{
      padding: '60px 0',
      background: 'var(--navy)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glows */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(234,88,12,0.08) 0%, rgba(15,23,42,0) 70%)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(15,23,42,0) 70%)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <motion.div variants={cardVariants} style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px', 
            background: 'rgba(234, 88, 12, 0.1)', 
            padding: '6px 14px', 
            borderRadius: '20px',
            marginBottom: '16px' 
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--orange)' }}></span>
            <span style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>The Problem</span>
          </motion.div>
          
          <motion.h2 variants={cardVariants} style={{ 
            color: '#fff', 
            fontSize: 'clamp(28px, 3.5vw, 40px)', 
            fontWeight: 800,
            lineHeight: 1.2,
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Every hour of spindle downtime <span style={{ color: 'var(--orange)' }}>costs you money.</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '30px 24px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(234,88,12,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              {/* Top Accent Line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--orange), transparent)' }}></div>
              
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(234,88,12,0.1)',
                color: 'var(--orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <div style={{ width: '28px', height: '28px' }}>
                  {prob.icon}
                </div>
              </div>
              
              <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                {prob.title}
              </h3>
              
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                {prob.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ 
            textAlign: 'center',
            background: 'linear-gradient(90deg, rgba(234,88,12,0.1), rgba(255,255,255,0.05))',
            padding: '16px',
            borderRadius: '16px',
            border: '1px solid rgba(234,88,12,0.2)'
          }}
        >
          <p style={{ margin: 0, color: '#fff', fontSize: '16px', fontWeight: 500 }}>
            <strong style={{ color: 'var(--orange)', fontSize: '18px' }}>GPS Spindles</strong> solves all three — fast diagnosis, expert repair, and 1-year warranty.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
