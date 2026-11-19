export interface StreamingLinks {
  spotify?: string;
  youtube?: string;
  appleMusic?: string;
}

export interface TrackInfo {
  title: string;
  artist: string;
  album: string;
  year: string;
  category: "Bollywood & India" | "International Billboard";
  chartPeak: string;
  vibe: string;
  lyricSnippet: string;
  trivia: string;
  youtubeId: string;
  recordLabel: string;
  streamingLinks: StreamingLinks;
}

export const musicData: TrackInfo[] = [
  {
    title: "Aankhon Mein Teri",
    artist: "KK (Krishnakumar Kunnath)",
    album: "Om Shanti Om (Original Motion Picture Soundtrack)",
    year: "Nov 2007",
    category: "Bollywood & India",
    chartPeak: "No. 1 across all Indian Radio Charts",
    vibe: "Ethereal, Romantic, Timeless",
    lyricSnippet: "Aankhon mein teri, ajab si, ajab si adaayein hain...",
    trivia:
      "The defining romantic anthem of November 2007 from Farah Khan's Om Shanti Om, starring Shah Rukh Khan and introducing Deepika Padukone. Composed by Vishal–Shekhar with lyrics by Javed Akhtar and immortalized by KK's voice.",
    youtubeId: "7KKVb0_IdD4",
    recordLabel: "T-Series",
    streamingLinks: {
      spotify: "https://open.spotify.com/track/1rqV1mE8V1G7jX8L2O8uM6",
      youtube: "https://www.youtube.com/watch?v=7KKVb0_IdD4",
      appleMusic: "https://music.apple.com/in/song/aankhon-mein-teri/1123180470",
    },
  },
  {
    title: "Tum Se Hi",
    artist: "Mohit Chauhan & Pritam",
    album: "Jab We Met (Original Motion Picture Soundtrack)",
    year: "Autumn 2007",
    category: "Bollywood & India",
    chartPeak: "Top 3 National Airplay Chart",
    vibe: "Soulful, Melodic, Wandering",
    lyricSnippet: "Tum se hi din hota hai, surmayi shaam aati hai...",
    trivia:
      "Composed by Pritam with lyrics by Irshad Kamil, this masterwork for Shahid Kapoor and Kareena Kapoor heralded Mohit Chauhan's arrival as India's premier romantic balladeer in late 2007.",
    youtubeId: "mt9xg0mmt28",
    recordLabel: "T-Series",
    streamingLinks: {
      spotify: "https://open.spotify.com/track/7eQl3Yqv35790d96qE2o3W",
      youtube: "https://www.youtube.com/watch?v=mt9xg0mmt28",
      appleMusic: "https://music.apple.com/in/song/tum-se-hi/1118671199",
    },
  },
  {
    title: "No One",
    artist: "Alicia Keys",
    album: "As I Am (Original Studio Release)",
    year: "Nov 2007",
    category: "International Billboard",
    chartPeak: "Billboard Hot 100 No. 1",
    vibe: "Passionate Soul & Piano Anthem",
    lyricSnippet: "You and me together, through the days and nights, I don't worry 'cause everything's gonna be alright...",
    trivia:
      "Alicia Keys released 'As I Am' on November 13, 2007. 'No One' soared to #1 globally, winning two Grammy Awards and becoming the soundtrack to autumn 2007 worldwide.",
    youtubeId: "rywUS-ohqeE",
    recordLabel: "J Records / Sony BMG",
    streamingLinks: {
      spotify: "https://open.spotify.com/track/6LlOprh95F9VdI36x0sO2b",
      youtube: "https://www.youtube.com/watch?v=rywUS-ohqeE",
      appleMusic: "https://music.apple.com/us/song/no-one/266014493",
    },
  },
  {
    title: "Mauja Hi Mauja",
    artist: "Mika Singh & Pritam",
    album: "Jab We Met (Original Motion Picture Soundtrack)",
    year: "Nov 2007",
    category: "Bollywood & India",
    chartPeak: "No. 1 Party Anthem in India",
    vibe: "Electrifying, Jubilant Punjabi Dance",
    lyricSnippet: "Mauja hi mauja, shaam sawere mauja hi mauja...",
    trivia:
      "Whenever a radio turned on in November 2007 across Bengaluru, this pulsating rhythm of joy was echoing from cars, college fests, and wedding celebrations across the nation.",
    youtubeId: "yR5Fj6PZX_Y",
    recordLabel: "T-Series",
    streamingLinks: {
      spotify: "https://open.spotify.com/track/4PzT621hH9aHlQ17Z9oQx7",
      youtube: "https://www.youtube.com/watch?v=yR5Fj6PZX_Y",
      appleMusic: "https://music.apple.com/in/song/mauja-hi-mauja/1118671196",
    },
  },
  {
    title: "Apologize",
    artist: "Timbaland feat. OneRepublic",
    album: "Shock Value / Dreaming Out Loud",
    year: "Nov 2007",
    category: "International Billboard",
    chartPeak: "Billboard Hot 100 No. 2 / Global No. 1",
    vibe: "Atmospheric Pop-Rock & Strings",
    lyricSnippet: "It's too late to apologize, it's too late...",
    trivia:
      "Broke North American airplay records with over 10,000 plays in a single week in November 2007, holding the #1 position on Mainstream Top 40 for eight consecutive weeks.",
    youtubeId: "ZktK8B9ZksM",
    recordLabel: "Interscope Records / Mosley Music",
    streamingLinks: {
      spotify: "https://open.spotify.com/track/5n0CTysih20NYdT2S0Wpe8",
      youtube: "https://www.youtube.com/watch?v=ZktK8B9ZksM",
      appleMusic: "https://music.apple.com/us/song/apologize/1440788398",
    },
  },
  {
    title: "Bubbly",
    artist: "Colbie Caillat",
    album: "Coco (Original Studio Release)",
    year: "Autumn 2007",
    category: "International Billboard",
    chartPeak: "Billboard Hot 100 Top 5",
    vibe: "Warm Acoustic Sunbeam Pop",
    lyricSnippet: "It starts in my toes, and I crinkle my nose, wherever it goes I always know...",
    trivia:
      "The warm acoustic sunbeam that rose from MySpace to dominate autumn 2007 playlists, embodying the gentle aesthetic of that sunny November.",
    youtubeId: "AWGqoCNbsvM",
    recordLabel: "Universal Republic Records",
    streamingLinks: {
      spotify: "https://open.spotify.com/track/2foc5Q5nqQyqZt4u8q0r6Q",
      youtube: "https://www.youtube.com/watch?v=AWGqoCNbsvM",
      appleMusic: "https://music.apple.com/us/song/bubbly/1440767746",
    },
  },
  {
    title: "Anisuthide",
    artist: "Sonu Nigam & Mano Murthy",
    album: "Mungaru Male (Original Motion Picture Soundtrack)",
    year: "2007 Evergreen",
    category: "Bollywood & India",
    chartPeak: "All-time Record in Karnataka Box Office & Airplay",
    vibe: "Melancholic, Lyrical Kannada Rain Song",
    lyricSnippet: "Anisuthide yaako indu, neenene nanavalandu...",
    trivia:
      "In Bengaluru throughout 2007, this hauntingly sweet melody was an inescapable cultural phenomenon, playing in autorickshaws, Darshini coffee joints, and FM channels daily.",
    youtubeId: "nlsLKA6hlVQ",
    recordLabel: "Anand Audio / Jhankar Music",
    streamingLinks: {
      spotify: "https://open.spotify.com/track/4d2tXG8t8w0N3f5s6k7j8x",
      youtube: "https://www.youtube.com/watch?v=nlsLKA6hlVQ",
      appleMusic: "https://music.apple.com/in/song/anisuthide/1442987114",
    },
  },
  {
    title: "Bleeding Love",
    artist: "Leona Lewis",
    album: "Spirit (Original Studio Release)",
    year: "Nov 2007",
    category: "International Billboard",
    chartPeak: "UK Singles Chart No. 1 (7 Weeks)",
    vibe: "Towering Ballad & Pure Emotion",
    lyricSnippet: "Keep bleeding, keep, keep bleeding love...",
    trivia:
      "Holding the undisputed #1 spot in Britain throughout November 2007, selling over a million copies and launching Leona Lewis to global stardom.",
    youtubeId: "Vzo-EL_62fQ",
    recordLabel: "Syco Music / Sony BMG",
    streamingLinks: {
      spotify: "https://open.spotify.com/track/7wZUrN8o99vGzqZ12jG2Qe",
      youtube: "https://www.youtube.com/watch?v=Vzo-EL_62fQ",
      appleMusic: "https://music.apple.com/us/song/bleeding-love/268153494",
    },
  },
];
