// export default function Contact() {
//   return (
//     <>
//       <section id="contact" className="contact section-bg">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4 col-md-6">
//               <div className="contact-about">
//                 <h3>Devomation AI</h3>
//                 <p>AI solutions for modern enterprises</p>
//                 <div className="social-links">
//                   <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-6">
//               <div className="info">
//                 <div>
//                   <i className="icofont-google-map"></i>
//                   <p>3rd Block Rajajinagar Bangalore</p>
//                 </div>

//                 <div>
//                   <i className="icofont-envelope"></i>
//                   <p>devomationai@gmail.com</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-5 col-md-12">
//               <form action="forms/contact.php" method="post" role="form" className="php-email-form">
//                 <div className="form-group">
//                   <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                   <div className="validate"></div>
//                 </div>
//                 <div className="form-group">
//                   <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
//                   <div className="validate"></div>
//                 </div>
//                 <div className="form-group">
//                   <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
//                   <div className="validate"></div>
//                 </div>
//                 <div className="form-group">
//                   <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
//                   <div className="validate"></div>
//                 </div>
//                 <div className="mb-3">
//                   <div className="loading">Loading</div>
//                   <div className="error-message"></div>
//                   <div className="sent-message">Your message has been sent. Thank you!</div>
//                 </div>
//                 <div className="text-center"><button type="submit">Send Message</button></div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="map">
//         <iframe src="https://maps.google.com/maps?q=3rd%20Block%20Rajajinagar,%20Bangalore,%20560010&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Location Map"></iframe>
//       </section>
//     </>
//   );
// }
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // In production: POST to your backend
    setSent(true);
  };

  return (
    <>
      <section id="contact" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</div>
            <h2 className="section-title reveal">Let's build something together</h2>
            <p className="section-subtitle reveal reveal-delay-1" style={{ margin: '0 auto' }}>
              Have a project in mind or want to explore a partnership? We'd love to hear from you.
            </p>
          </div>

          <div className="contact-layout">
            {/* Left info */}
            <div className="reveal">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>
                Devomation AI
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '32px', lineHeight: 1.75 }}>
                AI solutions for modern enterprises. Bangalore-based, globally minded.
              </p>

              <div className="contact-info-block">
                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div>
                    <h4>Office</h4>
                    <p>3rd Block Rajajinagar, Bangalore — 560010</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:devomationai@gmail.com">devomationai@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">💼</div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://linkedin.com/company/devomation-ai" target="_blank" rel="noopener noreferrer">linkedin.com/company/devomation-ai</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="reveal reveal-delay-2">
              <div className="contact-form">
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '48px 0' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✅</div>
                    <h3 style={{ marginBottom: '8px' }}>Message sent!</h3>
                    <p style={{ color: 'var(--text-muted)' }}>We'll get back to you within 48 hours.</p>
                    <button onClick={() => setSent(false)} style={{ marginTop: '24px', padding: '10px 22px', borderRadius: '8px', background: 'var(--accent)', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Partnership / Demo Request / General Inquiry" />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your project or institution..." required />
                    </div>
                    <button type="submit" style={{
                      width: '100%', padding: '14px', borderRadius: '10px',
                      background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-body)',
                      fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer',
                      transition: 'all 0.25s', letterSpacing: '0.01em'
                    }}
                      onMouseEnter={e => { e.target.transform = 'translateY(-2px)'; e.target.style.opacity = '0.9'; }}
                      onMouseLeave={e => { e.target.style.opacity = '1'; }}
                    >
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="map-section">
        <iframe
          src="https://maps.google.com/maps?q=3rd%20Block%20Rajajinagar,%20Bangalore,%20560010&t=&z=14&ie=UTF8&iwloc=&output=embed"
          title="Devomation AI Location"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </>
  );
}
