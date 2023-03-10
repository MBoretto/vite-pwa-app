import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      mode: "development",
      base: "/",
      includeAssets: ["/favicon.png"],
      manifest: {
        name: "Test Project",
        short_name: "Test",
        theme_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
              "src": "icon.svg",
              "sizes": "any",
              "type": "image/svg+xml",
              "purpose": "maskable any"
          }
        ],
      },
    }),
  ],
})
