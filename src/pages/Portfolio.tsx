import { motion } from "framer-motion";
import {
  Award,
  Bath,
  Bed,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Square,
  X,
} from "lucide-react";
import React, { useState } from "react";
import heroImage1 from "../assets/images/664b4eeaf8db6d1a167016dc_3-print-DJI_0301.jpg";
import SEOHead from "../components/SEOHead";
import { getProjectsByCategory, portfolioProjects } from "../data/portfolio";

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "custom-build", label: "Custom Builds" },
    { id: "renovation", label: "Renovations" },
    { id: "estate", label: "Estates" },
    { id: "penthouse", label: "Penthouses" },
  ];

  const filteredProjects = getProjectsByCategory(selectedCategory);
  const currentProject = selectedProject
    ? portfolioProjects.find((p) => p.id === selectedProject)
    : null;

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) =>
        prev === currentProject.images.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentProject.images.gallery.length - 1 : prev - 1
      );
    }
  };

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio - Grande Manor Homes",
    description:
      "Explore our portfolio of luxury custom homes, renovations, and estates built by Grande Manor Homes.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: portfolioProjects.map((project, index) => ({
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
          <img
            src={heroImage1}
            alt="Luxury home portfolio showcase"
            className="w-full h-full object-cover"
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
                  <img
                    src={project.images.main}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
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

              {/* Image Gallery */}
              <div className="relative">
                <img
                  src={currentProject.images.gallery[currentImageIndex]}
                  alt={`${currentProject.title} - Image ${
                    currentImageIndex + 1
                  }`}
                  className="w-full h-96 object-cover"
                />

                {currentProject.images.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark-900/80 hover:bg-dark-900 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark-900/80 hover:bg-dark-900 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-dark-900/80 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} /{" "}
                      {currentProject.images.gallery.length}
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
