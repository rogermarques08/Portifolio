import technologies from '../data/technologies';

function Technologies() {
  return (
    <div className="mt-4">
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
    </div>
  );
}

export default Technologies;