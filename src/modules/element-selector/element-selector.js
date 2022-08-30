import { getElementProfiler } from './element-profiler.js';

function getElementProfile(e, { dataAttribute } = {}) {
  const elementProfiler = getElementProfiler();

  const options = {
    buildNodeTreeUpToRoot: true,
    optimizedMinLength: e.target.id ? 2 : 10,
    threshold: 1000,
    attr: (name) => name === dataAttribute,
    // className: className => !className.includes('sc-')
  };

  const nodeTree = elementProfiler.getElementProfileNodeTree(e.target, options);

  console.log('*** Just FYI - this is how it can generate css selector:',
    elementProfiler.generateSelectorFromNodeTree(nodeTree, options)
  );

  return nodeTree;
}

export function getElementSelector(nodeTree, options) {
  const elementProfiler = getElementProfiler();

  const defaultOptions = {
    allowDuplicates: false,
    optimizedMinLength: 10,
    threshold: 1000,
    attr: (name) => name === dataAttribute,
    fallbackNodeTree: nodeTree
  };

  const consolidatedOptions = { ...defaultOptions, ...options };

  const elementSelector = elementProfiler.generateSelectorFromNodeTree(nodeTree, consolidatedOptions);

  return elementSelector;
}


/**
 * This function returns an element selector function that
 * will add an overlay for hovered element to indicate the element selection functionality.
 * @param {Object} options - The element selector options
 * @param [options.onElementProfileCreated] { function } - A callback to return the selected element profile.
 * @param [options.onElementSelectionCancel] { function } - A callback to cancel the element selection overlay.
 * @param [options.zIndex] { number } - A configurable z-index in which the selection overlay will appear.
 * @param [options.rootElement] { HtmlElement } - The starting dom element for the selection.
 * @param rootDocument- {DOMNode} The root document in which the selection overlay will append itself to hovered elements.
 */
export function getElementSelection(rootDocument, options) {

  this.removeOverlayElement = () => {
    console.log('Removing mouse over event listener from the selected element.');
    rootDocument.removeEventListener("mouseover", this.mouseOverEvent);

    const selectorOverlay = rootDocument.getElementById('element-selector-overlay');
    if (selectorOverlay) {
      rootDocument?.body?.removeChild(selectorOverlay);
    }
  }

  this.saveSelectedSelector = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.removeOverlayElement();

    let elementProfile = getElementProfile(e, {
      dataAttribute: 'some-custom-strigo-attribute',
    });

    elementProfile = elementProfile || {};

    console.log('Selected element with elementProfile:', elementProfile);
    options.onElementProfileCreated(elementProfile);
  };

  function setStyle(el, propertyObject) {
    for (const property in propertyObject) {
      el.style[property] = propertyObject[property];
    }
  }

  const move = (e, overlayElement, skippedSelectors = []) => {
    if (overlayElement === e.target) {
      return;
    }

    const element = e.target;

    if (skippedSelectors.includes(element.id)) {
      return;
    }

    const width = element.offsetWidth + 2;
    const height = element.offsetHeight + 2;

    function getPosition( el ) {
      let x = 0;
      let y = 0;
      while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        x += el.offsetLeft - el.scrollLeft;
        y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
      }
      return { top: y - window.scrollY, left: x - window.scrollX };
    }

    const position = getPosition(element);

    const newDimensions = {
      top: position.top - 2 + 'px',
      left: position.left - 2 + 'px',
      width: width + 'px',
      height: height + 'px',
    };

    setStyle(overlayElement, newDimensions);
  };

  this.mouseOverEvent = (e) => {
    const overlayElement = window.document.getElementById('element-selector-overlay'); // TODO: See if we can pass the element instead of fetching it
    move(e, overlayElement, ['element-selector-overlay', 'strigo-assessment-recorder-iframe']);
    const hoveredElement = e.target;
    hoveredElement.addEventListener('click', this.saveSelectedSelector);
  };

  this.removeClickListenerFromHoveredElement = (e) => {
    const hoveredElement = e.target;
    hoveredElement.removeEventListener('click', this.saveSelectedSelector);
  };

  this.startElementSelector = () => {
    const selectorOverlay = rootDocument.createElement('div');
    selectorOverlay.setAttribute('id', 'element-selector-overlay');

    selectorOverlay.setAttribute("id", "element-selector-overlay");
    selectorOverlay.setAttribute(
      "style",
      `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: ${options.zIndex || 2147483646};
      padding: 1px;
      position: fixed;
      background: rgba(105, 108, 191, 0.2);
      border: 2px dashed #696CBF;
      box-sizing: border-box;
      border-radius: 4px;
    `
    );

    console.log('Appending overlay selector element.');
    rootDocument.body.appendChild(selectorOverlay);
    rootDocument.addEventListener("mouseover", this.mouseOverEvent);
    rootDocument.addEventListener("mouseout", this.removeClickListenerFromHoveredElement);

    // Setting "abort" action to the esc key
    window.focus();
    rootDocument.body.focus();
    window.addEventListener("keydown", this.onEscSelection, true);
  }

  this.onEscSelection = (e) => {
    if (e.key === 'Escape') {
      console.log('Aborting element selection...', e.key);
      this.stopElementSelection()
    }
  }

  this.stopElementSelection = () => {
    this.removeOverlayElement();
    window.removeEventListener("keydown", this.onEscSelection, true);
    options.onElementSelectionCancel();
  }

  return {
    startElementSelector: this.startElementSelector,
    stopElementSelection: this.stopElementSelection
  }
}