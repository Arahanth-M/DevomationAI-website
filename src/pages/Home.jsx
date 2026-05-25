// import Header from '../components/Header'
// import Hero from '../components/Hero'
// import About from '../components/About'
// import OurClients from '../components/OurClients'
// import Team from '../components/Team'
// import WhyUs from '../components/WhyUs'
// import Footer from '../components/Footer'

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <main id="main">
//         <About />
//         <OurClients />
//         <Team />
//         <WhyUs />
//       </main>
//       <Footer />
//     </>
//   )
// }
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import TechStack from '../components/TechStack';
import OurClients from '../components/OurClients';
import Contact from '../components/Contact';
import { useScrollReveal } from '../utils/UseScrollreveal';

// Ticker items
const tickerItems = [
  'AI-Powered Platforms',
  'Workflow Automation',
  'EdTech Innovation',
  'Full-Stack Development',
  'Cloud Infrastructure',
  'Real-Time Systems',
  'AI Interview Tools',
  'Campus Placement Tech',
];

function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker-section">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <WhyUs />
        <TechStack />
        <OurClients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
