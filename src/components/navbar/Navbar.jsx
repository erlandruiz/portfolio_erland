import './navbar.css';
import logo from '../../assets/logo2.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar =()=>{
    
    const[menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = ()=>{
        menuRef.current.style.right= "0";
    }
    const closeMenu = ()=>{
        menuRef.current.style.right= "-350px";
        // menuRef.current.style.right = "-100vw";
    }

    return(
        <div className='navbar'>
            <img src={logo} alt="" />
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close} onClick={closeMenu} alt=""  className='nav-mob-close'/>
                <li><AnchorLink className="anchor-link"  href="#home"><p onClick={()=>setMenu("home")}>Inicio</p></AnchorLink>{menu=== "home" ?<img src={underline} alt=''/> : <></> }</li>
                {/* <li><AnchorLink className="anchor-link"  href="#home"><p onClick={()=>{setMenu("home"); closeMenu();}}>Inicio</p></AnchorLink>{menu=== "home" ?<img src={underline} alt=''/> : <></> }</li> */}
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>Acerca de mi</p></AnchorLink>{menu=== "about" ?<img src={underline} alt=''/> : <></> }</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("services")}>Servicios</p></AnchorLink>{menu=== "services" ?<img src={underline} alt=''/> : <></> }</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portafolio</p></AnchorLink>{menu=== "work" ?<img src={underline} alt=''/> : <></> }</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contacto</p></AnchorLink>{menu=== "contact" ?<img src={underline} alt=''/> : <></> }</li>
            </ul>
            <div className='nav-connect'><AnchorLink className="anchor-link" offset={50} href="#contact">
                Contáctame</AnchorLink>
            </div>
        </div>
    )
}

export default Navbar;