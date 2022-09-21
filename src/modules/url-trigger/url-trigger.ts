import { openWidget } from '../document/document';

export function observeUrlTriggerChanges(): void {
  let currentHref = document.location.href;
  const bodyList = document.querySelector('body');

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
      if (currentHref != document.location.href) {
        currentHref = document.location.href;
        console.log(currentHref)

        if (currentHref.startsWith('https://linear.app/strigo/team/STRG/active')) {
          openWidget();
        }
      }
    });
  });

  const config = {
    childList: true,
    subtree: true,
  };

  observer.observe(bodyList, config);
}
