import { defineConfig } from "astro/config";

export default defineConfig({
  // internationalization (i18n) configuration
  i18n: {
    defaultLocale: "en",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
