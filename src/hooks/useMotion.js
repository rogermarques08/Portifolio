import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useMotion = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } 

    // else {
    //   control.start('hidden');
    // }
  }, [control, inView]);

  return [
    ref, boxVariant, control,
  ];
};

export default useMotion;
