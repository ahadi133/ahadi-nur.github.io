import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig, type Plugin } from "vitest/config";

// Next turns image imports into StaticImageData objects; mirror that shape in tests.
const staticImageStub: Plugin = {
  name: "static-image-stub",
  enforce: "pre",
  load(id) {
    if (!/\.(png|jpe?g|webp|avif|gif)$/.test(id)) return null;
    const src = JSON.stringify(`/stub/${id.split(/[\\/]/).pop()}`);
    return `export default { src: ${src}, width: 1200, height: 800, blurDataURL: "data:image/png;base64,AA==" };`;
  },
};

export default defineConfig({
  plugins: [staticImageStub, tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
