import "./scss/app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

export default function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services"></section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}
