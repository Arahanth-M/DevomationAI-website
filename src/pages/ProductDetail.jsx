import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productsData } from '../data/productsData';
import { useScrollReveal } from '../utils/UseScrollreveal';

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id, 10));
  useScrollReveal();

  if (!product) {
    return (
      <>
        <Header />
        <main>
          <section className="section page-empty">
            <h2 className="section-title">Product not found</h2>
            <p className="section-subtitle">This product may have been moved or removed.</p>
            <Link to="/products" className="btn-primary">Back to products</Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="section inner-page-section">
          <div className="container">
            <Link to="/products" className="page-back-link reveal">
              &larr; Back to products
            </Link>


            <h1 className="section-title gradient-text reveal reveal-delay-1">{product.name}</h1>
            <p className="detail-meta reveal reveal-delay-2">
              Built for <strong style={{ color: 'var(--heading)' }}>{product.client}</strong>
            </p>

            <div className="panel-card reveal reveal-delay-2">
              <h3 className="panel-card-title panel-card-title--teal">Overview</h3>
              <p className="panel-lead">{product.description}</p>

              <hr className="panel-divider" />

              <h3 className="panel-card-title panel-card-title--purple">What it does</h3>
              <p>{product.whatItDoes}</p>

              {product.highlights && (
                <>
                  <hr className="panel-divider" />
                  <h3 className="panel-card-title panel-card-title--gradient">Key capabilities</h3>
                  <ul className="panel-highlights">
                    {product.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </>
              )}

              {product.techStack && (
                <>
                  <hr className="panel-divider" />
                  <h3 className="panel-card-title panel-card-title--teal">Tech Stack</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '12px' }}>
                    {product.techStack.map((tech, i) => (
                      <span key={i} style={{
                        padding: '6px 16px',
                        borderRadius: '100px',
                        background: 'rgba(74, 158, 255, 0.08)',
                        border: '1px solid rgba(74, 158, 255, 0.2)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        letterSpacing: '0.02em',
                      }}>{tech}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
