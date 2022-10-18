import { ACADEMY_HAT } from '../../strigo/consts';
import * as sessionManager from '../session/session';
import * as configManager from '../config/config';
import { DockingSide, OrganizationAcademyColors, TextAccents } from '../config/config.types';
import { Logger } from '../../services/logger';

import { AppendCSSFileParams, AppendIframeParams } from './document.types';

export function getHostingAppWindow(): Window {
  return window.top;
}

export function getHeadElement(): HTMLElement {
  return document.getElementsByTagName('head')[0];
}

export function getBodyElement(): HTMLElement {
  return document.getElementsByTagName('body')[0];
}

export function clearDoc(): void {
  document.open();
  document.close();
}

export function generatePageStructure(): HTMLElement {
  const mainDiv = document.createElement('div');
  mainDiv.className = 'strigo-main';

  document.body.appendChild(mainDiv);

  return mainDiv;
}

export function appendCssFile(params: AppendCSSFileParams): void {
  const { url, parentElement } = params;
  const cssElement = document.createElement('link');
  cssElement.rel = 'stylesheet';
  cssElement.href = url;
  parentElement.appendChild(cssElement);
}

export function appendIFrame(params: AppendIframeParams): HTMLIFrameElement {
  const { url, parentElement, classNames, id } = params;
  const iframe = document.createElement('iframe');
  iframe.classList.add(...classNames);
  iframe.id = id;
  iframe.src = url;

  parentElement.appendChild(iframe);

  return iframe;
}

export function reloadPage(): void {
  location.reload();
}

export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function getSplitMaxSizes(): [number, number] {
  if (isMobile()) {
    return [window.screen.width, window.screen.width];
  }

  return [window.screen.width / 2, window.screen.width];
}

export function getSplitMinSizes(): [number, number] {
  if (isMobile()) {
    return [0, 0];
  }

  return [window.screen.width * 0.25, 0];
}

export function isIframeSupported(): boolean {
  const req = new XMLHttpRequest();
  req.open('GET', window.document.location.href, false);
  req.send(null);
  const headers = req.getAllResponseHeaders().toLowerCase();
  const headersArray = headers.split('\r\n');

  for (const header of headersArray) {
    if (header.includes('x-frame-options')) {
      const headerSplitted = header.split(':');

      if (headerSplitted && headerSplitted.length > 1) {
        return !(headerSplitted[1].trim() === 'deny');
      }
    }
  }

  return true;
}

export function move(): void {
  const widget = document.getElementById('strigo-widget');
  const collapseDiv = document.getElementById('strigo-collapse-div');
  const academyHat = document.getElementById('strigo-academy-hat');

  widget.classList.toggle('align-left');
  collapseDiv.classList.toggle('align-left');
  academyHat.classList.toggle('align-left');

  const dockingSide = widget.classList.contains('align-left') ? DockingSide.LEFT : DockingSide.RIGHT;
  const strigoIframe = document.getElementById('strigo-exercises') as HTMLIFrameElement;
  configManager.setConfigValue('dockingSide', dockingSide);
  strigoIframe.contentWindow.postMessage({ dockingSide }, '*');
}

export function removeWidget(hostingAppWindow: Window): void {
  hostingAppWindow.document.getElementById('strigo-widget').remove();
}

export function openWidget(): void {
  const widget = document.getElementById('strigo-widget');
  widget.classList.add('slide-in');
  widget.classList.add('loaded');

  const collapseDiv = document.getElementById('strigo-collapse-div');
  collapseDiv.classList.remove('slide-in');

  const academyHat = document.getElementById('strigo-academy-hat');
  academyHat.classList.remove('slide-in');
}

export function collapseWidget(): void {
  const widget = document.getElementById('strigo-widget');
  widget.classList.remove('slide-in');
  widget.classList.remove('loaded');

  const collapseDiv = document.getElementById('strigo-collapse-div');
  collapseDiv.classList.add('slide-in');

  const academyHat = document.getElementById('strigo-academy-hat');
  academyHat.classList.add('slide-in');
}

