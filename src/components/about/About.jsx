import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from '../../assets/erer.png'
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>Sobre mí</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="imagen de drone"/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>"Soy Desarrollador Full Stack MERN y Piloto Profesional de Drones, con una visión integral que combina tecnología, creatividad y precisión. Desarrollo soluciones web modernas y escalables, mientras capturo imágenes aéreas de alto impacto para proyectos inmobiliarios, construcción y contenido digital."</p>
                <p>"Mi enfoque une programación y producción visual, ofreciendo una experiencia completa: desde la vista aérea hasta la plataforma donde se muestra. La innovación guía cada línea de código y cada vuelo que realizo."</p>

            </div>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
              <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
              <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
              <div className="about-skill"><p>Autocad</p><hr style={{width:"50%"}} /></div>
              <div className="about-skill"><p>D. Resolve</p><hr style={{width:"70%"}} /></div>
             
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>7+</h1>
          <p>AÑOS DE EXPERIENCIA</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>100+</h1>
          <p>GRABACIONES REALIZADAS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>CLIENTES FELICES</p>
        </div>


      </div>
    </div>
  );
};

export default About;
