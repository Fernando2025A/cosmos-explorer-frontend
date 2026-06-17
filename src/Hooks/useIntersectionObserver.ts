import { useEffect, useRef, useState } from 'react';

export const useElementOnScreen = (options?: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Si el elemento entra en pantalla, activamos la visibilidad
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Opcional: dejar de observar si solo quieres que se anime la primera vez
        if (containerRef.current) observer.unobserve(containerRef.current);
      }
    }, options || { threshold: 0.1 }); // Se activa cuando el 10% del elemento es visible

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [containerRef, isVisible] as const;
};