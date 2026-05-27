// import { Link } from 'react-router-dom';

// export default function ProductsSection() {
//   return (
//     <section id="products-section" className="about bg-theme-section section-bg" style={{ padding: '60px 0' }}>
//       <div className="container">
//         <div className="section-title">
//           <h2>Our Products</h2>
//         </div>
//         <div className="row text-center">
//           <div className="col-12">
//             <p className="lead mb-4 text-theme-primary">
//               Explore our range of innovative digital solutions, automation tools, and AI-powered platforms designed to streamline operations and drive success.
//             </p>
//             <Link to="/products" className="btn btn-theme" style={{ padding: '10px 30px', borderRadius: '5px' }}>
//               View All Products
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from 'react-router-dom';

const products = [
  {
    tag: 'EdTech',
    icon: '🎓',
    name: 'Last Minute Placement Prep',
    desc: 'AI-powered placement prep for RVCE students — 200+ company profiles, 150+ interview experiences, mock interviews with a coding editor, resume builder, and 3+ years of real placement data.',
  },
  {
    tag: 'AI Interview',
    icon: '🤖',
    name: 'AI Interview System',
    desc: 'Automated interview conduction powered by LLMs. Evaluates responses in real-time, scores candidates on technical depth, communication, and fit — reducing recruiter effort by 80%.',
  },
  {
    tag: 'Automation',
    icon: '⚙️',
    name: 'Workflow Engine',
    desc: 'An n8n-powered orchestration layer that connects your tools, triggers smart notifications, and automates repetitive tasks across your entire institution or business unit.',
  },
  {
    tag: 'Recruitment',
    icon: '📋',
    name: 'Campus Recruitment Hub',
    desc: 'End-to-end placement management for colleges — job postings, student shortlisting, drive coordination, offer tracking, and analytics in one unified platform.',
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function ProductsSection() {
  return (
    <section id="products-section" className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '0' }}>
          <div>
            <div className="section-label">Our Products</div>
            <h2 className="section-title reveal" style={{ marginBottom: '8px' }}>
              Software that does the heavy lifting
            </h2>
            <p className="section-subtitle reveal reveal-delay-1">
              Purpose-built platforms for education, recruitment, and enterprise automation.
            </p>
          </div>
          <Link to="/products" className="btn-ghost reveal"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '11px 22px', borderRadius: '10px', background: 'transparent',
              color: 'var(--heading)', fontWeight: 600, fontSize: '0.9rem',
              border: '1px solid var(--border)', whiteSpace: 'nowrap', textDecoration: 'none',
              transition: 'all 0.25s' }}>
            View all products <ArrowIcon />
          </Link>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <div key={p.name} className={`product-card reveal reveal-delay-${(i % 2) + 1}`}>
              <div className="product-card-header">
                <div style={{ fontSize: '2rem' }}>{p.icon}</div>
                <span className="product-tag">{p.tag}</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <Link to="/products" className="product-card-link">
                Learn more <ArrowIcon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

