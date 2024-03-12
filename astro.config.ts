// astro.config.ts

import { defineConfig } from "astro/config";

// add UnoCSS
import UnoCSS from "unocss/astro";

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
  ],
});
