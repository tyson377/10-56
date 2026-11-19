export interface CelestialMetric {
  title: string;
  value: string;
  detail: string;
  scientificNote: string;
}

export const astronomyData = {
  date: "20 November 2007",
  exactTimeIST: "10:56 AM",
  exactTimeUTC: "05:26 UTC",
  location: "Bengaluru, Karnataka, India",
  coordinates: {
    lat: "12.9716° N",
    lng: "77.5946° E",
    elevation: "920 m (2,756 ft)",
  },
  moon: {
    phase: "Waxing Gibbous",
    illumination: "81.4%",
    ageDays: 10.4,
    nextFullMoon: "24 November 2007 (14:30 UTC)",
    moonrise: "02:45 PM IST (Nov 20)",
    moonset: "02:50 AM IST (Nov 21)",
    constellation: "Pisces / Aries transition (Sidereal Meena)",
    distanceKm: "389,450 km",
    visualDescription:
      "A luminous, swelling gibbous moon casting soft pearlescent radiance, more than three-quarters illuminated as it traveled towards its zenith.",
  },
  sun: {
    sunrise: "06:19 AM IST",
    sunset: "05:51 PM IST",
    solarNoon: "12:05 PM IST",
    dayLength: "11 hours 32 minutes",
    constellation: "Scorpio (Tropical: 27° Scorpio / Sidereal: Vrishchika)",
    altitudeAtBirth: "54.2° above Horizon",
    azimuthAtBirth: "162.4° (South-Southeast)",
  },
  planets: [
    {
      planet: "Venus",
      position: "Virgo",
      state: "Morning Star",
      description: "Blazing as the magnificent Morning Star in the dawn sky with magnitude -4.2.",
    },
    {
      planet: "Mars",
      position: "Gemini / Cancer",
      state: "Retrograde",
      description: "Glowing ruby-red and exceptionally close to Earth, building toward opposition in Dec 2007.",
    },
    {
      planet: "Jupiter",
      position: "Sagittarius",
      state: "Evening Apparition",
      description: "Hovering in the golden dusk above the western horizon alongside Antares.",
    },
    {
      planet: "Saturn",
      position: "Leo",
      state: "Near Regulus",
      description: "Framed in the constellation Leo near the royal star Regulus, visible late evening.",
    },
  ],
  celestialEvents: [
    {
      name: "The Leonid Meteor Shower",
      dateRange: "Active Nov 15–22, 2007",
      description:
        "The annual Leonid meteor shower produced luminous green and golden fireballs originating from the debris trail of Comet Tempel-Tuttle.",
    },
    {
      name: "Comet 17P/Holmes Outburst",
      dateRange: "Visible across Autumn 2007",
      description:
        "An unprecedented astronomical outburst caused Comet Holmes to brighten a million-fold, briefly becoming the largest single object in the solar system.",
    },
  ],
};
