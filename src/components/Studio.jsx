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

export default function Studio({ data }) {
  return (
    <section className="section" id="studio">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="h2">{renderTitle(data.title)}</h2>
          <p className="muted lead">{data.body}</p>
        </Reveal>

        <Reveal delay={120} className="gallery">
          {data.images.map((img, i) => (
            <figure key={img.src} className={i === 0 ? "gallery__hero" : ""}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
              />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
