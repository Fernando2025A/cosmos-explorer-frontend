import { useAuth } from '../context/useAuth';
import { Navigate } from 'react-router-dom'; // Si usas react-router

export const Dashboard = () => {
  // Extraemos lo que necesitamos del contexto global
  const { user, isLoading, logout } = useAuth();

  // 1. Mientras la app verifica la sesión inicial, mostramos un loader
  if (isLoading) {
    return <div>Cargando sesión...</div>;
  }

  // 2. Si terminó de cargar y no hay usuario, redirigimos o mostramos mensaje
  if (!user) {
    return <Navigate to="/login" />; 
  }

  // 3. Si hay usuario, renderizamos la página con sus datos
  return (
    <div>
      <h1>Bienvenido, {user.username}</h1>
      <p>Tu correo es: {user.email}</p>
      <p>Verificado: {user.emailVerified ? "Sí" : "No"}</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};