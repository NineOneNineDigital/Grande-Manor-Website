import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import heroImage1 from "../assets/images/664b4eeaf8db6d1a167016dc_3-print-DJI_0301.jpg";
import SEOHead from "../components/SEOHead";

const NotFound: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Page Not Found - Grande Manor Homes"
        description="The page you're looking for doesn't exist. Return to Grande Manor Homes to explore our luxury properties and services."
        keywords="404, page not found, Grande Manor Homes"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal-dark via-luxury-charcoal to-luxury-charcoal-light"></div>
          <img
            src={heroImage1}
            alt="Luxury estate with modern architecture"
            className="w-full h-full object-cover opacity-40 scale-105 hover:scale-100 transition-transform duration-[10s]"
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

        {/* 404 Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            {/* 404 Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-9xl md:text-[12rem] lg:text-[16rem] font-extralight text-white mb-8 leading-none">
                <span className="font-playfair font-light text-luxury-gold">
                  404
                </span>
              </h1>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-8"
            >
              <div className="inline-block mb-6">
                <span className="text-luxury-gold text-sm font-medium tracking-[0.3em] uppercase border border-luxury-gold/30 px-6 py-2 rounded-full backdrop-blur-sm">
                  Page Not Found
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 leading-tight">
                <span className="font-playfair font-light">Lost in</span>
                <span className="block text-luxury-gold font-playfair italic font-medium">
                  Luxury
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              The page you're looking for seems to have wandered off into the
              architectural blueprints. Let us guide you back to our collection
              of exceptional properties.
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/"
              className="group relative inline-flex items-center px-12 py-5 bg-gradient-luxury text-luxury-charcoal-dark font-semibold rounded-none hover:shadow-2xl hover:shadow-luxury-gold/25 transition-all duration-500 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Home className="mr-3 h-5 w-5" />
                Return Home
                <ArrowLeft className="ml-3 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-luxury-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>

            <Link
              to="/portfolio"
              className="group inline-flex items-center px-12 py-5 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-none hover:bg-luxury-gold hover:text-luxury-charcoal-dark transition-all duration-500 backdrop-blur-sm"
            >
              <Search className="mr-3 h-5 w-5" />
              Browse Properties
              <div className="ml-3 w-5 h-5 border-t-2 border-r-2 border-current transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
            </Link>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <Home className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Home</h3>
                <p className="text-gray-400 text-sm">Return to our main page</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <Search className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Portfolio
                </h3>
                <p className="text-gray-400 text-sm">Explore our properties</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <ArrowLeft className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Contact
                </h3>
                <p className="text-gray-400 text-sm">Get in touch with us</p>
              </div>
            </div>
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
              Navigate
            </span>
            <div className="w-px h-12 bg-luxury-gold animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-luxury-charcoal relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              <span className="font-playfair">Need</span>{" "}
              <span className="text-luxury-gold font-playfair italic">
                Assistance?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Our team is here to help you find exactly what you're looking for.
              Whether you're searching for a specific property or need guidance
              on our services, we're just a call away.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-charcoal-dark font-semibold rounded-none transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowLeft className="ml-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                to="/about"
                className="group inline-flex items-center px-8 py-4 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-none hover:bg-luxury-gold hover:text-luxury-charcoal-dark transition-all duration-300"
              >
                Learn About Us
                <div className="ml-2 w-4 h-4 border-t-2 border-r-2 border-current transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
