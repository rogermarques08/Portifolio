import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import useMotion from '../hooks/useMotion';

function Contact() {
  const [ref, boxVariant, control] = useMotion();
  return (
    <motion.div
      className="flex align-center justify-center gap-5 my-3"
      ref={ ref }
      variants={ boxVariant }
      initial="hidden"
      animate={ control }
    >
      <a href="https://github.com/rogermarques08" target="_blank" rel="noopener noreferrer">
        <span className="text-white text-3xl"><BsGithub /></span>
      </a>
      <a href="https://www.linkedin.com/in/roger-marques-dev/" target="_blank" rel="noopener noreferrer">
        <span className="text-white text-3xl"><BsLinkedin /></span>
      </a>

    </motion.div>
  );
}

export default Contact;