const navigationObserver = function (pageMutations): void {
  const filteredMutations = pageMutations.filter((mutation) => {
    return ['HTML', 'BODY'].includes(mutation.target.nodeName);
  });

  if (filteredMutations.length > 0) {
    const widget = window.document.getElementById('strigo-widget');

    if (widget) {
      Logger.info('*** Strigo widget already exist on the DOM.');

      return;
    }

    Logger.info('*** Reloading widget in navigation observer');
    setTimeout(window.Strigo.open.bind(window.Strigo), 0);
  }
};

export function toggleWidget(): void {
  const previousOpenState = sessionManager.shouldPanelBeOpen();
  const shouldPanelBeOpen = !previousOpenState;

  sessionManager.setSessionValue('shouldPanelBeOpen', shouldPanelBeOpen);

  if (shouldPanelBeOpen) {
    openWidget();
  } else {
    collapseWidget();
  }
}

export function createWidget(url: string): HTMLIFrameElement {
  const shouldPanelBeOpen = sessionManager.shouldPanelBeOpen();
  const dockingSide = configManager.getConfigValue('dockingSide');

  // Create academy hat
  const academyHatDiv = document.createElement('div');
  academyHatDiv.className = 'strigo-academy-hat';
  academyHatDiv.id = 'strigo-academy-hat';

  academyHatDiv.onclick = () => {
    toggleWidget();
  };

  const academyHatIcon = document.createElement('div');
  academyHatIcon.className = 'strigo-academy-hat-icon';
  academyHatIcon.id = 'strigo-academy-hat-icon';
  academyHatIcon.innerHTML = ACADEMY_HAT;
  academyHatDiv.appendChild(academyHatIcon);

  // Create collapse div
  const collapseDiv = document.createElement('div');
  collapseDiv.className = 'strigo-collapse-div';
  collapseDiv.id = 'strigo-collapse-div';

  // Create widget iframe (strigo-app exercises)
  const strigoExercisesIframe = document.createElement('iframe');
  strigoExercisesIframe.className = 'strigo-iframe';
  strigoExercisesIframe.id = 'strigo-exercises';
  strigoExercisesIframe.src = url;

  // Create widget div (wrapper)
  const widgetDiv = document.createElement('div');
  widgetDiv.id = 'strigo-widget';
  widgetDiv.appendChild(collapseDiv);
  widgetDiv.appendChild(strigoExercisesIframe);

  if (dockingSide === DockingSide.LEFT) {
    widgetDiv.classList.add('align-left');
    collapseDiv.classList.add('align-left');
    academyHatDiv.classList.add('align-left');
  }

  document.body.appendChild(widgetDiv);
  document.body.appendChild(academyHatDiv);

  if (shouldPanelBeOpen) {
    openWidget();
  } else {
    collapseWidget();
  }

  return strigoExercisesIframe;
}

export function initNavigationObserver(hostingAppWindow: Window): void {
  // eslint-disable-next-line no-param-reassign
  hostingAppWindow.strigoNavigationObserver = {
    observer: new MutationObserver(navigationObserver),
  };

  const navigationObserverOptions = {
    childList: true,
    subtree: true,
  };

  hostingAppWindow?.strigoNavigationObserver?.observer?.observe(hostingAppWindow.document, navigationObserverOptions);
}

export function customizeHatColors(academyColors: OrganizationAcademyColors): void {
  const { primaryColor, primaryHoverColor, primaryTextAccent } = academyColors;

  const wrapper: HTMLElement = document.querySelector(':root');
  wrapper.style.setProperty('--customizable-hat-bg-color', primaryColor);
  wrapper.style.setProperty('--customizable-hat-bg-hover-color', primaryHoverColor);
  wrapper.style.setProperty(
    '--customizable-hat-text-color',
    primaryTextAccent === TextAccents.DARK ? '#000000' : '#FFFFFF'
  );
}
