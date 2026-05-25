// export default function WhyUs() {
//   return (
//     <section id="" className="why-us">
//       <div className="container" style={{ textAlign: "center" }}>
//         <div className="section-title">
//           <h2>Why Us</h2>
//         </div>
//         <p>
//           At Devomation AI, our platforms are powered by AI-driven backend systems and full-fledged automation workflows that enable faster operations, seamless scalability, and rapid expansion across different colleges and universities based on specific institutional use cases. By building reusable and modular frameworks, we efficiently adapt and deploy solutions for multiple applications while maintaining consistency, performance, and reliability. Our growing ecosystem is designed to support modern educational transformation, and we are proud to collaborate with some of the nation’s reputed institutions as trusted technology partners.
//         </p>


//         <div className="collapse" id="collapseExample">
//           <div className="col-lg-5 col-md-12 mx-auto mt-4">
//             <form action="forms/contact.php" method="post" role="form" className="php-email-form text-left">
//               <div className="form-group">
//                 <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                 <div className="validate"></div>
//               </div>
//               <div className="form-group">
//                 <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
//                 <div className="validate"></div>
//               </div>
//               <div className="form-group">
//                 <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please tell us why you need a demo" placeholder="Message"></textarea>
//                 <div className="validate"></div>
//               </div>
//               <div className="text-center">
//                 <button className="btn btn-info" type="submit">Send Request</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
const reasons = [
  {
    icon: '🧱',
    title: 'Modular & Reusable Architecture',
    desc: 'Our frameworks adapt to new institutions in days, not months — without rebuilding from scratch.',
  },
  {
    icon: '📈',
    title: 'AI-Native from Day One',
    desc: 'Every product is designed with intelligent automation at its core, not bolted on as an afterthought.',
  },
  {
    icon: '🏎️',
    title: 'Fast Deployment Cycles',
    desc: 'From requirement to production in weeks. Our CI/CD pipelines and cloud setup make iteration seamless.',
  },
  {
    icon: '🤝',
    title: 'Long-Term Partnership',
    desc: 'We don\'t just ship and leave. We grow with you, updating platforms as your institution evolves.',
  },
];

export default function WhyUs() {
  return (
    <section className="section whyus-bg">
      <div className="container">
        <div className="whyus-inner">

          {/* Left: reasons */}
          <div>
            <div className="section-label">Why Devomation AI</div>
            <h2 className="section-title reveal">
              Engineered for scale, built for trust
            </h2>
            <p className="section-subtitle reveal reveal-delay-1">
              We partner with institutions and enterprises that take technology seriously.
            </p>

            <ul className="whyus-list">
              {reasons.map((r, i) => (
                <li key={r.title} className={`whyus-item reveal reveal-delay-${i + 1}`}>
                  <div className="whyus-item-icon">{r.icon}</div>
                  <div>
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: quote card */}
          <div className="reveal reveal-delay-2">
            <div className="whyus-quote">
              <p>
                Our platforms are powered by AI-driven backend systems and full-fledged automation
                workflows that enable faster operations, seamless scalability, and rapid expansion
                across different colleges and universities. By building reusable and modular frameworks,
                we efficiently adapt and deploy solutions for multiple applications while maintaining
                consistency, performance, and reliability.
              </p>
              <div style={{ marginTop: '28px', paddingTop: '22px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--accent-glow)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                  D
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--heading)', fontSize: '0.9rem', fontStyle: 'normal', marginBottom: '2px' }}>Devomation AI</p>
                  <p style={{ fontSize: '0.8rem', fontStyle: 'normal', color: 'var(--text-muted)' }}>Company Mission Statement</p>
                </div>
              </div>
            </div>

            {/* Stat row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px' }}>
              {[
                { num: '99%', label: 'Uptime SLA' },
                { num: '<48h', label: 'Support Response' },
              ].map(s => (
                <div key={s.label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '14px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '6px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
