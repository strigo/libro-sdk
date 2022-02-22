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
}

export interface StrigoToken {
  token: string;
  expiration: string;
}
