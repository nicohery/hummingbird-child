/**
 * Hummingbird Child — child JS overrides.
 *
 * Example override: everything below ships inside assets/js/theme.js,
 * no extra custom.js request.
 */
const initChild = () => {
  // Tag the document so CSS/JS (and the tester) can see the child is live.
  document.documentElement.classList.add('hummingbird-child');

  // eslint-disable-next-line no-console
  console.info('Hummingbird Child theme initialized');
};

export default initChild;
