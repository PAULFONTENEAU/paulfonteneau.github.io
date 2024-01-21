/* eslint-disable turbo/no-undeclared-env-vars */
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://paulfonteneau.github.io";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
if (isBuild) {
    BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
    server: { port: SERVER_PORT },
    site: BASE_URL,
    integrations: [
        sitemap(),
        tailwind({
            config: { purge: false }, // Ajoutez cette ligne si nécessaire
        })
    ]
});