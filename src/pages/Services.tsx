import { motion } from "framer-motion";
import { ArrowRight, Home, Wrench } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import interiorImage1 from "../assets/images/664b4ee81818d3c38c5920e7_48-print-DSC_7650.jpg";
import heroImage1 from "../assets/images/664b4eeaf8db6d1a167016dc_3-print-DJI_0301.jpg";
import SEOHead from "../components/SEOHead";

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Premium Home Building",
      description:
        "From initial concept to final walkthrough, we create bespoke premium residences tailored to your unique vision and lifestyle requirements.",
      features: [
        "Personalized design consultation",
        "Premium material selection",
        "Master craftsmanship",
        "Project management excellence",
        "Quality assurance guarantees",
      ],
      image: heroImage1,
    },
    {
      icon: Wrench,
      title: "Renovation & Expansion",
      description:
        "Transform your existing property with our comprehensive renovation services, adding value and enhancing your living experience.",
      features: [
        "Historic home restoration",
        "Modern system upgrades",
        "Structural modifications",
        "Kitchen and bathroom remodeling",
        "Outdoor living spaces",
      ],
      image: interiorImage1,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "We begin with an in-depth consultation to understand your vision, lifestyle, and requirements.",
    },
    {
      step: "02",
      title: "Design Development",
      description:
        "Our architects create detailed plans and 3D visualizations to bring your vision to life.",
    },
    {
      step: "03",
      title: "Permit & Planning",
      description:
        "We handle all regulatory requirements and permit applications for a smooth approval process.",
    },
    {
      step: "04",
      title: "Construction",
      description:
        "Our master craftsmen bring your dream home to reality with meticulous attention to detail.",
    },
    {
      step: "05",
      title: "Final Delivery",
      description:
        "We conduct thorough quality inspections and provide comprehensive warranty coverage.",
    },
  ];

  return (
    <div>
      <SEOHead
        title="Luxury Home Building Services"
        description="Grande Manor Homes offers comprehensive luxury home services including custom building, architectural planning, interior design, renovations, and land acquisition support."
        keywords="custom home builder, luxury home services, architectural planning, interior design, home renovation, Beverly Hills"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage1}
            alt="Luxury home construction and design"
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
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              Our <span className="text-primary-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-dark-200 max-w-3xl mx-auto mb-8">
              Comprehensive luxury home services from concept to completion,
              delivered with uncompromising quality and attention to detail.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-dark-900 font-semibold rounded-lg hover:bg-primary-400 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              What We <span className="text-primary-500">Offer</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              Our comprehensive suite of services covers every aspect of luxury
              home creation and enhancement.
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-dark-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-dark-200"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Our <span className="text-primary-500">Process</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              A proven, systematic approach that ensures exceptional results and
              a seamless experience from start to finish.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-500/30 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-dark-900 font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-dark-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
