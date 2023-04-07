import { motion } from 'framer-motion';
import projects from '../data/projects';
import useMotion from '../hooks/useMotion';

function Projects() {
  const [ref, boxVariant, control] = useMotion();

  return (
    <div className="mt-[60px] scroll-smooth" id="projects">
      <h1 className="text-3xl font-semibold text-[#a03d30]">Projetos</h1>
      <motion.div
        className="flex flex-wrap justify-evenly mt-[20px] gap-8 "
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
            <div className="w-80 bg-[#202020] p-3 rounded-xl text-center">
              <img
                src={project.img}
                alt={project.name}
                width="100%"
                className="rounded"
              />
              <h1 className="text-2xl mt-2 text-white">{project.name}</h1>
              <p className="font-semibold text-[#a03d30]">{project.stack}</p>
              <p className="text-white font-light mt-2">{project.desc}</p>
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
