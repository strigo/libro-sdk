export interface SiteConfig {
  host: string;
  pathName: string;
  href: string;
  origin: string;
  search: string;
  params: Record<string, string>;
}

export interface LibroConfig {
  email: string;
  webApiKey: string;
  token: LibroToken;
  initSite: SiteConfig;
  subDomain: string;
}

export interface LibroToken {
  token: string;
  expiration: string;
}
