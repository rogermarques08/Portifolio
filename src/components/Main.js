import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Technologies from './Technologies';

function Main() {
  return (
    <div>
     <Header /> 
    <main className="p-8 mt-10">
      <Home />
      <AboutMe />
      <Contact />
      <Projects />
      <Technologies />
      <hr className="mt-4" />
      <Footer />
    </main>
    </div>
  );
}

export default Main;
