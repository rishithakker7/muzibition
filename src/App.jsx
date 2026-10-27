import { content } from "./content.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Courses from "./components/Courses.jsx";
import Studio from "./components/Studio.jsx";
import Students from "./components/Students.jsx";
import Originals from "./components/Originals.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar brand={content.brand} links={content.nav} cta={content.hero.primary} />
      <main>
        <Hero brand={content.brand} hero={content.hero} />
        <About about={content.about} stats={content.stats} />
        <Courses data={content.courses} />
        <Studio data={content.studio} />
        <Students data={content.students} />
        <Originals data={content.originals} socials={content.socials} />
        <Contact data={content.contact} />
      </main>
      <Footer brand={content.brand} socials={content.socials} note={content.footer.note} />
    </>
  );
}
