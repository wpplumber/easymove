import { defineConfig, squooshImageService } from "astro/config";
import alpine from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import mkcert from "vite-plugin-mkcert";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [compressor(), alpine(), sitemap(), tailwind()],
  vite: {
    plugins: [mkcert()],
  },
  server: {
    https: true,
  },
});
