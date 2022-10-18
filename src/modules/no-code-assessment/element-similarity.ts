import stringSimilarity from 'string-similarity';

import { Logger } from '../../services/logger';
import * as configManager from '../config/config';

import { RecordedElementInfo } from './no-code-assessment.types';

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

  Logger.info('*** Style similarity ratio:', { similarityRatio });

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
  Logger.info('*** Internal structure similarity ratio:', internalStructureSimilarity);

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

  Logger.info('*** Text similarity ratio: ', textSimilarity);

  return textSimilarity;
}

function getSimilarityRating(recordedElementInfo: RecordedElementInfo, capturedElement: HTMLElement): number {
  if (recordedElementInfo.tagName !== capturedElement.tagName.toLocaleLowerCase()) {
    Logger.info('*** Mismatching element type. Similarity rating is 0.', {
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

  Logger.info('*** Avg. similarity rating: ', { avgSimilarityRating });

  return avgSimilarityRating;
}

export function isSimilar(recordedElementInfo, capturedElement): boolean {
  Logger.info('*** elementInfo', recordedElementInfo);
  const similarityRating = getSimilarityRating(recordedElementInfo, capturedElement);

  if (similarityRating < configManager.getLocalStorageConfig()?.assessmentThresholds?.totalSimilarityThreshold) {
    return false;
  }

  return true;
}

const stripTrailingSlash = function (str: string): string {
  return str.endsWith('/') ? str.slice(0, -1) : str;
};

export function isUrlStructureFormatSimilar(urlToEvaluate1: string, urlToEvaluate2: string): boolean {
  const strippedUrl1 = stripTrailingSlash(urlToEvaluate1);
  const strippedUrl2 = stripTrailingSlash(urlToEvaluate2);
  const url1 = new URL(strippedUrl1);
  const url2 = new URL(strippedUrl2);

  if (url1.hostname !== url2.hostname) {
    return false;
  }

  if (url1.pathname === url2.pathname) {
    return true;
  }

  const pathSegments1 = url1.pathname.split('/').filter((v) => v !== '');
  const pathSegments2 = url2.pathname.split('/').filter((v) => v !== '');

  if (pathSegments1.length !== pathSegments2.length) {
    return false;
  }

  const intersection = pathSegments1.filter((className) => pathSegments2.includes(className));
  const onlyIn1 = pathSegments1.filter((className) => !pathSegments2.includes(className));
  const onlyIn2 = pathSegments2.filter((className) => !pathSegments1.includes(className));

  const denominator = pathSegments1.length; // both path segments are same length...

  const pathProportionSimilarity = intersection.length / denominator;

  const nonIdenticalPathSimilarity = stringSimilarity.compareTwoStrings(onlyIn1.join(''), onlyIn2.join(''));

  if (intersection.length === 0) {
    return nonIdenticalPathSimilarity > 0.1;
  }

  const pathSimilarityRating = pathProportionSimilarity + (1 - pathProportionSimilarity) * nonIdenticalPathSimilarity;

  Logger.info('*** Url path similarity rating:', { pathSimilarityRating });

  return (
    pathSimilarityRating >= configManager.getLocalStorageConfig()?.assessmentThresholds?.urlPathSimilarityThreshold
  );
}
