import interiorImage1 from "../assets/images/664b4ee81818d3c38c5920e7_48-print-DSC_7650.jpg";
import interiorImage2 from "../assets/images/664b4eeadd7bbd660b64eb32_26-print-DSC_7590.jpg";
import heroImage1 from "../assets/images/664b4eeaf8db6d1a167016dc_3-print-DJI_0301.jpg";
import interiorImage3 from "../assets/images/664b4eeba6ae128890c5181c_46-print-DSC_7644.jpg";
import heroImage2 from "../assets/images/664b4eed2d88dc0808da8004_21-print-DJI_0316.jpg";
import propertyImage1 from "../assets/images/664b4ef6f40b9676c238c5ef_GrandeManorLot17Waterstone12.jpg";
import propertyImage2 from "../assets/images/664b4efb9829d6b151e3b05f_GrandeManorLot17Waterstone11.jpg";

export interface PortfolioProject {
  id: number;
  title: string;
  location: string;
  year: number;
  category: "custom-build" | "renovation" | "estate" | "penthouse";
  description: string;
  features: string[];
  specs: {
    sqft: number;
    bedrooms: number;
    bathrooms: number;
    lotSize?: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
  awards?: string[];
  client?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Hillcrest Modern Estate",
    location: "Beverly Hills, CA",
    year: 2024,
    category: "custom-build",
    description:
      "A stunning contemporary masterpiece featuring floor-to-ceiling windows, infinity pool, and panoramic city views. This architectural marvel seamlessly blends indoor and outdoor living with premium materials throughout.",
    features: [
      "Infinity edge pool with city views",
      "Smart home automation system",
      "Wine cellar with tasting room",
      "Home theater with Dolby Atmos",
      "Chef's kitchen with Italian marble",
      "Master suite with private terrace",
    ],
    specs: {
      sqft: 8500,
      bedrooms: 6,
      bathrooms: 8,
      lotSize: "1.2 acres",
    },
    images: {
      main: heroImage1,
      gallery: [heroImage1, interiorImage1, propertyImage1, interiorImage2],
    },
    awards: [
      "2024 Architectural Excellence Award",
      "Best Custom Home - LA Design Awards",
    ],
    client: "Private Residence",
  },
  {
    id: 2,
    title: "Malibu Oceanfront Villa",
    location: "Malibu, CA",
    year: 2023,
    category: "estate",
    description:
      "Mediterranean-inspired luxury villa with direct ocean access. Features authentic stone work, custom ironwork, and resort-style amenities including a spa pavilion and guest casita.",
    features: [
      "Direct beach access",
      "Resort-style spa pavilion",
      "Guest casita with kitchenette",
      "Outdoor kitchen and dining",
      "Custom wine cave",
      "Infinity pool overlooking ocean",
    ],
    specs: {
      sqft: 12000,
      bedrooms: 7,
      bathrooms: 9,
      lotSize: "2.8 acres",
    },
    images: {
      main: heroImage2,
      gallery: [heroImage2, interiorImage3, propertyImage2],
    },
    awards: ["Best Premium Estate 2023"],
    client: "Celebrity Residence",
  },
  {
    id: 3,
    title: "Downtown Penthouse Renovation",
    location: "Downtown LA, CA",
    year: 2023,
    category: "renovation",
    description:
      "Complete transformation of a 1980s penthouse into a modern luxury residence. Features custom millwork, imported marble, and a stunning rooftop terrace with 360-degree city views.",
    features: [
      "360-degree city views",
      "Custom Italian millwork",
      "Rooftop terrace with kitchen",
      "Private elevator access",
      "Smart glass technology",
      "Imported Carrara marble",
    ],
    specs: {
      sqft: 5200,
      bedrooms: 4,
      bathrooms: 5,
    },
    images: {
      main: interiorImage2,
      gallery: [interiorImage2, propertyImage2],
    },
    awards: ["Best Renovation Project 2023"],
    client: "Private Client",
  },
  {
    id: 4,
    title: "Westwood Contemporary",
    location: "Westwood, CA",
    year: 2022,
    category: "custom-build",
    description:
      "Sleek contemporary home designed for a young family. Features sustainable materials, energy-efficient systems, and flexible living spaces that adapt to modern lifestyle needs.",
    features: [
      "Solar panel system",
      "Sustainable materials",
      "Flexible living spaces",
      "Home office suite",
      "Children's play area",
      "Organic garden",
    ],
    specs: {
      sqft: 6800,
      bedrooms: 5,
      bathrooms: 6,
      lotSize: "0.8 acres",
    },
    images: {
      main: propertyImage1,
      gallery: [propertyImage1, interiorImage2],
    },
    awards: ["Green Building Excellence Award"],
    client: "Young Family",
  },
  {
    id: 5,
    title: "Historic Pasadena Restoration",
    location: "Pasadena, CA",
    year: 2022,
    category: "renovation",
    description:
      "Meticulous restoration of a 1920s Spanish Colonial mansion. Preserved original architectural details while integrating modern amenities and systems throughout.",
    features: [
      "Preserved original details",
      "Updated electrical systems",
      "Modern HVAC integration",
      "Restored tile work",
      "Period-appropriate fixtures",
      "Landscaped courtyards",
    ],
    specs: {
      sqft: 9200,
      bedrooms: 6,
      bathrooms: 7,
      lotSize: "1.5 acres",
    },
    images: {
      main: propertyImage2,
      gallery: [propertyImage2],
    },
    awards: ["Historic Preservation Award"],
    client: "Heritage Foundation",
  },
  {
    id: 6,
    title: "Santa Monica Modern",
    location: "Santa Monica, CA",
    year: 2021,
    category: "custom-build",
    description:
      "Award-winning contemporary home featuring innovative sustainable design and cutting-edge smart home technology. The open-plan design maximizes natural light and ocean breezes.",
    features: [
      "Award-winning design",
      "Smart home technology",
      "Sustainable materials",
      "Ocean breeze optimization",
      "Solar energy system",
      "Rainwater collection",
    ],
    specs: {
      sqft: 7500,
      bedrooms: 5,
      bathrooms: 6,
      lotSize: "1.0 acres",
    },
    images: {
      main: interiorImage1,
      gallery: [interiorImage1, propertyImage2],
    },
    awards: [
      "National Architecture Award 2021",
      "Sustainable Design Excellence",
    ],
    client: "Tech Executive",
  },
];

export const getProjectsByCategory = (category: string): PortfolioProject[] => {
  if (category === "all") return portfolioProjects;
  return portfolioProjects.filter((project) => project.category === category);
};

export const getProjectById = (id: number): PortfolioProject | undefined => {
  return portfolioProjects.find((project) => project.id === id);
};
