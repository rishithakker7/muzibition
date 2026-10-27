import Reveal from "./Reveal.jsx";
import Icon from "./Icons.jsx";

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

export default function Courses({ data }) {
  return (
    <section className="section section--alt" id="courses">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="h2">{renderTitle(data.title)}</h2>
        </Reveal>

        <div className="grid grid--3">
          {data.items.map((c, i) => (
            <Reveal key={c.name} delay={i * 110} className="card course">
              <div className="course__icon">
                <Icon name={c.icon} />
              </div>
              <h3>{c.name}</h3>
              <p className="muted">{c.blurb}</p>

              <div className="chips">
                {c.durations.map((d) => (
                  <span key={d} className="chip">
                    {d}
                  </span>
                ))}
              </div>

              <ul className="ticks">
                {c.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <details className="more">
                <summary>{data.syllabusLabel}</summary>
                <div className="more__body">
                  {c.overview.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {c.syllabus.map((g, gi) => (
                    <div key={gi}>
                      {g.title && <h4>{g.title}</h4>}
                      <ol>
                        {g.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
