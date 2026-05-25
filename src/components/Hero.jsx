import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const stats = [
  { num: '3+', label: 'Active Products' },
  { num: '10+', label: 'Institutions Partnered' },
  { num: '5K+', label: 'Users Served' },
];

const taglines = [
  { muted: 'AI-DRIVEN', bright: 'SOFTWARE', accent: true },
  { muted: 'INTELLIGENT', bright: 'INNOVATION' },
  { muted: 'SMARTER', bright: 'OUTCOMES' },
];

export default function Hero() {
  return (
    <section className="hero hero-editorial">
      <div className="hero-corner-grid" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-top">
          <h1 className="hero-wordmark hero-fade-in">
            DEVOMATION <span>AI</span>
          </h1>
          <p className="hero-intro hero-fade-in hero-fade-in-delay-1">
            Devomation AI crafts scalable platforms, automation systems, and intelligent
            products that help institutions, startups, and enterprises operate at their best.
          </p>
        </div>

        <div className="hero-taglines" aria-label="Tagline">
          {taglines.map((line, i) => (
            <p
              key={line.bright}
              className={`hero-tagline-line hero-fade-in hero-fade-in-delay-${i + 2}`}
            >
              <span className={line.accent ? 'hero-tagline-muted underline-accent' : 'hero-tagline-muted'}>
                {line.muted}
              </span>{' '}
              <span className="hero-tagline-bright">{line.bright}</span>
              <span className="hero-tagline-chevron" aria-hidden="true">›</span>
            </p>
          ))}
        </div>

        <div className="hero-cta hero-fade-in hero-fade-in-delay-5">
          <Link to="/products" className="btn-hero-primary">
            Explore Products <ArrowIcon />
          </Link>
          <a href="#contact" className="btn-hero-ghost">
            <PlayIcon /> Get a Demo
          </a>
        </div>

        <div className="hero-stats hero-fade-in hero-fade-in-delay-6">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat-item">
              <span className="hero-stat-num">{s.num}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
