const common = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const icons = {
  // two decks + mixer
  deck: (
    <svg {...common}>
      <circle cx="6.5" cy="12" r="4" />
      <circle cx="6.5" cy="12" r="0.8" />
      <circle cx="17.5" cy="12" r="4" />
      <circle cx="17.5" cy="12" r="0.8" />
      <path d="M11 6h2M11 18h2M12 8v8" />
    </svg>
  ),
  // waveform
  wave: (
    <svg {...common}>
      <path d="M3 12h2M7 7v10M11 4v16M15 8v8M19 10v4M21 12h0" />
    </svg>
  ),
  // vinyl
  disc: (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3a9 9 0 0 1 6.4 2.6" />
    </svg>
  ),
  phone: (
    <svg {...common} width="20" height="20">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  ),
  chat: (
    <svg {...common} width="20" height="20">
      <path d="M4 5h16v11H9l-5 4z" />
    </svg>
  ),
  mail: (
    <svg {...common} width="20" height="20">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  pin: (
    <svg {...common} width="20" height="20">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  arrow: (
    <svg {...common} width="18" height="18">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
};

export default function Icon({ name }) {
  return icons[name] || null;
}
