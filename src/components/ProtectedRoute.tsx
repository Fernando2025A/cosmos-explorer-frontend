import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

interface Props {
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user, isLoading } = useAuth();

  // Mientras verificamos la sesión, no renderizamos nada (evita parpadeos)
  if (isLoading) return null;

  // Si no hay usuario, redirigimos al login
  if (!user) return <Navigate to="/login" replace />;

  // Usuario autenticado: renderizamos el contenido protegido
  return children;
};
