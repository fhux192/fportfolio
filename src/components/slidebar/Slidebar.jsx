import "../../scss/slidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./Links/Links";
import { useState } from "react";
import { motion } from "framer-motion";


const Slidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },

    closed: {
      clipPath: "circle(50px at 30px 30px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="slidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Slidebar;
