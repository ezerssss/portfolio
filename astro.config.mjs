// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import vercel from "@astrojs/vercel";
import { cacheVercel } from "@astrojs/vercel/cache";

// https://astro.build/config
export default defineConfig({
    output: "server",

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [icon()],
    adapter: vercel(),
    cache: {
        provider: cacheVercel(),
    },
});
