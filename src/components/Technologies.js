import { motion } from 'framer-motion';
import technologies from '../data/technologies';
import useMotion from '../hooks/useMotion';

function Technologies() {
  const [ref, boxVariant, control] = useMotion();
  return (
    <motion.div
      className="mt-4"
      ref={ ref }
      variants={ boxVariant }
      initial="hidden"
      animate={ control }
    >
      <h1 className="text-3xl font-semibold text-[#a03d30]">Tecnologias</h1>
      <div className="flex flex-wrap justify-evenly gap-4 mt-5">
        {technologies.map((item) => (
          <div
            key={ item.name }
            className="text-center"
          >
            <span
              key={ item.name }
              className="text-white text-8xl"
            >
              {item.icon}
            </span>
            <p className="text-white font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Technologies;
