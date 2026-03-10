const STORAGE_KEY = "ubc-frame-studio-v2";
const FRAME_WIDTH = 1080;
const FRAME_HEIGHT = 1920;
const DEFAULT_LOGO_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAHhlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAAEsAAAAAQAAASwAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAgCgAwAEAAAAAQAAAgAAAAAAXpTxmQAAAAlwSFlzAAAuIwAALiMBeKU/dgAAQABJREFUeAHt3QmYHFW9sPFM9oUskH0FQiCRsCQsyo5hF29E5BJBvEgEiSLwgaLEy/Uz6L14RZQrKBI+hKugICCLCZuIARIQCBAJIJAQQlYSyL5vk/neE9JDT0/1THdPd0919zvPk3R3LafO+dVy/nXqVFWLFv4poIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKZCIwf/7889asWXN6JtM6TeEFWhZ+ES5BAQUUUECBFi1qamr27dy58/3r16+/b9GiRUM1UUABBRRQQIEKEKAF4EcEAYm/xbQG/PuECRNaV0DRLaICCiiggAKVK5ASAOwIBLZs2fLMhx9+OKpyVZqv5F4CaD57l6yAAgpUvECbNm2O7tat2183b9780+XLlw+oeJAiAhgAFBHbRSmggAIK1Bdo3bp1y7Zt216xyy67PL9q1arzmaKq/lQOybeAAUC+RU1PAQUUUCAnAYKA/l27dr1106ZNjy9btuwTOSXiTBkLGABkTOWECiiggALFEGjXrt2JXBaYvm7duh/Pnj27SzGW6TIUUEABBRRQoEACUZ0AE7cEpPvcvn379JUrV/rsgAKsE1sACoBqkgoooIAC+RGoqqo6hMsC99NJ8G4Cgd3zk6qpBAEDALcDBRRQQIFYCxAEtKB/wBfpJPgStw2ex2WBdrHOcIlkzgCgRFaU2VRAAQUqXYC7BXpw2+DtAwYM+NsHH3xwTKV7NLX8BgBNFXR+BRRQQIGMBLievzmjCRuZqH379kf06NHjYR4pfOPMmTN3bWRyR6cRKMt7LadMmbILkWIvHjNZzYaSpujFGbxt27aW3bt3X3rIIYdsKM4SS3Mp06ZNG7R27dpwL3BN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0ey3V4S0uTfy5Qt4w7JKVnfsV5Zj20IgMPzMSL/SP9W+vpsjByZwUAu46zE4dY0k4YHQP17Yhz7YOS2lhif7Sd5D7d8Psf2PYEWq8O43HJHtmkkTR/ZwYb0I4/FSfOV5ddcKpmShuDVp62uvPLKfXlUajd24sZ7FiWVlltSNvKIzAU8CWxx0uCcv7LRDWHmAakJcGDYxHMMXgpn5anjGvpNevsyvt4ZADvNuvDYT3bMyDOzqDTp+T+Ua5c7OiVFjWdY6Ia+nmDgBZbbh9+f4F9U+itY7sw0aWQ8mGWE64/17uhgWNiGZ7GMUDnU++P97PuMGDGiDx0G8xHshkrkhWwc62WIAeFFSQfzx1l61OishxEgrb7mmmtev+WWWyIr5ZAgfvvxUa+ZnG1jDWeOM8IkYbpM/3iaYxda2EZShqhjyBsYfZhpWkxX9fe//30YwUEPzqgj90m2x01cWljI66AXZpFu7aQ0Sx/InT+R18ZrJ4r4QrCxndsTl40fP35WU1qxIpJOHtTqxRdfHMYLknbDM7L8yROnfF+O9Wus37B9h4686SqysN3mHACEZbKMrnyMDN8j/jaS/gthOEHucILQqH01YraGB+Ff889//nP+pz71qbkNT9n4WPIfbEIfoXoBCvvQPIKzJi+j8Vw4hQIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAqUk8P8BHa7cB5EBLAAAAAAASUVORK5CYII=";

const ACTIVE_LOGO_DATA_URL = window.DEFAULT_LOGO_DATA_URL || DEFAULT_LOGO_DATA_URL;

const FONT_OPTIONS = [
  { id: "noto-sans-devanagari", label: "Noto Sans Devanagari", stack: '"Noto Sans Devanagari", "Nirmala UI", sans-serif' },
  { id: "noto-serif-devanagari", label: "Noto Serif Devanagari", stack: '"Noto Serif Devanagari", serif' },
  { id: "hind", label: "Hind", stack: '"Hind", "Noto Sans Devanagari", sans-serif' },
  { id: "mukta", label: "Mukta", stack: '"Mukta", "Noto Sans Devanagari", sans-serif' },
  { id: "khand", label: "Khand", stack: '"Khand", "Noto Sans Devanagari", sans-serif' },
  { id: "tiro", label: "Tiro Devanagari Hindi", stack: '"Tiro Devanagari Hindi", serif' },
  { id: "teko", label: "Teko", stack: '"Teko", "Noto Sans Devanagari", sans-serif' },
  { id: "space-grotesk", label: "Space Grotesk", stack: '"Space Grotesk", sans-serif' },
];

const SOCIAL_PLATFORMS = {
  youtube: { label: "YouTube", brand: "#FF0033" },
  instagram: { label: "Instagram", brand: "#E4405F" },
  x: { label: "X / Twitter", brand: "#111111" },
  facebook: { label: "Facebook", brand: "#1877F2" },
  whatsapp: { label: "WhatsApp", brand: "#25D366" },
  telegram: { label: "Telegram", brand: "#2AABEE" },
};

const TEMPLATE_DEFS = [
  { id: "debate-punch", name: "Debate Punch", chip: "Hard red-and-white debate slab with sharper contrast", swatch: "linear-gradient(135deg, #ffffff, #e11d2e)" },
  { id: "breaking-red", name: "Breaking Red", chip: "Breaking label plus white headline block for fast news", swatch: "linear-gradient(135deg, #e11d2e, #f6f0e8)" },
  { id: "regional-focus", name: "Regional Focus", chip: "Gold local-news tag with open dark lower-third", swatch: "linear-gradient(135deg, #f2c14e, #111827)" },
  { id: "urgent-alert", name: "Urgent Alert", chip: "Alert pill and red rail for quick on-screen bursts", swatch: "linear-gradient(135deg, #e11d2e, #8b1018)" },
  { id: "election-mode", name: "Election Mode", chip: "Political frame with stronger red-yellow structure", swatch: "linear-gradient(135deg, #781019, #f2c14e)" },
  { id: "ground-report", name: "Ground Report", chip: "Reporter-safe field look with clearer hierarchy", swatch: "linear-gradient(135deg, #111827, #f2c14e)" },
  { id: "policy-explainer", name: "Policy Explainer", chip: "Glass-led explainer card with better readability", swatch: "linear-gradient(135deg, #f6f0e8, #152531)" },
  { id: "metro-ribbon", name: "Metro Ribbon", chip: "Segmented broadcast lower-third with open video area", swatch: "linear-gradient(135deg, #111827, #e11d2e)" },
  { id: "news-rails", name: "News Rails", chip: "Clean long-rail lower-third with stronger detailing", swatch: "linear-gradient(135deg, #111827, #f2c14e)" },
  { id: "hero-lens", name: "Hero Lens", chip: "Focus-ring led frame with premium strap", swatch: "linear-gradient(135deg, #f2c14e, #0f1720)" },
  { id: "prism-tag", name: "Prism Tag", chip: "Layered prism strap with broadcast energy", swatch: "linear-gradient(135deg, #f6f0e8, #e11d2e)" },
  { id: "brut-raw", name: "Brut Raw", chip: "Black-yellow raw caption style for aggressive reels", swatch: "linear-gradient(135deg, #0a0a0a, #f2c14e)" },
  { id: "wire-desk", name: "Wire Desk", chip: "Global wire-service strap with amber rail discipline", swatch: "linear-gradient(135deg, #111827, #d9a441)" },
  { id: "bloom-board", name: "Bloom Board", chip: "Business-news board with precise amber detailing", swatch: "linear-gradient(135deg, #0f1720, #f2c14e)" },
  { id: "dw-focus", name: "DW Focus", chip: "Minimal ring-led broadcast frame with clean desk band", swatch: "linear-gradient(135deg, #0f1720, #f2c14e)" },
  { id: "ft-weekend", name: "FT Weekend", chip: "Editorial beige card for premium feature shorts", swatch: "linear-gradient(135deg, #f6e9d8, #d8b27a)" },
  { id: "vice-tape", name: "Vice Tape", chip: "Gritty taped headline strap with fast energy", swatch: "linear-gradient(135deg, #ffffff, #e11d2e)" },
  { id: "subtitle-max", name: "Subtitle Max", chip: "Open cinematic subtitle band for reel overlays", swatch: "linear-gradient(135deg, #10151d, #f2c14e)" },
  { id: "world-desk", name: "World Desk", chip: "Global desk rail with premium right-side tower", swatch: "linear-gradient(135deg, #111827, #e11d2e)" },
  { id: "bulletin-core", name: "Bulletin Core", chip: "Hard bulletin stack with white headline board", swatch: "linear-gradient(135deg, #b3121f, #f6f0e8)" },
  { id: "studio-edge", name: "Studio Edge", chip: "Angular studio desk band with strong yellow rail", swatch: "linear-gradient(135deg, #111827, #f2c14e)" },
  { id: "crossline", name: "Crossline", chip: "Intersecting red-white lower-third for sharp debate cuts", swatch: "linear-gradient(135deg, #ffffff, #e11d2e)" },
  { id: "reporter-slate", name: "Reporter Slate", chip: "Open field-safe lower third with durable hierarchy", swatch: "linear-gradient(135deg, #0f1720, #f2c14e)" },
  { id: "prime-panel", name: "Prime Panel", chip: "Clean primetime panel with right-side module", swatch: "linear-gradient(135deg, #10151d, #d9a441)" },
  { id: "flash-ticker", name: "Flash Ticker", chip: "Compact breaking ticker made for fast reels", swatch: "linear-gradient(135deg, #e11d2e, #8b1018)" },
  { id: "document-band", name: "Document Band", chip: "Premium paper-style band for feature pieces", swatch: "linear-gradient(135deg, #f6e9d8, #d8b27a)" },
  { id: "debate-grid", name: "Debate Grid", chip: "Structured split-frame for arguments and opinion", swatch: "linear-gradient(135deg, #ffffff, #0f1720)" },
  { id: "focus-caption", name: "Focus Caption", chip: "Ultra-clean cinematic caption frame with open video", swatch: "linear-gradient(135deg, #10151d, #f2c14e)" },
  { id: "orbit-desk", name: "Orbit Desk", chip: "Global desk frame with circular signal motif", swatch: "linear-gradient(135deg, #111827, #e11d2e)" },
  { id: "shorts-capsule", name: "Shorts Capsule", chip: "Minimal Hindi headline card with yellow capsule tag", swatch: "linear-gradient(135deg, #050709, #f5c400)" },
  { id: "red-banner-stack", name: "Red Banner Stack", chip: "White topline chip with bold red title board", swatch: "linear-gradient(135deg, #ffffff, #ff0015)" },
  { id: "paper-banner-stack", name: "Paper Banner Stack", chip: "Red topline chip with crisp white title board", swatch: "linear-gradient(135deg, #ff0015, #f3f3f3)" },
  { id: "skew-clash", name: "Skew Clash", chip: "Angled yellow-red stack inspired by sharp reel cards", swatch: "linear-gradient(135deg, #f5c400, #ff0015)" },
  { id: "editor-twin-strap", name: "Editor Twin Strap", chip: "Two-tier editorial strap with BBC-style top treatment", swatch: "linear-gradient(135deg, #f4f1ed, #d8181e)" },
];

