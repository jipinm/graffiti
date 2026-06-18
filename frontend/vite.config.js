import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    // HMR through the HTTPS preview proxy
    hmr: {
      clientPort: 443,
      protocol: "wss",
    },
    // Allow the public preview host header
    allowedHosts: true,
    watch: {
      ignored: ["**/node_modules/**", "**/build/**", "**/dist/**"],
    },
  },
  build: {
    outDir: "build",
    sourcemap: false,
  },
  // Treat .js files in src as JSX (a few files use JSX inside .js)
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
