import { motion } from "framer-motion";
import { Heart, Shield, Star, Users } from "lucide-react";
import React from "react";
import interiorImage1 from "../assets/images/664b4ee81818d3c38c5920e7_48-print-DSC_7650.jpg";
import propertyImage1 from "../assets/images/664b4ef6f40b9676c238c5ef_GrandeManorLot17Waterstone12.jpg";
import propertyImage2 from "../assets/images/664b4efb9829d6b151e3b05f_GrandeManorLot17Waterstone11.jpg";
import SEOHead from "../components/SEOHead";

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Excellence",
      description:
        "We pursue perfection in every detail, from foundation to finish, ensuring superior construction quality.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our passion for craftsmanship and building drives us to construct homes that inspire and delight.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with clients, architects, and subcontractors to bring building plans to life.",
    },
    {
      icon: Star,
      title: "Innovation",
      description:
        "We embrace new construction technologies and building methods while honoring proven techniques.",
    },
  ];

  return (
    <div>
      <SEOHead
        title="About Grande Manor Homes"
        description="Learn about Grande Manor Homes' history, mission, and commitment to creating exceptional luxury residences. Discover our design philosophy and values."
        keywords="luxury home builder, custom homes, architecture, design philosophy, Beverly Hills builder"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={propertyImage1}
            alt="Architectural blueprints and design tools"
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
              About <span className="text-primary-500">Grande Manor</span>
            </h1>
            <p className="text-xl md:text-2xl text-dark-200 max-w-3xl mx-auto">
              For over 4 generations, we've been crafting extraordinary homes
              that blend timeless elegance with modern innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
                Our <span className="text-primary-500">Mission</span>
              </h2>
              <p className="text-lg text-dark-300 mb-6">
                At Grande Manor Homes, our mission is to build exceptional homes
                that bring architectural visions to life through superior
                craftsmanship and construction excellence. We believe that
                quality construction is the foundation of every dream
                home—creating spaces that stand the test of time and exceed
                expectations.
              </p>
              <p className="text-lg text-dark-300 mb-8">
                Every project we undertake combines time-tested construction
                techniques with modern building innovations, ensuring structural
                integrity, energy efficiency, and lasting beauty. Our skilled
                craftsmen take pride in delivering homes that families will
                cherish for generations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    200+
                  </div>
                  <div className="text-dark-300">Premium Homes Built</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    25+
                  </div>
                  <div className="text-dark-300">Design Awards</div>
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
                alt="Luxury home interior with modern design"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core <span className="text-primary-500">Values</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and
              every home we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-dark-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={propertyImage2}
                alt="Modern architectural design studio"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                All In The <span className="text-primary-500">Family</span>
              </h2>
              <p className="text-lg text-dark-300 mb-6">
                Grande Manor Homes has been a family-owned construction business
                for four generations, with each generation building upon the
                foundation of quality craftsmanship and construction excellence
                established by their predecessors.
              </p>
              <p className="text-lg text-dark-300 mb-8">
                What began as a small residential construction company has
                evolved into one of the region's most respected luxury home
                builders. The Grande family's commitment to superior
                construction quality, attention to detail, and client
                satisfaction has remained constant throughout the decades, while
                their building techniques and project capabilities have expanded
                with each generation.
              </p>
              <p className="text-lg text-dark-300 mb-8">
                Today, Chris Davis and Matt Cyrus lead the company with the same
                dedication to construction excellence that have been established
                by the previous generations. The family's deep roots in the
                construction industry, combined with their commitment to
                innovation and quality, ensures that every Grande Manor home is
                built to the highest standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
