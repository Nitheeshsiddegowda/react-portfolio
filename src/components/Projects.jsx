import { portfolioData as data } from "../data/portfolioData";

function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  card.style.setProperty("--mx", `${x}px`);
  card.style.setProperty("--my", `${y}px`);
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Projects</span>
          <h2>
            Things I've <em>built</em>
          </h2>
        </div>

        <div className="project-grid">
          {data.projects.map((project) => (
            <div
              className={`project-card reveal js-tilt${project.featured ? " featured" : ""}`}
              onMouseMove={handleTilt}
              key={project.title}
            >
              <div className="project-num">{project.num}</div>
              <div className="project-cat">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    ↗ Code
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    ↗ Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
