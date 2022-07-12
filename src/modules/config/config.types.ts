import { Assessment } from '../no-code-assessment/no-code-assessment.types';
import { WidgetFlavors } from '../widgets/widget.types';

export interface SiteConfig {
  host: string;
  pathName: string;
  href: string;
  origin: string;
  search: string;
  params: Record<string, string>;
}

export interface LoggingConfig {
  url: string;
}

export interface StrigoProtectedConfig {
  loggingConfig: LoggingConfig;
  userAssessments: Assessment[];
  allowedAcademyDomains: string[];
}

export interface User {
  email: string;
  token: StrigoToken;
}

export interface StrigoInitConfig {
  webApiKey: string;
  subDomain: string;
  selectedWidgetFlavor: WidgetFlavors;
}

export interface StrigoSetupConfig {
  user: User;
  initSite: SiteConfig;
  version?: string;
  loggingConfig?: LoggingConfig;
  dockingSide?: DockingSide;
}

export enum DockingSide {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface StrigoConfig {
  user?: User;
  webApiKey: string;
  initSite?: SiteConfig;
  subDomain: string;
  version?: string;
  selectedWidgetFlavor: WidgetFlavors;
  loggingConfig?: LoggingConfig;
  dockingSide?: DockingSide;
}

export interface StrigoToken {
  token: string;
  expiration: string;
}
