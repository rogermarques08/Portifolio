import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
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
      <hr className="mt-4" />
      <Footer />
    </main>
  );
}

export default Main;
