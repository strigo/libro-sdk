export function getElementProfiler() {
  var Limit;
  (function (Limit) {
    Limit[(Limit["All"] = 0)] = "All";
    Limit[(Limit["Two"] = 1)] = "Two";
    Limit[(Limit["One"] = 2)] = "One";
  })(Limit || (Limit = {}));
  let config;
  let rootDocument;
  function getElementProfileNodeTree(input, options) {
    if (input.nodeType !== Node.ELEMENT_NODE) {
      throw new Error(`Can't generate CSS selector for non-element node type.`);
    }
    if ("html" === input.tagName.toLowerCase()) {
      return "html";
    }
    const defaults = {
      root: document.body,
      idName: (name) => true,
      className: (name) => true,
      tagName: (name) => true,
      attr: (name, value) => false,
      seedMinLength: 1,
      buildNodeTreeUpToRoot: false,
      maxNumberOfTries: 2000
    };
    config = Object.assign(Object.assign({}, defaults), options);
    rootDocument = findRootDocument(config.root, defaults);
    let nodeTree = bottomUpSearch(input);

    return nodeTree;
  }
  function selector(path) {
    let node = path[0];
    let query = node.name;
    for (let i = 1; i < path.length; i++) {
      const level = path[i].level || 0;
      if (level === node.level - 1) {
        query = `${path[i].name} > ${query}`;
      } else {
        query = `${path[i].name} ${query}`;
      }
      node = path[i];
    }
    return query;
  }
  function buildSelectorUpToTopParent(pathTreeNode, childPathToAdd) {
    let parent = pathTreeNode.parent;
    const pathStack = [];
    pathStack.push(childPathToAdd);

    if (pathTreeNode.path) {
      pathStack.push(pathTreeNode.path);
    }

    while(parent?.path) {
      pathStack.push(parent.path);
      parent = parent.parent;
    }

    const selectorString = selector(pathStack);
    return selectorString;
  }
  function branchAndBound(nodeTree, rootDocument) {
    const topDownNodes = nodeTree.sort((a, b) => b.level - a.level);

    // Create a Stack and add our initial node in it
    let selectorPathTreeTop = {
      path: null,
      children: [],
      parent:null,
      level: -1
    }

    let stack = [];
    let explored = new Set();
    let generatedSelector = null;
    let level = 0;

    stack.push(selectorPathTreeTop);
    // Mark the first node as explored
    explored.add(selectorPathTreeTop);
    // We'll continue till our Stack gets empty
    while (stack.length > 0 && topDownNodes[level]) {
      let pathTreeNode = stack.pop();

      const { nodeIdentifiers } = topDownNodes[level];
      const fullLevelPaths = getFullLevelPaths(nodeIdentifiers, level);

      const levelPaths = []
      for (const pathToAdd of fullLevelPaths) {
        const selectorToTest = buildSelectorUpToTopParent(pathTreeNode, pathToAdd);

        const numOfOccurrences = document.querySelectorAll(selectorToTest).length;

        if (numOfOccurrences === 0) {
          continue;
        }

        if (numOfOccurrences === 1) {
          // Purge all siblings before adding this one, true path
          levelPaths.splice(0,levelPaths.length);
          levelPaths.push({
            path: pathToAdd,
            children: [],
            parent: pathTreeNode,
            level
          });
          generatedSelector = selectorToTest;
          break;
        }

        levelPaths.push({
          path: pathToAdd,
          children: [],
          parent: pathTreeNode,
          level
        });
      }

      if (levelPaths.length === 0) {
        // no valid selector was found... no point on keep building
        // aborting...
        return;
      }
      // if we got here - we did not fail to get an element in the hierarchy of the DOM (no FN yet for the entire level)
      pathTreeNode.children.push(...levelPaths);

      // Register the children to be visited:

      // 1. We filter out the nodes that have already been explored.
      // 2. Then we mark each unexplored node as explored and push it to the Stack.
      pathTreeNode.children.filter(n => !explored.has(n))
        .forEach(child => {
          explored.add(child);
          stack.push(child);
        });

      level = level + 1;
    }

    return generatedSelector;
  }
  function generateSelectorFromNodeTree(nodeTree, options) {
    const defaults = {
      root: document.body,
      idName: (name) => true,
      className: (name) => true,
      tagName: (name) => true,
      attr: (name, value) => false,
      optimizedMinLength: 6,
      maxNumberOfTries: 2000,
      fallbackNodeTree: nodeTree
    };
    config = Object.assign(Object.assign({}, defaults), options);
    rootDocument = findRootDocument(config.root, defaults);

    return branchAndBound(nodeTree, rootDocument);
  }
  function getFullLevelPaths(nodeIdentifiers, level){
    const id = maybe(nodeIdentifiers.find(node => node.identifier === 'id'));
    const attributes = maybe(...nodeIdentifiers.filter(node => node.identifier === 'attribute'));
    const classNames = maybe(...nodeIdentifiers.filter(node => node.identifier === 'className'));
    const tagName = maybe(...nodeIdentifiers.filter(node => node.identifier === 'tagName'));
    const nth = nodeIdentifiers.filter(node => node.identifier === 'index' && node.identifier.outOf !== '1')?.[0]?.index;

    let levelPath = [...id || [], ...attributes || [], ...classNames || [], ...tagName || [] ] || [any()];

    if (nth) {
      levelPath = levelPath.concat(
        levelPath.filter(dispensableNth).map((node) => nthChild(node, nth))
      );
    }

    const selectorCombinations = levelPath ? sort(combinations([levelPath])) : null;

    return selectorCombinations.map(([path]) => { return { ...path, level } });
  }
  function findRootDocument(rootNode, defaults) {
    if (rootNode.nodeType === Node.DOCUMENT_NODE) {
      return rootNode;
    }
    if (rootNode === defaults.root) {
      return rootNode.ownerDocument;
    }
    return rootNode;
  }
  function bottomUpSearch(input) {
    let nodeTree = [];
    let current = input;
    let i = 0;
    while (current && current !== config.root.parentElement) {
      const nodeIdentifiers =  [
        maybe(id(current)),
        maybe(tagName(current)),
        maybe(...attr(current)),
        maybe(...classNames(current)),
        maybe(index(current)),
      ].filter(notEmpty).flat()
        .sort((a,b) => a.penalty - b.penalty)

      nodeTree.push({ nodeIdentifiers, level: i });
      current = current.parentElement;
      i++;
    }

    return nodeTree;
  }
  function penalty(path) {
    return path.map((node) => node.penalty).reduce((acc, i) => acc + i, 0);
  }
  function unique(path) {
    switch (rootDocument.querySelectorAll(selector(path)).length) {
      case 0:
        throw new Error(
          `Can't select any node with this selector: ${selector(path)}`
        );
      case 1:
        return true;
      default:
        return false;
    }
  }
  function id(input) {
    if (!input?.getAttribute) {
      alert(JSON.stringify(input));
    }
    const elementId = input.getAttribute("id");
    if (elementId && config.idName(elementId)) {
      return {
        name: "#" + cssesc(elementId, { isIdentifier: true }),
        penalty: 0,
        identifier: 'id'
      };
    }
    return null;
  }
  function attr(input) {
    const attrs = Array.from(input.attributes).filter((attr) =>
      config.attr(attr.name, attr.value)
    );
    return attrs.map((attr) => ({
      name:
        "[" +
        cssesc(attr.name, { isIdentifier: true }) +
        '="' +
        cssesc(attr.value) +
        '"]',
      penalty: 0.5,
      identifier: 'attribute'
    }));
  }
  function classNames(input) {
    const names = Array.from(input.classList).filter(config.className);
    return names.map((name) => ({
      name: "." + cssesc(name, { isIdentifier: true }),
      penalty: 1,
      identifier: 'className'
    }));
  }
  function tagName(input) {
    const name = input.tagName.toLowerCase();
    if (config.tagName(name)) {
      return {
        name,
        penalty: 2,
        identifier: 'tagName'
      };
    }
    return null;
  }
  function any() {
    return {
      name: "*",
      penalty: 3,
      identifier: 'any'
    };
  }
  function index(input) {
    const parent = input.parentNode;
    if (!parent) {
      return null;
    }
    let child = parent.firstChild;
    if (!child) {
      return null;
    }
    let i = 0;
    while (child) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        i++;
      }
      if (child === input) {
        break;
      }
      child = child.nextSibling;
    }
    return {
      index: i,
      outOf: parent.childElementCount,
      penalty: 4,
      identifier: 'index'
    };
  }
  function nthChild(node, i) {
    return {
      name: node.name + `:nth-child(${i})`,
      penalty: node.penalty + 1
    };
  }
  function dispensableNth(node) {
    return node.name !== "html" && !node.name.startsWith("#") && !config.allowDuplicates;
  }
  function maybe(...level) {
    const list = level.filter(notEmpty);
    if (list.length > 0) {
      return list;
    }
    return null;
  }
  function notEmpty(value) {
    return value !== null && value !== undefined;
  }
  function* combinations(stack, path = []) {
    if (stack.length > 0) {
      for (let node of stack[0]) {
        yield* combinations(stack.slice(1, stack.length), path.concat(node));
      }
    } else {
      yield path;
    }
  }
  function sort(paths) {
    return Array.from(paths).sort((a, b) => penalty(a) - penalty(b));
  }
  function* optimize(
    path,
    input,
    scope = {
      counter: 0,
      visited: new Map()
    }
  ) {
    if (path.length > 2 && path.length > config.optimizedMinLength) {
      for (let i = 1; i < path.length - 1; i++) {
        if (scope.counter > config.maxNumberOfTries) {
          console.log(`*** Selector optimization exhausted. Exceeded max number of tries - ${config.maxNumberOfTries}`);
          return; // Okay At least I tried!
        }
        scope.counter += 1;
        const newPath = [...path];
        newPath.splice(i, 1);
        const newPathKey = selector(newPath);
        if (scope.visited.has(newPathKey)) {
          return;
        }
        if (unique(newPath) && same(newPath, input)) {
          yield newPath;
          scope.visited.set(newPathKey, true);
          yield* optimize(newPath, input, scope);
        }
      }
    }
  }
  function same(path, input) {
    return rootDocument.querySelector(selector(path)) === input;
  }
  const regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
  const regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
  const regexExcessiveSpaces =
    /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
  const defaultOptions = {
    escapeEverything: false,
    isIdentifier: false,
    quotes: "single",
    wrap: false
  };
  function cssesc(string, opt = {}) {
    const options = Object.assign(Object.assign({}, defaultOptions), opt);
    if (options.quotes != "single" && options.quotes != "double") {
      options.quotes = "single";
    }
    const quote = options.quotes == "double" ? '"' : "'";
    const isIdentifier = options.isIdentifier;
    const firstChar = string.charAt(0);
    let output = "";
    let counter = 0;
    const length = string.length;
    while (counter < length) {
      const character = string.charAt(counter++);
      let codePoint = character.charCodeAt(0);
      let value = void 0;
      // If it’s not a printable ASCII character…
      if (codePoint < 0x20 || codePoint > 0x7e) {
        if (codePoint >= 0xd800 && codePoint <= 0xdbff && counter < length) {
          // It’s a high surrogate, and there is a next character.
          const extra = string.charCodeAt(counter++);
          if ((extra & 0xfc00) == 0xdc00) {
            // next character is low surrogate
            codePoint = ((codePoint & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
          } else {
            // It’s an unmatched surrogate; only append this code unit, in case
            // the next code unit is the high surrogate of a surrogate pair.
            counter--;
          }
        }
        value = "\\" + codePoint.toString(16).toUpperCase() + " ";
      } else {
        if (options.escapeEverything) {
          if (regexAnySingleEscape.test(character)) {
            value = "\\" + character;
          } else {
            value = "\\" + codePoint.toString(16).toUpperCase() + " ";
          }
        } else if (/[\t\n\f\r\x0B]/.test(character)) {
          value = "\\" + codePoint.toString(16).toUpperCase() + " ";
        } else if (
          character == "\\" ||
          (!isIdentifier &&
            ((character == '"' && quote == character) ||
              (character == "'" && quote == character))) ||
          (isIdentifier && regexSingleEscape.test(character))
        ) {
          value = "\\" + character;
        } else {
          value = character;
        }
      }
      output += value;
    }
    if (isIdentifier) {
      if (/^-[-\d]/.test(output)) {
        output = "\\-" + output.slice(1);
      } else if (/\d/.test(firstChar)) {
        output = "\\3" + firstChar + " " + output.slice(1);
      }
    }
    // Remove spaces after `\HEX` escapes that are not followed by a hex digit,
    // since they’re redundant. Note that this is only possible if the escape
    // sequence isn’t preceded by an odd number of backslashes.
    output = output.replace(regexExcessiveSpaces, function ($0, $1, $2) {
      if ($1 && $1.length % 2) {
        // It’s not safe to remove the space, so don’t.
        return $0;
      }
      // Strip the space.
      return ($1 || "") + $2;
    });
    if (!isIdentifier && options.wrap) {
      return quote + output + quote;
    }
    return output;
  }

  return { getElementProfileNodeTree, generateSelectorFromNodeTree };
}
