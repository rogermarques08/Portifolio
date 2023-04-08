import { motion } from 'framer-motion';
import useMotion from '../hooks/useMotion';

function AboutMe() {
  const [ref, boxVariant, control] = useMotion();
  return (
    <motion.div
      className="mt-4"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <p className="text-lg font-light text-white mt-3">
        Atualmente moro em Pará de Minas, uma cidade no interior de Minas
        Gerais e desde pequeno sempre tive curiosidade o desbravar o mundo da
        tecnologia. Com isso em mente, estou fazendo o curso de Desenvolvimento
        Web da Trybe (Full Stack), com previsão de término no mês de julho. Ao
        longo dos últimos meses, venho adquirindo experiência através da
        realização de projetos estou disponível para começar a atuar como
        programador tanto front, como back end.
      </p>
    </motion.div>
  );
}

export default AboutMe;
