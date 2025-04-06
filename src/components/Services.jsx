import { motion } from 'framer-motion';
import useScrollAnimation from '../utils/useScrollAnimation';
import { staggerContainer, scaleUp, cardHover, neonGlow, rotateElement, pulse } from '../utils/animationVariants';

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging digital experiences.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence.",
    icon: "📈",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
  },
];

const Services = () => {
  const [ref, isInView] = useScrollAnimation();

  return (
    <section id="services" className="section bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
          
          {/* Rotating elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-accent/20"
            variants={rotateElement}
            initial="hidden"
            animate="visible"
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-accent/10"
            variants={rotateElement}
            initial="hidden"
            animate="visible"
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Neon elements */}
          <motion.div
            className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-accent/10"
            variants={neonGlow}
            initial="hidden"
            animate="visible"
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-primary/10"
            variants={neonGlow}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          />
          
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-accent/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [0, 1, 1.5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={scaleUp}
            className="text-4xl font-bold mb-4 text-white"
          >
            Our <span className="text-accent">Services</span>
          </motion.h2>
          <motion.p 
            variants={scaleUp}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            We offer a comprehensive range of digital services to help your business thrive in the digital age.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardHover}
              className="group relative p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/80 transition-colors border border-accent/10 hover:border-accent/30"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Neon glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                variants={neonGlow}
                initial="hidden"
                whileHover="visible"
              />
              
              <div className="relative z-10">
                <motion.div
                  className="text-4xl mb-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {service.icon}
                </motion.div>
                
                <motion.h3
                  className="text-xl font-bold mb-2 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 