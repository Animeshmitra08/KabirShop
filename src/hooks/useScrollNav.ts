import { useEffect, useState } from "react";

interface UseScrollNavigationProps {
  sectionIds: string[];
  offset?: number; // navbar height
}

export const useScrollNavigation = ({
  sectionIds,
  offset = 80,
}: UseScrollNavigationProps) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const elementPosition = element.offsetTop - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset + 50;

      setScrolled(window.scrollY > 50);

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return {
    activeSection,
    scrolled,
    scrollToSection,
  };
};