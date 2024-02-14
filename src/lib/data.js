import { AiFillProfile, AiOutlineHome } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { ImProfile } from "react-icons/im";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <AiOutlineHome size={25} />,
    address:'/'
  },
  {
    id: 2,
    name: "About",
    icon: <AiFillProfile size={25} />,
    address:'/about'
  },
  {
    id: 3,
    name: "Portfolio",
    icon: <FaTasks size={25} />,
    address:'/portfolio'
  },
  {
    id: 4,
    name: "Services",
    icon: <GrUserWorker size={25} />,
    address:'/services'
  },
  {
    id: 5,
    name: "Resume",
    icon: <ImProfile size={25} />,
    address:'/resume'
  },
];
