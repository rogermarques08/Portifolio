import AboutMe from './AboutMe';
import Home from './Home';
import Projects from './Projects';
import Technologies from './Technologies';

function Main() {
  return (
    <main className="p-8">
      <Home />
      <hr className="mt-4 border-[#a03d30]" />
      <AboutMe />
      <hr className="mt-4 border-[#a03d30]" />
      <Projects />
      <hr className="mt-4 border-[#a03d30]" />
      <Technologies />
    </main>
  );
}

export default Main;