const TEMPLATE_PRESETS = {
  "bbc-command": {
    accentColor: "#B3121F",
    secondaryColor: "#F6F0E8",
    panelColor: "#0A0D12",
    textColor: "#FFFFFF",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "block",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#0A0D12",
  },
  "brut-raw": {
    accentColor: "#111111",
    secondaryColor: "#FFD431",
    panelColor: "#060606",
    textColor: "#FFFFFF",
    socialColor: "#FFD431",
    theme: "dark",
    categoryStyle: "block",
    socialStyle: "mono",
    logoStyle: "none",
    logoBgColor: "#060606",
  },
  "wire-desk": {
    accentColor: "#FF6B00",
    secondaryColor: "#F2B134",
    panelColor: "#0F1720",
    textColor: "#F6F0E8",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "block",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#0F1720",
  },
  "bloom-board": {
    accentColor: "#FF7A00",
    secondaryColor: "#F2A900",
    panelColor: "#0C1118",
    textColor: "#F6F0E8",
    socialColor: "#F2A900",
    theme: "dark",
    categoryStyle: "block",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#0C1118",
  },
  "vox-pop": {
    accentColor: "#E11D2E",
    secondaryColor: "#F2C14E",
    panelColor: "#F6F0E8",
    textColor: "#101318",
    socialColor: "#101318",
    theme: "light",
    categoryStyle: "pill",
    socialStyle: "brand",
    logoStyle: "capsule",
    logoBgColor: "#FFFFFF",
  },
  "dw-focus": {
    accentColor: "#0077FF",
    secondaryColor: "#F6F0E8",
    panelColor: "#0F1720",
    textColor: "#FFFFFF",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "block",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#0F1720",
  },
  "ft-weekend": {
    accentColor: "#101318",
    secondaryColor: "#E8C7A1",
    panelColor: "#F6E9D8",
    textColor: "#101318",
    socialColor: "#101318",
    theme: "light",
    categoryStyle: "block",
    socialStyle: "outline",
    logoStyle: "capsule",
    logoBgColor: "#F6E9D8",
  },
  "vice-tape": {
    accentColor: "#E11D2E",
    secondaryColor: "#F6F0E8",
    panelColor: "#0A0A0A",
    textColor: "#FFFFFF",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "block",
    socialStyle: "brand",
    logoStyle: "none",
    logoBgColor: "#0A0A0A",
  },
  "subtitle-max": {
    accentColor: "#E11D2E",
    secondaryColor: "#F2C14E",
    panelColor: "#0A0F14",
    textColor: "#F6F0E8",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "pill",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#0A0F14",
  },
  "world-desk": {
    accentColor: "#D71920",
    secondaryColor: "#F2C14E",
    panelColor: "#10151D",
    textColor: "#F6F0E8",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "pill",
    socialStyle: "brand",
    logoStyle: "capsule",
    logoBgColor: "#10151D",
  },
  "bulletin-core": {
    accentColor: "#B3121F",
    secondaryColor: "#F6F0E8",
    panelColor: "#090A0D",
    textColor: "#FFFFFF",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "block",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#090A0D",
  },
  "studio-edge": {
    accentColor: "#E11D2E",
    secondaryColor: "#F2C14E",
    panelColor: "#10151D",
    textColor: "#F6F0E8",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "pill",
    socialStyle: "brand",
    logoStyle: "capsule",
    logoBgColor: "#10151D",
  },
  "crossline": {
    accentColor: "#E11D2E",
    secondaryColor: "#F6F0E8",
    panelColor: "#090A0D",
    textColor: "#FFFFFF",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "block",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#090A0D",
  },
  "reporter-slate": {
    accentColor: "#10151D",
    secondaryColor: "#F2C14E",
    panelColor: "#111827",
    textColor: "#F6F0E8",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "outline",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#111827",
  },
  "prime-panel": {
    accentColor: "#FF6B00",
    secondaryColor: "#F2B134",
    panelColor: "#0F1720",
    textColor: "#F6F0E8",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "block",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#0F1720",
  },
  "flash-ticker": {
    accentColor: "#E11D2E",
    secondaryColor: "#F6F0E8",
    panelColor: "#090A0D",
    textColor: "#FFFFFF",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "pill",
    socialStyle: "brand",
    logoStyle: "capsule",
    logoBgColor: "#090A0D",
  },
  "document-band": {
    accentColor: "#101318",
    secondaryColor: "#E8C7A1",
    panelColor: "#F6E9D8",
    textColor: "#101318",
    socialColor: "#101318",
    theme: "light",
    categoryStyle: "block",
    socialStyle: "outline",
    logoStyle: "capsule",
    logoBgColor: "#F6E9D8",
  },
  "debate-grid": {
    accentColor: "#E11D2E",
    secondaryColor: "#F6F0E8",
    panelColor: "#10151D",
    textColor: "#FFFFFF",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "block",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#10151D",
  },
  "focus-caption": {
    accentColor: "#E11D2E",
    secondaryColor: "#F2C14E",
    panelColor: "#0A0F14",
    textColor: "#F6F0E8",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "pill",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#0A0F14",
  },
  "orbit-desk": {
    accentColor: "#D71920",
    secondaryColor: "#F2C14E",
    panelColor: "#10151D",
    textColor: "#F6F0E8",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "pill",
    socialStyle: "brand",
    logoStyle: "capsule",
    logoBgColor: "#10151D",
  },
  "shorts-capsule": {
    accentColor: "#F5C400",
    secondaryColor: "#F5C400",
    panelColor: "#050709",
    textColor: "#FFFFFF",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "pill",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#050709",
    headlineSize: 92,
    subheadlineSize: 30,
    logoSize: 132,
  },
  "red-banner-stack": {
    accentColor: "#FFFFFF",
    secondaryColor: "#FF0015",
    panelColor: "#050709",
    textColor: "#FFFFFF",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "slab",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#050709",
    headlineSize: 88,
    subheadlineSize: 30,
    logoSize: 126,
  },
  "paper-banner-stack": {
    accentColor: "#FF0015",
    secondaryColor: "#F3F3F3",
    panelColor: "#050709",
    textColor: "#FFFFFF",
    socialColor: "#F3F3F3",
    theme: "dark",
    categoryStyle: "slab",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#050709",
    headlineSize: 88,
    subheadlineSize: 30,
    logoSize: 126,
  },
  "skew-clash": {
    accentColor: "#F5C400",
    secondaryColor: "#FF0015",
    panelColor: "#050709",
    textColor: "#FFFFFF",
    socialColor: "#F6F0E8",
    theme: "dark",
    categoryStyle: "skew",
    socialStyle: "white",
    logoStyle: "capsule",
    logoBgColor: "#050709",
    headlineSize: 86,
    subheadlineSize: 30,
    logoSize: 126,
  },
  "editor-twin-strap": {
    accentColor: "#D8181E",
    secondaryColor: "#F4F1ED",
    panelColor: "#0B0D11",
    textColor: "#FFFFFF",
    socialColor: "#E6E8EB",
    theme: "dark",
    categoryStyle: "slab",
    socialStyle: "outline",
    logoStyle: "none",
    logoBgColor: "#0B0D11",
    headlineSize: 66,
    subheadlineSize: 34,
    logoSize: 96,
    showSocial: false,
  },
};

const DEFAULT_STATE = {
  template: "bulletin-core",
  headline: "जो सेवा ही परम धर्म",
  subheadline: "Transparent short-video overlay with stronger visual design",
  category: "GROUND REPORT",
  footerText: "UBC SHORTS",
  theme: "dark",
  categoryStyle: "block",
  accentColor: "#B3121F",
  secondaryColor: "#F6F0E8",
  panelColor: "#090A0D",
  textColor: "#FFFFFF",
  headlineFont: "noto-sans-devanagari",
  subheadlineFont: "hind",
  categoryFont: "space-grotesk",
  headlineSize: 78,
  subheadlineSize: 32,
  showLogo: true,
  logoStyle: "capsule",
  logoBgColor: "#090A0D",
  logoSize: 158,
  showSocial: true,
  socialPlatform: "youtube",
  socialHandle: "@ubchindi",
  socialStyle: "white",
  socialColor: "#F6F0E8",
  socialSize: 30,
  frameOffsetX: 0,
  frameOffsetY: 0,
  textOffsetX: 0,
  textOffsetY: 0,
  categoryOffsetX: 0,
  categoryOffsetY: 0,
  socialOffsetX: 0,
  socialOffsetY: 0,
  logoOffsetX: 0,
  logoOffsetY: 0,
  previewBackground: "checker",
};

const measureCanvas = document.createElement("canvas");
const measureContext = measureCanvas.getContext("2d");
const state = { ...DEFAULT_STATE, ...readStoredState() };
const elements = {};

if (!TEMPLATE_DEFS.some((template) => template.id === state.template)) {
  state.template = DEFAULT_STATE.template;
  applyTemplatePreset(state.template);
}

document.addEventListener("DOMContentLoaded", async () => {
  cacheElements();
  buildTemplateGrid();
  buildFontOptions();
  buildSocialOptions();
  bindControls();
  syncControlsFromState();
  applyPreviewBackground();
  render();

  if (document.fonts?.ready) {
    await document.fonts.ready;
    render();
  }
});

function cacheElements() {
  [
    "templateGrid",
    "previewCanvas",
    "headline",
    "subheadline",
    "category",
    "footerText",
    "theme",
    "categoryStyle",
    "accentColor",
    "secondaryColor",
    "panelColor",
    "textColor",
    "headlineFont",
    "subheadlineFont",
    "categoryFont",
    "headlineSize",
    "subheadlineSize",
    "logoSize",
    "headlineSizeValue",
    "subheadlineSizeValue",
    "logoSizeValue",
    "showLogo",
    "logoStyle",
    "logoBgColor",
    "showSocial",
    "socialPlatform",
    "socialHandle",
    "socialStyle",
    "socialColor",
    "socialSize",
    "socialSizeValue",
    "frameOffsetX",
    "frameOffsetY",
    "textOffsetX",
    "textOffsetY",
    "categoryOffsetX",
    "categoryOffsetY",
    "socialOffsetX",
    "socialOffsetY",
    "logoOffsetX",
    "logoOffsetY",
    "frameOffsetXValue",
    "frameOffsetYValue",
    "textOffsetXValue",
    "textOffsetYValue",
    "categoryOffsetXValue",
    "categoryOffsetYValue",
    "socialOffsetXValue",
    "socialOffsetYValue",
    "logoOffsetXValue",
    "logoOffsetYValue",
    "previewBackground",
    "downloadPng",
    "downloadSvg",
    "resetLayout",
  ].forEach((id) => {
    elements[id] = document.getElementById(id);
  });
}

function buildTemplateGrid() {
  elements.templateGrid.innerHTML = TEMPLATE_DEFS.map(
    (template) => `
      <button
        type="button"
        class="template-card ${state.template === template.id ? "is-active" : ""}"
        data-template-id="${template.id}"
        style="--swatch:${template.swatch}"
      >
        <strong>${escapeXml(template.name)}</strong>
        <span>${escapeXml(template.chip)}</span>
      </button>
    `
  ).join("");
}

function buildFontOptions() {
  const options = FONT_OPTIONS.map(
    (font) => `<option value="${font.id}">${escapeXml(font.label)}</option>`
  ).join("");

  elements.headlineFont.innerHTML = options;
  elements.subheadlineFont.innerHTML = options;
  elements.categoryFont.innerHTML = options;
}

function buildSocialOptions() {
  elements.socialPlatform.innerHTML = Object.entries(SOCIAL_PLATFORMS)
    .map(([id, platform]) => `<option value="${id}">${escapeXml(platform.label)}</option>`)
    .join("");
}

function bindControls() {
  elements.templateGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-template-id]");
    if (!button) return;
    state.template = button.dataset.templateId;
    applyTemplatePreset(state.template);
    syncControlsFromState();
    applyPreviewBackground();
    render();
  });

  bindText("headline");
  bindText("subheadline");
  bindText("category");
  bindText("footerText");
  bindSelect("theme");
  bindSelect("categoryStyle");
  bindColor("accentColor");
  bindColor("secondaryColor");
  bindColor("panelColor");
  bindColor("textColor");
  bindSelect("headlineFont");
  bindSelect("subheadlineFont");
  bindSelect("categoryFont");
  bindCheckbox("showLogo");
  bindSelect("logoStyle");
  bindColor("logoBgColor");
  bindCheckbox("showSocial");
  bindSelect("socialPlatform");
  bindText("socialHandle");
  bindSelect("socialStyle");
  bindColor("socialColor");
  bindRange("headlineSize", "headlineSizeValue");
  bindRange("subheadlineSize", "subheadlineSizeValue");
  bindRange("logoSize", "logoSizeValue");
  bindRange("socialSize", "socialSizeValue");
  bindRange("frameOffsetX", "frameOffsetXValue");
  bindRange("frameOffsetY", "frameOffsetYValue");
  bindRange("textOffsetX", "textOffsetXValue");
  bindRange("textOffsetY", "textOffsetYValue");
  bindRange("categoryOffsetX", "categoryOffsetXValue");
  bindRange("categoryOffsetY", "categoryOffsetYValue");
  bindRange("socialOffsetX", "socialOffsetXValue");
  bindRange("socialOffsetY", "socialOffsetYValue");
  bindRange("logoOffsetX", "logoOffsetXValue");
  bindRange("logoOffsetY", "logoOffsetYValue");

  elements.previewBackground.addEventListener("change", () => {
    state.previewBackground = elements.previewBackground.value;
    applyPreviewBackground();
    persistState();
  });

  elements.downloadPng.addEventListener("click", downloadPng);
  elements.downloadSvg.addEventListener("click", downloadSvg);
  elements.resetLayout.addEventListener("click", resetLayout);
}

function bindText(id) {
  elements[id].addEventListener("input", () => {
    state[id] = elements[id].value;
    render();
  });
}

function applyTemplatePreset(templateId) {
  const preset = TEMPLATE_PRESETS[templateId];
  if (!preset) return;
  Object.assign(state, preset);
}

function bindSelect(id) {
  elements[id].addEventListener("change", () => {
    state[id] = elements[id].value;
    render();
  });
}

function bindColor(id) {
  elements[id].addEventListener("input", () => {
    state[id] = elements[id].value.toUpperCase();
    render();
  });
}

function bindCheckbox(id) {
  elements[id].addEventListener("change", () => {
    state[id] = elements[id].checked;
    render();
  });
}

function bindRange(id, valueId) {
  elements[id].addEventListener("input", () => {
    state[id] = Number(elements[id].value);
    elements[valueId].textContent = state[id];
    render();
  });
}

function syncControlsFromState() {
  Object.entries(state).forEach(([key, value]) => {
    const element = elements[key];
    if (!element) return;
    if (element.type === "checkbox") {
      element.checked = Boolean(value);
      return;
    }
    element.value = value;
  });

  [
    "headlineSize",
    "subheadlineSize",
    "logoSize",
    "socialSize",
    "frameOffsetX",
    "frameOffsetY",
    "textOffsetX",
    "textOffsetY",
    "categoryOffsetX",
    "categoryOffsetY",
    "socialOffsetX",
    "socialOffsetY",
    "logoOffsetX",
    "logoOffsetY",
  ].forEach((id) => {
    const label = elements[`${id}Value`];
    if (label) label.textContent = state[id];
  });
}

function applyPreviewBackground() {
  elements.previewCanvas.className = `preview preview--${state.previewBackground}`;
}

function render() {
  const template = TEMPLATE_DEFS.find((item) => item.id === state.template) || TEMPLATE_DEFS[0];
  const palette = buildPalette();
  const layout = buildTemplateLayout(template.id, palette);
  const svg = buildSvg(layout, palette, template.id);

  elements.previewCanvas.innerHTML = svg;
  updateActiveTemplateCard();
  persistState();
}

