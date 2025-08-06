import interiorImage1 from "../assets/images/664b4ee81818d3c38c5920e7_48-print-DSC_7650.jpg";
import interiorImage2 from "../assets/images/664b4eeadd7bbd660b64eb32_26-print-DSC_7590.jpg";
import heroImage1 from "../assets/images/664b4eeaf8db6d1a167016dc_3-print-DJI_0301.jpg";
import interiorImage3 from "../assets/images/664b4eeba6ae128890c5181c_46-print-DSC_7644.jpg";
import heroImage2 from "../assets/images/664b4eed2d88dc0808da8004_21-print-DJI_0316.jpg";
import propertyImage1 from "../assets/images/664b4ef6f40b9676c238c5ef_GrandeManorLot17Waterstone12.jpg";
import propertyImage2 from "../assets/images/664b4efb9829d6b151e3b05f_GrandeManorLot17Waterstone11.jpg";

export interface Listing {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  images: string[];
  features: string[];
  type: "available-lot" | "in-construction" | "pre-construction";
  status: "Available" | "Under Construction" | "Pre-Construction";
  completionDate?: string;
}

export const listings: Listing[] = [
  {
    id: 1,
    title: "Hillside Estate Lot - Beverly Hills",
    description:
      "Prime 1.2-acre lot in prestigious Beverly Hills with panoramic city views. Perfect for custom luxury estate construction. Architectural plans available.",
    price: 2800000,
    location: "Beverly Hills, CA",
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    image: heroImage1,
    images: [heroImage1, interiorImage1, propertyImage1],
    features: [
      "1.2 Acre Lot",
      "City Views",
      "Architectural Plans Included",
      "Utilities Available",
      "Gated Community",
    ],
    type: "available-lot",
    status: "Available",
  },
  {
    id: 2,
    title: "Modern Estate Under Construction",
    description:
      "Stunning 7,500 sq ft contemporary home currently under construction. Features floor-to-ceiling windows, infinity pool, and smart home technology throughout.",
    price: 5200000,
    location: "Westwood, CA",
    bedrooms: 6,
    bathrooms: 7,
    sqft: 7500,
    image: interiorImage2,
    images: [interiorImage2, propertyImage2],
    features: [
      "Infinity Pool",
      "Smart Home Technology",
      "Wine Cellar",
      "Home Theater",
      "3-Car Garage",
    ],
    type: "in-construction",
    status: "Under Construction",
    completionDate: "Fall 2025",
  },
  {
    id: 3,
    title: "Oceanfront Villa - Pre-Construction",
    description:
      "Exclusive oceanfront villa in Malibu. Mediterranean-inspired design with direct beach access. Construction begins Spring 2025 with completion in 2026.",
    price: 8500000,
    location: "Malibu, CA",
    bedrooms: 7,
    bathrooms: 8,
    sqft: 9200,
    image: heroImage2,
    images: [heroImage2, interiorImage3],
    features: [
      "Direct Beach Access",
      "Infinity Pool",
      "Guest House",
      "Wine Cave",
      "Spa Pavilion",
    ],
    type: "pre-construction",
    status: "Pre-Construction",
    completionDate: "Summer 2026",
  },
  {
    id: 4,
    title: "Prime Lot - Santa Monica Canyon",
    description:
      "Rare opportunity in Santa Monica Canyon. 0.8-acre lot with mature trees and canyon views. Perfect for custom contemporary home construction.",
    price: 3200000,
    location: "Santa Monica, CA",
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    image: propertyImage1,
    images: [propertyImage1],
    features: [
      "0.8 Acre Lot",
      "Canyon Views",
      "Mature Trees",
      "Quiet Cul-de-sac",
      "Design Services Available",
    ],
    type: "available-lot",
    status: "Available",
  },
  {
    id: 5,
    title: "Luxury Estate - Foundation Stage",
    description:
      "Magnificent 8,800 sq ft estate currently in foundation stage. Features include wine cellar, home theater, and resort-style backyard with pool and spa.",
    price: 6800000,
    location: "Bel Air, CA",
    bedrooms: 4,
    bathrooms: 6,
    sqft: 8800,
    image: interiorImage1,
    images: [interiorImage1, propertyImage2],
    features: [
      "Wine Cellar",
      "Home Theater",
      "Resort-Style Pool",
      "Guest Suite",
      "4-Car Garage",
    ],
    type: "in-construction",
    status: "Under Construction",
    completionDate: "Spring 2026",
  },
];

export const getListingById = (id: number): Listing | undefined => {
  return listings.find((listing) => listing.id === id);
};

export const getListingsByType = (
  type: "available-lot" | "in-construction" | "pre-construction"
): Listing[] => {
  return listings.filter((listing) => listing.type === type);
};
