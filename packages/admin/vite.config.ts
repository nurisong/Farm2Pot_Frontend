// packages/admin/vite.config.js
import { defineConfig, mergeConfig } from "vite";
import { sharedConfig } from "../config/vite-config";

export default mergeConfig(
  sharedConfig,
  defineConfig({
    server: {
      port: 5174, // 앱별 포트 오버라이드
    },
  })
);