function updateActiveTemplateCard() {
  elements.templateGrid.querySelectorAll("[data-template-id]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.templateId === state.template);
  });
}

function resetLayout() {
  const keep = {
    headline: state.headline,
    subheadline: state.subheadline,
    category: state.category,
    footerText: state.footerText,
  };

  Object.assign(state, DEFAULT_STATE, keep);
  syncControlsFromState();
  applyPreviewBackground();
  render();
}

function buildPalette() {
  const accent = state.accentColor;
  const secondary = state.secondaryColor;
  const panelSolid = state.panelColor;
  const text = state.textColor;
  const isLightTheme = state.theme === "light";
  const isHybrid = state.theme === "hybrid";

  return {
    accent,
    secondary,
    accentText: contrastText(accent),
    text: isLightTheme ? mixColors(text, "#161A20", 0.15) : text,
    muted: alpha(text, isLightTheme ? 0.68 : 0.82),
    panelSolid,
    panel: alpha(panelSolid, isLightTheme ? 0.86 : 0.9),
    panelAlt: alpha(
      isLightTheme ? mixColors(panelSolid, "#FFFFFF", 0.38) : mixColors(panelSolid, "#FFFFFF", isHybrid ? 0.16 : 0.08),
      isLightTheme ? 0.82 : 0.66
    ),
    paper: isLightTheme ? alpha("#FFFFFF", 0.97) : alpha("#FFF6ED", 0.94),
    paperText: "#101318",
    stroke: isLightTheme ? alpha("#11151B", 0.17) : alpha("#FFFFFF", 0.16),
    soft: isLightTheme ? alpha("#11151B", 0.06) : alpha("#FFFFFF", 0.08),
    deep: alpha("#080C11", isLightTheme ? 0.18 : 0.7),
    glass: alpha("#FFFFFF", isLightTheme ? 0.34 : 0.14),
    warmLine: alpha(secondary, 0.35),
  };
}

function buildTemplateLayout(templateId, palette) {
  switch (templateId) {
    case "angle-swipe":
      return buildAngleSwipe(palette);
    case "breaking-red":
      return buildBreakingRed(palette);
    case "debate-punch":
      return buildDebatePunch(palette);
    case "regional-focus":
      return buildRegionalFocus(palette);
    case "urgent-alert":
      return buildUrgentAlert(palette);
    case "ground-report":
      return buildGroundReport(palette);
    case "policy-explainer":
      return buildPolicyExplainer(palette);
    case "spotlight-gold":
      return buildSpotlightGold(palette);
    case "election-mode":
      return buildElectionMode(palette);
    case "bbc-command":
      return buildBBCCommand(palette);
    case "brut-raw":
      return buildBrutRaw(palette);
    case "wire-desk":
      return buildWireDesk(palette);
    case "bloom-board":
      return buildBloomBoard(palette);
    case "vox-pop":
      return buildVoxPop(palette);
    case "dw-focus":
      return buildDWFocus(palette);
    case "ft-weekend":
      return buildFTWeekend(palette);
    case "vice-tape":
      return buildViceTape(palette);
    case "subtitle-max":
      return buildSubtitleMax(palette);
    case "world-desk":
      return buildWorldDesk(palette);
    case "bulletin-core":
      return buildBulletinCore(palette);
    case "studio-edge":
      return buildStudioEdge(palette);
    case "crossline":
      return buildCrossline(palette);
    case "reporter-slate":
      return buildReporterSlate(palette);
    case "prime-panel":
      return buildPrimePanel(palette);
    case "flash-ticker":
      return buildFlashTicker(palette);
    case "document-band":
      return buildDocumentBand(palette);
    case "debate-grid":
      return buildDebateGrid(palette);
    case "focus-caption":
      return buildFocusCaption(palette);
    case "orbit-desk":
      return buildOrbitDesk(palette);
    case "shorts-capsule":
      return buildShortsCapsule(palette);
    case "red-banner-stack":
      return buildRedBannerStack(palette);
    case "paper-banner-stack":
      return buildPaperBannerStack(palette);
    case "skew-clash":
      return buildSkewClash(palette);
    case "editor-twin-strap":
      return buildEditorTwinStrap(palette);
    case "glass-ledger":
      return buildGlassLedger(palette);
    case "election-stripe":
      return buildElectionStripe(palette);
    case "capsule-pop":
      return buildCapsulePop(palette);
    case "debate-split":
      return buildDebateSplit(palette);
    case "premium-arc":
      return buildPremiumArc(palette);
    case "swoop-ribbon":
      return buildSwoopRibbon(palette);
    case "news-rails":
      return buildNewsRails(palette);
    case "corner-bug-pro":
      return buildCornerBugPro(palette);
    case "spotlight-slice":
      return buildSpotlightSlice(palette);
    case "corner-flash":
      return buildCornerFlash(palette);
    case "grid-signal":
      return buildGridSignal(palette);
    case "documentary-cut":
      return buildDocumentaryCut(palette);
    case "ticker-burst":
      return buildTickerBurst(palette);
    case "hero-lens":
      return buildHeroLens(palette);
    case "vertical-pillar":
      return buildVerticalPillar(palette);
    case "stamp-card":
      return buildStampCard(palette);
    case "metro-ribbon":
      return buildMetroRibbon(palette);
    case "halo-desk":
      return buildHaloDesk(palette);
    case "prism-tag":
      return buildPrismTag(palette);
    case "impact-slab":
    default:
      return buildImpactSlab(palette);
  }
}

function buildAngleSwipe(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M0 1920V1604L1080 1444V1920Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <polygon points="0 1710 688 1468 1080 1468 360 1738 0 1810" fill="url(#accentGradient)" opacity="0.96"/>
        <path d="M80 1494h246" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
        <path d="M878 1394l162-72v108l-112 54Z" fill="${alpha(palette.secondary, 0.18)}"/>
        <path d="M822 1618l218 6-126 116-248 10Z" fill="${alpha(palette.paper, 0.1)}"/>
      </g>
    `,
    textBox: { x: 112 + fx, y: 1618 + fy, width: 642, maxLines: 3, titleBoost: 0, minSize: 42 },
    category: { x: 112 + fx, y: 1496 + fy },
    social: { x: 632 + fx, y: 1738 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 112 + fx, y: 1834 + fy },
  };
}

function buildBreakingRed(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="74" y="1510" width="760" height="248" rx="30" fill="${palette.paper}" filter="url(#shadowLg)"/>
        <rect x="74" y="1510" width="760" height="14" fill="${palette.accent}"/>
        <rect x="74" y="1448" width="254" height="62" rx="18" fill="${palette.accent}" filter="url(#shadowSm)"/>
        <path d="M834 1510l170 90v160H834Z" fill="${palette.accent}"/>
        <path d="M874 1402l130-58v96l-94 44Z" fill="${alpha(palette.secondary, 0.18)}"/>
        <path d="M112 1664h680" stroke="${alpha(palette.paperText, 0.14)}" stroke-width="4" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 112 + fx, y: 1574 + fy, width: 620, maxLines: 3, titleBoost: 0, minSize: 40 },
    category: { x: 102 + fx, y: 1450 + fy },
    social: { x: 630 + fx, y: 1686 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 112 + fx, y: 1754 + fy },
    titleColor: palette.paperText,
    subColor: alpha(palette.paperText, 0.78),
  };
}

function buildDebatePunch(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="90" y="1476" width="186" height="50" rx="10" fill="${palette.paper}" filter="url(#shadowSm)"/>
        <polygon points="90 1544 784 1544 958 1638 958 1798 90 1798" fill="${palette.accent}" filter="url(#shadowLg)"/>
        <rect x="90" y="1638" width="868" height="160" fill="${alpha("#080C11", 0.28)}"/>
        <path d="M90 1638h868" stroke="${alpha(palette.paper, 0.18)}" stroke-width="4"/>
        <path d="M806 1484l152-68v106l-104 54Z" fill="${alpha(palette.paper, 0.12)}"/>
      </g>
    `,
    textBox: { x: 122 + fx, y: 1568 + fy, width: 628, maxLines: 3, titleBoost: 0, minSize: 42 },
    category: { x: 106 + fx, y: 1472 + fy },
    social: { x: 620 + fx, y: 1712 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 122 + fx, y: 1832 + fy },
  };
}

function buildRegionalFocus(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="74" y="1520" width="808" height="242" rx="30" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="74" y="1458" width="258" height="58" rx="22" fill="${palette.secondary}" filter="url(#shadowSm)"/>
        <path d="M74 1606h934" stroke="${alpha(palette.secondary, 0.78)}" stroke-width="6" stroke-linecap="round"/>
        <path d="M74 1762h428" stroke="${alpha(palette.paper, 0.16)}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="936" cy="1606" r="16" fill="${palette.secondary}"/>
        <path d="M1008 1496v132" stroke="${alpha(palette.secondary, 0.4)}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 112 + fx, y: 1558 + fy, width: 690, maxLines: 2, titleBoost: 0, minSize: 42 },
    category: { x: 102 + fx, y: 1458 + fy },
    social: { x: 610 + fx, y: 1810 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 112 + fx, y: 1880 + fy },
  };
}

function buildUrgentAlert(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <circle cx="132" cy="1468" r="54" fill="${palette.accent}" filter="url(#accentGlow)"/>
        <path d="M72 1530h932" stroke="${palette.accent}" stroke-width="10" stroke-linecap="round"/>
        <path d="M72 1570H832l172 92v146H72Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="72" y="1448" width="286" height="58" rx="29" fill="${palette.accent}" filter="url(#shadowSm)"/>
        <circle cx="112" cy="1477" r="8" fill="${palette.paper}"/>
        <path d="M910 1540v118" stroke="${alpha(palette.paper, 0.16)}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 110 + fx, y: 1608 + fy, width: 648, maxLines: 3, titleBoost: 0, minSize: 42 },
    category: { x: 140 + fx, y: 1448 + fy },
    social: { x: 626 + fx, y: 1730 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 110 + fx, y: 1820 + fy },
  };
}

function buildGroundReport(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="78" y="1512" width="812" height="248" rx="30" fill="${alpha(palette.panelSolid, 0.82)}" stroke="${alpha(palette.secondary, 0.22)}" stroke-width="2" filter="url(#shadowLg)"/>
        <rect x="78" y="1512" width="12" height="248" rx="6" fill="${palette.secondary}"/>
        <rect x="78" y="1450" width="254" height="58" rx="18" fill="${alpha("#050709", 0.78)}" stroke="${palette.secondary}" stroke-width="2"/>
        <path d="M110 1600h748" stroke="${alpha(palette.secondary, 0.14)}" stroke-width="4" stroke-linecap="round"/>
        <path d="M916 1436l114-44v88l-82 36Z" fill="${alpha(palette.secondary, 0.16)}"/>
      </g>
    `,
    textBox: { x: 116 + fx, y: 1562 + fy, width: 650, maxLines: 3, titleBoost: 0, minSize: 42 },
    category: { x: 104 + fx, y: 1450 + fy },
    social: { x: 626 + fx, y: 1690 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 116 + fx, y: 1810 + fy },
  };
}

function buildPolicyExplainer(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="82" y="1488" width="916" height="276" rx="34" fill="${alpha(palette.panelSolid, 0.72)}" stroke="${alpha("#FFFFFF", 0.12)}" stroke-width="2" filter="url(#shadowLg)"/>
        <rect x="82" y="1488" width="916" height="10" fill="${palette.secondary}"/>
        <rect x="114" y="1532" width="644" height="164" rx="26" fill="${alpha("#06090D", 0.24)}" stroke="${palette.stroke}"/>
        <rect x="114" y="1430" width="276" height="56" rx="18" fill="${palette.paper}" filter="url(#shadowSm)"/>
        <path d="M830 1534h138M830 1572h138M830 1610h88" stroke="${alpha(palette.secondary, 0.72)}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 146 + fx, y: 1570 + fy, width: 580, maxLines: 3, titleBoost: 0, minSize: 40 },
    category: { x: 128 + fx, y: 1430 + fy },
    social: { x: 702 + fx, y: 1692 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 146 + fx, y: 1778 + fy },
  };
}

function buildSpotlightGold(palette) {
  return buildPremiumArc(palette);
}

function buildElectionMode(palette) {
  return buildElectionStripe(palette);
}

function buildBBCCommand(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="72" y="1498" width="936" height="262" rx="18" fill="${alpha("#090A0D", 0.96)}" filter="url(#shadowLg)"/>
        <rect x="72" y="1498" width="936" height="18" fill="${palette.accent}"/>
        <rect x="72" y="1544" width="18" height="216" fill="${palette.accent}"/>
        <rect x="108" y="1540" width="560" height="166" fill="${palette.paper}" filter="url(#shadowSm)"/>
        <rect x="108" y="1448" width="238" height="54" rx="8" fill="${palette.accent}" filter="url(#shadowSm)"/>
        <path d="M758 1562h214M758 1602h214M758 1642h164" stroke="${alpha(palette.paper, 0.16)}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 136 + fx, y: 1572 + fy, width: 500, maxLines: 3, titleBoost: -2, minSize: 36 },
    category: { x: 122 + fx, y: 1446 + fy },
    social: { x: 708 + fx, y: 1688 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 136 + fx, y: 1742 + fy },
    titleColor: palette.paperText,
    subColor: alpha(palette.paperText, 0.8),
  };
}

function buildBrutRaw(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="72" y="1518" width="900" height="244" rx="12" fill="${alpha("#050709", 0.94)}" filter="url(#shadowLg)"/>
        <rect x="72" y="1458" width="248" height="58" rx="8" fill="${palette.secondary}" filter="url(#shadowSm)"/>
        <rect x="72" y="1518" width="16" height="244" fill="${palette.secondary}"/>
        <path d="M72 1610h900" stroke="${alpha(palette.secondary, 0.18)}" stroke-width="4" stroke-linecap="round"/>
        <path d="M920 1438l92 36v116l-92 28Z" fill="${alpha(palette.secondary, 0.16)}"/>
      </g>
    `,
    textBox: { x: 116 + fx, y: 1566 + fy, width: 670, maxLines: 3, titleBoost: 0, minSize: 42 },
    category: { x: 98 + fx, y: 1458 + fy },
    social: { x: 628 + fx, y: 1702 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 116 + fx, y: 1806 + fy },
  };
}

