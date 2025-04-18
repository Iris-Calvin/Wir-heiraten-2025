/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_DROPBOX_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
