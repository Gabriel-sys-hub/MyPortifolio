import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const trackScreenWidth = () => {
      const screenWidthSize = window.innerWidth;
      setScreenWidth(screenWidth);
      screenWidthSize > 800 ? setOpen(true) : setOpen(0);
    };
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, [screenWidth]);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/"></Link>
        </div>
        <div className="list-wrapper">
          <i
            className="fas fa-times"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => setOpen(!open)}
          ></i>
          <i
            className="fas fa-bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => setOpen(!open)}
          ></i>
          <ul style={{ left: open ? "0vw" : "-100vw" }}>
            <li>
              <Link
                style={{ color: location.pathname === "/" && "#e9a513" }}
                onClick={() => window.innerWidth < 800 && setOpen(!open)}
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                style={{ color: location.pathname === "/skills" && "#e9a513" }}
                onClick={() => window.innerWidth < 800 && setOpen(!open)}
                to="/skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: location.pathname === "/Projects" && "#e9a513",
                }}
                onClick={() => window.innerWidth < 800 && setOpen(!open)}
                to="/Projects"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                style={{ color: location.pathname === "/contact" && "#e9a513" }}
                onClick={() => window.innerWidth < 800 && setOpen(!open)}
                to="/contact"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact__container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Gabriel-sys-hub"
          >
            <i className="fab fa-github-square"> GitHub</i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gabrielpfernandes/"
          >
            <i className="fab fa-linkedin"> Linkedin</i>
          </a>
        </div>
    </nav>
  );
};

export default NavBar;
