import { motion } from 'framer-motion';
import useMotion from '../hooks/useMotion';
import Contact from './Contact';

function Footer() {
  const [ref, boxVariant, control] = useMotion();
  return (
    <motion.div
      className="font-medium mt-4"
      ref={ ref }
      variants={ boxVariant }
      initial="hidden"
      animate={ control }
    >
      <p className="text-white text-center">©2023 por Roger Marques</p>
      <Contact />
    </motion.div>
  );
}

export default Footer;
