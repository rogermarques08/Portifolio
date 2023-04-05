import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';

function Main() {
  return (
    <main className="p-8">
      <Home />
      <hr className="mt-4 border-[#a03d30]" />
      <AboutMe />
      <hr className="mt-4 border-[#a03d30]" />
      <Projects />
    </main>
  );
}

export default Main;
