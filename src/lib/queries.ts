// Project Model Queries
export const GET_PROJECTS = `
  query GetProjects {
    completed_Projects(stage: PUBLISHED) {
      id
      projectName
      projectType
      yearComplete
      location
      bedrooms
      bathrooms
      squareFootage
      lotSize
      mainImage {
        url
        fileName
      }
      projectImages(first: 100) {
        url
        fileName
      }
    }
  }
`;

export const GET_PROJECT_BY_ID = `
  query GetProjectById($id: ID!) {
    completed_Project(where: { id: $id }, stage: PUBLISHED) {
      id
      projectName
      projectType
      yearComplete
      location
      bedrooms
      bathrooms
      squareFootage
      lotSize
      mainImage {
        url
        fileName
      }
      projectImages(first: 100) {
        url
        fileName
      }
    }
  }
`;

export const GET_PROJECTS_BY_TYPE = `
  query GetProjectsByType($projectType: ProjectType!) {
    completed_Projects(where: { projectType: $projectType }, stage: PUBLISHED) {
      id
      projectName
      projectType
      yearComplete
      location
      bedrooms
      bathrooms
      squareFootage
      lotSize
      mainImage {
        url
        fileName
      }
      projectImages(first: 100) {
        url
        fileName
      }
    }
  }
`;

// Schema introspection query to find available models
export const INTROSPECT_SCHEMA = `
  query IntrospectSchema {
    __schema {
      queryType {
        fields {
          name
          type {
            name
            kind
          }
        }
      }
    }
  }
`;

// New Opportunities Model Queries
export const GET_LISTINGS = `
  query GetListings {
    new_Opportunities(stage: PUBLISHED) {
      id
      projectTitle
      projectLocation
      buildDescription {
        raw
        text
      }
      buildStage
      expectedCompletion
      bedrooms
      bathrooms
      squareFeet
      lotSize
      images {
        url
      }
    }
  }
`;

export const GET_LISTING_BY_ID = `
  query GetListingById($id: ID!) {
    new_Opportunity(where: { id: $id }, stage: PUBLISHED) {
      id
      projectTitle
      projectLocation
      buildDescription {
        raw
        text
      }
      buildStage
      expectedCompletion
      bedrooms
      bathrooms
      squareFeet
      lotSize
      images {
        url
      }
    }
  }
`;

export const GET_LISTINGS_BY_STAGE = `
  query GetListingsByStage($buildStage: BuildStage!) {
    new_Opportunities(where: { buildStage: $buildStage }, stage: PUBLISHED) {
      id
      projectTitle
      projectLocation
      buildDescription {
        raw
        text
      }
      buildStage
      expectedCompletion
      bedrooms
      bathrooms
      squareFeet
      lotSize
      images {
        url
      }
    }
  }
`;

// Combined query for portfolio page - simplified to avoid field errors
export const GET_PORTFOLIO_DATA = `
  query GetPortfolioData {
    completed_Projects(stage: PUBLISHED) {
      id
      projectName
      projectType
      yearComplete
      location
      bedrooms
      bathrooms
      squareFootage
      lotSize
      mainImage {
        url
        fileName
      }
      projectImages(first: 100) {
        url
        fileName
      }
    }
  }
`;
