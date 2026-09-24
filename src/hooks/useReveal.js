import { useEffect } from "react";

/**
 * Ports the IntersectionObserver-based scroll reveal from the original
 * main.js. Call once at the app root — it watches every .reveal and
 * .reveal-stagger element currently in the DOM and adds .in-view when
 * they scroll into view.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
