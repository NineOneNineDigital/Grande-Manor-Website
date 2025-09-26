import hygraphClient from "./hygraph";
import {
  GET_LISTING_BY_ID,
  GET_LISTINGS,
  GET_LISTINGS_BY_STAGE,
  GET_PORTFOLIO_DATA,
  GET_PROJECT_BY_ID,
  GET_PROJECTS,
  GET_PROJECTS_BY_TYPE,
  INTROSPECT_SCHEMA,
} from "./queries";

// Project Types
export interface HygraphProject {
  id: string;
  projectName: string;
  projectType: string;
  yearComplete?: number;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFootage?: number;
  lotSize?: number;
  mainImage?: {
    url: string;
    fileName?: string;
  };
  projectImages?: {
    url: string;
    fileName?: string;
  }[];
}

// Listing Types
export interface HygraphListing {
  id: string;
  projectTitle: string;
  projectLocation: string;
  buildDescription?: {
    raw: any;
    text: string;
  };
  buildStage: string;
  expectedCompletion?: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  lotSize?: number;
  images?: {
    url: string;
  };
}

// Portfolio Data Types
export interface PortfolioData {
  projects: HygraphProject[];
  listings: HygraphListing[];
}

export const hygraphService = {
  // Schema introspection
  async introspectSchema(): Promise<any> {
    try {
      const data = await hygraphClient.request(INTROSPECT_SCHEMA);
      return data;
    } catch (error) {
      console.error("Error introspecting schema:", error);
      return null;
    }
  },

  // Project methods
  async getAllProjects(): Promise<HygraphProject[]> {
    try {
      const data = (await hygraphClient.request(GET_PROJECTS)) as {
        completed_Projects: HygraphProject[];
      };
      return data.completed_Projects || [];
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  },

  async getProjectById(id: string): Promise<HygraphProject | null> {
    try {
      const data = (await hygraphClient.request(GET_PROJECT_BY_ID, { id })) as {
        completed_Project: HygraphProject;
      };
      return data.completed_Project;
    } catch (error) {
      console.error("Error fetching project:", error);
      return null;
    }
  },

  async getProjectsByType(projectType: string): Promise<HygraphProject[]> {
    try {
      const data = (await hygraphClient.request(GET_PROJECTS_BY_TYPE, {
        projectType,
      })) as { completed_Projects: HygraphProject[] };
      return data.completed_Projects || [];
    } catch (error) {
      console.error("Error fetching projects by type:", error);
      return [];
    }
  },

  // Listing methods
  async getAllListings(): Promise<HygraphListing[]> {
    try {
      const data = (await hygraphClient.request(GET_LISTINGS)) as {
        new_Opportunities: HygraphListing[];
      };
      return data.new_Opportunities || [];
    } catch (error) {
      console.error("Error fetching listings:", error);
      return [];
    }
  },

  async getListingById(id: string): Promise<HygraphListing | null> {
    try {
      const data = (await hygraphClient.request(GET_LISTING_BY_ID, { id })) as {
        new_Opportunity: HygraphListing;
      };
      return data.new_Opportunity;
    } catch (error) {
      console.error("Error fetching listing:", error);
      return null;
    }
  },

  async getListingsByStage(buildStage: string): Promise<HygraphListing[]> {
    try {
      const data = (await hygraphClient.request(GET_LISTINGS_BY_STAGE, {
        buildStage,
      })) as { new_Opportunities: HygraphListing[] };
      return data.new_Opportunities || [];
    } catch (error) {
      console.error("Error fetching listings by stage:", error);
      return [];
    }
  },

  // Combined portfolio data
  async getPortfolioData(): Promise<PortfolioData> {
    try {
      const data = (await hygraphClient.request(GET_PORTFOLIO_DATA)) as {
        completed_Projects: HygraphProject[];
      };
      return {
        projects: data.completed_Projects || [],
        listings: [], // No listings model in your Hygraph schema
      };
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
      return { projects: [], listings: [] };
    }
  },
};
