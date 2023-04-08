import { motion } from 'framer-motion';
import useMotion from '../hooks/useMotion';
import me from './me.png';

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
        <p className="text-base text-[#a03d30] font-medium">Hello World!</p>
        <h1 className="text-white text-6xl font-bold">Eu sou Roger,</h1>
        <h2
          className="text-xl mt-2 text-neutral-400 font-medium"
        >
          Desenvolvedor Web Full-Stack
        </h2>
      </div>
      <div className="p-[10px] rounded-[20%] bg-[#a03d30]/[0.15]">
        <img
          className="my-3 rounded-[20%]"
          src={me}
          alt="profile-icon"
          width="400px"
        />
        </div>
    </motion.div>

  );
}

export default Home;