function buildWireDesk(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M72 1548H886l118 78v146H72Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="72" y="1490" width="230" height="56" rx="12" fill="${palette.secondary}" filter="url(#shadowSm)"/>
        <path d="M72 1548h932" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
        <path d="M72 1688h470" stroke="${alpha(palette.paper, 0.18)}" stroke-width="4" stroke-linecap="round"/>
        <rect x="812" y="1558" width="146" height="94" rx="20" fill="${alpha(palette.secondary, 0.14)}"/>
      </g>
    `,
    textBox: { x: 110 + fx, y: 1592 + fy, width: 610, maxLines: 3, titleBoost: 0, minSize: 40 },
    category: { x: 100 + fx, y: 1490 + fy },
    social: { x: 640 + fx, y: 1698 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 110 + fx, y: 1794 + fy },
  };
}

function buildBloomBoard(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="82" y="1480" width="916" height="278" rx="22" fill="${alpha("#0C1118", 0.94)}" filter="url(#shadowLg)"/>
        <rect x="82" y="1480" width="916" height="10" fill="${palette.secondary}"/>
        <rect x="112" y="1522" width="622" height="166" rx="18" fill="${alpha("#111827", 0.78)}" stroke="${alpha(palette.secondary, 0.16)}" stroke-width="2"/>
        <rect x="112" y="1430" width="220" height="50" rx="10" fill="${palette.secondary}" filter="url(#shadowSm)"/>
        <path d="M802 1532h156M802 1570h156M802 1608h100" stroke="${alpha(palette.secondary, 0.78)}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 142 + fx, y: 1562 + fy, width: 560, maxLines: 3, titleBoost: -2, minSize: 38 },
    category: { x: 124 + fx, y: 1428 + fy },
    social: { x: 698 + fx, y: 1688 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 142 + fx, y: 1778 + fy },
  };
}

function buildVoxPop(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="88" y="1506" width="884" height="260" rx="26" fill="${palette.paper}" filter="url(#shadowLg)"/>
        <rect x="88" y="1506" width="228" height="260" rx="26" fill="${palette.accent}"/>
        <rect x="316" y="1506" width="20" height="260" fill="${palette.secondary}"/>
        <path d="M716 1454l180-54 76 54-180 54Z" fill="${alpha(palette.secondary, 0.28)}"/>
        <rect x="112" y="1448" width="180" height="50" rx="10" fill="${alpha("#050709", 0.78)}"/>
      </g>
    `,
    textBox: { x: 360 + fx, y: 1560 + fy, width: 540, maxLines: 3, titleBoost: -2, minSize: 38 },
    category: { x: 128 + fx, y: 1448 + fy },
    social: { x: 706 + fx, y: 1692 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 360 + fx, y: 1774 + fy },
    titleColor: palette.paperText,
    subColor: alpha(palette.paperText, 0.78),
  };
}

function buildDWFocus(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <circle cx="920" cy="1494" r="72" fill="none" stroke="${alpha(palette.secondary, 0.52)}" stroke-width="8"/>
        <circle cx="920" cy="1494" r="36" fill="${alpha(palette.accent, 0.12)}" stroke="${alpha(palette.accent, 0.46)}" stroke-width="4"/>
        <rect x="78" y="1548" width="690" height="218" rx="30" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="78" y="1488" width="220" height="54" rx="16" fill="${palette.paper}" filter="url(#shadowSm)"/>
        <path d="M78 1628h690" stroke="${alpha(palette.secondary, 0.18)}" stroke-width="4" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 112 + fx, y: 1588 + fy, width: 560, maxLines: 3, titleBoost: 0, minSize: 40 },
    category: { x: 98 + fx, y: 1486 + fy },
    social: { x: 616 + fx, y: 1710 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 112 + fx, y: 1792 + fy },
  };
}

function buildFTWeekend(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  const paper = alpha("#F6E9D8", 0.98);
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="80" y="1498" width="920" height="270" rx="28" fill="${paper}" filter="url(#shadowLg)"/>
        <rect x="80" y="1498" width="920" height="12" fill="${palette.secondary}"/>
        <rect x="110" y="1444" width="238" height="54" rx="14" fill="${palette.paperText}" filter="url(#shadowSm)"/>
        <path d="M810 1530h120M810 1568h120M810 1606h84" stroke="${alpha(palette.paperText, 0.18)}" stroke-width="8" stroke-linecap="round"/>
        <rect x="796" y="1640" width="160" height="88" rx="20" fill="${alpha(palette.paperText, 0.06)}"/>
      </g>
    `,
    textBox: { x: 126 + fx, y: 1560 + fy, width: 620, maxLines: 3, titleBoost: -2, minSize: 38 },
    category: { x: 130 + fx, y: 1444 + fy },
    social: { x: 708 + fx, y: 1690 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 126 + fx, y: 1778 + fy },
    titleColor: palette.paperText,
    subColor: alpha(palette.paperText, 0.78),
  };
}

function buildViceTape(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M72 1590H864l140 74v126H72Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="104" y="1480" width="250" height="54" rx="8" fill="${palette.paper}" transform="rotate(-3 229 1507)" filter="url(#shadowSm)"/>
        <rect x="154" y="1538" width="480" height="74" rx="10" fill="${palette.accent}" transform="rotate(-2 394 1575)" filter="url(#shadowSm)"/>
        <path d="M802 1452l178-82v108l-122 58Z" fill="${alpha(palette.secondary, 0.16)}"/>
      </g>
    `,
    textBox: { x: 184 + fx, y: 1552 + fy, width: 400, maxLines: 3, titleBoost: -4, minSize: 34 },
    category: { x: 124 + fx, y: 1478 + fy },
    social: { x: 636 + fx, y: 1712 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 112 + fx, y: 1810 + fy },
  };
}

function buildSubtitleMax(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M0 1920V1688C286 1608 560 1582 1080 1560V1920Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <path d="M80 1608h480" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
        <rect x="80" y="1648" width="920" height="180" rx="24" fill="${alpha("#050709", 0.58)}" stroke="${alpha("#FFFFFF", 0.12)}" stroke-width="2"/>
        <rect x="80" y="1590" width="220" height="54" rx="16" fill="${palette.accent}" filter="url(#shadowSm)"/>
      </g>
    `,
    textBox: { x: 118 + fx, y: 1686 + fy, width: 760, maxLines: 2, titleBoost: -2, minSize: 40 },
    category: { x: 100 + fx, y: 1590 + fy },
    social: { x: 656 + fx, y: 1800 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 118 + fx, y: 1880 + fy },
  };
}

function buildWorldDesk(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="74" y="1498" width="830" height="250" rx="26" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="916" y="1366" width="90" height="382" rx="18" fill="${alpha(palette.accent, 0.92)}"/>
        <path d="M74 1498h830" stroke="${palette.secondary}" stroke-width="10" stroke-linecap="round"/>
        <path d="M74 1450h540" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
        <rect x="74" y="1444" width="248" height="54" rx="16" fill="${palette.accent}" filter="url(#shadowSm)"/>
        <circle cx="960" cy="1460" r="24" fill="${palette.secondary}"/>
      </g>
    `,
    textBox: { x: 112 + fx, y: 1562 + fy, width: 640, maxLines: 3, titleBoost: 0, minSize: 40 },
    category: { x: 112 + fx, y: 1444 + fy },
    social: { x: 620 + fx, y: 1700 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 112 + fx, y: 1794 + fy },
  };
}

function buildBulletinCore(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="70" y="1490" width="940" height="286" rx="20" fill="${alpha("#090A0D", 0.96)}" filter="url(#shadowLg)"/>
        <rect x="70" y="1490" width="940" height="20" fill="${palette.accent}"/>
        <rect x="70" y="1546" width="18" height="230" fill="${palette.accent}"/>
        <rect x="112" y="1540" width="620" height="174" rx="8" fill="${palette.paper}" filter="url(#shadowSm)"/>
        <rect x="112" y="1436" width="246" height="56" rx="8" fill="${palette.accent}" filter="url(#shadowSm)"/>
        <path d="M804 1562h144M804 1600h144M804 1638h98" stroke="${alpha(palette.paper, 0.18)}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 146 + fx, y: 1572 + fy, width: 548, maxLines: 3, titleBoost: -2, minSize: 36 },
    category: { x: 128 + fx, y: 1434 + fy },
    social: { x: 720 + fx, y: 1700 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 146 + fx, y: 1764 + fy },
    titleColor: palette.paperText,
    subColor: alpha(palette.paperText, 0.8),
  };
}

function buildStudioEdge(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M42 1920V1578C256 1494 528 1460 884 1460H1080V1920Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <path d="M82 1494h566" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
        <rect x="82" y="1516" width="248" height="56" rx="18" fill="${palette.accent}" filter="url(#shadowSm)"/>
        <path d="M82 1602h926" stroke="${alpha(palette.accent, 0.76)}" stroke-width="8" stroke-linecap="round"/>
        <path d="M788 1460h230l-68 72H748Z" fill="${alpha(palette.secondary, 0.14)}"/>
        <rect x="826" y="1580" width="156" height="94" rx="22" fill="${alpha(palette.paper, 0.1)}"/>
      </g>
    `,
    textBox: { x: 116 + fx, y: 1632 + fy, width: 636, maxLines: 3, titleBoost: 0, minSize: 42 },
    category: { x: 116 + fx, y: 1512 + fy },
    social: { x: 642 + fx, y: 1716 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 116 + fx, y: 1816 + fy },
  };
}

function buildCrossline(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <polygon points="70 1498 842 1498 994 1580 224 1580" fill="${palette.paper}" filter="url(#shadowLg)"/>
        <polygon points="70 1572 924 1572 1010 1656 156 1656" fill="${palette.accent}" opacity="0.96"/>
        <path d="M70 1664H880l130 108v80H70Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="100" y="1438" width="230" height="52" rx="10" fill="${palette.paper}" filter="url(#shadowSm)"/>
      </g>
    `,
    textBox: { x: 112 + fx, y: 1706 + fy, width: 612, maxLines: 3, titleBoost: -2, minSize: 38 },
    category: { x: 122 + fx, y: 1438 + fy },
    social: { x: 622 + fx, y: 1780 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 112 + fx, y: 1868 + fy },
  };
}

function buildReporterSlate(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="76" y="1518" width="828" height="250" rx="30" fill="${alpha(palette.panelSolid, 0.84)}" stroke="${alpha(palette.secondary, 0.18)}" stroke-width="2" filter="url(#shadowLg)"/>
        <rect x="76" y="1518" width="12" height="250" rx="6" fill="${palette.secondary}"/>
        <rect x="76" y="1450" width="258" height="56" rx="18" fill="${alpha("#050709", 0.8)}" stroke="${palette.secondary}" stroke-width="2"/>
        <path d="M110 1612h760" stroke="${alpha(palette.secondary, 0.14)}" stroke-width="4" stroke-linecap="round"/>
        <path d="M932 1450v154" stroke="${alpha(palette.secondary, 0.4)}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 114 + fx, y: 1568 + fy, width: 648, maxLines: 3, titleBoost: 0, minSize: 40 },
    category: { x: 102 + fx, y: 1450 + fy },
    social: { x: 626 + fx, y: 1710 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 114 + fx, y: 1822 + fy },
  };
}

function buildPrimePanel(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="82" y="1484" width="916" height="284" rx="24" fill="${alpha("#0D131B", 0.95)}" filter="url(#shadowLg)"/>
        <rect x="82" y="1484" width="916" height="10" fill="${palette.secondary}"/>
        <rect x="112" y="1528" width="614" height="170" rx="18" fill="${alpha("#121B26", 0.9)}" stroke="${alpha(palette.secondary, 0.14)}" stroke-width="2"/>
        <rect x="112" y="1434" width="226" height="50" rx="12" fill="${palette.secondary}" filter="url(#shadowSm)"/>
        <rect x="788" y="1528" width="164" height="164" rx="22" fill="${alpha(palette.secondary, 0.12)}"/>
        <path d="M812 1580h116M812 1620h116M812 1660h78" stroke="${alpha(palette.secondary, 0.82)}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 144 + fx, y: 1568 + fy, width: 540, maxLines: 3, titleBoost: -2, minSize: 38 },
    category: { x: 128 + fx, y: 1432 + fy },
    social: { x: 698 + fx, y: 1706 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 144 + fx, y: 1794 + fy },
  };
}

