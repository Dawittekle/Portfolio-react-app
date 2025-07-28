

/**
 * Smoothly scrolls to a DOM element by its ID.
 * @param {string} id - The id of the target element (without #).
 * @param {object} options - Optional scrollIntoView options.
 */
const scrollToElement = (id, options = { behavior: "smooth", block: "start" }) => {
  if (!id) return;

  // Ensure DOM is ready
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView(options);
    }
  }, 0);
};

export default scrollToElement;
