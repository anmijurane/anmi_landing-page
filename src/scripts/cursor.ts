export const cursorPointer = () => {
  const cursor = document.getElementById('custom-cursor');
  const interactiveElements = document.querySelectorAll('.cursor-pointer');

  if (!cursor || !interactiveElements) return

  if (window.matchMedia('(pointer: fine)').matches) {
      document.addEventListener('mousemove', (e) => {
          cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });

      interactiveElements.forEach(el => {
          el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
          el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
      });
  } else {
      cursor.style.display = 'none';
  }
}
