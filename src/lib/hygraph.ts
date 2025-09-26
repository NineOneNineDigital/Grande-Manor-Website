import { GraphQLClient } from "graphql-request";

// Create the Hygraph client
const hygraphClient = new GraphQLClient(
  import.meta.env.VITE_HYGRAPH_API_URL ||
    "https://api-us-east-1.hygraph.com/v2/your-project-id/master"
);

// Add authorization header if using a token
if (import.meta.env.VITE_HYGRAPH_API_TOKEN) {
  hygraphClient.setHeader(
    "authorization",
    `Bearer ${import.meta.env.VITE_HYGRAPH_API_TOKEN}`
  );
}

export default hygraphClient;
