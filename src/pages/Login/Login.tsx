import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Rocket, LogIn } from 'lucide-react';
import './Login.css';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', formData);
  };

  return (
    <div className="login-container">
      {/* Fondo espacial */}
      <div className="background-planet"></div>
      <div className="stars-overlay"></div>
      
      <div className="login-card">
        {/* Logo */}
        <div className="logo-container">
          <Rocket className="logo-icon" size={24} />
          <span className="logo-text">UniSite</span>
        </div>

        {/* Encabezado */}
        <div className="header-text">
          <p className="subtitle-top">BIENVENIDO DE NUEVO</p>
          <h1 className="main-title">INICIA SESIÓN</h1>
          <p className="description">
            Accede a tu cuenta y continúa explorando los misterios del universo.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-group">
            <Mail className="input-icon" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <Lock className="input-icon" size={20} />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="forgot-password-container">
            <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" className="btn-submit">
            <LogIn size={18} />
            INICIAR SESIÓN
          </button>
        </form>

        {/* Separador */}
        <div className="separator">
          <span>O CONTINÚA CON</span>
        </div>

        {/* Botón de Google */}
        <button className="btn-google">
          <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="#EA4335"
              d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.17-3.17C17.47 1.65 14.95 1 12 1 7.35 1 3.39 3.67 1.41 7.56l3.77 2.92c.89-2.67 3.39-4.44 6.82-4.44z"
            />
            <path
              fill="#4285F4"
              d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.4 3.58l3.72 2.88c2.18-2.01 3.71-4.97 3.71-8.61z"
            />
            <path
              fill="#FBBC05"
              d="M5.18 14.52c-.23-.69-.36-1.42-.36-2.18s.13-1.49.36-2.18L1.41 7.24C.51 9.03 0 11.01 0 13s.51 3.97 1.41 5.76l3.77-2.92z"
            />
            <path
              fill="#34A853"
              d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.72-2.88c-1.11.75-2.53 1.19-4.24 1.19-3.43 0-5.93-1.77-6.82-4.44L1.41 16.88C3.39 20.33 7.35 23 12 23z"
            />
          </svg>
          Continuar con Google
        </button>

        {/* Footer */}
        <div className="card-footer">
          ¿No tienes cuenta? <a href="/register">Regístrate aquí &gt;</a>
        </div>
      </div>
    </div>
  );
};

export default Login;