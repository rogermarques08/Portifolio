import Contact from './Contact';

function Home() {
  return (
    <>
      <div className="flex flex-wrap items-center place-content-around top-2 gap-4">
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
      </div>
      <Contact />
    </>

  );
}

export default Home;
