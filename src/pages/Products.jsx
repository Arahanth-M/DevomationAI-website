import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productsData } from '../data/productsData';
import { useScrollReveal } from '../utils/UseScrollreveal';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Products() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="section-label reveal">Our Products</div>
            <h2 className="section-title reveal reveal-delay-1">
              Software that does the heavy lifting
            </h2>
            <p className="section-subtitle reveal reveal-delay-2">
              Explore the scalable digital platforms and tools we have built for our clients.
            </p>

            <div className="products-grid">
              {productsData.map((product, i) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className={`product-card reveal reveal-delay-${(i % 2) + 1}`}
                  style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="product-card-header">
                    <div style={{ fontSize: '2rem' }}>{product.icon}</div>
                    <span className="product-tag">{product.tag}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="product-card-link">
                    Learn more <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
