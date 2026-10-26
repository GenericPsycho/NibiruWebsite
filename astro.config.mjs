// @ts-check

import { fileURLToPath, URL } from "node:url";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	vite: {
		ssr: {
			noExternal: true,
		},
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
	},
});
