// import { Link } from 'react-router-dom';
// import { FaEnvelope, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <>
//       <footer id="footer" className="bg-theme-section" style={{ paddingTop: '60px', paddingBottom: '20px', borderTop: '1px solid var(--border)' }}>
//         <div className="container">
//           <div className="row">
//             {/* Contact Column */}
//             <div className="col-md-4 mb-4 mb-md-0">
//               <h4 className="text-theme-heading" style={{ fontWeight: '600', marginBottom: '20px' }}>Contact Us</h4>
//               <div className="footer-social-links">
//                 <a href="mailto:contact@devomation.ai" title="Email" aria-label="Email Us">
//                   <FaEnvelope size={20} />
//                 </a>
//                 <a href="https://linkedin.com/company/devomation-ai" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="Our LinkedIn Profile">
//                   <FaLinkedinIn size={20} />
//                 </a>
//                 <a href="https://instagram.com/devomation.ai" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Our Instagram Profile">
//                   <FaInstagram size={20} />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links Column */}
//             <div className="col-md-4 mb-4 mb-md-0 text-center">
//               <h4 className="text-theme-heading" style={{ fontWeight: '600', marginBottom: '20px' }}>Quick Links</h4>
//               <ul className="list-unstyled" style={{ lineHeight: '32px' }}>
//                 <li><a href="/#about" onClick={() => window.scrollTo(0, 0)} className="text-theme-primary" style={{ transition: '0.3s' }}>About Us</a></li>
//                 <li><Link to="/products" onClick={() => window.scrollTo(0, 0)} className="text-theme-primary" style={{ transition: '0.3s' }}>Our Products</Link></li>
//               </ul>
//             </div>

//             {/* Team Column */}
//             <div className="col-md-4">
//               <h4 className="text-theme-heading" style={{ fontWeight: '600', marginBottom: '20px' }}>Team behind Devomation AI</h4>
//               <ul className="list-unstyled text-theme-secondary" style={{ lineHeight: '32px' }}>
//                 <li><strong>Arahanth M</strong> - <a href="mailto:john@devomation.ai" className="text-theme-primary">john@devomation.ai</a></li>
//                 <li><strong>Akshatha A</strong> - <a href="mailto:jane@devomation.ai" className="text-theme-primary">jane@devomation.ai</a></li>
//                 <li><strong>Darshan Kashyap N</strong> - <a href="mailto:alex@devomation.ai" className="text-theme-primary">alex@devomation.ai</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="copyright text-center mt-5 pt-4 text-theme-secondary" style={{ borderTop: '1px solid var(--border)' }}>
//             &copy; Copyright <strong><span className="text-theme-heading">Devomation AI</span></strong>. All Rights Reserved
//           </div>
//         </div>
//       </footer>
//       <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
//     </>
//   );
// }
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/productsData';

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a
      href="#"
      className={`back-to-top${visible ? ' visible' : ''}`}
      aria-label="Back to top"
      onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
    >↑</a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="logo" style={{ display: 'inline-flex' }}>
                <div className="logo-icon">D</div>
                Devomation <span>AI</span>
              </Link>
              <p>Building intelligent software for institutions, startups, and enterprises. AI-native from day one.</p>
              <div className="footer-social">
                <a href="mailto:devomationai@gmail.com" aria-label="Email"><MailIcon /></a>
                <a href="https://linkedin.com/company/devomation-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="/#about">About Us</a></li>
                <li><Link to="/products">Our Products</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                {productsData.map((product) => (
                  <li key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Team</h4>
              <ul>
                <li><a href="mailto:arahanth@devomation.ai">Arahanth M</a></li>
                <li><a href="mailto:akshatha@devomation.ai">Akshatha A</a></li>
                <li><a href="mailto:darshan@devomation.ai">Darshan Kashyap N</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {year} Devomation AI. All Rights Reserved.</p>
            <p>Built with <span style={{ color: 'var(--accent)' }}>♥</span> in Bangalore</p>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
