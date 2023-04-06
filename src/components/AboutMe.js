import { motion } from 'framer-motion';
import useMotion from '../hooks/useMotion';

function AboutMe() {
  const [ref, boxVariant, control] = useMotion();
  return (
    <motion.div
      className="mt-4"
      ref={ ref }
      variants={ boxVariant }
      initial="hidden"
      animate={ control }
    >
      <p className="text-lg font-medium text-white mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid.
      </p>
    </motion.div>
  );
}

export default AboutMe;
