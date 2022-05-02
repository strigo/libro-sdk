import { WIDGET_FLAVORS } from '../widgets/widget.types';

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
}

export interface User {
  email: string;
  token: StrigoToken;
}

export interface StrigoInitConfig {
  webApiKey: string;
  subDomain: string;
  selectedWidgetFlavor: WIDGET_FLAVORS;
}

export interface StrigoSetupConfig {
  user: User;
  initSite: SiteConfig;
  development: boolean;
  version?: string;
  loggingConfig?: LoggingConfig;
}

export interface StrigoConfig {
  user?: User;
  webApiKey: string;
  initSite?: SiteConfig;
  subDomain: string;
  development?: boolean;
  version?: string;
  selectedWidgetFlavor: WIDGET_FLAVORS;
  loggingConfig?: LoggingConfig;
}

export interface StrigoToken {
  token: string;
  expiration: string;
}
