import { defineConfig, mergeConfig } from "vite";
import { sharedConfig } from "../../config/vite-config";

export default mergeConfig(
  sharedConfig,
  defineConfig({
    server: {
      port: 5176,
    },
  })
);
