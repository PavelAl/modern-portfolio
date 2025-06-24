import { useRef, useState, useEffect } from "react";

export const useRegisterVisibilityOnScroll = <T extends HTMLElement>() => {
  const rootRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we don't need to observe anymore
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the element is fully in view
      },
    );

    const rootElement = rootRef.current;

    if (rootElement) {
      observer.observe(rootElement);
    }

    return () => {
      if (rootElement) {
        observer.unobserve(rootElement);
      }
    };
  }, []);

  return { rootRef, isVisible };
};
