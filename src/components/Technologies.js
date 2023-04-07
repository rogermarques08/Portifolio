import { motion } from 'framer-motion';
import technologies from '../data/technologies';
import useMotion from '../hooks/useMotion';

function Technologies() {
  const [ref, boxVariant, control] = useMotion();
  return (
    <div className="mt-[60px]" id="tech">
      <h1 className="text-3xl font-semibold text-[#a03d30]">Tecnologias</h1>
      <motion.div
        className="flex flex-wrap justify-evenly gap-4 mt-5"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        {technologies.map((item) => (
          <motion.div
            key={item.name}
            className="text-center mt-[15px]"
            whileHover={{ scale: 1.09 }}
          >
            <span key={item.name} className="text-white text-8xl">
              {item.icon}
            </span>
            <p className="text-white font-medium">{item.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
