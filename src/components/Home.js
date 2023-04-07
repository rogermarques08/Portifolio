import { motion } from 'framer-motion';
import useMotion from '../hooks/useMotion';

function Home() {
  const [ref, boxVariant, control] = useMotion();

  return (
    <motion.div
      className="flex flex-wrap items-center place-content-around top-2 gap-4 mt-6"
      ref={ ref }
      variants={ boxVariant }
      initial="hidden"
      animate={ control }
      id='home'
    >
      <div className="flex flex-col items-start">
        <p className="text-base text-[#a03d30] font-medium">Hello World</p>
        <h1 className="text-white text-6xl font-bold">Eu sou Roger,</h1>
        <h2
          className="text-xl mt-2 text-neutral-400 font-medium"
        >
          Desenvolvedor Web Full-Stack
        </h2>
      </div>
      <a href="https://www.flaticon.com/authors/sketchandbuild" target="_black">
        <img
          className="my-3"
          src="https://cdn-icons-png.flaticon.com/512/805/805370.png"
          alt="profile-icon"
          width="400px"
        />
      </a>
    </motion.div>

  );
}

export default Home;
