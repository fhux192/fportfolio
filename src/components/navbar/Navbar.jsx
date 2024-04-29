import "../../scss/navbar.scss";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import Slidebar from "../slidebar/Slidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/*Slidebar*/}
      
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={0.5}
          className="top-text"
        ></motion.span>

        <div className="social">
          
          <div><Slidebar/></div>
          <a href="#"></a>
          <FaFacebook className="icon" />
          <a href="#">
            <AiFillInstagram className="icon" />
          </a>
          <a href="#">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
