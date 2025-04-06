// Text reveal animation
export const textReveal = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  }
};

// Stagger children animation
export const staggerContainer = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

// Fade in animation
export const fadeIn = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  }
};

// Scale up animation
export const scaleUp = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  }
};

// Slide in from left
export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  }
};

// Slide in from right
export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  }
};

// Hover animation for cards
export const cardHover = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
    }
  }
};

// Parallax scroll effect
export const parallaxScroll = (offset = 50) => ({
  hidden: { 
    opacity: 0, 
    y: offset 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    }
  }
});

// Split text animation
export const splitText = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export const splitTextChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// New neon glow animation
export const neonGlow = {
  hidden: { 
    opacity: 0,
    boxShadow: "0 0 0 rgba(255, 0, 255, 0)",
  },
  visible: {
    opacity: 1,
    boxShadow: [
      "0 0 5px rgba(255, 0, 255, 0.5)",
      "0 0 10px rgba(255, 0, 255, 0.3)",
      "0 0 15px rgba(255, 0, 255, 0.2)",
      "0 0 20px rgba(255, 0, 255, 0.1)",
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

// New rotating element animation
export const rotateElement = {
  hidden: { 
    opacity: 0,
    rotate: 0,
  },
  visible: {
    opacity: 1,
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// New neon text animation
export const neonText = {
  hidden: { 
    opacity: 0,
    textShadow: "0 0 0 rgba(255, 0, 255, 0)",
  },
  visible: {
    opacity: 1,
    textShadow: [
      "0 0 5px rgba(255, 0, 255, 0.5)",
      "0 0 10px rgba(255, 0, 255, 0.3)",
      "0 0 15px rgba(255, 0, 255, 0.2)",
      "0 0 20px rgba(255, 0, 255, 0.1)",
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

// New floating animation
export const floating = {
  hidden: { 
    y: 0,
  },
  visible: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// New pulse animation
export const pulse = {
  hidden: { 
    scale: 1,
  },
  visible: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}; 