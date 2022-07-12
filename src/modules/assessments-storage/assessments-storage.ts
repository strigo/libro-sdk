import { Logger } from '../../services/logger';
import { StorageNames, StorageTypes } from '../storage-utils/storage-utils.types';
import { Assessment } from '../no-code-assessment/no-code-assessment.types';

import { StrigoAssessmentsStorage } from './assessments-storage.types';

export function getAssessmentsStorageData(): StrigoAssessmentsStorage {
  try {
    return JSON.parse(window[StorageTypes.LOCAL_STORAGE].getItem(StorageNames.STRIGO_ASSESSMENTS));
  } catch (error) {
    Logger.error('Get assessments storage error', { error });

    return null;
  }
}

export function initAssessmentStorage(): StrigoAssessmentsStorage {
  try {
    const currentAssessmentsStorage = getAssessmentsStorageData();

    if (currentAssessmentsStorage) {
      Logger.debug('Assessments storage already exists');

      return currentAssessmentsStorage;
    }

    const strigoAssessments = { assessments: [] };
    window[StorageTypes.LOCAL_STORAGE].setItem(StorageNames.STRIGO_ASSESSMENTS, JSON.stringify(strigoAssessments));

    return strigoAssessments;
  } catch (error) {
    Logger.error('Init assessments storage error', { error });

    return null;
  }
}

export function setupAssessmentStorage(initialStorage?: Assessment[]): StrigoAssessmentsStorage {
  try {
    const strigoAssessments = initialStorage ? { assessments: [...initialStorage] } : { assessments: [] };
    window[StorageTypes.LOCAL_STORAGE].setItem(StorageNames.STRIGO_ASSESSMENTS, JSON.stringify(strigoAssessments));

    return strigoAssessments;
  } catch (error) {
    Logger.error('Assessments storage setup error', { error });

    return null;
  }
}

export function clearAssessmentStorage(): void {
  try {
    window[StorageTypes.LOCAL_STORAGE].removeItem(StorageNames.STRIGO_ASSESSMENTS);
  } catch (error) {
    Logger.error('Clear assessments storage error', { error });
  }
}
