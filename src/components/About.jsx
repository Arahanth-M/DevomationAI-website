// export default function About() {
//   return (
//     <section id="about" className="about">
//       <div className="container">
//         <div className="section-title">
//           <h2>About Us</h2>
//         </div>
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
//             <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '25px', color: 'var(--text-primary)' }}>
//               At Devomation AI, we transform ideas into intelligent digital solutions by building scalable AI-powered platforms, modern web applications, automation systems, and real-time software products for students, institutions, startups, and businesses. We focus on creating impactful technology that simplifies workflows, enhances learning and recruitment experiences, and helps organizations adapt to the future through innovation, automation, and AI-driven solutions.
//             </p>
//             <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
//               Our expertise spans full-stack development, AI integrations, cloud deployment, workflow automation, and scalable backend systems. From placement preparation platforms and AI interview systems to custom business applications and developer-focused tools, we design products that combine performance, usability, and modern technology to solve real-world problems efficiently.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
const statCards = [
  { icon: '🚀', num: '3+', label: 'Products Launched' },
  { icon: '🏛️', num: '10+', label: 'Institutions Partnered' },
  { icon: '👥', num: '5K+', label: 'End Users Served' },
  { icon: '📅', num: '2023', label: 'Founded' },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="about-layout">

          {/* Left: Visual stat cards */}
          <div className="about-visual reveal">
            <div className="about-stack">
              {statCards.map((s, i) => (
                <div key={s.label} className={`about-stat-card reveal reveal-delay-${i + 1}`}>
                  <div className="about-stat-icon">{s.icon}</div>
                  <div className="about-stat-text">
                    <h4>{s.num}</h4>
                    <p>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className="about-text">
            <div className="section-label">About Us</div>
            <h2 className="section-title reveal">
              Turning ambitious ideas into production software
            </h2>

            <div className="reveal reveal-delay-1">
              <p>
                At Devomation AI, we transform ideas into intelligent digital solutions by building
                scalable AI-powered platforms, modern web applications, automation systems, and
                real-time software products — for students, institutions, startups, and businesses.
              </p>
              <p>
                We focus on creating impactful technology that simplifies workflows, enhances
                learning and recruitment experiences, and helps organizations adapt to the future
                through innovation, automation, and AI-driven solutions.
              </p>
              <p>
                Our expertise spans full-stack development, AI integrations, cloud deployment,
                workflow automation, and scalable backend systems — designed to solve real-world
                problems efficiently.
              </p>
            </div>

            <div className="reveal reveal-delay-2" style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '10px', background: 'var(--accent)',
                color: '#fff', fontWeight: 600, fontSize: '0.95rem', border: 'none',
                cursor: 'pointer', transition: 'all 0.25s', textDecoration: 'none'
              }}>
                Work with us
              </a>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '10px', background: 'transparent',
                color: 'var(--heading)', fontWeight: 600, fontSize: '0.95rem',
                border: '1px solid var(--border)', cursor: 'pointer',
                transition: 'all 0.25s', textDecoration: 'none'
              }}>
                Learn more
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

