export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,  // Reduced from 40 to 20
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,  // Reduced from 40 to 20
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",  // Changed from "spring" to "tween" for better performance
        duration: 0.4,  // Reduced from 0.5
        delay: delay,
        ease: "easeOut",  // Simplified easing
      },
    },
  };
};
