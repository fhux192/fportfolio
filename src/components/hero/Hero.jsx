/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "../../scss/hero.scss";
import { animate, motion, stagger } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
// import fimg from "../../assets/img/fimg.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  const [ text ] = useTypewriter({
    words: [" Web Developer", "n UI/UX Designer" ," Freelancer"],
    loop: {},
    typeSpeed: 100,
  });

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            <div>P</div>
            <div>H</div>
            <div>U</div>
            <div>C</div>
            <div> </div>
            <div>N</div>
            <div>G</div>
            <div>U</div>
            <div>Y</div>
            <div>E</div>
            <div>N</div>
          </motion.h2>
          <h1 >
            I'm a{text}
            <span>
              <Cursor cursorColor="#f6b17a"/>
            </span>
          </h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>Download CV</motion.button>
            <motion.button
              variants={textVariants}
              style={{ background: "white", color: "black" }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={slideVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        Computer Science
      </motion.div>
      {/* <div className="imageContainer">
        <img className="heroImg" src={fimg} alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
