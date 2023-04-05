import { AiFillHtml5 } from 'react-icons/ai';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const technologies = [
  {
    icon: <AiFillHtml5 />,
    name: 'HTML',
  },
  {
    icon: <IoLogoCss3 />,
    name: 'CSS',
  },
  {
    icon: <IoLogoJavascript />,
    name: 'JAVA SCRIPT',
  }, {
    icon: <FaReact />,
    name: 'REACT',
  }, {
    icon: <SiTailwindcss />,
    name: 'TAILWIND',
  }, {
    icon: <FaNodeJs />,
    name: 'NODE JS',
  }, {
    icon: <GrMysql />,
    name: 'MYSQL',
  }, {
    icon: <SiTypescript />,
    name: 'TYPE SCRIPT',
  },
];

export default technologies;
