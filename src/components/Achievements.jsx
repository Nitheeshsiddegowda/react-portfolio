import { portfolioData as data } from "../data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Achievements</span>
          <h2>
            Beyond the <em>code</em>
          </h2>
        </div>

        <div className="achieve-grid reveal-stagger reveal">
          {data.achievements.map((item) => (
            <div className="achieve-card" key={item.title}>
              <div className="emoji">{item.emoji}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
