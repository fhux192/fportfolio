import "../../scss/hero.scss";
import fimg from "../../assets/img/fimg.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>PHUC NGUYEN</h2>
          <h1>Web developer and UI/UX designer</h1>
          <div className="buttons">
            <button>Download CV</button>
            <button style={{background:"white",color:"black"}}>Contact Me</button>
          </div>
        </div>
      </div>
      <div className="slidingTextContainer">Science Computer</div>
      <div className="imageContainer">
        <img className="heroImg" src={fimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
