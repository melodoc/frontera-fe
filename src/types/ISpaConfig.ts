export interface ISpaConfig {
  IMG_URL: string;
}

declare global {
  interface Window {
    SPA_CONFIG: ISpaConfig;
  }
}
