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
            <h1 className="section-title reveal reveal-delay-1">{product.name}</h1>
            <p className="detail-meta reveal reveal-delay-2">
              Built for <strong style={{ color: 'var(--heading)' }}>{product.client}</strong>
            </p>

            <div className="panel-card reveal reveal-delay-2">
              <h3 className="panel-card-title">Quick description</h3>
              <p>{product.description}</p>

              <hr className="panel-divider" />

              <h3 className="panel-card-title">What it does</h3>
              <p>{product.whatItDoes}</p>
            </div>

            <h2
              className="section-title reveal"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginTop: '64px', marginBottom: '0' }}
            >
              Screenshots
            </h2>

            <div className="screenshot-grid">
              {product.screenshots.map((img, idx) => (
                <div key={idx} className={`screenshot-card reveal reveal-delay-${(idx % 2) + 1}`}>
                  <img src={img} alt={`${product.name} screenshot ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
