import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Bath,
  Bed,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Loader2,
  MapPin,
  Square,
  X,
} from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import heroImage1 from "../assets/images/664b4eeaf8db6d1a167016dc_3-print-DJI_0301.jpg";
import SEOHead from "../components/SEOHead";
// Import Hygraph service for CMS integration
import { HygraphProject, hygraphService } from "../lib/hygraphService";

// Image optimization utilities
const optimizeImageUrl = (
  url: string,
  width?: number,
  quality: number = 80
) => {
  if (!url) return url;

  // For Hygraph images, add transformation parameters
  if (url.includes("hygraph")) {
    const params = new URLSearchParams();
    if (width) params.set("w", width.toString());
    params.set("q", quality.toString());
    params.set("f", "webp"); // Use WebP format for better compression

    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}${params.toString()}`;
  }

  return url;
};

// Preload images utility
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Optimized Image Component with lazy loading
const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  width?: number;
  quality?: number;
  priority?: boolean;
  objectFit?: "cover" | "contain";
  onLoad?: () => void;
  onError?: () => void;
}> = ({
  src,
  alt,
  className,
  width,
  quality = 80,
  priority = false,
  objectFit = "contain",
  onLoad,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(priority);

  const imgRef = React.useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Load optimized image when in view
  useEffect(() => {
    if (isInView && src) {
      const optimizedSrc = optimizeImageUrl(src, width, quality);
      setImageSrc(optimizedSrc);
    }
  }, [isInView, src, width, quality]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  return (
    <div className={`relative ${className}`} ref={imgRef}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-800">
          <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-800 text-dark-400">
          <div className="text-center">
            <Square className="h-12 w-12 mx-auto mb-2" />
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-${objectFit} transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
        />
      )}
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(
    new Set()
  );

  // Hygraph CMS Integration
  const [hygraphProjects, setHygraphProjects] = useState<HygraphProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHygraphData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch portfolio data from Hygraph
        const portfolioData = await hygraphService.getPortfolioData();
        setHygraphProjects(portfolioData.projects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Hygraph data:", error);

        // Provide more specific error information
        let errorMessage = "Failed to load portfolio data. ";
        if (error instanceof Error) {
          if (error.message.includes("400")) {
            errorMessage +=
              "The GraphQL query failed - this usually means your content model fields don't match the expected schema.";
          } else if (error.message.includes("401")) {
            errorMessage += "Authentication failed - check your API token.";
          } else if (error.message.includes("403")) {
            errorMessage += "Access denied - check your API permissions.";
          } else if (error.message.includes("404")) {
            errorMessage += "API endpoint not found - check your API URL.";
          } else {
            errorMessage += `Error: ${error.message}`;
          }
        }

        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchHygraphData();
  }, []);

  // Helper function to map Hygraph data to the expected format
  const mapHygraphProjectToPortfolio = (project: HygraphProject) => {
    // Since we don't have description or images from Hygraph, use defaults
    const features = [
      "Custom luxury home design",
      "Premium materials and finishes",
      "Modern architectural features",
      "Energy-efficient systems",
      "Smart home technology",
      "Landscaped outdoor spaces",
    ];

    // Use actual images from Hygraph if available, otherwise fallback to default
    const projectImages = [];

    // Add main image if available
    if (project.mainImage?.url) {
      projectImages.push(project.mainImage.url);
    }

    // Add project images if available
    if (project.projectImages && project.projectImages.length > 0) {
      projectImages.push(...project.projectImages.map((img) => img.url));
    }

    // Use fallback if no images available
    const finalImages = projectImages.length > 0 ? projectImages : [heroImage1];

    return {
      id: project.id,
      title: project.projectName || "Untitled Project",
      location: project.location || "Location TBD",
      year: project.yearComplete || new Date().getFullYear(),
      category: (() => {
        // Map Hygraph projectType to expected category format
        const typeMapping: { [key: string]: string } = {
          customBuild: "custom-build",
          "custom-build": "custom-build",
          renovation: "renovation",
        };
        return typeMapping[project.projectType] || "custom-build";
      })(),
      description:
        "A beautiful custom home built with attention to detail and quality craftsmanship.",
      features: features,
      specs: {
        sqft: project.squareFootage || 0,
        bedrooms: project.bedrooms || 0,
        bathrooms: project.bathrooms || 0,
        lotSize: project.lotSize ? `${project.lotSize} acres` : undefined,
      },
      images: {
        main: finalImages[0], // Use first image as main
        gallery: finalImages, // Use all available images
      },
      awards: [], // Not available in Hygraph
    };
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "custom-build", label: "Custom Builds" },
    { id: "renovation", label: "Renovations" },
  ];

  // Use only Hygraph data
  const allProjects = hygraphProjects.map(mapHygraphProjectToPortfolio);

  const filteredProjects =
    selectedCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  const currentProject = selectedProject
    ? allProjects.find((p) => p.id === selectedProject)
    : null;

  // Enhanced carousel navigation with preloading
  const nextImage = useCallback(async () => {
    if (currentProject && !isTransitioning) {
      setIsTransitioning(true);
      const nextIndex =
        currentImageIndex === currentProject.images.gallery.length - 1
          ? 0
          : currentImageIndex + 1;

      // Preload next image
      const nextImageUrl = optimizeImageUrl(
        currentProject.images.gallery[nextIndex],
        1200,
        85
      );
      if (!preloadedImages.has(nextImageUrl)) {
        try {
          await preloadImage(nextImageUrl);
          setPreloadedImages((prev) => new Set([...prev, nextImageUrl]));
        } catch (error) {
          console.warn("Failed to preload next image:", error);
        }
      }

      setCurrentImageIndex(nextIndex);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [currentProject, currentImageIndex, isTransitioning, preloadedImages]);

  const prevImage = useCallback(async () => {
    if (currentProject && !isTransitioning) {
      setIsTransitioning(true);
      const prevIndex =
        currentImageIndex === 0
          ? currentProject.images.gallery.length - 1
          : currentImageIndex - 1;

      // Preload previous image
      const prevImageUrl = optimizeImageUrl(
        currentProject.images.gallery[prevIndex],
        1200,
        85
      );
      if (!preloadedImages.has(prevImageUrl)) {
        try {
          await preloadImage(prevImageUrl);
          setPreloadedImages((prev) => new Set([...prev, prevImageUrl]));
        } catch (error) {
          console.warn("Failed to preload previous image:", error);
        }
      }

      setCurrentImageIndex(prevIndex);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [currentProject, currentImageIndex, isTransitioning, preloadedImages]);

  // Preload adjacent images when project is selected
  useEffect(() => {
    if (currentProject && currentProject.images.gallery.length > 1) {
      const preloadAdjacentImages = async () => {
        const imagesToPreload = [];

        // Preload next image
        const nextIndex =
          currentImageIndex === currentProject.images.gallery.length - 1
            ? 0
            : currentImageIndex + 1;
        imagesToPreload.push(
          optimizeImageUrl(currentProject.images.gallery[nextIndex], 1200, 85)
        );

        // Preload previous image
        const prevIndex =
          currentImageIndex === 0
            ? currentProject.images.gallery.length - 1
            : currentImageIndex - 1;
        imagesToPreload.push(
          optimizeImageUrl(currentProject.images.gallery[prevIndex], 1200, 85)
        );

        // Preload images in background
        Promise.allSettled(
          imagesToPreload.map((url) => preloadImage(url))
        ).then(() => {
          setPreloadedImages((prev) => new Set([...prev, ...imagesToPreload]));
        });
      };

      preloadAdjacentImages();
    }
  }, [currentProject, currentImageIndex]);

  const openProject = (projectId: string | number) => {
    setSelectedProject(projectId.toString());
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsTransitioning(false);
    document.body.style.overflow = "unset";
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedProject || isTransitioning) return;

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          prevImage();
          break;
        case "ArrowRight":
          event.preventDefault();
          nextImage();
          break;
        case "Escape":
          event.preventDefault();
          closeProject();
          break;
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedProject, isTransitioning, nextImage, prevImage]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio - Grande Manor Homes",
    description:
      "Explore our portfolio of luxury custom homes, renovations, and estates built by Grande Manor Homes.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allProjects.map((project, index) => ({
        "@type": "CreativeWork",
        position: index + 1,
        name: project.title,
        description: project.description,
        dateCreated: project.year.toString(),
        locationCreated: project.location,
      })),
    },
  };

  return (
    <div>
      <SEOHead
        title="Portfolio - Luxury Home Builds | Grande Manor Homes"
        description="Explore our portfolio of award-winning luxury custom homes, renovations, and estates. See our finest architectural achievements and craftsmanship."
        keywords="luxury home portfolio, custom home builds, luxury renovations, architectural portfolio, Beverly Hills homes"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={heroImage1}
            alt="Luxury home portfolio showcase"
            className="w-full h-full"
            width={1920}
            quality={90}
            priority={true}
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-dark-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <span className="text-primary-500 text-sm font-medium tracking-[0.3em] uppercase border border-primary-500/30 px-6 py-2 rounded-full backdrop-blur-sm">
                Our Work
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white mb-8 leading-none">
              <span className="font-playfair font-light">Our</span>
              <span className="block text-primary-500 font-playfair italic font-medium">
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-dark-200 max-w-3xl mx-auto">
              Discover our collection of award-winning premium homes, each
              crafted with uncompromising attention to detail and architectural
              excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary-500 text-dark-900"
                    : "bg-dark-700 text-dark-200 hover:bg-dark-600 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
              <p className="text-dark-300 mt-4">Loading portfolio...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-400 mb-4">{error}</p>
                <p className="text-dark-400 text-sm">
                  Using static data as fallback. Please check your Hygraph
                  configuration.
                </p>
              </div>
            </div>
          )}

          {!loading && !error && (
            <div>
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                      className="group cursor-pointer"
                      onClick={() => openProject(project.id)}
                    >
                      <div className="relative overflow-hidden rounded-lg bg-dark-800">
                        <OptimizedImage
                          src={project.images.main}
                          alt={project.title}
                          className="w-full h-80 group-hover:scale-110 transition-transform duration-700"
                          width={600}
                          quality={85}
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent"></div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary-500/90 text-dark-900 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                            {project.category.replace("-", " ")}
                          </span>
                        </div>

                        {/* Awards Badge */}
                        {project.awards && project.awards.length > 0 && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-dark-900/80 backdrop-blur-sm rounded-full p-2">
                              <Award className="h-5 w-5 text-primary-500" />
                            </div>
                          </div>
                        )}

                        {/* Project Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-playfair font-medium text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-dark-300 mb-3">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="mr-4">{project.location}</span>
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-dark-400">
                            <div className="flex items-center">
                              <Square className="h-4 w-4 mr-1" />
                              {project.specs.sqft.toLocaleString()} sqft
                            </div>
                            <div className="flex items-center">
                              <Bed className="h-4 w-4 mr-1" />
                              {project.specs.bedrooms}
                            </div>
                            <div className="flex items-center">
                              <Bath className="h-4 w-4 mr-1" />
                              {project.specs.bathrooms}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 mx-auto mb-6 bg-dark-800 rounded-full flex items-center justify-center">
                      <Square className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {hygraphProjects.length === 0
                        ? "No Projects Available"
                        : `No ${
                            selectedCategory === "all"
                              ? ""
                              : categories.find(
                                  (c) => c.id === selectedCategory
                                )?.label || ""
                          } Projects Found`}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {hygraphProjects.length === 0
                        ? "We're working on adding our latest projects. Please check back soon!"
                        : "Try selecting a different category to see more projects."}
                    </p>
                    {selectedCategory !== "all" && (
                      <button
                        onClick={() => setSelectedCategory("all")}
                        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                      >
                        View All Projects
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && currentProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-dark-900/95 backdrop-blur-sm overflow-y-auto"
        >
          <div className="min-h-screen p-4 flex items-center justify-center">
            <div className="max-w-6xl w-full bg-dark-800 rounded-lg overflow-hidden">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-dark-700">
                <div>
                  <h2 className="text-3xl font-playfair font-medium text-white">
                    {currentProject.title}
                  </h2>
                  <div className="flex items-center text-dark-300 mt-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="mr-4">{currentProject.location}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{currentProject.year}</span>
                  </div>
                </div>
                <button
                  onClick={closeProject}
                  className="text-dark-400 hover:text-white transition-colors duration-200"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>

              {/* Enhanced Image Gallery */}
              <div className="relative overflow-hidden">
                <div className="relative flex items-center justify-center bg-dark-900 min-h-[24rem] max-h-[44rem]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <OptimizedImage
                        src={currentProject.images.gallery[currentImageIndex]}
                        alt={`${currentProject.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        className="max-w-full max-h-full"
                        width={1200}
                        quality={90}
                        priority={true}
                        objectFit="contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {currentProject.images.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      disabled={isTransitioning}
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark-900/80 hover:bg-dark-900 text-white p-3 rounded-full transition-all duration-200 ${
                        isTransitioning
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:scale-110"
                      }`}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      disabled={isTransitioning}
                      className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark-900/80 hover:bg-dark-900 text-white p-3 rounded-full transition-all duration-200 ${
                        isTransitioning
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:scale-110"
                      }`}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-dark-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} /{" "}
                      {currentProject.images.gallery.length}
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {currentProject.images.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            if (!isTransitioning) {
                              setIsTransitioning(true);
                              setCurrentImageIndex(index);
                              setTimeout(() => setIsTransitioning(false), 300);
                            }
                          }}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentImageIndex
                              ? "bg-primary-500 scale-125"
                              : "bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Project Description
                    </h3>
                    <p className="text-dark-300 mb-6 leading-relaxed">
                      {currentProject.description}
                    </p>

                    <h3 className="text-xl font-semibold text-white mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {currentProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-dark-300"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Project Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-dark-700 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary-500">
                          {currentProject.specs.sqft.toLocaleString()}
                        </div>
                        <div className="text-dark-400 text-sm">Square Feet</div>
                      </div>
                      <div className="bg-dark-700 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary-500">
                          {currentProject.specs.bedrooms}
                        </div>
                        <div className="text-dark-400 text-sm">Bedrooms</div>
                      </div>
                      <div className="bg-dark-700 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary-500">
                          {currentProject.specs.bathrooms}
                        </div>
                        <div className="text-dark-400 text-sm">Bathrooms</div>
                      </div>
                      {currentProject.specs.lotSize && (
                        <div className="bg-dark-700 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-primary-500">
                            {currentProject.specs.lotSize}
                          </div>
                          <div className="text-dark-400 text-sm">Lot Size</div>
                        </div>
                      )}
                    </div>

                    {currentProject.awards &&
                      currentProject.awards.length > 0 && (
                        <>
                          <h3 className="text-xl font-semibold text-white mb-4">
                            Awards & Recognition
                          </h3>
                          <ul className="space-y-2">
                            {currentProject.awards.map((award, index) => (
                              <li
                                key={index}
                                className="flex items-center text-dark-300"
                              >
                                <Award className="h-4 w-4 text-primary-500 mr-3" />
                                {award}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;
