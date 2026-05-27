import { useState } from 'react';

function validate(values) {
  const errs = {};
  if (!values.name.trim()) errs.name = 'Name is required.';
  else if (values.name.trim().length < 4) errs.name = 'Name must be at least 4 characters.';
  if (!values.email.trim()) errs.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = 'Please enter a valid email address.';
  if (!values.message.trim()) errs.message = 'Message is required.';
  return errs;
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (touched[name]) setErrors(validate({ ...form, [name]: value }));
  };

  const handleBlur = e => {
    const { name } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setSubmitError(null);

      // Web3Forms free contact form integration
      // Access key can be defined in .env as VITE_WEB3FORMS_KEY
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: form.name,
            email: form.email,
            subject: form.subject || `Devomation AI Contact Form: ${form.name}`,
            message: form.message,
            from_name: "Devomation AI Website",
          }),
        });

        const result = await response.json();

        if (result.success) {
          setSent(true);
          setForm({ name: '', email: '', subject: '', message: '' });
          setTouched({});
        } else {
          setSubmitError(result.message || "Something went wrong. Please try again.");
        }
      } catch (err) {
        setSubmitError("Failed to connect to the server. Please check your internet connection.");
      } finally {
        setIsSubmitting(false);
      }
    }
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
                  <div>
                    <h4>Office</h4>
                    <p>3rd Block Rajajinagar, Bangalore — 560010</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:devomationai@gmail.com">devomationai@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
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
                    <button onClick={() => setSent(false)} className="btn-primary" style={{ marginTop: '24px' }}>
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          type="text" name="name" value={form.name}
                          onChange={handleChange} onBlur={handleBlur}
                          placeholder="John Doe"
                          className={touched.name && errors.name ? 'input-error' : ''}
                        />
                        {touched.name && errors.name && <span className="form-error">{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email" name="email" value={form.email}
                          onChange={handleChange} onBlur={handleBlur}
                          placeholder="john@company.com"
                          className={touched.email && errors.email ? 'input-error' : ''}
                        />
                        {touched.email && errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Partnership / Demo Request / General Inquiry" />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        name="message" value={form.message}
                        onChange={handleChange} onBlur={handleBlur}
                        rows={5} placeholder="Tell us about your project or institution..."
                        className={touched.message && errors.message ? 'input-error' : ''}
                      />
                      {touched.message && errors.message && <span className="form-error">{errors.message}</span>}
                    </div>
                    {submitError && (
                      <div className="form-error" style={{ marginBottom: '16px', display: 'block', padding: '10px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '6px', color: '#ef4444' }}>
                        {submitError}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={isSubmitting}
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '14px',
                        fontSize: '1rem',
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message →'}
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
