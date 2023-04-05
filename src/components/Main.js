import Fade from 'react-reveal/Fade';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Technologies from './Technologies';

function Main() {
  return (
    <main className="p-8">
      <Fade top distance="10%" duration={2000}>
        <Home />
        <AboutMe />
        <Contact />
        <Projects />
        <Technologies />
      </Fade>
    </main>
  );
}

export default Main;
