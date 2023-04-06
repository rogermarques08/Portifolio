import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Technologies from './Technologies';

function Main() {
  return (
    <main className="p-8">
      <Home />
      <AboutMe />
      <Contact />
      <Projects />
      <Technologies />
    </main>
  );
}

export default Main;
