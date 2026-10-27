import Reveal from "./Reveal.jsx";
import Icon from "./Icons.jsx";

const BARS = 44;

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

export default function Originals({ data, socials }) {
  const listen = socials.filter((s) => s.label === "SoundCloud" || s.label === "YouTube");
  return (
    <section className="section section--alt section--originals" id="originals">
      <div className="container originals">
        <Reveal>
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="h2">{renderTitle(data.title)}</h2>
          <p className="muted lead">{data.body}</p>
          <div className="originals__links">
            {listen.map((s) => (
              <a key={s.label} className="btn btn--ghost btn--sm" href={s.href} target="_blank" rel="noreferrer">
                {s.label} <Icon name="arrow" />
              </a>
            ))}
          </div>

          <div className="eq eq--panel" aria-hidden="true">
            {Array.from({ length: BARS }).map((_, i) => (
              <span
                key={i}
                style={{
                  animationDelay: `${(((i * 113) % 100) / 100) * -1.5}s`,
                  animationDuration: `${0.8 + ((i * 61) % 65) / 100}s`,
                }}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ol className="tracks">
            {data.tracks.map((t, idx) => (
              <li key={t}>
                <span className="tracks__title">{t}</span>
                <span className="tracks__eq" aria-hidden="true">
                  {[0, 1, 2, 3].map((b) => (
                    <i
                      key={b}
                      style={{
                        animationDelay: `${((idx * 3 + b * 7) % 10) * -0.14}s`,
                      }}
                    />
                  ))}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
