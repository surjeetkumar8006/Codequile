import { motion } from 'framer-motion';
import { staggerContainer, cardHover } from '../utils/animationVariants';
import { useRef } from 'react';

const portfolioItems = [
  {
    title: "Social Media Management",
    description: "Strategic social media management to boost your brand's online presence and engagement.",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    stats: [
      { label: "Engagement Rate", value: "+150%" },
      { label: "Follower Growth", value: "+200%" },
    ]
  },
  {
    title: "IT Consulting",
    description: "Expert IT consulting services to optimize your technology infrastructure and digital transformation.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { label: "Cost Reduction", value: "35%" },
      { label: "Efficiency Gain", value: "45%" },
    ]
  },
  {
    title: "Web Development",
    description: "Custom web solutions built with cutting-edge technologies for optimal performance.",
    category: "Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
    stats: [
      { label: "Load Time", value: "<1s" },
      { label: "User Satisfaction", value: "98%" },
    ]
  },
  {
    title: "Digital Strategy",
    description: "Comprehensive digital strategies to help your business thrive in the digital age.",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    stats: [
      { label: "ROI Increase", value: "85%" },
      { label: "Growth Rate", value: "120%" },
    ]
  }
];

const Portfolio = () => {
  const ref = useRef(null);

  return (
    <section id="portfolio" className="section bg-black py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Our <span className="text-yellow-400">Portfolio</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Explore our successful projects and see how we've helped businesses transform their digital presence.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                whileHover="hover"
                className="group relative bg-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-yellow-400/10 hover:border-yellow-400/30 transition-colors duration-300"
              >
                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="p-8 relative z-10">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="inline-block px-4 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium mb-4"
                  >
                    {item.category}
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    className="text-2xl font-bold text-white mb-4"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-gray-400 mb-6"
                  >
                    {item.description}
                  </motion.p>

                  <div className="grid grid-cols-2 gap-4">
                    {item.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 + statIndex * 0.1 }}
                        className="bg-black/30 rounded-lg p-4"
                      >
                        <p className="text-yellow-400 text-2xl font-bold mb-1">
                          {stat.value}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="mt-6"
                  >
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      View Case Study
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 