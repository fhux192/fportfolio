/* eslint-disable react/prop-types */
import "../../scss/parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yS = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  return (
    <div className="parallax" ref={ref}>
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I Did?" : "What we did?"}
      </motion.h1>
      <motion.div style={{ y: yS }} className="planet"></motion.div>
      <motion.div style={{ x: yBg }} className="universe"></motion.div>
      <motion.div className="mountains"></motion.div>
      
    </div>
  );
};

export default Parallax;
