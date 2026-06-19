import React from 'react';
import { 
  Home, Compass, Bookmark, Trophy, 
  Settings, Shield, Bell, LogOut 
} from 'lucide-react';

interface Props {
  username: string;
  logout: () => void;
}
export const Sidebar: React.FC<Props> = ({ username, logout }) => {
  
  return (
    <aside className="profile-sidebar">
      {/* Tarjeta de Usuario */}
      <div className="user-card">
        <div className="avatar-container">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" 
            alt="Avatar" 
          />
        </div>
        <h2 className="user-name">Astrónomo Explorador</h2>
        <p className="user-handle">@{username}</p>
        
        <div className="level-badge">
          <Compass size={14} />
          Explorador Nivel 4
        </div>

        <div className="xp-bar-container">
          <div className="xp-bar">
            <div className="xp-fill"></div>
          </div>
          <span className="xp-text">1,250 / 2,000 XP</span>
        </div>
      </div>

      {/* Menú de Navegación */}
      <nav className="sidebar-menu">
        <button className="menu-item active">
          <Home size={18} /> Resumen
        </button>
        <button className="menu-item">
          <Compass size={18} /> Mis exploraciones
        </button>
        <button className="menu-item">
          <Bookmark size={18} /> Guardados
        </button>
        <button className="menu-item">
          <Trophy size={18} /> Logros
        </button>
        <button className="menu-item" style={{ marginTop: '16px' }}>
          <Settings size={18} /> Ajustes
        </button>
        <button className="menu-item">
          <Shield size={18} /> Seguridad
        </button>
        <button className="menu-item">
          <Bell size={18} /> Notificaciones
        </button>
        
        <button onClick={logout} className="menu-item danger">
          <LogOut size={18} /> Cerrar sesión
        </button>
      </nav>
    </aside>
  );
};