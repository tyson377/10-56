export interface HistoricalEvent {
  category: "World News" | "Technology" | "India & Bengaluru" | "Science & Space" | "Culture";
  title: string;
  source: string;
  description: string;
  impact: string;
  tag: string;
}

export const historicalData: HistoricalEvent[] = [
  {
    category: "Technology",
    title: "Amazon Unveils the First Kindle E-Reader",
    source: "New York Times / Amazon Archives, Nov 19–20, 2007",
    description:
      "Jeff Bezos took the stage at the W Hotel in New York City to unveil the very first Amazon Kindle. Priced at $399 with free 3G Whispernet and a revolutionary E-Ink display, it sold out within five and a half hours, forever transforming how humanity reads books.",
    impact: "Marked the dawn of modern digital literature and electronic paper.",
    tag: "Tech Revolution",
  },
  {
    category: "World News",
    title: "Queen Elizabeth II & Prince Philip's Diamond Anniversary",
    source: "BBC News / Westminster Abbey, Nov 20, 2007",
    description:
      "On Tuesday, November 20, 2007, Queen Elizabeth II and the Duke of Edinburgh celebrated their 60th Wedding Anniversary (Diamond Wedding) with a historic service of thanksgiving at Westminster Abbey, surrounded by four generations of the Royal Family.",
    impact: "First reigning British monarch in history to reach a Diamond Wedding Anniversary.",
    tag: "Royal Milestone",
  },
  {
    category: "India & Bengaluru",
    title: "Karnataka's Historic Transition & Bengaluru's Rise",
    source: "The Hindu / Deccan Herald Archives, Nov 20, 2007",
    description:
      "On November 20, 2007, Karnataka entered a historic chapter as President's Rule was formally imposed following the dissolution of the coalition government under Governor Rameshwar Thakur. Simultaneously, Bengaluru was cementing its global status as the premier Silicon Valley of the East.",
    impact: "Dr. Manmohan Singh served as Prime Minister; Pratibha Patil served as India's 1st woman President.",
    tag: "Bengaluru History",
  },
  {
    category: "Science & Space",
    title: "Commander Peggy Whitson Leads the ISS",
    source: "NASA Spaceflight / Expedition 16, Nov 2007",
    description:
      "Aboard the International Space Station, NASA astronaut Peggy Whitson was commanding Expedition 16—the very first woman to lead an ISS mission. Throughout November 2007, the crew conducted vital spacewalks to integrate the newly arrived Harmony module.",
    impact: "A historic breakthrough for women in aerospace science and planetary exploration.",
    tag: "Cosmic Frontier",
  },
  {
    category: "Science & Space",
    title: "IPCC Releases Fourth Climate Synthesis Report",
    source: "United Nations / IPCC Valencia Convention, Nov 2007",
    description:
      "The UN Intergovernmental Panel on Climate Change delivered its fourth landmark synthesis report, declaring the warming of the climate system 'unequivocal.' The IPCC and Al Gore were formally recognized with the 2007 Nobel Peace Prize.",
    impact: "Established the scientific foundation for modern global renewable energy treaties.",
    tag: "Earth Science",
  },
  {
    category: "Technology",
    title: "Google Announces the Android Open Alliance",
    source: "Google Press Release, Nov 5–20, 2007",
    description:
      "Just fifteen days before Divya was born, Google officially revealed Android alongside the Open Handset Alliance, laying the architectural groundwork for what would become the world's most widely used mobile operating system.",
    impact: "Shaped mobile computing for billions of human beings.",
    tag: "Digital Genesis",
  },
  {
    category: "Culture",
    title: "Mac OS X 10.5 'Leopard' Takes Over Personal Computing",
    source: "Apple Inc. Newsroom, late 2007",
    description:
      "Apple's iconic Mac OS X Leopard had just launched worldwide with 300+ new features, introducing Time Machine backups, Quick Look previews, and the metallic 3D reflective dock that defined computer aesthetics in 2007.",
    impact: "Represented the pinnacle of desktop computing design before the mobile explosion.",
    tag: "Design Icon",
  },
];

export const leaders2007 = [
  { role: "President of India", name: "Smt. Pratibha Patil", note: "India's first female President (sworn in July 2007)" },
  { role: "Prime Minister of India", name: "Dr. Manmohan Singh", note: "Architect of economic reforms and nuclear accords" },
  { role: "President of the United States", name: "George W. Bush", note: "43rd U.S. President" },
  { role: "Prime Minister of the United Kingdom", name: "Gordon Brown", note: "Took office in June 2007" },
  { role: "UN Secretary-General", name: "Ban Ki-moon", note: "Began tenure in January 2007" },
];

export const worldNumbers2007 = [
  { label: "Global Population", value: "6.68 Billion", context: "vs 8.1+ billion today" },
  { label: "Internet Users Worldwide", value: "1.37 Billion", context: "~20% of Earth (now ~68%)" },
  { label: "Cell Phone Subscriptions", value: "3.3 Billion", context: "Peak feature phone era" },
  { label: "Crude Oil Price", value: "~$98 / barrel", context: "Approaching historic $100 barrier" },
];
