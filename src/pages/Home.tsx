import { motion } from "framer-motion";
import { ArrowRight, Award, Star, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import interiorImage1 from "../assets/images/664b4ee81818d3c38c5920e7_48-print-DSC_7650.jpg";
import heroImage1 from "../assets/images/664b4eeaf8db6d1a167016dc_3-print-DJI_0301.jpg";
import SEOHead from "../components/SEOHead";
import { listings } from "../data/listings";

const Home: React.FC = () => {
  const featuredListings = listings.slice(0, 3);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Grande Manor Homes exceeded our expectations. Their attention to detail and commitment to quality is unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Real Estate Investor",
      content:
        "Working with Grande Manor has been exceptional. They understand luxury and deliver beyond expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Designer",
      content:
        "The craftsmanship and architectural vision of Grande Manor Homes is truly remarkable. A pleasure to work with.",
      rating: 5,
    },
  ];

  const stats = [
    { label: "Luxury Homes Built", value: "200+" },
    { label: "Years of Excellence", value: "15+" },
    { label: "Satisfied Clients", value: "500+" },
    { label: "Awards Won", value: "25+" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Grande Manor Homes",
    description:
      "Luxury real estate and custom home building services specializing in timeless design and modern living.",
    url: "https://grandemanorhomes.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Luxury Lane",
      addressLocality: "Beverly Hills",
      addressRegion: "CA",
      postalCode: "90210",
      addressCountry: "US",
    },
    telephone: "(555) 123-4567",
    email: "info@grandemanorhomes.com",
  };

  return (
    <div>
      <SEOHead
        title="Grande Manor Homes"
        description="Grande Manor Homes specializes in luxury real estate and custom home building. Discover timeless design and modern living with our exclusive property listings and architectural services."
        keywords="luxury real estate, custom homes, Beverly Hills, luxury properties, home builder"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal-dark via-luxury-charcoal to-luxury-charcoal-light"></div>
          <img
            src={heroImage1}
            alt="Luxury estate with modern architecture"
            className="w-full h-full object-cover opacity-60 scale-105 hover:scale-100 transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-luxury-gold rounded-full animate-float opacity-60"></div>
          <div
            className="absolute top-3/4 right-1/3 w-1 h-1 bg-luxury-gold-light rounded-full animate-float opacity-40"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-luxury-gold rounded-full animate-float opacity-50"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-block mb-6">
              <span className="text-primary-500 text-sm font-medium tracking-[0.3em] uppercase border border-primary-500/30 px-6 py-2 rounded-full backdrop-blur-sm">
                Premium Construction
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white mb-8 leading-none">
              <span className="font-playfair font-light">Superior</span>
              <span className="block text-luxury-gold font-playfair italic font-medium">
                Craftsmanship
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-montserrat font-extralight mt-4">
                Luxury Homes
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Where master craftsmanship meets luxury construction. Building your
            dream home with four generations of expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center px-12 py-5 bg-gradient-luxury text-luxury-charcoal-dark font-semibold rounded-none hover:shadow-2xl hover:shadow-luxury-gold/25 transition-all duration-500 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-luxury-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>

            <Link
              to="/about"
              className="group inline-flex items-center px-12 py-5 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-none hover:bg-luxury-gold hover:text-luxury-charcoal-dark transition-all duration-500 backdrop-blur-sm"
            >
              Learn More
              <div className="ml-3 w-5 h-5 border-t-2 border-r-2 border-current transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center text-luxury-gold">
            <span className="text-xs font-medium tracking-widest uppercase mb-2">
              Scroll
            </span>
            <div className="w-px h-12 bg-luxury-gold animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-luxury-charcoal relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-5xl md:text-6xl font-extralight text-luxury-gold mb-4 group-hover:text-luxury-gold-light transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-light tracking-wide uppercase text-sm">
                  {stat.label}
                </div>
                <div className="w-12 h-px bg-luxury-gold mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-32 bg-luxury-charcoal-dark relative">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6">
              <span className="text-luxury-gold text-sm font-medium tracking-[0.3em] uppercase border border-luxury-gold/30 px-6 py-2 rounded-full">
                Available Now
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extralight text-white mb-8 leading-tight">
              <span className="font-playfair font-light">Available</span>
              <span className="block text-luxury-gold font-playfair italic font-medium">
                Opportunities
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Exclusive lots and homes currently under construction, available
              for immediate purchase or custom development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {featuredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-dark-800 border border-primary-500/10 overflow-hidden hover:border-primary-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-primary-500 text-dark-900 px-4 py-2 text-sm font-semibold tracking-wide">
                    ${listing.price.toLocaleString()}
                  </div>
                  <div className="absolute top-6 right-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        listing.status === "Available"
                          ? "bg-green-500 text-white"
                          : listing.status === "Under Construction"
                          ? "bg-orange-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {listing.status}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-playfair font-medium text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                      {listing.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {listing.location}
                    </p>
                    {listing.completionDate && (
                      <p className="text-primary-500 text-sm">
                        Expected Completion: {listing.completionDate}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between text-sm text-gray-400 font-light mb-4">
                    {listing.sqft > 0 ? (
                      <>
                        <span>{listing.bedrooms} Bedrooms</span>
                        <span>{listing.bathrooms} Bathrooms</span>
                        <span>{listing.sqft.toLocaleString()} sqft</span>
                      </>
                    ) : (
                      <>
                        <span className="text-luxury-gold">
                          Development Opportunity
                        </span>
                        <span className="text-primary-500">
                          Development Opportunity
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {listing.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-luxury-gold/20">
                    <div className="mt-6 pt-6 border-t border-primary-500/20">
                      <button className="w-full text-primary-500 hover:text-primary-400 font-medium tracking-wide transition-colors duration-300 group-hover:translate-x-2 transform transition-transform">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="group inline-flex items-center px-12 py-5 border-2 border-luxury-gold text-luxury-gold font-semibold hover:bg-luxury-gold hover:text-luxury-charcoal-dark transition-all duration-500"
            >
              Inquire About Availability
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                <span className="font-playfair">Our Construction</span>{" "}
                <span className="text-primary-500 font-playfair italic">
                  Excellence
                </span>
              </h2>
              <p className="text-lg text-dark-300 mb-6">
                At Grande Manor Homes, we believe that exceptional construction
                isn't just about premium materials or grand scale—it's about
                bringing architectural visions to life with uncompromising
                craftsmanship and attention to detail.
              </p>
              <p className="text-lg text-dark-300 mb-8">
                Our approach combines time-tested construction techniques with
                modern building innovations, ensuring that every home we build
                meets the highest standards of quality and durability for
                generations to come.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-primary-500" />
                  <span className="text-dark-200">
                    Award-Winning Construction
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-primary-500" />
                  <span className="text-dark-200">Master Craftsmen</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={interiorImage1}
                alt="Modern luxury home interior"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              <span className="font-playfair">Client</span>{" "}
              <span className="text-primary-500 font-playfair italic">
                Testimonials
              </span>
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience with
              Grande Manor Homes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-800 p-6 rounded-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-primary-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-dark-200 mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-dark-400">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
