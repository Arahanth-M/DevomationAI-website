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
        <section className="section">
          <div className="container">
            <Link to="/products" className="page-back-link reveal">
              &larr; Back to products
            </Link>

            <div className="section-label reveal">{product.tag}</div>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
