import SculptureHero from "@/components/ui/liquid-sculpture-hero";

export default function Hero({ brand, hero }) {
  const headline =
    brand.tagline.length >= 3
      ? `${brand.tagline.slice(0, -1).join(" ")}\n${brand.tagline[brand.tagline.length - 1]}`
      : brand.tagline.join("\n");
  const accentWord = brand.tagline[brand.tagline.length - 1] || "";

  return (
    <div id="top">
      <SculptureHero
        showNav={false}
        theme="dark"
        darkBackground="#070609"
        textColor="#f5f2f4"
        accentColor="#ff2e93"
        eyebrow={brand.badge}
        headline={headline}
        headlineAccent={accentWord}
        body={brand.subline}
        primaryCta={hero.primary}
        secondaryCta={hero.secondary}
        backdropText={brand.name}
        hint="Move across the sound"
        hintTouch="Touch the sound"
        intro={true}
        ambient={true}
        ambientIntensity={0.4}
        showCredit={false}
      />
    </div>
  );
}

