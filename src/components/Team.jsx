export default function Team() {
  return (
    <section id="team" className="team">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="section-title">
          <h2>Technology and Security</h2>
        </div>
        <p>
          We at Devomation AI use the MERN stack (MongoDB, Express.js, React, and Node.js) to build scalable, modern, and high-performance solutions for clients, along with Redis for server-side caching, n8n for intelligent workflow automation, and Hetzner cloud servers for reliable and efficient infrastructure deployment.
        </p>
        <div className="col-md-8 offset-md-2">
          <img src="/assets/img/mern-logo.png" className="rounded" style={{ height: "80px", margin: "10px 20px" }} alt="MERN Stack" />
          <img src="/assets/img/redis-logo.png" className="rounded" style={{ height: "80px", margin: "10px 20px" }} alt="Redis" />
          <img src="/assets/img/hetzner-logo.png" className="rounded" style={{ height: "80px", margin: "10px 20px" }} alt="Hetzner Cloud" />
          <img src="/assets/img/N8n-logo-new.png" className="rounded" style={{ height: "80px", margin: "10px 20px" }} alt="n8n Automation" />
        </div>
      </div>
    </section>
  );
}
