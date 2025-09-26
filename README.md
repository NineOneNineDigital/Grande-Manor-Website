# Grande Manor Website

A luxury real estate website built with React, TypeScript, and Vite, featuring Hygraph CMS integration for dynamic content management.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Hygraph account and project

### Installation

1. **Clone and install dependencies:**

   ```bash
   git clone <repository-url>
   cd "Grande Manor Website"
   npm install
   ```

2. **Configure Hygraph CMS:**

   ```bash
   # Run the setup script
   node setup-hygraph.js

   # Or test your configuration
   node test-hygraph.js
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Visit your website:**
   - Open http://localhost:5175 in your browser
   - Check the homepage for the Hygraph connection test
   - Visit the Portfolio page to see your projects

## 🏗️ Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Hygraph CMS Integration**: Dynamic content management for projects and listings
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Smooth Animations**: Framer Motion for elegant transitions
- **Type Safety**: Full TypeScript support throughout

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── SEOHead.tsx     # SEO meta tags
│   └── HygraphTest.tsx # CMS connection test
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Portfolio.tsx   # Projects showcase
│   ├── About.tsx       # Company information
│   ├── Services.tsx    # Services offered
│   └── Contact.tsx     # Contact information
├── lib/                # Utility libraries
│   ├── hygraph.ts      # GraphQL client
│   ├── hygraphService.ts # CMS service layer
│   └── queries.ts      # GraphQL queries
├── data/               # Static data
│   ├── portfolio.ts    # Fallback project data
│   └── listings.ts     # Fallback listing data
└── assets/             # Images and media
    ├── images/         # Project images
    └── logos/          # Brand assets
```

## 🔧 Hygraph CMS Setup

### 1. Get Your Credentials

1. Go to [Hygraph Dashboard](https://app.hygraph.com)
2. Select your project
3. Navigate to **Project Settings** → **API Access**
4. Copy your **Content API URL** and **Permanent Auth Token**

### 2. Configure Environment

```bash
# Run the interactive setup
node setup-hygraph.js

# Or manually create .env file
echo "VITE_HYGRAPH_API_URL=your-api-url" > .env
echo "VITE_HYGRAPH_API_TOKEN=your-token" >> .env
```

### 3. Content Models

Your Hygraph project should have these content models:

**Project Model:**

- `projectName` (Single line text, Required)
- `projectType` (Enumeration: custom-build, renovation, estate, penthouse)
- `yearComplete` (Number: Int)
- `location` (Single line text)
- `projectDescription` (Rich text)
- `bedrooms` (Number: Int)
- `bathrooms` (Float)
- `squareFootage` (Number: Int)
- `lotSize` (Float)
- `mainImage` (Asset picker)
- `projectImages` (Asset picker, Multiple values)
- `awardsAndRecognition` (Rich text)

**Listing Model:**

- `projectTitle` (Single line text, Required)
- `projectLocation` (Single line text)
- `buildDescription` (Rich text)
- `buildStage` (Enumeration: planning, in-construction, completed)
- `expectedCompletion` (Date)
- `bedrooms` (Number: Int)
- `bathrooms` (Float)
- `squareFeet` (Number: Int)
- `lotSize` (Float)
- `images` (Asset picker)

## 🧪 Testing

### Test Hygraph Connection

```bash
# Test configuration
node test-hygraph.js

# Or visit the homepage to see the connection test component
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Customization

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Colors**: Defined in `tailwind.config.js`
- **Dark Theme**: Built-in dark mode support

### Content

- **Hygraph CMS**: Manage projects and listings dynamically
- **Static Fallback**: Uses local data if CMS is unavailable
- **Image Optimization**: Responsive images with lazy loading

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Large touch targets and smooth interactions

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

Make sure to set these in your deployment platform:

- `VITE_HYGRAPH_API_URL`
- `VITE_HYGRAPH_API_TOKEN` (optional)

## 🔍 SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD structured data
- **Open Graph**: Social media sharing optimization
- **Performance**: Optimized images and code splitting

## 🛠️ Troubleshooting

### Common Issues

**Hygraph Connection Failed:**

- Check your `.env` file has correct API URL
- Verify your Hygraph project is published
- Test your API URL in Hygraph's GraphQL playground

**No Projects Showing:**

- Ensure you have published content in Hygraph
- Check that your content models match the expected schema
- Verify your API token has proper permissions

**Build Errors:**

- Run `npm run lint` to check for code issues
- Ensure all environment variables are set
- Check that all dependencies are installed

## 📚 Documentation

- [Hygraph Documentation](https://hygraph.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Check the troubleshooting section above
- Review the Hygraph connection guide
- Open an issue in the repository

---

**Built with ❤️ for Grande Manor Homes**
