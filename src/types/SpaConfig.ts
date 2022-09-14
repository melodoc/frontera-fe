export interface SpaConfig {
  IMG_URL: string;
}

declare global {
  interface Window {
    SPA_CONFIG: SpaConfig;
  }
}
