const SPINNER = `
<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto; animation-play-state: running; animation-delay: 0s;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" r="0" fill="none" stroke="#ffffff" stroke-width="2" style="animation-play-state: running; animation-delay: 0s;">
  <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s" style="animation-play-state: running; animation-delay: 0s;"></animate>
  <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s" style="animation-play-state: running; animation-delay: 0s;"></animate>
</circle><circle cx="50" cy="50" r="0" fill="none" stroke="#f1f1f9" stroke-width="2" style="animation-play-state: running; animation-delay: 0s;">
  <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s" style="animation-play-state: running; animation-delay: 0s;"></animate>
  <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s" style="animation-play-state: running; animation-delay: 0s;"></animate>
</circle>
</svg>`;

export function addLoader() {
  // Add Spinner
  const loaderDiv = document.createElement("div");
  loaderDiv.className = "strigo-loader";
  loaderDiv.innerHTML = SPINNER;

  document.body.appendChild(loaderDiv);
}

export function showLoader() {
  const preloader = document.querySelector<HTMLElement>(".strigo-loader");
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
}
