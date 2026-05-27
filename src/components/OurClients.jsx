// export default function OurClients() {
//   const dummyLogos = [
//     "/assets/img/client1.png",
//     "https://via.placeholder.com/200x80?text=Company+One",
//     "https://via.placeholder.com/200x80?text=Global+Tech",
//     "https://via.placeholder.com/200x80?text=Innovate+Inc",
//     "https://via.placeholder.com/200x80?text=Nexus+Corp",
//     "https://via.placeholder.com/200x80?text=Alpha+Group",
//     "https://via.placeholder.com/200x80?text=Omega+Solutions"
//   ];

//   return (
//     <section id="faq" className="solutions">
//       <div className="wrapper">
//         <h1>Our Clients</h1>

//         <div className="marquee-container">
//           <div className="marquee-content">
//             {/* Original set */}
//             {dummyLogos.map((logo, index) => (
//               <img key={index} src={logo} alt={`Client Logo ${index + 1}`} className="client-logo" />
//             ))}
//             {/* Duplicated set for seamless infinite scrolling */}
//             {dummyLogos.map((logo, index) => (
//               <img key={`dup-${index}`} src={logo} alt={`Client Logo ${index + 1}`} className="client-logo" />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// Replace dummy logos with real client logos when available
const clients = [
  { name: 'Client One', logo: '/assets/img/client1.png' },
  { name: 'Institution Alpha', logo: null },
  { name: 'TechCorp', logo: null },
  { name: 'EduGroup', logo: null },
  { name: 'InnovateLab', logo: null },
  { name: 'NexusEdu', logo: null },
];

function ClientLogo({ client }) {
  if (client.logo) {
    return (
      <div className="client-logo-wrap">
        <img src={client.logo} alt={client.name} />
      </div>
    );
  }
  return (
    <div className="client-logo-wrap">
      <div style={{
        padding: '10px 24px',
        borderRadius: '8px',
        border: '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '0.85rem',
        color: 'var(--text-dim)',
        letterSpacing: '0.05em',
        opacity: 0.5,
        whiteSpace: 'nowrap',
        transition: 'all 0.3s',
        cursor: 'default',
      }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '0.5'; e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
      >
        {client.name}
      </div>
    </div>
  );
}

export default function OurClients() {
  const doubled = [...clients, ...clients];

  return (
    <section id="faq" className="clients-section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>Trusted By</div>
        <h2 className="section-title reveal" style={{ marginBottom: '8px' }}>
          Institutions we're proud to work with
        </h2>
        <p className="section-subtitle reveal reveal-delay-1" style={{ margin: '0 auto' }}>
          Our growing ecosystem of partners — colleges, universities, and enterprises.
        </p>
      </div>

      <div className="clients-logo-row">
        <div className="marquee-track">
          {doubled.map((c, i) => (
            <ClientLogo key={i} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
