export interface LifeArtifact {
  title: string;
  category: "Gadgets & Hardware" | "Digital Society" | "Style & Fashion" | "Pop Culture" | "Economic Snapshot";
  highlight: string;
  description: string;
  iconName: string;
}

export const life2007Artifacts: LifeArtifact[] = [
  {
    title: "Nokia N95 & BlackBerry Curve",
    category: "Gadgets & Hardware",
    highlight: "Dual-slider & QWERTY Trackball Dominance",
    description:
      "Before full-screen glass slabs took over, the Nokia N95 reigned supreme with its 5-megapixel Carl Zeiss camera, dual-slide multimedia keypad, and built-in GPS. Meanwhile, the BlackBerry Curve 8300 with its pearl trackball and BBM was the coveted badge of sophistication.",
    iconName: "Smartphone",
  },
  {
    title: "The iPod Classic & Click Wheel",
    category: "Gadgets & Hardware",
    highlight: "160 GB in Your Pocket",
    description:
      "Apple's 6th-generation iPod Classic with its polished steel back and tactile click-wheel let people hold 40,000 songs in their hand. Alongside it, the squat 'fat' iPod Nano 3rd gen played miniature music videos on a tiny 2-inch screen.",
    iconName: "Headphones",
  },
  {
    title: "Orkut, MSN Messenger & Testimonials",
    category: "Digital Society",
    highlight: "The Golden Age of Personal Web Warmth",
    description:
      "In India and Bengaluru, Orkut was the beating heart of social life: writing heartfelt 'scraps', joining communities like 'Bengaluru Habba', checking who viewed your profile, and begging best friends to approve personal testimonials. On PC, MSN Messenger windows buzzed with sudden screen nudges.",
    iconName: "Users",
  },
  {
    title: "Skinny Jeans, Ballet Flats & Layered Polos",
    category: "Style & Fashion",
    highlight: "The 2007 Runway & Streetwear Aesthetic",
    description:
      "Late 2007 fashion was unmistakable: dark wash skinny denim paired with metallic rounded ballet flats, oversized bug-eye sunglasses, chunky wide belts slung low over long knit tunic sweaters, and side-swept bangs framing carefully flat-ironed hair.",
    iconName: "Sparkles",
  },
  {
    title: "Café Coffee Day & The CCD Era",
    category: "Pop Culture",
    highlight: "'A lot can happen over coffee'",
    description:
      "In Bengaluru on Brigade Road, Koramangala, and Indiranagar, Café Coffee Day was the undisputed youth sanctuary. Sinking into purple foam couches with a tall glass of 'Tropical Iceberg' or 'Devil's Own' was the weekend ritual of an entire generation.",
    iconName: "Coffee",
  },
  {
    title: "Windows Vista & 256 kbps Broadband",
    category: "Gadgets & Hardware",
    highlight: "Aero Glass & BSNL Data Caps",
    description:
      "Personal computers featured translucent Windows Aero glass borders, desktop gadgets ticking on the sidebar, and spinning CRT monitors slowly being replaced by chunky 17-inch LCD displays connected via blue VGA cables.",
    iconName: "Monitor",
  },
];

export const priceComparisons2007 = [
  { item: "Gold (24K, 10g in India)", price2007: "₹10,250", priceToday: "₹75,000+", change: "+630%" },
  { item: "Petrol (Bengaluru / Litre)", price2007: "₹48.20", priceToday: "₹102.80", change: "+113%" },
  { item: "Multiplex Movie Ticket (PVR)", price2007: "₹90 - ₹120", priceToday: "₹350 - ₹550", change: "+350%" },
  { item: "Filter Coffee (Bangalore Darshini)", price2007: "₹6", priceToday: "₹15 - ₹20", change: "+180%" },
  { item: "US Dollar Exchange Rate (USD/INR)", price2007: "₹39.40", priceToday: "₹84.50+", change: "Rupee was strong!" },
  { item: "Auto-Rickshaw Base Fare (BLR)", price2007: "₹14", priceToday: "₹30", change: "+114%" },
];
