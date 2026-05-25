const stack = [
    { name: 'MongoDB', img: '/assets/img/mongo-logo.png', fallback: 'MDB' },
    { name: 'Express.js', img: '/assets/img/express-logo.png', fallback: 'EXP' },
    { name: 'React', img: '/assets/img/react-logo.png', fallback: 'RCT' },
    { name: 'Node.js', img: '/assets/img/node-logo.png', fallback: 'NOD' },
    { name: 'Redis', img: '/assets/img/redis-logo.png', fallback: 'RDS' },
    { name: 'n8n', img: '/assets/img/N8n-logo-new.png', fallback: 'n8n' },
    { name: 'Hetzner', img: '/assets/img/hetzner-logo.png', fallback: 'HTZ' },
    { name: 'Docker', img: '/assets/img/docker-logo.png', fallback: 'DCK' },
  ];
  
  function TechLogo({ item }) {
    return (
      <div className="tech-card">
        <div style={{ height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
          <img
            src={item.img}
            alt={item.name}
            style={{ height: '44px', objectFit: 'contain', margin: 0 }}
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ display: 'none', width: '44px', height: '44px', borderRadius: '10px', background: 'var(--accent-glow)', border: '1px solid var(--border)', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>
            {item.fallback}
          </div>
        </div>
        <h4>{item.name}</h4>
      </div>
    );
  }
  
  export default function TechStack() {
    return (
      <section id="team" className="section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Technology</div>
            <h2 className="section-title reveal">Built on proven, modern infrastructure</h2>
            <p className="section-subtitle reveal reveal-delay-1" style={{ margin: '0 auto' }}>
              We use the MERN stack at our core, extended with Redis caching, n8n automation,
              and Hetzner cloud for reliable, scalable deployments.
            </p>
          </div>
  
          <div className="tech-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {stack.map((item, i) => (
              <div key={item.name} className={`reveal reveal-delay-${(i % 4) + 1}`}>
                <TechLogo item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  