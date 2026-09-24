import { portfolioData as data } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">About</span>
          <h2>
            Who I <em>am</em>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            {data.aboutParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <h3>Languages &amp; Technologies</h3>
            <div className="tag-grid">
              {data.skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            <h3>Tools &amp; Platforms</h3>
            <div className="tag-grid">
              {data.tools.map((tool) => (
                <span className="tag alt" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal-stagger reveal">
            {data.education.map((edu) => (
              <div className="edu-card" key={edu.degree}>
                <div className="edu-year">{edu.years}</div>
                <h4>{edu.degree}</h4>
                <div className="school">{edu.school}</div>
                <span className="badge">{edu.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
