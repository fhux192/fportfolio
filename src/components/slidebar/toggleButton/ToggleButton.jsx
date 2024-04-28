/* eslint-disable react/prop-types */
import { FiArrowDownRight } from "react-icons/fi";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen ,open }) => {
  return (
    <motion.button whileHover={{scale:1.1}}  className="button" onClick={() => setOpen((prev) => !prev)}>
      <svg width="30" height="30" viewBox="0 0 23 23">
          <FiArrowDownRight
            style={{
              fontSize: "30px",
              color: "#2D3250",
              opacity: open ? 0 : 1,
            }}
          />
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
