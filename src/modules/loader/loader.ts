const SPINNER = `
<div class="circle-loader">
  <svg class="circular" viewBox="25 25 50 50">
  <circle
    class="path"
    cx="50"
    cy="50"
    r="20"
    fill="none"
    stroke-width="2"
    stroke-miterlimit="10"
  />
  </svg>
</div>
`;

export function showLoader() {
  // Add Spinner
  const loaderDiv = document.createElement('div');
  loaderDiv.className = 'strigo-loader';
  loaderDiv.innerHTML = SPINNER;

  document.body.appendChild(loaderDiv);
}

export function hideLoader(): Promise<void> {
  const preloader = document.querySelector<HTMLElement>('.strigo-loader');

  // Temporarily create a promise to make this function usable externally
  // until we rewrite the loader effect with css only.
  return new Promise<void>((resolve) => {
    const interval = setInterval(() => {
      if (!preloader.style.opacity) {
        preloader.style.opacity = '1';
      }

      const opacity = parseFloat(preloader.style.opacity);

      if (opacity > 0) {
        preloader.style.opacity = (opacity - 0.1).toString();
      } else {
        preloader.style.pointerEvents = 'none';
        clearInterval(interval);
        resolve();
      }
    }, 200);
  });
}
