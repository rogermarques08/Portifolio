import projects from '../data/projects';

function Projects() {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-semibold text-[#a03d30]">Projetos</h1>
      <div className="flex flex-wrap justify-evenly mt-3 gap-8 ">
        {projects.map((project) => (
          <div
            key={ project.name }
            className="w-80 h-[26rem] border-2 border-[#a03d30] p-3 rounded-xl"
          >
            <h1
              className="text-2xl mt-2 text-neutral-400 font-semibold"
            >
              {project.name}
            </h1>
            <img src={ project.img } alt={ project.name } width="100%" />
            <p className="font-semibold text-[#a03d30]">{project.stack}</p>
            <p className="text-white font-semibold mt-2">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
