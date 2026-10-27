import Reveal from "./Reveal.jsx";

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

function Quote({ t }) {
  return (
    <>
      {t.quote.map((p, i) => (
        <p key={i}>
          {i === 0 ? "“" : ""}
          {p}
          {i === t.quote.length - 1 ? "”" : ""}
        </p>
      ))}
      {t.more && (
        <details className="more more--inline">
          <summary>Read more</summary>
          <div className="more__body">
            {t.more.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>
      )}
      <footer>
        <strong>{t.name}</strong>
      </footer>
    </>
  );
}

export default function Students({ data }) {
  const featured = data.testimonials.filter((t) => t.featured);
  const rest = data.testimonials.filter((t) => !t.featured);

  return (
    <section className="section" id="students">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="h2">{renderTitle(data.title)}</h2>
        </Reveal>

        <Reveal delay={100} className="wins">
          <p className="wins__title">{data.winsTitle}</p>
          {data.wins.map((w) => (
            <p key={w}>
              <i aria-hidden="true">✦</i> {w}
            </p>
          ))}
        </Reveal>

        <div className="grid grid--3">
          {featured.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} className="card quote">
              <Quote t={t} />
            </Reveal>
          ))}
        </div>

        <details className="more more--all">
          <summary>{data.allLabel}</summary>
          <div className="grid grid--3">
            {rest.map((t) => (
              <div key={t.name} className="card quote">
                <Quote t={t} />
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
