import { useState } from "react";
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

export default function Contact({ data }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const placeholder = data.formEndpoint.includes("YOUR_FORM_ID");

  const waLink = `https://wa.me/${data.phoneRaw}?text=${encodeURIComponent(data.whatsappText)}`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${data.studioName} ${data.address}`
  )}`;

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    // No form service wired up yet: open the visitor's email app instead.
    if (placeholder) {
      const body = `Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nCourse: ${values.course}\n\n${values.message || ""}`;
      window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(
        "Enquiry from website"
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(data.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <Reveal className="contact__info">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="h2">{renderTitle(data.title)}</h2>
          <p className="muted lead">{data.body}</p>

          <div className="contact__btns">
            <a className="btn" href={`tel:+${data.phoneRaw}`}>
              <Icon name="phone" /> Call
            </a>
            <a className="btn btn--ghost" href={waLink} target="_blank" rel="noreferrer">
              <Icon name="chat" /> WhatsApp
            </a>
          </div>

          <ul className="contact__list">
            <li>
              <Icon name="phone" />
              <a href={`tel:+${data.phoneRaw}`}>{data.phone}</a>
            </li>
            <li>
              <Icon name="mail" />
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </li>
            <li>
              <Icon name="pin" />
              <a href={mapLink} target="_blank" rel="noreferrer">
                {data.studioName}, {data.address}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form className="card form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" required autoComplete="name" placeholder="Your name" />
            </label>
            <div className="form__row">
              <label>
                Phone
                <input name="phone" type="tel" required autoComplete="tel" placeholder="+91" />
              </label>
              <label>
                Email
                <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
              </label>
            </div>
            <label>
              Interested in
              <select name="course" defaultValue={data.courseOptions[0]}>
                {data.courseOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="3" placeholder="Anything we should know? (optional)" />
            </label>

            <button className="btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send enquiry"}
            </button>

            {status === "sent" && <p className="form__note ok">Thanks! We'll be in touch soon.</p>}
            {status === "error" && (
              <p className="form__note err">Something went wrong. Please call or WhatsApp us instead.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
