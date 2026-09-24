import { portfolioData as data } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certs">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Certifications</span>
          <h2>
            Learning, <em>logged</em>
          </h2>
        </div>

        <div className="cert-grid reveal-stagger reveal">
          {data.certifications.map((cert) => (
            <div className="cert-card" key={cert.name}>
              <div className="cert-icon">{cert.icon}</div>
              <div>
                <h4>{cert.name}</h4>
                <div className="meta">
                  {cert.issuer} · {cert.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
