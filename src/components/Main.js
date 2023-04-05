import Home from './Home';
import AboutMe from './AboutMe';

function Main() {
  return (
    <main className="p-8">
      <Home />
      <hr className="mt-4 border-[#a03d30]" />
      <AboutMe />
      <hr className="mt-4 border-[#a03d30]" />
    </main>
  );
}

export default Main;
