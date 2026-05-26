import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../utils/UseScrollreveal';

const teamMembers = [
  {
    name: 'Arahanth M',
    role: 'Co-Founder & Developer',
    email: 'john@devomation.ai',
    image: 'https://via.placeholder.com/300x300?text=Arahanth+M',
  },
  {
    name: 'Akshatha A',
    role: 'Co-Founder & Developer',
    email: 'jane@devomation.ai',
    image: 'https://via.placeholder.com/300x300?text=Akshatha+A',
  },
  {
    name: 'Darshan Kashyap N',
    role: 'Lead Engineer',
    email: 'alex@devomation.ai',
    image: 'https://via.placeholder.com/300x300?text=Darshan+Kashyap+N',
  },
];

export default function OurTeam() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="section-label reveal">Our team</div>
            <h2 className="section-title reveal reveal-delay-1">
              The people behind Devomation AI
            </h2>
            <p className="section-subtitle reveal reveal-delay-2">
              Meet the passionate individuals building intelligent software for education and enterprise.
            </p>

            <div className="team-grid">
              {teamMembers.map((member, i) => (
                <article
                  key={member.email}
                  className={`team-card reveal reveal-delay-${(i % 3) + 1}`}
                >
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <a href={`mailto:${member.email}`} className="team-email">
                    {member.email}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
