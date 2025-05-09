import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true, // Clean output directory before each build
  target: "esnext", // Compile target default to node16
  external: ["react"],
  sourcemap: true,
  injectStyle: true, // Inject CSS as style tags to document head
  tsconfig: "tsconfig.json",
});
