import React from "react";
import { NavLink } from "react-router-dom";
import {
  UserPlus,
  LogIn,
  Compass,
  Telescope,
  BookOpen,
  Home,
} from "lucide-react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="cosmos-navbar">
      {/* Sección Central: Logo */}
      <div className="nav-logo">
        <div className="logo-icon">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          >
            <circle cx="12" cy="12" r="6" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="3"
              transform="rotate(-15 12 12)"
            />
          </svg>
        </div>
        <div className="logo-text">
          <span className="brand-name">COSMOS</span>
          <span className="brand-sub">EXPLORA EL UNIVERSO</span>
        </div>
      </div>

      {/* Sección Derecha: Navegación utilizando NavLink */}
      <ul className="nav-menu">
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/home"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            end
          >
            <Home size={16} />
            <span>Inicio</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/explorer"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <Compass size={16} />
            <span>Explorar</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/discoveries"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <Telescope size={16} />
            <span>Descubrimientos</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/learn"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <BookOpen size={16} />
            <span>Aprender</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/news"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M16 8h-4M16 12H8M16 16H8" />
            </svg>
            <span>Noticias</span>
          </NavLink>
        </li>
      </ul>
      {/* Sección Izquierda: Autenticación */}
      <div className="nav-auth">
        <button className="nav-btn-link">
          <span>Iniciar sesión</span>
        </button>
        <button
          style={{
            border: "1px solid rgba(67, 0, 175, 0.51)",
            padding: "8px 8px 8px 8px",
            borderRadius: "2px",
          }}
          className="nav-btn-link"
        >
          <span>Registrarse</span>
        </button>
      </div>
    </nav>
  );
};
