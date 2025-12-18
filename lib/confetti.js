import confetti from "canvas-confetti";

export const launchConfetti = () => {
  const duration = 2500;
  const end = Date.now() + duration;

  const colors = ["#FF5A58", "#ffffff", "#ffd1d1"];

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 90,
      spread: 700,
      origin: { x: Math.random(), y: -0.1 },
      colors,
      gravity: 0.9,
      scalar: 0.9,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
