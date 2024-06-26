import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="course">
      <motion.div
        className="box"
        animate={{ opacity: 1, scale: 1, x: 200, y: 500 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 2 }}
      ></motion.div>
    </div>
  );
};
export default Test;
