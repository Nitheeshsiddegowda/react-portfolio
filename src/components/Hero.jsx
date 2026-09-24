import { useEffect, useRef, useState } from "react";
import { portfolioData as data } from "../data/portfolioData";
import { useCountUp } from "../hooks/useCountUp";

function TypedRole() {
  const roles = data.roleTitles.length ? data.roleTitles : ["Software Engineer"];
  const [text, setText] = useState("");
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeoutId;

    function typeLoop() {
      const current = roles[roleIndex.current];
      if (!deleting.current) {
        charIndex.current++;
        setText(current.slice(0, charIndex.current));
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeoutId = setTimeout(typeLoop, 1400);
          return;
        }
      } else {
        charIndex.current--;
        setText(current.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
      timeoutId = setTimeout(typeLoop, deleting.current ? 40 : 70);
    }

    typeLoop();
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="role reveal">
      <span id="typedRole">{text}</span>
      <span className="cursor" />
    </div>
  );
}

function StatRow({ stat }) {
  const { ref, display } = useCountUp(stat.value, stat.decimals);
  return (
    <div className="glance-row">
      <span className="glance-label">{stat.label}</span>
      <span className="glance-value">
        <span className="cv" ref={ref}>
          {display}
        </span>
        {stat.suffix}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          {data.available && (
            <div className="status-pill reveal">
              <span className="status-dot" />
              Available for opportunities · {data.location}
            </div>
          )}

          <h1 className="reveal">{data.name}</h1>
          <TypedRole />

          <p className="summary reveal">{data.summary}</p>

          <div className="hero-actions reveal">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
            <a href={data.resumeFile} download className="btn btn-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="hero-contact reveal">
            <a href={`mailto:${data.email}`}>✉ {data.email}</a>
            <a href={`tel:${data.phone}`}>☎ {data.phoneDisplay}</a>
            <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer">
              in {data.linkedinDisplay}
            </a>
            <a href={data.githubUrl} target="_blank" rel="noopener noreferrer">
              ⌥ {data.githubDisplay}
            </a>
          </div>
        </div>

        <div className="glance-card reveal">
          <span className="glance-tag">At a Glance</span>
          {data.stats.map((stat) => (
            <StatRow key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
