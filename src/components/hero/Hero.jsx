import "./hero.css";
import profile_img from '../../assets/erer.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return( 
  <div id="home" className="hero">
    <img src={profile_img} alt="imagen de drone" className="imgHero"/>
    <h1><span>Soy Erland Ruiz,</span> Piloto de Drones  y Desarrollador FullStack MERN.</h1>
    <p>Soy un apasionado de los drones, la programación usando el stack MERN y edición de videos con Davinci Resolve.</p>
    <div className="hero-action">
      <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Contáctame.</AnchorLink></div>
      <div className="hero-resume">Mi experiencia.</div>
    </div>
    </div>);
};

export default Hero;
