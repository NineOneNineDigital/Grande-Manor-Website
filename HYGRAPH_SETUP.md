# Hygraph CMS Integration Setup

This guide will help you connect your Hygraph CMS to your Vite React project.

## Prerequisites

- Hygraph account and project set up
- API endpoint URL from your Hygraph project
- API token (optional, only needed for private content)

## Step 1: Environment Configuration

Create a `.env` file in your project root with the following variables:

```env
VITE_HYGRAPH_API_URL=https://api-us-east-1.hygraph.com/v2/your-project-id/master
VITE_HYGRAPH_API_TOKEN=your-api-token-here
```

**Important:** Replace the placeholder values with your actual Hygraph project details.

## Step 2: Hygraph Content Models

Based on your schema, you have two main content models:

### Project Model

- `projectName` (Single line text, Required, Title)
- `projectType` (Enumeration: Project Type)
- `yearComplete` (Number: Int)
- `location` (Single line text)
- `awardsAndRecognition` (Rich text)
- `projectDescription` (Rich text)
- `bedrooms` (Number: Int)
- `bathrooms` (Float)
- `squareFootage` (Number: Int)
- `lotSize` (Float)
- `mainImage` (Asset picker: Asset, Two-way reference)
- `projectImages` (Asset picker: Asset, Multiple values, Two-way reference)

### Listing Model

- `projectTitle` (Single line text, Required, Title)
- `projectLocation` (Single line text)
- `buildDescription` (Rich text)
- `buildStage` (Enumeration: Build Stage)
- `expectedCompletion` (Date)
- `bedrooms` (Number: Int)
- `bathrooms` (Float)
- `squareFeet` (Number: Int)
- `lotSize` (Float)
- `images` (Asset picker: Asset, Two-way reference)

## Step 3: Using the Service

The integration provides a service layer that handles all Hygraph API calls:

```typescript
import { hygraphService } from "../lib/hygraphService";

// Fetch all projects
const projects = await hygraphService.getAllProjects();

// Fetch all listings
const listings = await hygraphService.getAllListings();

// Fetch portfolio data (both projects and listings)
const portfolioData = await hygraphService.getPortfolioData();

// Fetch by specific criteria
const customBuilds = await hygraphService.getProjectsByType("custom-build");
const inConstruction = await hygraphService.getListingsByStage(
  "in-construction"
);
```

## Step 4: Component Integration

To use Hygraph data in your components, replace the static data imports with dynamic fetching:

```typescript
// Instead of:
// import { portfolioProjects } from '../data/portfolio';

// Use:
const [projects, setProjects] = useState<HygraphProject[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    const data = await hygraphService.getAllProjects();
    setProjects(data);
    setLoading(false);
  };

  fetchData();
}, []);
```

## Step 5: Data Mapping

The Hygraph data structure may differ from your current static data. You'll need to map the fields:

```typescript
// Current static data structure:
{
  id: number,
  title: string,
  description: string,
  // ... other fields
}

// Hygraph data structure:
{
  id: string,
  projectName: string,        // instead of title
  projectDescription: string, // instead of description
  // ... other fields
}
```

## Step 6: Testing the Integration

1. Start your development server: `npm run dev`
2. Check the browser console for any API errors
3. Verify that data is being fetched from Hygraph
4. Test the different query methods

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure your Hygraph project allows your domain
2. **Authentication Errors**: Check your API token and permissions
3. **Field Mismatches**: Verify that your GraphQL queries match your content model fields
4. **Environment Variables**: Ensure `.env` file is in the project root and variables are prefixed with `VITE_`

### Debug Tips:

- Check the Network tab in browser DevTools for API requests
- Use console.log to verify data structure
- Test queries in Hygraph's GraphQL playground first

## Next Steps

1. **Content Migration**: Move your existing data to Hygraph
2. **Image Assets**: Upload and organize your project images
3. **Content Updates**: Test updating content through Hygraph
4. **Performance**: Consider implementing caching strategies
5. **Real-time Updates**: Set up webhooks for live content updates

## Support

- [Hygraph Documentation](https://hygraph.com/docs)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

