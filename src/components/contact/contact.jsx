import './contact.css'
import theme_pattern  from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact =()=>{
    return(
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Contáctame</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Hablemos</h1>
                    <p>Capturo imágenes impactantes desde el aire y desarrollo soluciones web modernas que impulsan tu presencia digital. ¡Hablemos de cómo puedo ayudarte!</p>
                    <div className='contact-details'>
                        <div className="contact-detail"><img src={mail_icon} alt="" /><p>erlandruizdeveloper@gmail.com</p></div>
                        <div className="contact-detail"><img src={call_icon} alt="" /><p>+51-999-999-999</p></div>
                        <div className="contact-detail"><img src={location_icon} alt="" /><p>Piura,Perú</p></div>

                    </div>

                </div>
                <form className='contact-right'>
                    <label htmlFor="">Tu Nombre</label>
                    <input type="text" placeholder='Ingrese su nombre' name='name'/>
                    <label htmlFor="">Tu Correo</label>
                    <input type="email" placeholder='Ingrese su correo' name='email'/>
                    <label htmlFor="">Escriba su mensaje aquí</label>
                    <textarea name="message" rows="8" placeholder='Ingrese su mensaje'></textarea>
                    <button type='submit' className='contact-submit'>Enviar</button>
                </form>
            </div>
            
            </div>
    )
}
export default Contact