import './footer.css'
import logo2 from '../../assets/logo2.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = ()=>{
    return(
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo2} alt="" />
                    <p>"Soy Desarrollador Full Stack MERN y Piloto Profesional de Drones"</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Ingresa tu correo' />
                    </div>
                    <div className="footer-subscribe"> Suscríbete</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Erland Ruiz.</p>
                <div className="footer-bottom-right">
                    <p>Términos de Servicio.</p>
                    <p>Política de Privacidad</p>
                    <p>Contáctame</p>
                </div>
            </div>
        </div>
    )
}

export default Footer