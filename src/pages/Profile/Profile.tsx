import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import {
  Edit2,
  Bookmark,
  Sparkles,
  Compass,
  Clock,
  ChevronRight,
} from "lucide-react";
import "./Profile.css";
import { Navbar } from "../../components/NavBar/NavBar";
import { useAuth } from "../../context/useAuth";

// Datos simulados para mantener el componente limpio
const mockActivity = [
  {
    id: 1,
    title: "Exploraste la Galaxia de Andrómeda",
    desc: "Descubriste datos y curiosidades",
    time: "Hace 2 h",
    img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=100",
  },
  {
    id: 2,
    title: "Exploraste la Nebulosa del Cangrejo",
    desc: "Leíste el artículo completo",
    time: "Hace 1 día",
    img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=100",
  },
  {
    id: 3,
    title: "Exploraste Júpiter",
    desc: "Viste imágenes en alta resolución",
    time: "Hace 3 días",
    img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=100",
  },
  {
    id: 4,
    title: "Exploraste Agujeros Negros",
    desc: "Completaste la guía de estudio",
    time: "Hace 5 días",
    img: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=100",
  },
];

const mockSaved = [
  {
    id: 1,
    title: "Galaxia del Sombrero",
    category: "Galaxias",
    img: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=100",
  },
  {
    id: 2,
    title: "Luna",
    category: "Satélites naturales",
    img: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=100",
  },
  {
    id: 3,
    title: "Nebulosa de Orión",
    category: "Nebulosas",
    img: "https://images.unsplash.com/photo-1532664189809-02133fee69cb?w=100",
  },
  {
    id: 4,
    title: "Marte",
    category: "Planetas",
    img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?w=100",
  },
];

export const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("actividad");
  const { user, isLoading, logout } = useAuth();

  return (
    <div className="profile-container">
      <Navbar />
      <Sidebar logout={logout} username={user?.username ?? "Explorador"} />

      <main className="profile-main">
        {/* Sección Superior: Banner y Estadísticas */}
        <section className="top-section">
          <div className="welcome-banner">
            <h1>
              ¡Hola,{" "}
              {isLoading ? "cargando..." : (user?.username ?? "Explorador")}! 👋
            </h1>
            <p>
              {isLoading
                ? "Verificando tu sesión..."
                : user?.email
                  ? `Correo: ${user.email}`
                  : "Sigue explorando el universo y descubre nuevos misterios cada día."}
              <span className='has-verified-email' style={{
                backgroundColor: user?.emailVerified ? "rgba(13, 66, 0, 0.712)" : "rgb(71, 0, 0)",
                color: user?.emailVerified ? "rgb(0, 255, 98)" : "#ff5c5c",
              }}>
                
                {isLoading
                  ? "Cargando..."
                  : user?.emailVerified
                    ? "Correo verificado"
                    : "Correo no verificado"}
              </span>
            </p>
            <button className="btn-edit">
              <Edit2 size={16} /> Editar perfil
            </button>
          </div>

          <div className="stats-grid">
            <div className="stats-header">ESTADÍSTICAS</div>

            <div className="stat-item">
              <Compass size={24} className="stat-icon" />
              <div className="stat-info">
                <h3>23</h3>
                <p>Exploraciones</p>
              </div>
            </div>

            <div className="stat-item">
              <Bookmark size={24} className="stat-icon" />
              <div className="stat-info">
                <h3>17</h3>
                <p>Guardados</p>
              </div>
            </div>

            <div className="stat-item">
              <Sparkles size={24} className="stat-icon" />
              <div className="stat-info">
                <h3>4</h3>
                <p>Logros</p>
              </div>
            </div>

            <div className="stat-item">
              <Clock size={24} className="stat-icon" />
              <div className="stat-info">
                <h3>48 h</h3>
                <p>Tiempo explorando</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sistema de Pestañas */}
        <div className="tabs-container">
          <button
            className={`tab-btn ${activeTab === "actividad" ? "active" : ""}`}
            onClick={() => setActiveTab("actividad")}
          >
            Actividad reciente
          </button>
          <button
            className={`tab-btn ${activeTab === "guardadas" ? "active" : ""}`}
            onClick={() => setActiveTab("guardadas")}
          >
            Exploraciones guardadas
          </button>
          <button
            className={`tab-btn ${activeTab === "logros" ? "active" : ""}`}
            onClick={() => setActiveTab("logros")}
          >
            Logros obtenidos
          </button>
        </div>

        {/* Sección Inferior: Listas */}
        <section className="lists-section">
          {/* Columna Izquierda: Actividad */}
          <div className="list-card">
            <div className="list-header">
              <h3>ACTIVIDAD RECIENTE</h3>
            </div>
            <div className="activity-list">
              {mockActivity.map((item) => (
                <div key={item.id} className="activity-item">
                  <img src={item.img} alt={item.title} className="item-img" />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <span className="item-meta">{item.time}</span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <a
                href="#"
                className="link-all"
                style={{ justifyContent: "center" }}
              >
                Ver toda la actividad <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Columna Derecha: Guardados */}
          <div className="list-card">
            <div className="list-header">
              <h3>EXPLORACIONES GUARDADAS</h3>
              <a href="#" className="link-all">
                Ver todas
              </a>
            </div>
            <div className="activity-list">
              {mockSaved.map((item) => (
                <div key={item.id} className="activity-item">
                  <img src={item.img} alt={item.title} className="item-img" />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                  <button className="icon-btn">
                    <Bookmark size={20} fill="currentColor" />
                  </button>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <a
                href="#"
                className="link-all"
                style={{ justifyContent: "center" }}
              >
                Ver todas las guardadas <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
