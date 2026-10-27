import Reveal from "./Reveal.jsx";

const BARS = 56;

function renderTitle(title) {
  const words = title.trim().split(" ");
  if (words.length <= 1) return <span className="h2__accent">{title}</span>;
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <span className="h2__accent">{last}</span>
    </>
  );
}

export default function About({ about, stats }) {
  return (
    <section className="section section--about" id="about">
      <div className="container about">
        <Reveal>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="h2">{renderTitle(about.title)}</h2>
        </Reveal>

        <Reveal delay={100} className="about__body">
          {about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={200} className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="eq" aria-hidden="true">
        {Array.from({ length: BARS }).map((_, i) => (
          <span
            key={i}
            style={{
              animationDelay: `${(((i * 137) % 100) / 100) * -1.6}s`,
              animationDuration: `${0.85 + ((i * 53) % 70) / 100}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
