import { motion } from 'framer-motion';
import projects from '../data/projects';
import useMotion from '../hooks/useMotion';

function Projects() {
  const [ref, boxVariant, control] = useMotion();

  return (
    <motion.div
      className="mt-4 mb-4"
      ref={ ref }
      variants={ boxVariant }
      initial="hidden"
      animate={ control }
    >
      <h1 className="text-3xl font-semibold text-[#a03d30]">Projetos</h1>
      <div className="flex flex-wrap justify-evenly mt-3 gap-8 ">
        {projects.map((project) => (
          <a
            href={ project.link }
            target="_blank"
            rel="noreferrer"
            key={ project.name }
          >
            <div className="w-80 bg-[#202020] p-3 rounded-xl">
              <img
                src={ project.img }
                alt={ project.name }
                width="100%"
                className="rounded"
              />
              <h1 className="text-2xl mt-2 text-neutral-400 font-semibold">
                {project.name}
              </h1>
              <p className="font-semibold text-[#a03d30]">{project.stack}</p>
              <p className="text-white font-semibold mt-2">{project.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