function buildFlashTicker(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M0 1920V1670C298 1596 610 1580 1080 1572V1920Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="74" y="1610" width="928" height="170" rx="20" fill="${alpha("#090A0D", 0.52)}" stroke="${alpha("#FFFFFF", 0.12)}" stroke-width="2"/>
        <rect x="74" y="1556" width="244" height="50" rx="25" fill="${palette.accent}" filter="url(#shadowSm)"/>
        <path d="M74 1604h928" stroke="${palette.accent}" stroke-width="8" stroke-linecap="round"/>
        <circle cx="110" cy="1582" r="8" fill="${palette.paper}"/>
      </g>
    `,
    textBox: { x: 112 + fx, y: 1646 + fy, width: 744, maxLines: 2, titleBoost: -2, minSize: 38 },
    category: { x: 140 + fx, y: 1554 + fy },
    social: { x: 668 + fx, y: 1732 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 112 + fx, y: 1822 + fy },
  };
}

function buildDocumentBand(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  const paper = alpha("#F6E9D8", 0.98);
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="78" y="1494" width="924" height="272" rx="28" fill="${paper}" filter="url(#shadowLg)"/>
        <rect x="78" y="1494" width="924" height="12" fill="${palette.secondary}"/>
        <path d="M78 1598h924" stroke="${alpha(palette.paperText, 0.08)}" stroke-width="4" stroke-linecap="round"/>
        <rect x="112" y="1438" width="238" height="54" rx="14" fill="${palette.paperText}" filter="url(#shadowSm)"/>
        <path d="M828 1540l132-34 42 68-132 34Z" fill="${alpha(palette.paperText, 0.08)}"/>
      </g>
    `,
    textBox: { x: 126 + fx, y: 1562 + fy, width: 640, maxLines: 3, titleBoost: -2, minSize: 38 },
    category: { x: 132 + fx, y: 1438 + fy },
    social: { x: 700 + fx, y: 1700 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 126 + fx, y: 1790 + fy },
    titleColor: palette.paperText,
    subColor: alpha(palette.paperText, 0.78),
  };
}

function buildDebateGrid(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="82" y="1490" width="918" height="286" rx="24" fill="${alpha("#0D1016", 0.96)}" filter="url(#shadowLg)"/>
        <rect x="82" y="1490" width="918" height="14" fill="${palette.accent}"/>
        <rect x="112" y="1532" width="350" height="178" rx="18" fill="${palette.paper}" filter="url(#shadowSm)"/>
        <rect x="486" y="1532" width="350" height="178" rx="18" fill="${alpha(palette.accent, 0.92)}"/>
        <rect x="860" y="1532" width="108" height="178" rx="18" fill="${alpha(palette.paper, 0.12)}"/>
        <rect x="112" y="1438" width="216" height="50" rx="10" fill="${palette.paper}" filter="url(#shadowSm)"/>
      </g>
    `,
    textBox: { x: 136 + fx, y: 1570 + fy, width: 302, maxLines: 3, titleBoost: -4, minSize: 32 },
    category: { x: 126 + fx, y: 1438 + fy },
    social: { x: 620 + fx, y: 1718 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 504 + fx, y: 1778 + fy },
    titleColor: palette.paperText,
    subColor: alpha(palette.paperText, 0.78),
  };
}

function buildFocusCaption(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M0 1920V1712C298 1648 610 1626 1080 1626V1920Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="82" y="1658" width="916" height="154" rx="24" fill="${alpha("#050709", 0.58)}" stroke="${alpha("#FFFFFF", 0.12)}" stroke-width="2"/>
        <rect x="82" y="1604" width="226" height="48" rx="16" fill="${palette.accent}" filter="url(#shadowSm)"/>
        <path d="M82 1648h520" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 118 + fx, y: 1692 + fy, width: 760, maxLines: 2, titleBoost: -2, minSize: 40 },
    category: { x: 100 + fx, y: 1602 + fy },
    social: { x: 674 + fx, y: 1782 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 118 + fx, y: 1872 + fy },
  };
}

function buildOrbitDesk(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <circle cx="922" cy="1506" r="92" fill="${alpha(palette.secondary, 0.08)}" stroke="${alpha(palette.secondary, 0.34)}" stroke-width="8"/>
        <circle cx="922" cy="1506" r="42" fill="${alpha(palette.accent, 0.14)}" stroke="${alpha(palette.accent, 0.46)}" stroke-width="4"/>
        <path d="M72 1550H822l182 104v126H72Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="72" y="1494" width="250" height="54" rx="18" fill="${palette.accent}" filter="url(#shadowSm)"/>
        <path d="M72 1550h932" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
        <path d="M72 1706h430" stroke="${alpha(palette.paper, 0.18)}" stroke-width="4" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 110 + fx, y: 1592 + fy, width: 620, maxLines: 3, titleBoost: 0, minSize: 40 },
    category: { x: 110 + fx, y: 1492 + fy },
    social: { x: 628 + fx, y: 1714 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 110 + fx, y: 1804 + fy },
  };
}

function buildImpactSlab(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <polygon points="52 1518 872 1438 1038 1540 1038 1828 52 1898" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <polygon points="52 1570 910 1486 1024 1558 176 1640" fill="url(#accentGradient)" opacity="0.96"/>
        <path d="M84 1476h546" stroke="${palette.secondary}" stroke-width="8" fill="none" stroke-linecap="round"/>
        <rect x="84" y="1510" width="14" height="334" rx="7" fill="${palette.secondary}"/>
        <path d="M850 1410l190-80v110l-138 60Z" fill="${alpha(palette.secondary, 0.18)}"/>
        <path d="M886 1648l140-2v112l-176 12Z" fill="${alpha(palette.paper, 0.12)}"/>
      </g>
    `,
    textBox: { x: 126 + fx, y: 1666 + fy, width: 650, maxLines: 3, titleBoost: 2, minSize: 44 },
    category: { x: 126 + fx, y: 1496 + fy },
    social: { x: 640 + fx, y: 1752 + fy },
    logo: { x: 780 + fx, y: 92 + fy },
    footer: { x: 126 + fx, y: 1834 + fy },
  };
}

function buildGlassLedger(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="72" y="1186" width="936" height="542" rx="44" fill="${palette.paper}" filter="url(#shadowLg)"/>
        <rect x="72" y="1186" width="936" height="542" rx="44" fill="${alpha(palette.secondary, 0.08)}"/>
        <rect x="72" y="1186" width="936" height="16" rx="8" fill="url(#accentGradient)"/>
        <circle cx="872" cy="1362" r="128" fill="${alpha(palette.secondary, 0.12)}"/>
        <rect x="804" y="1466" width="152" height="132" rx="36" fill="${alpha(palette.deep, 0.06)}"/>
      </g>
    `,
    textBox: { x: 118 + fx, y: 1280 + fy, width: 720, maxLines: 4, titleBoost: 2, minSize: 50 },
    category: { x: 118 + fx, y: 1180 + fy },
    social: { x: 666 + fx, y: 1604 + fy },
    logo: { x: 804 + fx, y: 94 + fy },
    footer: { x: 118 + fx, y: 1676 + fy },
    titleColor: palette.paperText,
    subColor: alpha(palette.paperText, 0.78),
  };
}

function buildElectionStripe(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="74" y="1086" width="28" height="702" rx="14" fill="${palette.accent}"/>
        <rect x="116" y="1190" width="894" height="458" rx="36" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <polygon points="116 1190 254 1118 412 1118 272 1190" fill="${palette.secondary}"/>
        <rect x="116" y="1540" width="894" height="112" fill="${palette.paper}" rx="0"/>
        <rect x="116" y="1630" width="894" height="14" fill="${palette.secondary}"/>
      </g>
    `,
    textBox: { x: 154 + fx, y: 1276 + fy, width: 734, maxLines: 4, titleBoost: 4, minSize: 50 },
    category: { x: 154 + fx, y: 1160 + fy },
    social: { x: 154 + fx, y: 1578 + fy },
    logo: { x: 804 + fx, y: 90 + fy },
    footer: { x: 154 + fx, y: 1698 + fy },
  };
}

function buildCapsulePop(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="84" y="1210" width="912" height="462" rx="82" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="120" y="1156" width="364" height="90" rx="45" fill="url(#accentGradient)"/>
        <rect x="152" y="1508" width="760" height="96" rx="48" fill="${alpha(palette.paper, 0.14)}" stroke="${palette.stroke}"/>
        <circle cx="900" cy="1340" r="94" fill="${alpha(palette.secondary, 0.18)}" filter="url(#accentGlow)"/>
      </g>
    `,
    textBox: { x: 140 + fx, y: 1298 + fy, width: 708, maxLines: 4, titleBoost: 3, minSize: 50 },
    category: { x: 140 + fx, y: 1108 + fy },
    social: { x: 178 + fx, y: 1534 + fy },
    logo: { x: 782 + fx, y: 88 + fy },
    footer: { x: 178 + fx, y: 1638 + fy },
  };
}

function buildDebateSplit(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <polygon points="82 1228 1004 1142 970 1470 82 1552" fill="${palette.paper}" filter="url(#shadowLg)"/>
        <polygon points="82 1478 1004 1392 990 1696 82 1780" fill="${palette.accent}" opacity="0.98"/>
        <rect x="82" y="1182" width="320" height="24" rx="12" fill="${palette.secondary}"/>
        <path d="M780 1188 958 1144 1004 1216 822 1260Z" fill="${alpha(palette.accent, 0.18)}"/>
      </g>
    `,
    textBox: { x: 126 + fx, y: 1284 + fy, width: 726, maxLines: 4, titleBoost: 2, minSize: 48 },
    category: { x: 126 + fx, y: 1168 + fy },
    social: { x: 126 + fx, y: 1578 + fy },
    logo: { x: 782 + fx, y: 88 + fy },
    footer: { x: 126 + fx, y: 1718 + fy },
    titleColor: palette.paperText,
    subColor: alpha(palette.paperText, 0.78),
  };
}

function buildPremiumArc(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M36 1920V1450Q164 1218 470 1178L1044 1110V1920Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <path d="M70 1540Q286 1288 1010 1222" stroke="${palette.secondary}" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M92 1508Q312 1262 1038 1182" stroke="${alpha(palette.secondary, 0.32)}" stroke-width="20" fill="none" stroke-linecap="round"/>
        <circle cx="930" cy="372" r="62" fill="${alpha(palette.secondary, 0.16)}" filter="url(#accentGlow)"/>
      </g>
    `,
    textBox: { x: 116 + fx, y: 1290 + fy, width: 738, maxLines: 4, titleBoost: 4, minSize: 50 },
    category: { x: 116 + fx, y: 1180 + fy },
    social: { x: 714 + fx, y: 1604 + fy },
    logo: { x: 786 + fx, y: 92 + fy },
    footer: { x: 116 + fx, y: 1688 + fy },
  };
}

function buildSwoopRibbon(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M0 1704C232 1546 486 1506 1080 1478V1920H0Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <path d="M0 1634C286 1488 596 1456 1080 1428V1500C602 1520 318 1558 0 1718Z" fill="url(#accentGradient)" opacity="0.94"/>
        <path d="M72 1498C244 1456 476 1428 784 1406" stroke="${palette.secondary}" stroke-width="10" fill="none" stroke-linecap="round"/>
        <circle cx="916" cy="1490" r="74" fill="${alpha(palette.secondary, 0.16)}" filter="url(#accentGlow)"/>
      </g>
    `,
    textBox: { x: 116 + fx, y: 1578 + fy, width: 640, maxLines: 4, titleBoost: 2, minSize: 46 },
    category: { x: 116 + fx, y: 1462 + fy },
    social: { x: 116 + fx, y: 1810 + fy },
    logo: { x: 782 + fx, y: 92 + fy },
    footer: { x: 714 + fx, y: 1812 + fy },
  };
}

function buildNewsRails(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M76 1524H892l112 74v152H76Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="76" y="1524" width="928" height="10" fill="url(#accentGradient)"/>
        <path d="M76 1464h564" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
        <path d="M768 1464h236" stroke="${alpha(palette.secondary, 0.34)}" stroke-width="8" stroke-linecap="round"/>
        <path d="M918 1524l86 56v106l-86 44Z" fill="${alpha(palette.secondary, 0.16)}"/>
        <path d="M76 1592h928" stroke="${alpha(palette.accent, 0.72)}" stroke-width="8" stroke-linecap="round"/>
        <rect x="76" y="1476" width="284" height="58" rx="18" fill="${palette.accent}"/>
        <path d="M940 1506V1356" stroke="${alpha(palette.accent, 0.74)}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 114 + fx, y: 1614 + fy, width: 676, maxLines: 3, titleBoost: 0, minSize: 44 },
    category: { x: 114 + fx, y: 1472 + fy },
    social: { x: 656 + fx, y: 1692 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 114 + fx, y: 1760 + fy },
  };
}

function buildCornerBugPro(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="64" y="1400" width="632" height="340" rx="30" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="64" y="1400" width="632" height="14" fill="url(#accentGradient)"/>
        <path d="M64 1492h730" stroke="${palette.accent}" stroke-width="10" stroke-linecap="round"/>
        <path d="M918 248h122M1040 248v146" stroke="${alpha(palette.secondary, 0.9)}" stroke-width="8" stroke-linecap="round"/>
        <path d="M64 1738h210" stroke="${alpha(palette.secondary, 0.84)}" stroke-width="8" stroke-linecap="round"/>
        <circle cx="762" cy="1492" r="16" fill="${palette.secondary}"/>
      </g>
    `,
    textBox: { x: 100 + fx, y: 1514 + fy, width: 520, maxLines: 4, titleBoost: -2, minSize: 40 },
    category: { x: 100 + fx, y: 1322 + fy },
    social: { x: 100 + fx, y: 1768 + fy },
    logo: { x: 792 + fx, y: 94 + fy },
    footer: { x: 100 + fx, y: 1842 + fy },
  };
}

function buildSpotlightSlice(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <polygon points="74 1482 794 1406 934 1490 216 1566" fill="${palette.paper}" filter="url(#shadowLg)"/>
        <polygon points="74 1548 822 1474 952 1544 194 1620" fill="${palette.accent}" opacity="0.96"/>
        <path d="M74 1618H844l120 96v92H74Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <circle cx="922" cy="1454" r="64" fill="${alpha(palette.secondary, 0.14)}" stroke="${alpha(palette.secondary, 0.4)}" stroke-width="8"/>
        <path d="M922 1398v112M866 1454h112" stroke="${alpha(palette.secondary, 0.42)}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 112 + fx, y: 1660 + fy, width: 646, maxLines: 3, titleBoost: 0, minSize: 42 },
    category: { x: 114 + fx, y: 1464 + fy },
    social: { x: 626 + fx, y: 1732 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 112 + fx, y: 1808 + fy },
    titleColor: palette.text,
    subColor: palette.muted,
  };
}

function buildCornerFlash(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <polygon points="0 1484 694 1484 602 1920 0 1920" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="0" y="1484" width="694" height="18" fill="url(#accentGradient)"/>
        <polygon points="756 1390 1080 1228 1080 1310 820 1454" fill="${alpha(palette.accent, 0.92)}"/>
        <rect x="92" y="1160" width="170" height="28" rx="14" fill="${palette.secondary}"/>
        <rect x="998" y="310" width="14" height="420" rx="7" fill="${alpha(palette.secondary, 0.9)}"/>
      </g>
    `,
    textBox: { x: 96 + fx, y: 1552 + fy, width: 472, maxLines: 4, titleBoost: -4, minSize: 42 },
    category: { x: 96 + fx, y: 1456 + fy },
    social: { x: 96 + fx, y: 1822 + fy },
    logo: { x: 780 + fx, y: 92 + fy },
    footer: { x: 96 + fx, y: 1882 + fy },
  };
}

