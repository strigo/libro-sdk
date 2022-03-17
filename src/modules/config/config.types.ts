import { WIDGET_FLAVORS } from "../session/session.types";

export interface SiteConfig {
  host: string;
  pathName: string;
  href: string;
  origin: string;
  search: string;
  params: Record<string, string>;
}

export interface StrigoConfig {
  email: string;
  webApiKey: string;
  token: StrigoToken;
  initSite: SiteConfig;
  subDomain: string;
  development: boolean;
  version?: string;
  selectedWidgetFlavor: WIDGET_FLAVORS;
}

export interface StrigoToken {
  token: string;
  expiration: string;
}
