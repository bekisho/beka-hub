import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: "./client", // 👈 Tell Vite your frontend root
  server: {
    host: "0.0.0.0", // accessible on LAN
    port: 8080, // you can keep 8080 if you prefer
    fs: {
      allow: [
        "./client",
        "./shared",
        "." // allow project root just in case
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "../dist/spa", // 👈 relative to client/
    emptyOutDir: true, // clear old builds
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // only in dev
    configureServer(server) {
      const app = createServer();
      // attach express middleware
      server.middlewares.use(app);
    },
  };
}
