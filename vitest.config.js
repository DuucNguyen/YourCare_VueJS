import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
    viteConfig,
    defineConfig({
        base: "/YourCare_VueJS/",
        test: {
            environment: "jsdom",
            exclude: [...configDefaults.exclude, "e2e/**"],
            root: fileURLToPath(new URL("./", import.meta.url)),
        },
        server: {
            port: 5173,
            host: "localhost",
            strictPort: true,
        },
    }),
);

