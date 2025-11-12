import { _$All } from "./querys";

export const scrollObserver = () => {
  const revealElements = _$All('section.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
        else {
          entry.target.classList.remove('visible');
        }
    });
  }, { threshold: 0.1});

  revealElements.forEach(el => {
      revealObserver.observe(el);
  });
}
