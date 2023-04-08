import { motion } from 'framer-motion';
import { MdSwipe } from 'react-icons/md';
import projects from '../data/projects';
import useMotion from '../hooks/useMotion';

function Projects() {
  const [ref, boxVariant, control] = useMotion();

  return (
    <div className="mt-[60px] scroll-smooth" id="projects">
      <h1 className="text-3xl font-semibold text-[#a03d30]">Projetos</h1>
      <motion.div
        className="
        flex mt-[20px] gap-8 
        max-sm:overflow-x-scroll max-sm:p-4
        sm:flex sm:justify-center sm:flex-wrap
        "
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            key={project.name}
          >
            <motion.div
              className="w-80 bg-[#202020] p-3 rounded-xl text-center"
              whileHover={{ scale: 1.09 }}
            >
              <img
                src={project.img}
                alt={project.name}
                width="100%"
                className="rounded-[20px%]"
              />
              <h1 className="text-2xl mt-2 text-white">{project.name}</h1>
              <p className="font-semibold text-[#a03d30]">{project.stack}</p>
              <p className="text-white font-light mt-2">{project.desc}</p>
            </motion.div>
          </a>
        ))}
      </motion.div>
      <div className="gap-4 items-center mt-4 max-sm:flex sm:hidden">
        <p className="  text-[#a03d30] text-xl">Deslize para o lado</p>
        <span className="text-[#a03d30] text-[25px]">
          <MdSwipe />
        </span>
      </div>
    </div>
  );
}

export default Projects;
