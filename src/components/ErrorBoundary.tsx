import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, Home, RefreshCw } from "lucide-react";
import React from "react";
import heroImage1 from "../assets/images/664b4eeaf8db6d1a167016dc_3-print-DJI_0301.jpg";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="min-h-screen bg-dark-900 text-dark-50 font-montserrat">
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

        {/* Error Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <AlertTriangle className="h-12 w-12 text-red-400" />
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-8"
            >
              <div className="inline-block mb-6">
                <span className="text-red-400 text-sm font-medium tracking-[0.3em] uppercase border border-red-400/30 px-6 py-2 rounded-full backdrop-blur-sm">
                  Something Went Wrong
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 leading-tight">
                <span className="font-playfair font-light">Unexpected</span>
                <span className="block text-red-400 font-playfair italic font-medium">
                  Error
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We apologize for the inconvenience. An unexpected error has
              occurred while loading this page. Our team has been notified and
              is working to resolve this issue.
            </motion.p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === "development" && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mb-12"
              >
                <details className="bg-dark-800/50 border border-red-500/30 rounded-lg p-6 max-w-4xl mx-auto backdrop-blur-sm">
                  <summary className="text-red-400 font-semibold cursor-pointer mb-4">
                    Error Details (Development Mode)
                  </summary>
                  <pre className="text-gray-300 text-sm text-left overflow-auto">
                    {error.message}
                    {error.stack && (
                      <>
                        {"\n\nStack Trace:"}
                        {"\n"}
                        {error.stack}
                      </>
                    )}
                  </pre>
                </details>
              </motion.div>
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={resetErrorBoundary}
              className="group relative inline-flex items-center px-12 py-5 bg-gradient-luxury text-luxury-charcoal-dark font-semibold rounded-none hover:shadow-2xl hover:shadow-luxury-gold/25 transition-all duration-500 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <RefreshCw className="mr-3 h-5 w-5" />
                Try Again
                <ArrowLeft className="ml-3 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-luxury-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>

            <button
              onClick={() => (window.location.href = "/")}
              className="group inline-flex items-center px-12 py-5 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-none hover:bg-luxury-gold hover:text-luxury-charcoal-dark transition-all duration-500 backdrop-blur-sm"
            >
              <Home className="mr-3 h-5 w-5" />
              Return Home
              <div className="ml-3 w-5 h-5 border-t-2 border-r-2 border-current transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
            </button>
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
                  <RefreshCw className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Try Again
                </h3>
                <p className="text-gray-400 text-sm">
                  Reload the page to retry
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <Home className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Go Home
                </h3>
                <p className="text-gray-400 text-sm">Return to our main page</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <AlertTriangle className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Report Issue
                </h3>
                <p className="text-gray-400 text-sm">
                  Contact us if this persists
                </p>
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
              Recovery
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
                Support?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              If you continue to experience issues, please don't hesitate to
              reach out to our support team. We're here to help ensure you have
              the best experience possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => (window.location.href = "/contact")}
                className="group inline-flex items-center px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-charcoal-dark font-semibold rounded-none transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
                <ArrowLeft className="ml-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => window.location.reload()}
                className="group inline-flex items-center px-8 py-4 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-none hover:bg-luxury-gold hover:text-luxury-charcoal-dark transition-all duration-300"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Page
                <div className="ml-2 w-4 h-4 border-t-2 border-r-2 border-current transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ErrorFallback;
