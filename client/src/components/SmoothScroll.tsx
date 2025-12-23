/**
 * Smooth Scroll Component
 * Handles smooth scrolling to sections on the page
 */

export function setupSmoothScroll() {
  document.documentElement.style.scrollBehavior = 'smooth';

  // Handle anchor links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const href = target.getAttribute('href');

    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}
