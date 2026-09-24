import { portfolioData as data } from "../data/portfolioData";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Contact</span>
          <h2>
            Let's <em>connect</em>
          </h2>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <p className="lead">
              I'm actively seeking full-time Software Engineer, Python Developer, and
              AI/ML Engineer roles where I can contribute, learn, and grow. I'm also
              open to exciting internship opportunities. Whether you have a job opening,
              a project idea, or simply want to connect and talk tech, I'd love to hear
              from you.
            </p>

            <div className="contact-item">
              <div className="ic">✉</div>
              <div>
                <div className="lab">Email</div>
                <a className="val" href={`mailto:${data.email}`}>
                  {data.email}
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="ic">☎</div>
              <div>
                <div className="lab">Phone</div>
                <a className="val" href={`tel:${data.phone}`}>
                  {data.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="ic">in</div>
              <div>
                <div className="lab">LinkedIn</div>
                <a
                  className="val"
                  href={data.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.linkedinDisplay}
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="ic">⌥</div>
              <div>
                <div className="lab">GitHub</div>
                <a
                  className="val"
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.githubDisplay}
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="ic">📍</div>
              <div>
                <div className="lab">Location</div>
                <div className="val">{data.address}</div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="contact-headline">
              Open to <em>new opportunities</em>
            </div>
            <a href={`mailto:${data.email}`} className="btn btn-amber">
              ✉ Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
