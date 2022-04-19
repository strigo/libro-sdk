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

export function showLoader(): void {
  // Add Spinner
  const loaderDiv = document.createElement('div');
  loaderDiv.id = 'strigo-loader';
  loaderDiv.innerHTML = SPINNER;

  document.body.appendChild(loaderDiv);
}

export function hideLoader(): void {
  const preloader = document.querySelector<HTMLElement>('#strigo-loader');
  preloader.classList.add('loaded');
}