function buildGridSignal(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="88" y="1208" width="904" height="504" rx="30" fill="${alpha(palette.panelSolid, 0.76)}" stroke="${alpha(palette.secondary, 0.28)}" stroke-width="2" filter="url(#shadowLg)"/>
        <rect x="88" y="1208" width="904" height="14" fill="url(#accentGradient)"/>
        <rect x="142" y="1260" width="792" height="288" rx="22" fill="${alpha("#000000", 0.18)}" stroke="${palette.stroke}"/>
        <path d="M88 1320h120M872 1320h120M88 1604h120M872 1604h120" stroke="${alpha(palette.secondary, 0.96)}" stroke-width="8"/>
        <path d="M150 1288v72M930 1288v72M150 1530v72M930 1530v72" stroke="${alpha(palette.secondary, 0.96)}" stroke-width="8"/>
        <rect x="780" y="1544" width="154" height="84" rx="22" fill="${alpha(palette.secondary, 0.16)}"/>
      </g>
    `,
    textBox: { x: 176 + fx, y: 1320 + fy, width: 700, maxLines: 4, titleBoost: 0, minSize: 46 },
    category: { x: 144 + fx, y: 1170 + fy },
    social: { x: 170 + fx, y: 1566 + fy },
    logo: { x: 782 + fx, y: 92 + fy },
    footer: { x: 170 + fx, y: 1666 + fy },
  };
}

function buildDocumentaryCut(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <polygon points="74 1222 1008 1146 968 1588 36 1660" fill="${palette.paper}" filter="url(#shadowLg)"/>
        <polygon points="116 1314 962 1240 928 1554 80 1624" fill="${alpha(palette.panelSolid, 0.9)}"/>
        <rect x="102" y="1180" width="258" height="88" rx="22" fill="${alpha(palette.secondary, 0.24)}"/>
        <rect x="364" y="1168" width="184" height="20" rx="10" fill="${palette.accent}"/>
        <path d="M980 1182l64-30-16 102-64 22Z" fill="${alpha(palette.accent, 0.82)}"/>
      </g>
    `,
    textBox: { x: 142 + fx, y: 1322 + fy, width: 672, maxLines: 4, titleBoost: 0, minSize: 46 },
    category: { x: 116 + fx, y: 1164 + fy },
    social: { x: 706 + fx, y: 1546 + fy },
    logo: { x: 790 + fx, y: 88 + fy },
    footer: { x: 142 + fx, y: 1616 + fy },
  };
}

function buildTickerBurst(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="72" y="1260" width="936" height="404" rx="38" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="72" y="1600" width="936" height="124" fill="${palette.accent}"/>
        <circle cx="140" cy="1198" r="52" fill="${palette.accent}" filter="url(#accentGlow)"/>
        <path d="M140 1134l18 38 42 6-30 28 8 44-38-20-38 20 8-44-30-28 42-6Z" fill="${palette.secondary}"/>
        <rect x="72" y="1244" width="320" height="22" rx="11" fill="${palette.secondary}"/>
      </g>
    `,
    textBox: { x: 106 + fx, y: 1324 + fy, width: 774, maxLines: 4, titleBoost: 4, minSize: 50 },
    category: { x: 212 + fx, y: 1126 + fy },
    social: { x: 106 + fx, y: 1638 + fy },
    logo: { x: 786 + fx, y: 88 + fy },
    footer: { x: 710 + fx, y: 1640 + fy },
  };
}

function buildHeroLens(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <circle cx="910" cy="1440" r="118" fill="${alpha(palette.secondary, 0.08)}" stroke="${alpha(palette.secondary, 0.34)}" stroke-width="10"/>
        <circle cx="910" cy="1440" r="68" fill="${alpha(palette.accent, 0.12)}" stroke="${alpha(palette.accent, 0.44)}" stroke-width="6"/>
        <path d="M44 1920V1540C284 1454 512 1426 854 1426H1080V1920Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <path d="M92 1498h542" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
        <rect x="92" y="1462" width="244" height="58" rx="18" fill="${palette.accent}"/>
        <path d="M796 1426h284v86H880c-36 0-74 16-110 46Z" fill="${alpha(palette.secondary, 0.12)}"/>
      </g>
    `,
    textBox: { x: 114 + fx, y: 1588 + fy, width: 626, maxLines: 4, titleBoost: 0, minSize: 42 },
    category: { x: 114 + fx, y: 1450 + fy },
    social: { x: 114 + fx, y: 1814 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 114 + fx, y: 1880 + fy },
  };
}

function buildMetroRibbon(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M0 1920V1594C242 1504 506 1472 1080 1450V1920Z" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <path d="M74 1494h558" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
        <rect x="74" y="1516" width="248" height="58" rx="18" fill="${palette.accent}" filter="url(#shadowSm)"/>
        <path d="M74 1592h930" stroke="${alpha(palette.accent, 0.78)}" stroke-width="8" stroke-linecap="round"/>
        <polygon points="736 1572 1008 1572 934 1680 662 1680" fill="${alpha(palette.paper, 0.1)}"/>
        <path d="M810 1456h228l-78 74H782Z" fill="${alpha(palette.secondary, 0.16)}"/>
        <circle cx="910" cy="1514" r="46" fill="${alpha(palette.secondary, 0.14)}" filter="url(#accentGlow)"/>
      </g>
    `,
    textBox: { x: 112 + fx, y: 1620 + fy, width: 650, maxLines: 3, titleBoost: 0, minSize: 44 },
    category: { x: 112 + fx, y: 1512 + fy },
    social: { x: 668 + fx, y: 1712 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 112 + fx, y: 1800 + fy },
  };
}

function buildHaloDesk(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="72" y="1502" width="650" height="250" rx="30" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="72" y="1502" width="650" height="10" fill="url(#accentGradient)"/>
        <path d="M72 1594h934" stroke="${alpha(palette.accent, 0.74)}" stroke-width="8" stroke-linecap="round"/>
        <path d="M72 1748h214" stroke="${alpha(palette.secondary, 0.84)}" stroke-width="8" stroke-linecap="round"/>
        <circle cx="856" cy="1594" r="72" fill="${alpha(palette.secondary, 0.08)}" stroke="${alpha(palette.secondary, 0.34)}" stroke-width="8"/>
        <circle cx="856" cy="1594" r="34" fill="${alpha(palette.accent, 0.14)}" stroke="${alpha(palette.accent, 0.44)}" stroke-width="4"/>
        <path d="M1008 1518v146" stroke="${alpha(palette.secondary, 0.42)}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 108 + fx, y: 1574 + fy, width: 520, maxLines: 4, titleBoost: -2, minSize: 40 },
    category: { x: 108 + fx, y: 1414 + fy },
    social: { x: 108 + fx, y: 1772 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 108 + fx, y: 1848 + fy },
  };
}

function buildPrismTag(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <polygon points="80 1492 802 1414 936 1498 214 1576" fill="${palette.paper}" filter="url(#shadowLg)"/>
        <polygon points="80 1560 982 1490 916 1710 80 1780" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="80" y="1486" width="228" height="56" rx="18" fill="${palette.accent}"/>
        <path d="M884 1384l164-88v112l-102 58Z" fill="${alpha(palette.accent, 0.9)}"/>
        <path d="M104 1786h484" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 118 + fx, y: 1596 + fy, width: 646, maxLines: 3, titleBoost: 0, minSize: 42 },
    category: { x: 118 + fx, y: 1482 + fy },
    social: { x: 630 + fx, y: 1704 + fy },
    logo: { x: 784 + fx, y: 90 + fy },
    footer: { x: 118 + fx, y: 1848 + fy },
  };
}

function buildVerticalPillar(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="920" y="0" width="160" height="1920" fill="${alpha(palette.accent, 0.08)}"/>
        <rect x="868" y="146" width="150" height="1500" rx="75" fill="url(#accentGradient)" opacity="0.96"/>
        <rect x="78" y="1218" width="760" height="438" rx="34" fill="url(#panelGradient)" filter="url(#shadowLg)"/>
        <rect x="78" y="1218" width="760" height="14" fill="${palette.secondary}"/>
        <rect x="778" y="1512" width="170" height="118" rx="28" fill="${alpha(palette.paper, 0.16)}"/>
      </g>
    `,
    textBox: { x: 118 + fx, y: 1294 + fy, width: 616, maxLines: 4, titleBoost: 2, minSize: 48 },
    category: { x: 118 + fx, y: 1180 + fy },
    social: { x: 118 + fx, y: 1572 + fy },
    logo: { x: 852 + fx, y: 112 + fy },
    footer: { x: 118 + fx, y: 1668 + fy },
  };
}

function buildStampCard(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="82" y="1226" width="918" height="468" rx="44" fill="${alpha(palette.panelSolid, 0.92)}" filter="url(#shadowLg)"/>
        <path d="M82 1226h918v178H826l-84 92H82Z" fill="url(#panelGradient)"/>
        <rect x="106" y="1128" width="214" height="98" rx="24" fill="${palette.accent}" transform="rotate(-6 214 1177)"/>
        <circle cx="890" cy="1300" r="90" fill="${alpha(palette.secondary, 0.12)}"/>
        <path d="M850 1260l86 86M936 1260l-86 86" stroke="${alpha(palette.secondary, 0.26)}" stroke-width="10"/>
      </g>
    `,
    textBox: { x: 128 + fx, y: 1310 + fy, width: 694, maxLines: 4, titleBoost: 2, minSize: 48 },
    category: { x: 130 + fx, y: 1136 + fy },
    social: { x: 738 + fx, y: 1574 + fy },
    logo: { x: 790 + fx, y: 88 + fy },
    footer: { x: 128 + fx, y: 1668 + fy },
  };
}

function buildShortsCapsule(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <path d="M76 284h708" stroke="${alpha(palette.secondary, 0.12)}" stroke-width="4" stroke-linecap="round"/>
        <path d="M76 786h86" stroke="${palette.secondary}" stroke-width="8" stroke-linecap="square"/>
        <path d="M76 870h324" stroke="${alpha("#FFFFFF", 0.12)}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="924" cy="194" r="46" fill="${alpha(palette.secondary, 0.08)}"/>
        <circle cx="924" cy="194" r="18" fill="${alpha(palette.secondary, 0.24)}"/>
      </g>
    `,
    textBox: { x: 76 + fx, y: 314 + fy, width: 850, maxLines: 3, titleBoost: 6, minSize: 60 },
    category: { x: 76 + fx, y: 154 + fy },
    social: { x: 76 + fx, y: 1766 + fy },
    logo: { x: 792 + fx, y: 108 + fy },
    footer: { x: 76 + fx, y: 786 + fy },
    subColor: alpha("#FFFFFF", 0.72),
  };
}

function buildRedBannerStack(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="76" y="344" width="928" height="520" rx="4" fill="${palette.secondary}" filter="url(#shadowLg)"/>
        <rect x="76" y="344" width="928" height="10" fill="${alpha("#FFFFFF", 0.14)}"/>
        <path d="M76 864h928" stroke="${alpha("#000000", 0.12)}" stroke-width="4" stroke-linecap="round"/>
        <path d="M908 344v520" stroke="${alpha("#FFFFFF", 0.08)}" stroke-width="6" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 120 + fx, y: 404 + fy, width: 816, maxLines: 3, titleBoost: 0, minSize: 52 },
    category: { x: 76 + fx, y: 162 + fy },
    social: { x: 76 + fx, y: 1766 + fy },
    logo: { x: 814 + fx, y: 114 + fy },
    footer: { x: 76 + fx, y: 948 + fy },
    titleColor: "#FFFFFF",
    subColor: alpha("#FFFFFF", 0.78),
  };
}

function buildPaperBannerStack(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="76" y="344" width="928" height="520" rx="4" fill="${palette.secondary}" filter="url(#shadowLg)"/>
        <rect x="76" y="344" width="928" height="10" fill="${alpha("#000000", 0.08)}"/>
        <path d="M76 864h928" stroke="${alpha("#000000", 0.14)}" stroke-width="4" stroke-linecap="round"/>
        <path d="M912 344v520" stroke="${alpha("#000000", 0.08)}" stroke-width="6" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 120 + fx, y: 404 + fy, width: 816, maxLines: 3, titleBoost: 0, minSize: 52 },
    category: { x: 76 + fx, y: 162 + fy },
    social: { x: 76 + fx, y: 1766 + fy },
    logo: { x: 814 + fx, y: 114 + fy },
    footer: { x: 76 + fx, y: 948 + fy },
    titleColor: "#101318",
    subColor: alpha("#101318", 0.78),
  };
}

