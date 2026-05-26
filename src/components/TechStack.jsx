const categories = [
  {
    label: 'Core Stack',
    color: 'teal',
    items: [
      { name: 'MongoDB',    img: '/assets/img/mongo-logo.png',   fallback: 'MDB', desc: 'Database' },
      { name: 'Express.js', img: '/assets/img/express-logo.png', fallback: 'EXP', desc: 'API Layer' },
      { name: 'React',      img: '/assets/img/react-logo.png',   fallback: 'RCT', desc: 'Frontend' },
      { name: 'Node.js',    img: '/assets/img/node-logo.png',    fallback: 'NOD', desc: 'Runtime' },
    ],
  },
  {
    label: 'Extended Platform',
    color: 'purple',
    items: [
      { name: 'Redis',   img: '/assets/img/redis-logo.png',   fallback: 'RDS', desc: 'Caching' },
      { name: 'n8n',     img: '/assets/img/N8n-logo-new.png', fallback: 'n8n', desc: 'Automation' },
      { name: 'Hetzner', img: '/assets/img/hetzner-logo.png', fallback: 'HTZ', desc: 'Cloud' },
      { name: 'Docker',  img: '/assets/img/docker-logo.png',  fallback: 'DCK', desc: 'Containers' },
    ],
  },
];

function TechCard({ item, color, delay }) {
  return (
    <div className={`tech-card tech-card--${color} reveal reveal-delay-${delay}`}>
      <div className="tech-card-logo">
        <img
          src={item.img}
          alt={item.name}
          onError={e => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="tech-card-fallback">{item.fallback}</div>
      </div>
      <h4>{item.name}</h4>
      <span className="tech-card-desc">{item.desc}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="team" className="section tech-section">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Technology</div>
          <h2 className="section-title gradient-text reveal">Built on proven, modern infrastructure</h2>
          <p className="section-subtitle reveal reveal-delay-1" style={{ margin: '0 auto' }}>
            We use the MERN stack at our core, extended with Redis caching, n8n automation,
            and Hetzner cloud for reliable, scalable deployments.
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat.label} className="tech-category">
            <div className={`tech-category-label tech-category-label--${cat.color}`}>{cat.label}</div>
            <div className="tech-grid">
              {cat.items.map((item, i) => (
                <TechCard key={item.name} item={item} color={cat.color} delay={(i % 4) + 1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
