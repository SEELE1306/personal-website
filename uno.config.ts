// uno.config.ts
import { defineConfig } from "unocss";

export default defineConfig({
  rules: [
    [/^m-([.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })], // Margin

    [/^p-([.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })], // Padding
  ],
  variants: [
    // TBA
  ],
  shortcuts: [
    // TBA
  ],
});