function buildSkewClash(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <polygon points="120 356 1022 356 968 876 66 876" fill="${palette.secondary}" filter="url(#shadowLg)"/>
        <path d="M96 876h786" stroke="${alpha("#000000", 0.12)}" stroke-width="4" stroke-linecap="round"/>
        <path d="M906 356v520" stroke="${alpha("#FFFFFF", 0.08)}" stroke-width="6" stroke-linecap="round"/>
      </g>
    `,
    textBox: { x: 126 + fx, y: 436 + fy, width: 792, maxLines: 3, titleBoost: 0, minSize: 52 },
    category: { x: 86 + fx, y: 154 + fy },
    social: { x: 76 + fx, y: 1766 + fy },
    logo: { x: 814 + fx, y: 114 + fy },
    footer: { x: 76 + fx, y: 958 + fy },
    titleColor: "#FFFFFF",
    subColor: alpha("#FFFFFF", 0.78),
  };
}

function buildEditorTwinStrap(palette) {
  const fx = state.frameOffsetX;
  const fy = state.frameOffsetY;
  return {
    frame: `
      <g transform="translate(${fx} ${fy})">
        <rect x="60" y="146" width="44" height="44" fill="${palette.accent}" filter="url(#shadowSm)"/>
        <rect x="110" y="170" width="862" height="142" fill="${palette.secondary}" filter="url(#shadowLg)"/>
        <rect x="170" y="286" width="838" height="222" fill="${palette.accent}" filter="url(#shadowLg)"/>
        <rect x="618" y="552" width="330" height="54" rx="6" fill="${alpha("#666A70", 0.9)}"/>
        <rect x="618" y="614" width="300" height="54" rx="6" fill="${alpha("#666A70", 0.9)}"/>
        <path d="M116 566h126" stroke="${alpha(palette.secondary, 0.72)}" stroke-width="10" stroke-linecap="square"/>
      </g>
    `,
    textBox: { x: 146 + fx, y: 198 + fy, width: 760, maxLines: 2, titleBoost: -4, minSize: 42 },
    category: { x: 76 + fx, y: 552 + fy },
    social: { x: 620 + fx, y: 554 + fy },
    logo: { x: 106 + fx, y: 624 + fy },
    footer: { x: 76 + fx, y: 1766 + fy },
    titleColor: "#101318",
    subColor: "#FFFFFF",
  };
}

function buildSvg(layout, palette, templateId) {
  const headlineFont = getFontStack(state.headlineFont);
  const subheadlineFont = getFontStack(state.subheadlineFont);
  const categoryFont = getFontStack(state.categoryFont);
  const textFill = layout.titleColor || palette.text;
  const subFill = layout.subColor || palette.muted;
  const titleBlock = fitTextBlock({
    text: state.headline,
    maxWidth: layout.textBox.width,
    maxLines: layout.textBox.maxLines,
    fontSize: state.headlineSize + (layout.textBox.titleBoost || 0),
    minSize: layout.textBox.minSize || 46,
    fontFamily: headlineFont,
    weight: 800,
  });

  const subtitleStartY =
    layout.textBox.y +
    state.textOffsetY +
    titleBlock.lineHeight * titleBlock.lines.length +
    26;

  const categoryMarkup = renderCategory(layout, palette, categoryFont);
  const socialMarkup = renderSocial(layout, palette, categoryFont);
  const logoMarkup = renderLogo(layout, palette);
  const footerMarkup = renderFooter(layout, palette, categoryFont);

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${FRAME_WIDTH} ${FRAME_HEIGHT}" role="img" aria-label="UBC short frame preview">
      ${buildDefs(palette)}
      ${layout.frame}
      ${categoryMarkup}
      ${renderTitleBlock(titleBlock, layout, textFill, headlineFont)}
      ${renderSubheadline(layout, subFill, subheadlineFont, subtitleStartY)}
      ${socialMarkup}
      ${footerMarkup}
      ${logoMarkup}
    </svg>
  `;
}

function buildDefs(palette) {
  return `
    <defs>
      <filter id="shadowLg" x="-20%" y="-20%" width="150%" height="170%">
        <feDropShadow dx="0" dy="20" stdDeviation="26" flood-color="#000000" flood-opacity="0.32" />
      </filter>
      <filter id="shadowSm" x="-20%" y="-20%" width="150%" height="170%">
        <feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#000000" flood-opacity="0.24" />
      </filter>
      <filter id="accentGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feDropShadow dx="0" dy="0" stdDeviation="18" flood-color="${palette.accent}" flood-opacity="0.45" />
      </filter>
      <linearGradient id="accentGradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="${palette.accent}" />
        <stop offset="100%" stop-color="${palette.secondary}" />
      </linearGradient>
      <linearGradient id="panelGradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="${palette.panel}" />
        <stop offset="100%" stop-color="${alpha(mixColors(palette.panelSolid, "#050709", 0.45), 0.95)}" />
      </linearGradient>
    </defs>
  `;
}

function renderTitleBlock(titleBlock, layout, fill, fontFamily) {
  const x = layout.textBox.x + state.textOffsetX;
  const y = layout.textBox.y + state.textOffsetY;
  const fontStyle = escapeXml(fontFamily);
  return titleBlock.lines
    .map(
      (line, index) => `
        <text
          x="${x}"
          y="${y + index * titleBlock.lineHeight}"
          fill="${fill}"
          font-size="${titleBlock.size}"
          font-weight="800"
          style="font-family:${fontStyle};letter-spacing:-0.04em"
          dominant-baseline="hanging"
        >${escapeXml(line)}</text>
      `
    )
    .join("");
}

function renderSubheadline(layout, fill, fontFamily, startY) {
  if (!state.subheadline.trim()) return "";

  const block = fitTextBlock({
    text: state.subheadline,
    maxWidth: layout.textBox.width,
    maxLines: 3,
    fontSize: state.subheadlineSize,
    minSize: 20,
    fontFamily,
    weight: 600,
  });

  const x = layout.textBox.x + state.textOffsetX;
  const fontStyle = escapeXml(fontFamily);

  return block.lines
    .map(
      (line, index) => `
        <text
          x="${x}"
          y="${startY + index * (block.lineHeight * 0.98)}"
          fill="${fill}"
          font-size="${block.size}"
          font-weight="600"
          style="font-family:${fontStyle};letter-spacing:-0.015em"
          dominant-baseline="hanging"
        >${escapeXml(line)}</text>
      `
    )
    .join("");
}

function renderCategory(layout, palette, fontFamily) {
  if (!state.category.trim()) return "";

  const fontSize = 26;
  const paddingX = 22;
  const paddingY = 17;
  const width = measureText(state.category, fontSize, fontFamily, 800) + paddingX * 2;
  const height = 58;
  const x = layout.category.x + state.categoryOffsetX;
  const y = layout.category.y + state.categoryOffsetY;
  const textY = y + paddingY;
  const fontStyle = escapeXml(fontFamily);
  const accentText = palette.accentText;

  if (state.categoryStyle === "slab") {
    return `
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="8" fill="${palette.accent}" filter="url(#shadowSm)"/>
      <text x="${x + paddingX}" y="${textY}" fill="${accentText}" font-size="${fontSize}" font-weight="800" style="font-family:${fontStyle};letter-spacing:0.08em" dominant-baseline="hanging">${escapeXml(state.category)}</text>
    `;
  }

  if (state.categoryStyle === "outline") {
    return `
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="16" fill="transparent" stroke="${palette.secondary}" stroke-width="2"/>
      <text x="${x + paddingX}" y="${textY}" fill="${palette.secondary}" font-size="${fontSize}" font-weight="800" style="font-family:${fontStyle};letter-spacing:0.12em" dominant-baseline="hanging">${escapeXml(state.category)}</text>
    `;
  }

  if (state.categoryStyle === "block") {
    return `
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="14" fill="${palette.paper}" filter="url(#shadowSm)"/>
      <rect x="${x}" y="${y}" width="${width}" height="8" rx="4" fill="url(#accentGradient)"/>
      <text x="${x + paddingX}" y="${textY}" fill="${palette.paperText}" font-size="${fontSize}" font-weight="800" style="font-family:${fontStyle};letter-spacing:0.1em" dominant-baseline="hanging">${escapeXml(state.category)}</text>
    `;
  }

  if (state.categoryStyle === "ribbon") {
    return `
      <path d="M${x} ${y}h${width - 20}l20 29-20 29H${x}Z" fill="${palette.accent}" filter="url(#shadowSm)"/>
      <text x="${x + paddingX}" y="${textY}" fill="${accentText}" font-size="${fontSize}" font-weight="800" style="font-family:${fontStyle};letter-spacing:0.12em" dominant-baseline="hanging">${escapeXml(state.category)}</text>
    `;
  }

  if (state.categoryStyle === "skew") {
    const skew = 26;
    return `
      <polygon points="${x + skew} ${y} ${x + width} ${y} ${x + width - skew} ${y + height} ${x} ${y + height}" fill="${palette.accent}" filter="url(#shadowSm)"/>
      <text x="${x + paddingX + 8}" y="${textY}" fill="${accentText}" font-size="${fontSize}" font-weight="800" style="font-family:${fontStyle};letter-spacing:0.08em" dominant-baseline="hanging">${escapeXml(state.category)}</text>
    `;
  }

  return `
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="29" fill="${palette.accent}" filter="url(#shadowSm)"/>
    <text x="${x + paddingX}" y="${textY}" fill="${accentText}" font-size="${fontSize}" font-weight="800" style="font-family:${fontStyle};letter-spacing:0.12em" dominant-baseline="hanging">${escapeXml(state.category)}</text>
  `;
}

function renderSocial(layout, palette, fontFamily) {
  if (!state.showSocial || !state.socialHandle.trim()) return "";

  const orderedPlatforms = Array.from(
    new Set([state.socialPlatform, "youtube", "instagram", "facebook", "x"])
  ).filter((platform) => SOCIAL_PLATFORMS[platform]);
  const x = layout.social.x + state.socialOffsetX;
  const y = layout.social.y + state.socialOffsetY;
  const badgeSize = state.socialSize + 4;
  const badgeGap = 8;
  const leftPad = 8;
  const pillHeight = badgeSize + 10;
  const textWidth = measureText(state.socialHandle, 20, fontFamily, 700);
  const iconsWidth =
    orderedPlatforms.length * badgeSize + Math.max(0, orderedPlatforms.length - 1) * badgeGap;
  const dividerX = leftPad + iconsWidth + 12;
  const pillWidth = dividerX + 18 + textWidth + 18;
  const fontStyle = escapeXml(fontFamily);

  let badgeFill = alpha(state.socialColor, 0.18);
  let badgeStroke = "transparent";
  let textColor = state.socialColor;
  let pillFill = alpha("#090C11", 0.42);
  let pillStroke = alpha("#FFFFFF", 0.14);
  let dividerStroke = alpha("#FFFFFF", 0.14);

  if (state.socialStyle === "brand") {
    textColor = "#FFFFFF";
    pillFill = alpha("#050709", 0.46);
    pillStroke = alpha("#FFFFFF", 0.12);
  } else if (state.socialStyle === "white") {
    textColor = "#FFFFFF";
    pillFill = alpha("#050709", 0.4);
    pillStroke = alpha("#FFFFFF", 0.18);
  } else if (state.socialStyle === "outline") {
    textColor = state.socialColor;
    pillFill = "transparent";
    pillStroke = state.socialColor;
    badgeFill = "transparent";
    badgeStroke = state.socialColor;
    dividerStroke = alpha(state.socialColor, 0.5);
  }

  return `
    <g transform="translate(${x} ${y})">
      <rect width="${pillWidth}" height="${pillHeight}" rx="${pillHeight / 2}" fill="${pillFill}" stroke="${pillStroke}" stroke-width="2"/>
      ${orderedPlatforms
        .map((platformKey, index) => {
          const platform = SOCIAL_PLATFORMS[platformKey];
          const glyph = getSocialGlyph(platformKey);
          const badgeX = leftPad + index * (badgeSize + badgeGap);
          const badgeY = (pillHeight - badgeSize) / 2;
          const badgeCenterX = badgeX + badgeSize / 2;
          const badgeCenterY = badgeY + badgeSize / 2;
          const currentBadgeFill =
            state.socialStyle === "brand"
              ? platform.brand
              : state.socialStyle === "white"
                ? alpha("#FFFFFF", 0.16)
                : badgeFill;
          const currentGlyphColor =
            state.socialStyle === "brand"
              ? "#FFFFFF"
              : state.socialStyle === "white"
                ? "#FFFFFF"
                : state.socialColor;

          return `
            <circle cx="${badgeCenterX}" cy="${badgeCenterY}" r="${badgeSize / 2}" fill="${currentBadgeFill}" stroke="${badgeStroke}" stroke-width="2"/>
            <g transform="translate(${badgeCenterX} ${badgeCenterY}) scale(${(badgeSize - 10) / 24})">
              ${glyph(currentGlyphColor)}
            </g>
          `;
        })
        .join("")}
      <path d="M${dividerX} 9V${pillHeight - 9}" stroke="${dividerStroke}" stroke-width="2" stroke-linecap="round"/>
      <text x="${dividerX + 16}" y="${pillHeight / 2}" fill="${textColor}" font-size="20" font-weight="700" style="font-family:${fontStyle};letter-spacing:-0.02em" dominant-baseline="middle">${escapeXml(state.socialHandle)}</text>
    </g>
  `;
}

