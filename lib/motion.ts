// Easing cubic-bezier: smooth "easeOut"
export const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
};
