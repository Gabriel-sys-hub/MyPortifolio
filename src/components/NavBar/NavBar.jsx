import { Link, useLocation } from "react-router-dom";
import './style.css'
import { useState } from 'react';
import { useEffect } from 'react';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const trackScreenWidth = () => {
      const screenWidthSize = window.innerWidth;
      setScreenWidth(screenWidth);
      screenWidthSize > 800 ? setOpen(true) : setOpen(0);
    }
    trackScreenWidth();
    window.addEventListener('resize', trackScreenWidth);
    return () => window.removeEventListener('resize', trackScreenWidth)
  }, [screenWidth]);

  return (
    <nav className="navbar">
        <div className="nav-wrapper">
          <div className="logo">
            <Link to="/">
            </Link>
          </div>
          <div className="list-wrapper">
            <i className="fas fa-times" style={{ opacity: open ? 1 : 0 }} onClick={() => setOpen(!open) }></i>
            <i className="fas fa-bars" style={{ opacity: !open ? 1 : 0 }} onClick={() => setOpen(!open) }></i>
            <ul style={{ left: open ? '0vw' : '-100vw'  }}>
              <li>
                <Link style={{ color: location.pathname === "/" && "#e7650f;"}} to="/">Inicio</Link>
              </li>
              <li>
                <Link style={{ color: location.pathname === "/skills" && "#e7650f;"}} to="/skills">Skills</Link>
              </li>
              <li>
                <Link style={{ color: location.pathname === "/Projects" && "#e7650f;"}} to="/Projects">Projetos</Link>
              </li>
              <li>
                <Link style={{ color: location.pathname === "/contact" && "#e7650f;"}} to="/contact">Contato</Link>
              </li>
            </ul>
          </div>
        </div> 
    </nav>
  )
}

export default NavBar
