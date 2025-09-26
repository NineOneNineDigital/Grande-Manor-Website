# Hygraph Connection Setup Guide

This guide will help you connect your Grande Manor Website to Hygraph CMS.

## ✅ What's Already Set Up

The following components are already configured and ready to use:

- **Hygraph Client** (`src/lib/hygraph.ts`) - GraphQL client configuration
- **Hygraph Service** (`src/lib/hygraphService.ts`) - Service layer with all API methods
- **GraphQL Queries** (`src/lib/queries.ts`) - All necessary queries for projects and listings
- **Updated Portfolio Component** - Now uses Hygraph data with fallback to static data
- **Test Component** - `HygraphTest` component to verify connection

## 🔧 Setup Steps

### 1. Create Environment File

Create a `.env` file in your project root:

```bash
# Copy the example file
cp .env.example .env
```

Or create it manually with:

```env
# Hygraph CMS Configuration
VITE_HYGRAPH_API_URL=https://api-us-east-1.hygraph.com/v2/your-project-id/master
VITE_HYGRAPH_API_TOKEN=your-api-token-here
```

### 2. Get Your Hygraph Credentials

1. Go to your [Hygraph Dashboard](https://app.hygraph.com)
2. Select your project
3. Navigate to **Project Settings** → **API Access**
4. Copy your **Content API URL** and replace `VITE_HYGRAPH_API_URL`
5. If you need private content access, copy your **Permanent Auth Token** and replace `VITE_HYGRAPH_API_TOKEN`

### 3. Test the Connection

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Visit your homepage - you'll see a "Hygraph Connection Test" section
3. Check the connection status:
   - 🟢 **Green**: Connected successfully
   - 🟡 **Yellow**: Testing connection
   - 🔴 **Red**: Connection failed

### 4. Content Models

Your Hygraph project should have these content models:

#### Project Model

- `projectName` (Single line text, Required, Title)
- `projectType` (Enumeration: custom-build, renovation, estate, penthouse)
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

#### Listing Model

- `projectTitle` (Single line text, Required, Title)
- `projectLocation` (Single line text)
- `buildDescription` (Rich text)
- `buildStage` (Enumeration: planning, in-construction, completed)
- `expectedCompletion` (Date)
- `bedrooms` (Number: Int)
- `bathrooms` (Float)
- `squareFeet` (Number: Int)
- `lotSize` (Float)
- `images` (Asset picker: Asset, Two-way reference)

## 🚀 How It Works

### Data Flow

1. **Portfolio Component** fetches data from Hygraph on page load
2. **Hygraph Service** handles all API calls and error handling
3. **Data Mapping** converts Hygraph data to match existing component structure
4. **Fallback System** uses static data if Hygraph is unavailable

### Key Features

- **Automatic Fallback**: If Hygraph fails, the app uses static data
- **Loading States**: Shows loading spinner while fetching data
- **Error Handling**: Displays helpful error messages
- **Type Safety**: Full TypeScript support with proper interfaces

## 🧪 Testing

### Test Component

The `HygraphTest` component on the homepage shows:

- Connection status
- Environment variable configuration
- Fetched data (projects and listings)
- Error messages if connection fails

### Manual Testing

1. **With Hygraph**: Should show your CMS data
2. **Without Hygraph**: Should show static data with error message
3. **Invalid URL**: Should show connection error

## 🔧 Troubleshooting

### Common Issues

#### 1. "Failed to load portfolio data"

- Check your `.env` file exists and has correct values
- Verify your Hygraph API URL is correct
- Ensure your Hygraph project is published

#### 2. "CORS Error"

- Check your Hygraph project settings
- Ensure your domain is allowed in CORS settings

#### 3. "Authentication Error"

- Verify your API token is correct
- Check if the token has proper permissions

#### 4. "No data found"

- Ensure you have content in your Hygraph project
- Check that content is published (not draft)
- Verify your GraphQL queries match your content model

### Debug Steps

1. Check browser console for error messages
2. Use the HygraphTest component to see detailed status
3. Test your API URL in Hygraph's GraphQL playground
4. Verify environment variables are loaded (check in test component)

## 📝 Next Steps

Once connected successfully:

1. **Remove Test Component**: Delete the HygraphTest section from Home.tsx
2. **Add Content**: Start adding projects and listings to your Hygraph CMS
3. **Upload Images**: Add project images to your Hygraph assets
4. **Customize**: Modify queries and data mapping as needed

## 🆘 Support

- [Hygraph Documentation](https://hygraph.com/docs)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

## 📁 File Structure

```
src/
├── lib/
│   ├── hygraph.ts          # GraphQL client setup
│   ├── hygraphService.ts   # Service layer with API methods
│   └── queries.ts          # GraphQL queries
├── components/
│   └── HygraphTest.tsx     # Test component (remove after setup)
└── pages/
    ├── Home.tsx            # Contains test component
    └── Portfolio.tsx       # Updated to use Hygraph data
```

The integration is now complete and ready to use! 🎉
