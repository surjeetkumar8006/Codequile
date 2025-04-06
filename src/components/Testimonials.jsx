import { motion } from 'framer-motion';
import useScrollAnimation from '../utils/useScrollAnimation';
import { staggerContainer, scaleUp, cardHover, neonGlow, rotateElement, pulse } from '../utils/animationVariants';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    quote: "CodeQuil transformed our digital presence with their exceptional web development services. The team's attention to detail and innovative approach exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    quote: "Working with CodeQuil was a game-changer for our business. Their expertise in UI/UX design helped us create a seamless user experience that our customers love.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    quote: "The digital marketing strategies implemented by CodeQuil have significantly increased our online visibility and lead generation. Their data-driven approach delivers results.",
  },
];

const Testimonials = () => {
  const [ref, isInView] = useScrollAnimation();

  return (
    <section id="testimonials" className="section bg-black relative overflow-hidden">
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
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-accent/20"
            variants={rotateElement}
            initial="hidden"
            animate="visible"
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full border border-accent/10"
            variants={rotateElement}
            initial="hidden"
            animate="visible"
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Neon elements */}
          <motion.div
            className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full bg-accent/10"
            variants={neonGlow}
            initial="hidden"
            animate="visible"
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-primary/10"
            variants={neonGlow}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          />
          
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-accent/10"
              style={{
                width: Math.random() * 300 + 200,
                height: Math.random() * 300 + 200,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.2, 0],
                scale: [0, 1, 1.5],
              }}
              transition={{
                duration: Math.random() * 5 + 4,
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
            Client <span className="text-accent">Testimonials</span>
          </motion.h2>
          <motion.p 
            variants={scaleUp}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Hear what our clients have to say about their experience working with CodeQuil.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
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
                  className="flex items-center gap-4 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/30"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="text-xl font-bold text-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      {testimonial.name}
                    </motion.h3>
                    <motion.p
                      className="text-accent"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {testimonial.role}
                    </motion.p>
                  </div>
                </motion.div>
                
                <motion.p
                  className="text-gray-300 italic"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  "{testimonial.quote}"
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 