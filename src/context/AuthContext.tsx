import { useState, useEffect, type ReactNode } from 'react';
import { AuthContext } from './authContextValue';

// 1. Definimos los tipos de datos para TypeScript
export interface User {
  id: string;
  username: string;
  email: string;
  emailVerified: boolean;
}
export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

// 2. El objeto `AuthContext` se crea en `authContextValue.ts` para compatibilidad con fast-refresh

// 3. Creamos el Proveedor
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const apiUrl = import.meta.env.VITE_API_URL ?? "";
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Fundamental para evitar parpadeos

  useEffect(() => {
    const refreshIntervalMs = 1000 * 60 * 5; // cada 5 minutos

    const fetchMe = async (): Promise<User | null> => {
      try {
        const response = await fetch(`${apiUrl}/auth/me`, {
          credentials: "include",
        });

        if (!response.ok) {
          return null;
        }

        return await response.json();
      } catch (error) {
        console.error("Error consultando auth/me", error);
        return null;
      }
    };

    const refreshToken = async (): Promise<User | null> => {
      try {
        const response = await fetch(`${apiUrl}/auth/refresh`, {
          method: "POST",
          credentials: "include",
        });

        if (!response.ok) {
          return null;
        }

        const data = await response.json().catch(() => null);
        if (!data || data.success !== true) {
          return null;
        }

        return await fetchMe();
      } catch (error) {
        console.error("Error refrescando token", error);
        return null;
      }
    };

    const checkSession = async () => {
      try {
        const sessionUser = await fetchMe();

        if (sessionUser) {
          setUser(sessionUser);
          return;
        }

        const refreshedUser = await refreshToken();
        setUser(refreshedUser);
      } catch (error) {
        console.error("No hay sesión activa", error);
        const refreshedUser = await refreshToken();
        setUser(refreshedUser);
      } finally {
        setIsLoading(false); // Terminamos de cargar, haya o no usuario
      }
    };

    checkSession();
    const intervalId = window.setInterval(async () => {
      const refreshedUser = await refreshToken();
      if (refreshedUser) {
        setUser(refreshedUser);
      }
    }, refreshIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [apiUrl]);

  const login = (userData: User) => setUser(userData);
  const logout = async() => {
    setUser(null);
    const res = await fetch(`${apiUrl}/auth/logout`, {
      credentials: 'include',
    });
    if (!res.ok) {
      console.log('Error al cerrar sesión');
    }
    window.location.href = '/home';
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. El hook `useAuth` ahora vive en `src/context/useAuth.tsx`