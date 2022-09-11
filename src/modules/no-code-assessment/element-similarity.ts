import stringSimilarity from 'string-similarity';

import { RecordedElementInfo } from './no-code-assessment.types';

const SIMILARITY_RATING_THRESHOLD = 0.75;

/**
 *  Calculate similarity ration between to string arrays of class names.
 *  similarity ratio = |A & B| / (|A| + |B| - |A & B|)
 */
function getStyleSimilarityRating(recordedElementClasses: string[], capturedElementClasses: string[]): number {
  if (recordedElementClasses.length === 0 && capturedElementClasses.length === 0) {
    return 1;
  }

  const intersection = recordedElementClasses.filter((className) => capturedElementClasses.includes(className));
  const denominator = recordedElementClasses.length + capturedElementClasses.length - intersection.length;

  if (denominator === 0) {
    return 0;
  }

  const similarityRatio = intersection.length / denominator;

  console.log('*** Style similarity ratio:', similarityRatio);

  return similarityRatio;
}

function getStructureSimilarityRating(recordedElementInfo, capturedElement): number {
  const capturedElementChildNodeNames = Array.from(capturedElement.childNodes).map(({ nodeName }) =>
    nodeName.toLowerCase()
  );
  const recordedElementChildNodeNames = recordedElementInfo.internalStructure?.map(({ nodeName }) =>
    nodeName.toLowerCase()
  );

  const internalStructureSimilarity = stringSimilarity.compareTwoStrings(
    capturedElementChildNodeNames.join(''),
    recordedElementChildNodeNames.join('')
  );
  console.log('*** Internal structure similarity ratio:', internalStructureSimilarity);

  return internalStructureSimilarity;
}

function getTextSimilarityRating(recordedElementInfo: RecordedElementInfo, capturedElement: HTMLElement): number {
  const capturedElementDirectInnerText = Array.from(capturedElement.childNodes)
    .reduce((accTextArray: string[], node: Node) => {
      // nodeType(3) is a text node
      if (node.nodeType === 3) {
        accTextArray.push(node.nodeValue);
      }

      return accTextArray;
    }, [])
    .join('');

  const textSimilarity = stringSimilarity.compareTwoStrings(
    recordedElementInfo.directInnerText,
    capturedElementDirectInnerText
  );

  console.log('*** Text similarity ratio: ', textSimilarity);

  return textSimilarity;
}

function getSimilarityRating(recordedElementInfo: RecordedElementInfo, capturedElement: HTMLElement): number {
  if (recordedElementInfo.tagName !== capturedElement.tagName.toLocaleLowerCase()) {
    console.log('*** Mismatching element type. Similarity rating is 0.', {
      recordedElementTagName: recordedElementInfo.tagName,
      capturedElementTagName: capturedElement.tagName.toLocaleLowerCase(),
    });

    return 0;
  }

  const recordedElementClasses = recordedElementInfo.classes;
  const capturedElementClasses = Array.from(capturedElement.classList);

  const styleSimilarityRating = getStyleSimilarityRating(recordedElementClasses, capturedElementClasses);
  const structureSimilarityRating = getStructureSimilarityRating(recordedElementInfo, capturedElement);
  const textSimilarityRating = getTextSimilarityRating(recordedElementInfo, capturedElement);

  const avgSimilarityRating = (styleSimilarityRating + structureSimilarityRating + textSimilarityRating) / 3;

  console.log('*** Avg. similarity rating: ', avgSimilarityRating);

  return avgSimilarityRating;
}

export function isSimilar(recordedElementInfo, capturedElement): boolean {
  console.log('*** elementInfo', recordedElementInfo);
  const similarityRating = getSimilarityRating(recordedElementInfo, capturedElement);

  if (similarityRating < SIMILARITY_RATING_THRESHOLD) {
    return false;
  }

  return true;
}
