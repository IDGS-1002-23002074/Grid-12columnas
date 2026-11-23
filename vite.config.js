
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    // Convierte la aplicación en PWA:
    // - Genera el service worker automáticamente.
    // - Genera el manifest.webmanifest.
    // - Permite instalar la aplicación.
    // - Permite utilizarla sin conexión.

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: ['icon.svg'],

      manifest: {
        name: 'Mi Perfil Personal',
        short_name: 'Mi Perfil',
        description: 'Aplicación de perfil personal desarrollada con React, Vite y Material UI utilizando un Grid de 12 columnas.',
        theme_color: '#111111',
        background_color: '#f2f2f2',
        display: 'standalone',
        start_url: '/',

        icons: [
          {
            src: '/icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },

      workbox: {
        // Guarda los archivos generados por Vite
        // para permitir el funcionamiento sin conexión.
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
})