function renderFooter(layout, palette, fontFamily) {
  if (!state.footerText.trim()) return "";
  const x = layout.footer.x + state.textOffsetX;
  const y = layout.footer.y + state.textOffsetY;
  const width = measureText(state.footerText, 18, fontFamily, 700) + 48;
  const fontStyle = escapeXml(fontFamily);
  return `
    <g transform="translate(${x} ${y})">
      <path d="M0 14h28" stroke="${palette.secondary}" stroke-width="4" stroke-linecap="round"/>
      <text x="38" y="14" fill="${palette.muted}" font-size="18" font-weight="700" style="font-family:${fontStyle};letter-spacing:0.24em" dominant-baseline="middle">${escapeXml(state.footerText)}</text>
      <path d="M${width} 14h30" stroke="${palette.secondary}" stroke-width="4" stroke-linecap="round"/>
    </g>
  `;
}

function renderLogo(layout, palette) {
  if (!state.showLogo) return "";
  const x = layout.logo.x + state.logoOffsetX;
  const y = layout.logo.y + state.logoOffsetY;
  const size = state.logoSize;
  const bg = alpha(state.logoBgColor, 0.94);
  const artScale = 1.42;
  const artSize = size * artScale;
  const artX = x - size * 0.22;
  const artY = y - size * 0.18;
  const visibleBox = {
    x: artX + artSize * 0.105,
    y: artY + artSize * 0.315,
    width: artSize * 0.796,
    height: artSize * 0.398,
  };
  const badgePadX = Math.max(12, size * 0.07);
  const badgePadY = Math.max(10, size * 0.05);
  const badgeX = visibleBox.x - badgePadX;
  const badgeY = visibleBox.y - badgePadY;
  const badgeW = visibleBox.width + badgePadX * 2;
  const badgeH = visibleBox.height + badgePadY * 2;
  const centerX = badgeX + badgeW / 2;
  const centerY = badgeY + badgeH / 2;
  let backdrop = "";

  if (state.logoStyle === "rounded") {
    backdrop = `<rect x="${badgeX}" y="${badgeY}" width="${badgeW}" height="${badgeH}" rx="${Math.max(18, badgeH * 0.36)}" fill="${bg}" stroke="${alpha("#FFFFFF", 0.12)}" stroke-width="2" filter="url(#shadowSm)"/>`;
  } else if (state.logoStyle === "capsule") {
    backdrop = `<rect x="${badgeX}" y="${badgeY}" width="${badgeW}" height="${badgeH}" rx="${badgeH / 2}" fill="${bg}" stroke="${alpha("#FFFFFF", 0.12)}" stroke-width="2" filter="url(#shadowSm)"/>`;
  } else if (state.logoStyle === "circle") {
    const radius = Math.max(badgeW, badgeH) * 0.42;
    backdrop = `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${bg}" stroke="${alpha("#FFFFFF", 0.12)}" stroke-width="2" filter="url(#shadowSm)"/>`;
  } else if (state.logoStyle === "diamond") {
    const edge = Math.max(badgeW, badgeH) * 0.94;
    backdrop = `<rect x="${centerX - edge / 2}" y="${centerY - edge / 2}" width="${edge}" height="${edge}" rx="20" fill="${bg}" transform="rotate(45 ${centerX} ${centerY})" stroke="${alpha("#FFFFFF", 0.12)}" stroke-width="2" filter="url(#shadowSm)"/>`;
  } else if (state.logoStyle === "shield") {
    backdrop = `<path d="M${centerX} ${badgeY - 8}L${badgeX + badgeW} ${badgeY + badgeH * 0.28}V${badgeY + badgeH * 0.82}Q${centerX} ${badgeY + badgeH + 28} ${badgeX} ${badgeY + badgeH * 0.82}V${badgeY + badgeH * 0.28}Z" fill="${bg}" stroke="${alpha("#FFFFFF", 0.12)}" stroke-width="2" filter="url(#shadowSm)"/>`;
  } else if (state.logoStyle === "glow") {
    backdrop = `
      <ellipse cx="${centerX}" cy="${centerY}" rx="${badgeW * 0.54}" ry="${badgeH * 0.82}" fill="${alpha(state.logoBgColor, 0.68)}" filter="url(#accentGlow)"/>
      <rect x="${badgeX}" y="${badgeY}" width="${badgeW}" height="${badgeH}" rx="${badgeH / 2}" fill="${bg}" stroke="${alpha("#FFFFFF", 0.12)}" stroke-width="2" filter="url(#shadowSm)"/>
    `;
  }

  return `
    <g>
      ${backdrop}
      <image href="${ACTIVE_LOGO_DATA_URL}" x="${artX}" y="${artY}" width="${artSize}" height="${artSize}" preserveAspectRatio="xMidYMid meet"/>
    </g>
  `;
}

function fitTextBlock({ text, maxWidth, maxLines, fontSize, minSize, fontFamily, weight }) {
  let size = fontSize;
  let lines = [];

  while (size >= minSize) {
    lines = wrapText(text, maxWidth, size, fontFamily, weight);
    if (lines.length <= maxLines) break;
    size -= 4;
  }

  if (lines.length > maxLines) {
    lines = lines.slice(0, maxLines);
    let trimmed = lines[maxLines - 1];
    while (trimmed.length > 1 && measureText(`${trimmed}…`, size, fontFamily, weight) > maxWidth) {
      trimmed = trimmed.slice(0, -1);
    }
    lines[maxLines - 1] = `${trimmed}…`;
  }

  return {
    size,
    lines,
    lineHeight: size * 1.08,
  };
}

function wrapText(text, maxWidth, fontSize, fontFamily, weight) {
  const source = text.trim();
  if (!source) return [];

  const rawWords = source.split(/\s+/);
  const words = [];

  rawWords.forEach((word) => {
    if (measureText(word, fontSize, fontFamily, weight) <= maxWidth) {
      words.push(word);
      return;
    }

    let chunk = "";
    for (const char of Array.from(word)) {
      const next = `${chunk}${char}`;
      if (measureText(next, fontSize, fontFamily, weight) <= maxWidth || !chunk) {
        chunk = next;
      } else {
        words.push(chunk);
        chunk = char;
      }
    }
    if (chunk) words.push(chunk);
  });

  const lines = [];
  let line = "";

  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (measureText(candidate, fontSize, fontFamily, weight) <= maxWidth) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  });

  if (line) lines.push(line);
  return lines;
}

function measureText(text, fontSize, fontFamily, weight) {
  measureContext.font = `${weight} ${fontSize}px ${fontFamily}`;
  return measureContext.measureText(text).width;
}

function getFontStack(id) {
  return FONT_OPTIONS.find((font) => font.id === id)?.stack || FONT_OPTIONS[0].stack;
}

function getSocialGlyph(platform) {
  switch (platform) {
    case "instagram":
      return (color) => `
        <rect x="-8.5" y="-8.5" width="17" height="17" rx="5.5" fill="none" stroke="${color}" stroke-width="2.2"/>
        <circle cx="0" cy="0" r="4.1" fill="none" stroke="${color}" stroke-width="2.2"/>
        <circle cx="5.4" cy="-5.5" r="1.5" fill="${color}"/>
      `;
    case "x":
      return (color) => `
        <path d="M-7.5 -8.5 1.8 4.2M-1.2 -2 7.5 8.5M-7.5 8.5 0.8 -2.1M1.6 -8.5 7.5 -0.6" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      `;
    case "facebook":
      return (color) => `
        <path d="M2.2-8.2h4.1v-4h-4.1c-4.1 0-6.3 2.5-6.3 6.2v3.3H-7v4h2.8V12h4.5V1.3H4l.7-4h-4V-5c0-1.6.5-3.2 2.2-3.2Z" fill="${color}" transform="scale(0.85)"/>
      `;
    case "whatsapp":
      return (color) => `
        <path d="M0-9a9 9 0 0 0-7.4 14.2L-8.4 9l4-1a9 9 0 1 0 4.4-17Z" fill="none" stroke="${color}" stroke-width="2.1" stroke-linejoin="round"/>
        <path d="M-2.5-3.6c.5 1.7 2.3 3.9 4 4.6l1.4-1.1c.4-.3.9-.3 1.2 0l1.4 1.4c.3.3.3.8 0 1.2-.6.7-1.4 1.3-2.4 1.4-3 .3-8.3-4.9-8-8 .1-1 .7-1.8 1.4-2.4.4-.3.9-.3 1.2 0l1.4 1.4c.3.3.3.8 0 1.2Z" fill="${color}" transform="scale(0.85)"/>
      `;
    case "telegram":
      return (color) => `
        <path d="M-8.8.5 8.8-7.3c.8-.4 1.5.2 1.3 1.1L7.6 8.2c-.2.9-1.2 1.2-1.8.7L1.7 5.7-1.4 8.9c-.4.4-1.1.3-1.3-.2L-3.9 4.4-8.1 2.8c-.9-.3-.9-1.6-.1-2Z" fill="${color}"/>
      `;
    case "youtube":
    default:
      return (color) => `<path d="M-4.5-6.5 6.8 0-4.5 6.5Z" fill="${color}"/>`;
  }
}

function contrastText(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.62 ? "#111318" : "#FFFFFF";
}

function alpha(hex, opacity) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function mixColors(a, b, ratio) {
  const colorA = hexToRgb(a);
  const colorB = hexToRgb(b);
  const mix = (first, second) => Math.round(first + (second - first) * ratio);
  return rgbToHex(mix(colorA.r, colorB.r), mix(colorA.g, colorB.g), mix(colorA.b, colorB.b));
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const chunk = normalized.length === 3 ? normalized.split("").map((char) => `${char}${char}`).join("") : normalized;
  const int = Number.parseInt(chunk, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((value) => value.toString(16).padStart(2, "0")).join("")}`.toUpperCase();
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function downloadPng() {
  const button = elements.downloadPng;
  const original = button.textContent;
  button.disabled = true;
  button.textContent = "Exporting PNG...";

  try {
    if (document.fonts?.ready) await document.fonts.ready;
    const svgText = getExportSvgText();
    const canvas = await rasterizeSvgToCanvas(svgText);
    const pngBlob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!pngBlob) throw new Error("PNG blob generation failed");
    await triggerDownload(pngBlob, `ubc-frame-${state.template}.png`);
  } catch (error) {
    console.error(error);
    window.alert("PNG export failed. Reload once and try again, or use SVG export.");
  } finally {
    button.disabled = false;
    button.textContent = original;
  }
}

async function downloadSvg() {
  const svgText = getExportSvgText();
  const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
  await triggerDownload(blob, `ubc-frame-${state.template}.svg`);
}

function getExportSvgText() {
  const svg = elements.previewCanvas.querySelector("svg");
  if (!svg) throw new Error("Preview SVG not found");
  const clone = svg.cloneNode(true);
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  clone.setAttribute("width", String(FRAME_WIDTH));
  clone.setAttribute("height", String(FRAME_HEIGHT));
  clone.setAttribute("viewBox", `0 0 ${FRAME_WIDTH} ${FRAME_HEIGHT}`);
  clone.querySelectorAll("image").forEach((image) => {
    const href = image.getAttribute("href");
    if (!href) return;
    image.setAttribute("href", href);
    image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", href);
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n${clone.outerHTML}`;
}

async function rasterizeSvgToCanvas(svgText) {
  const canvas = document.createElement("canvas");
  canvas.width = FRAME_WIDTH;
  canvas.height = FRAME_HEIGHT;

  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas context unavailable");

  const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
  const source = await loadSvgRasterSource(svgText, blob);

  context.clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
  context.drawImage(source, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);

  if (typeof source.close === "function") {
    source.close();
  }

  return canvas;
}

async function loadSvgRasterSource(svgText, blob) {
  const attempts = [
    {
      name: "image-bitmap",
      run: async () => {
        if (!window.createImageBitmap) throw new Error("createImageBitmap unavailable");
        return window.createImageBitmap(blob);
      },
    },
    {
      name: "data-uri",
      run: async () => loadImageElement(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`),
    },
    {
      name: "blob-url",
      run: async () => {
        const url = URL.createObjectURL(blob);
        try {
          return await loadImageElement(url);
        } finally {
          window.setTimeout(() => URL.revokeObjectURL(url), 1000);
        }
      },
    },
  ];

  const errors = [];

  for (const attempt of attempts) {
    try {
      return await withTimeout(attempt.run(), 2500, `${attempt.name} timed out`);
    } catch (error) {
      errors.push(`${attempt.name}: ${error?.message || String(error)}`);
    }
  }

  throw new Error(`SVG rasterization failed. ${errors.join(" | ")}`);
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "sync";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Image load failed"));
    image.src = src;
  });
}

function withTimeout(promise, ms, label) {
  let timeoutId;
  return Promise.race([
    promise.finally(() => {
      if (timeoutId) window.clearTimeout(timeoutId);
    }),
    new Promise((_, reject) => {
      timeoutId = window.setTimeout(() => reject(new Error(label)), ms);
    }),
  ]);
}

async function triggerDownload(blob, filename) {
  if (window.showSaveFilePicker) {
    try {
      const extension = filename.includes(".") ? filename.slice(filename.lastIndexOf(".")) : "";
      const mimeType = extension === ".svg" ? "image/svg+xml" : extension === ".png" ? "image/png" : "application/octet-stream";
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [
          {
            description: "UBC Frame Export",
            accept: {
              [mimeType]: [extension || ".bin"],
            },
          },
        ],
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return;
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.warn("Save picker failed, falling back to browser download", error);
      } else {
        return;
      }
    }
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.append(link);
  link.click();
  setTimeout(() => {
    link.remove();
    URL.revokeObjectURL(url);
  }, 1000);
}

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Unable to persist current state", error);
  }
}

function readStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return Object.fromEntries(
      Object.entries(parsed).filter(([key]) => Object.prototype.hasOwnProperty.call(DEFAULT_STATE, key))
    );
  } catch (error) {
    console.warn("Unable to restore previous state", error);
    return {};
  }
}
