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
        <a
          href={`#${item}`}
          key={item}
        >
          {item}
        </a>
      ))}
    </motion.div>
  );
};

export default Links;
