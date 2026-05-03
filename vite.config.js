import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

function copyPortfolioAssets() {
  const folders = ["img", "videos"];

  return {
    name: "copy-portfolio-assets",
    closeBundle() {
      for (const folder of folders) {
        const source = resolve(folder);
        const target = resolve("dist", folder);

        if (!existsSync(source)) continue;

        rmSync(target, { recursive: true, force: true });
        mkdirSync(resolve("dist"), { recursive: true });
        cpSync(source, target, {
          recursive: true,
          filter: (file) => !file.endsWith(".DS_Store"),
        });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyPortfolioAssets()],
});
