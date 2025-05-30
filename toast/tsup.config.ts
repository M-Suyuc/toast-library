import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  clean: true, // Clean output directory before each build
  minify: true,
  format: ["esm", "cjs"],
  dts: true, // Generate types
  target: "esnext", // Compile target default to node16
  external: ["react"],
  sourcemap: true,
  injectStyle: true, // Inject CSS as style tags to document head
  tsconfig: "tsconfig.json",
  onSuccess: "cp src/index.css dist/index.css",
  banner: {
    js: '"use client";',
  },
});
