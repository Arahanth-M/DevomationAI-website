import { useState, useEffect, useRef } from 'react';

const stats = [
  { target: 3,    suffix: '+',  label: 'Products Launched' },
  { target: 10,   suffix: '+',  label: 'Institutions Partnered' },
  { target: 5,    suffix: 'K+', label: 'End Users Served' },
  { target: 2023, suffix: '',   label: 'Founded' },
];

const expertise = [
  'Full-Stack Development',
  'AI Integrations',
  'Cloud Deployment',
  'Workflow Automation',
  'Scalable Backend Systems',
];

function StatCard({ target, suffix, label, delay, triggered }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let rafId;
    let start = null;
    const duration = 2800;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
      else setCount(target);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [triggered, target]);

  return (
    <div className={`about-stat-card reveal reveal-delay-${delay}`}>
      <h4>{count}{suffix}</h4>
      <p>{label}</p>
    </div>
  );
}

export default function About() {
  const gridRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.5, rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="about-layout">

          {/* Left: stat grid + expertise tags */}
          <div className="about-visual reveal">
            <div className="about-stats-grid" ref={gridRef}>
              {stats.map((s, i) => (
                <StatCard key={s.label} {...s} delay={i + 1} triggered={triggered} />
              ))}
            </div>

            <div className="about-expertise">
              <span className="about-expertise-label">What we build with</span>
              <div className="about-tags">
                {expertise.map(e => (
                  <span key={e} className="about-tag">{e}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: text + CTA */}
          <div className="about-text">
            <div className="section-label">About Us</div>
            <h2 className="section-title reveal">
              Turning ambitious ideas into production software
            </h2>

            <div className="reveal reveal-delay-1">
              <p className="about-lead">
                At Devomation AI, we transform ideas into intelligent digital solutions — building
                scalable AI-powered platforms, modern web applications, and automation systems for
                students, institutions, startups, and businesses.
              </p>
              <p>
                We focus on technology that simplifies workflows, enhances learning and recruitment
                experiences, and helps organisations adapt to the future through innovation and
                AI-driven solutions.
              </p>
            </div>

            <div className="reveal reveal-delay-2" style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">Work with us</a>
              <a href="#contact" className="btn-ghost">Learn more</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
