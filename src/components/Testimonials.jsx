const testimonials = [
  {
    quote: "Devomation AI built our placement prep platform in record time. Student engagement went up 40% in the first semester alone — it exceeded every expectation we had.",
    name: "Dr. Priya Sharma",
    role: "Dean of Placements",
    institution: "EduGlobal Institute",
  },
  {
    quote: "The AI interview tool completely transformed how we screen candidates. What used to take a full week now takes hours, with noticeably better shortlisting outcomes.",
    name: "Rajesh Kumar",
    role: "Head of HR",
    institution: "TechUniversity",
  },
  {
    quote: "Their workflow automation eliminated manual data entry from our logistics ops entirely. The team focuses on actual work now, not pushing spreadsheets around.",
    name: "Ananya Patel",
    role: "Operations Director",
    institution: "Nexus Logistics",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>What Clients Say</div>
          <h2 className="section-title reveal">Trusted by the teams building tomorrow</h2>
          <p className="section-subtitle reveal reveal-delay-1" style={{ margin: '0 auto' }}>
            Real outcomes from the institutions and enterprises we've partnered with.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <span className="testimonial-quote-mark" aria-hidden="true">"</span>
              <p className="testimonial-text">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name[0]}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role} · {t.institution}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
