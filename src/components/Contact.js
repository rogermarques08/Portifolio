import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Contact() {
  return (
    <div className="flex align-center justify-center w-screen gap-5">
      <a href="https://github.com/rogermarques08" target="_blank" rel="noopener noreferrer">
        <span className="text-white text-3xl"><BsGithub /></span>
      </a>
      <a href="https://www.linkedin.com/in/roger-marques-dev/" target="_blank" rel="noopener noreferrer">
        <span className="text-white text-3xl"><BsLinkedin /></span>
      </a>

    </div>
  );
}

export default Contact;
