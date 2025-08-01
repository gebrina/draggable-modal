import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";

const viteConfigs = defineViteConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@cpts": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@common": path.resolve(__dirname, "src/common"),
    },
  },
});

const vitestConfigs = defineVitestConfig({
  test: {
    environment: "jsdom",
    globals: true,
  },
});

export default mergeConfig(viteConfigs, vitestConfigs);
