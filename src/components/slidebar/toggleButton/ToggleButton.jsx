/* eslint-disable react/prop-types */
import "../../../scss/toggleButton.scss";
import { motion } from "framer-motion";
import { FaList } from "react-icons/fa6";

const ToggleButton = ({ setOpen,open }) => {
  return (
    <motion.button
      onClick={() => setOpen((prev) => !prev)}
    >
      <svg viewBox="0 0 23 23" className="icon" >
        <FaList fontWeight="bold" style={{color:open ? "#2D3250": "#2D3250"
       }}/>
      </svg>
    </motion.button>
  );
};

export default ToggleButton;

{
  /* <motion.path
          strokeWidth="3"
          stroke="#2D3250"
          strokeLinecap="round"
          variants={{
            open: { d: "M 3 16.5 L 17 2.5" },
            closed: { d: "M 2 2.5 L 20 2.5" },
          }}
        />

        <motion.path
          strokeWidth="3"
          stroke="#2D3250"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />

        <motion.path
          strokeWidth="3"
          stroke="#2D3250"
          strokeLinecap="round"
          variants={{
            open: { d: "M 3 2.5 L17 16.346" },
            closed: { d: "M 2 16.346 L20 16.346" },
          }}
        /> */
}
