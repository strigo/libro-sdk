import * as sessionManager from "../session/session";

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
  sessionManager.setSessionValue("isLoading", true);

  // Add Spinner
  const loaderDiv = document.createElement("div");
  loaderDiv.className = "strigo-loader";
  loaderDiv.innerHTML = SPINNER;

  document.body.appendChild(loaderDiv);
}

export function hideLoader() {
  console.log('here hide')
  const preloader = document.querySelector<HTMLElement>(".strigo-loader");
  const interval = setInterval(() => {
    if (!preloader.style.opacity) {
      preloader.style.opacity = "1";
    }
    const opacity = parseFloat(preloader.style.opacity);
    if (opacity > 0) {
      preloader.style.opacity = (opacity - 0.1).toString();
    } else {
      sessionManager.setSessionValue("isLoading", false);
      preloader.style.pointerEvents = "none";
      clearInterval(interval);
    }
  }, 200);
}

export function isLoading(): boolean {
  console.log(sessionManager.getSessionValue("isLoading"))
  return !!sessionManager.getSessionValue("isLoading");
}
