import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import {
  Compass,
  BookOpen,
  Home,
  BookCheck,
} from "lucide-react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const authenticated = Boolean(user);

  const setNavigate = (path: string) => {
    navigate(path);
  }

  // Now the navbar relies on the global AuthProvider via `useAuth()`

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
          <span className="brand-name">UniSite</span>
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
            to="/guide"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <BookCheck size={18}/>
            <span>Guía de app</span>
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

      {/* 3. Sección Izquierda: Autenticación con renderizado condicional */}
      {isLoading ? (
        // Mientras carga, puedes dejar un espacio en blanco para que el diseño no salte, o poner un spinner
        <div className="nav-auth" style={{ opacity: 0.5 }}>
          <span>Cargando...</span>
        </div>
      ) : authenticated ? (
        // Si YA cargó y ESTÁ autenticado
        <div className="nav-auth">
          <button onClick={() => setNavigate('/profile')} className="nav-btn-link">
            <span>Perfil</span>
          </button>
        </div>
      ) : (
        // Si YA cargó y NO está autenticado
        <div className="nav-auth">
          <button onClick={() => setNavigate('/login')} className="nav-btn-link">
            <span>Iniciar sesión</span>
          </button>
          <button
            style={{
              border: "1px solid rgba(67, 0, 175, 0.51)",
              padding: "8px 8px 8px 8px",
              borderRadius: "2px",
            }}
            onClick={() => setNavigate('/register')}
            className="nav-btn-link"
          >
            <span>Registrarse</span>
          </button>
        </div>
      )}
    </nav>
  );
};