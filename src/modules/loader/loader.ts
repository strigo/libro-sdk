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

export function addLoader() {
  // Add Spinner
  const loaderDiv = document.createElement("div");
  loaderDiv.className = "strigo-loader";
  loaderDiv.innerHTML = SPINNER;

  document.body.appendChild(loaderDiv);
}

export function addLoaderListener(iframeElement: HTMLElement) {
  const preloader = document.querySelector<HTMLElement>(".strigo-loader");

  const fadeEffect = () => {
    const interval = setInterval(() => {
      if (!preloader.style.opacity) {
        preloader.style.opacity = "1";
      }
      const opacity = parseFloat(preloader.style.opacity);
      if (opacity > 0) {
        preloader.style.opacity = (opacity - 0.1).toString();
      } else {
        preloader.style.pointerEvents = "none";
        clearInterval(interval);
      }
    }, 200);
  };

  // Add listener to exercises div
  iframeElement.addEventListener("load", fadeEffect);
}
