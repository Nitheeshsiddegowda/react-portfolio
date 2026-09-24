import { portfolioData as data } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Experience</span>
          <h2>
            Where I've <em>worked</em>
          </h2>
        </div>

        <div className="timeline">
          {data.experience.map((job) => (
            <div className="timeline-item reveal" key={job.title}>
              <div className="tl-meta">
                <div className="date">{job.date}</div>
                <div className="org">{job.org}</div>
                <div className="loc">{job.location}</div>
                <span className="tl-status">{job.status}</span>
              </div>
              <div className="tl-body">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <div className="tl-tags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
