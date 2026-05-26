import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import OurTeam from './pages/OurTeam';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import './index.css';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <div key={location.pathname} className="page-fade">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/team" element={<OurTeam />} />
        </Routes>
      </div>
      <BackToTop />
    </>
  );
}

export default App;
