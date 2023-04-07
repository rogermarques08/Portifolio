function Header() {
  return (
    <header className="fixed z-10 w-full top-0">
    <nav className="
    flex items-center justify-center flex-wrap p-6
    h-full w-full bg-red-400 rounded-md bg-clip-padding 
    backdrop-filter backdrop-blur-sm bg-opacity-0
    ">
        <div className="text-sm flex  blur-none">
          <a
            href="#home"
            className="block mt-4 text-white hover:text-[#a03d30] mr-4"
          >
            Home
          </a>
          <a
            href="#projects"
            className="block mt-4 text-white hover:text-[#a03d30] mr-4"
          >
            Projetos
          </a>
          <a
            href="#tech"
            className="block mt-4 text-white hover:text-[#a03d30]"
          >
            Tecnologias
          </a>
      </div>
    </nav>
    </header>
  );
}

export default Header;
