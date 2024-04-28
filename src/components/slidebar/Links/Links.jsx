/* eslint-disable no-unused-vars */
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};



const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
          <Link
            to={item}
            style={{ cursor: "pointer" }}
            smooth={true}
            duration={300}
            key={item}
          >
            {item}
          </Link>
      ))}
    </motion.div>
  );
};

export default Links;
