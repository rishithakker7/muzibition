export default function Footer({ brand, socials, note }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="logo">
          {brand.name}
          <span>{brand.suffix}</span>
        </a>

        <div className="footer__links">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>

        <p className="muted small">{note}</p>
      </div>
    </footer>
  );
}
