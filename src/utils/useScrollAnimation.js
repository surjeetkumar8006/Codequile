import { useInView } from 'framer-motion';
import { useRef } from 'react';

const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    ...options
  });

  return [ref, isInView];
};

export default useScrollAnimation; 