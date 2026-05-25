// import { Link, useLocation } from 'react-router-dom';
// import { useTheme } from '../utils/ThemeContext';
// import { FaSun, FaMoon } from 'react-icons/fa';

// export default function Header() {
//   const { theme, toggleTheme } = useTheme();
//   const location = useLocation();

//   return (
//     <header id="header" className="fixed-top">
//       <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <div className="logo">
//           <Link to="/">
//             <img src="/assets/img/logo.png" alt="" className="img-fluid" />
//           </Link>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <nav className="nav-menu d-none d-lg-block">
//             <ul>
//               <li className={location.pathname === '/' ? "active" : ""}><a href="/#header">Home</a></li>
//               <li className={location.pathname === '/products' ? "active" : ""}><Link to="/products">Our Products</Link></li>
//               <li className={location.pathname === '/team' ? "active" : ""}><Link to="/team">Our Team</Link></li>
//             </ul>
//           </nav>
//           <button
//             type="button"
//             onClick={toggleTheme}
//             style={{
//               background: 'transparent',
//               border: '1px solid #70b9b0',
//               color: '#70b9b0',
//               borderRadius: '50%',
//               width: '36px',
//               height: '36px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               marginLeft: '20px'
//             }}
//             title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
//           >
//             {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setNavOpen(false); }, [location]);

  const navLinks = [
    { label: 'Home', to: '/', exact: true },
    { label: 'Products', to: '/products' },
    { label: 'Team', to: '/team' },
  ];

  const isActive = (to, exact) =>
    exact ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">D</div>
            Devomation <span>AI</span>
          </Link>

          {/* Desktop Nav */}
          <nav>
            <ul className={`nav${navOpen ? ' open' : ''}`}>
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={isActive(link.to, link.exact) ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <Link to="/products" className="btn-primary" style={{ display: 'none', '--d': 'flex' }}
              onMouseEnter={e => e.currentTarget.style.display = 'inline-flex'}
            >
              Get Started
            </Link>

            {/* Mobile toggle */}
            <button
              className="nav-toggle"
              onClick={() => setNavOpen(o => !o)}
              aria-label="Open menu"
            >
              <span style={{ transform: navOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
              <span style={{ opacity: navOpen ? 0 : 1 }} />
              <span style={{ transform: navOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
