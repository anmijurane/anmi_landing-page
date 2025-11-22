import { cspAlgorithmSchema } from 'node_modules/astro/dist/core/csp/config';
import { _$, _$All } from './querys';

export const scrollSpyNav = () => {
  const navLinks = _$All('.nav-link, .mobile-nav-link');
  const sections = _$All('section');

  const spyObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const activeLink = _$All(`.nav-link[href="#${id}"], .mobile-nav-link[href="#${id}"]`);

          navLinks.forEach(link => {
            link.classList.remove('nav-link-active');
          });

          if (activeLink.length > 0) {
            activeLink.forEach(link => {
              link.classList.add('nav-link-active');
            });
          }
        }
      });
    },
    {
      rootMargin: '-40% 0px -50% 0px', // Se activa cuando la sección está en el centro de la pantalla
    }
  );

  sections.forEach(section => {
    spyObserver.observe(section);
  });
};
