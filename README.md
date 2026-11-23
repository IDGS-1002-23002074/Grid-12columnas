# Mi perfil personal — React + Vite + Material UI

Aplicación que reproduce la distribución de la imagen usando el componente `Grid` de Material UI con una cuadrícula de 12 columnas.

## Distribución
- 1 tarjeta de 12/12.
- 2 tarjetas de 6/12.
- 3 tarjetas de 4/12.
- 4 tarjetas de 3/12.

Cada tarjeta contiene un atributo personal editable en `src/App.jsx`.

## Requisitos
- Node.js 18 o superior
- npm

## Ejecutar en desarrollo
```bash
npm install
npm run dev
```

## Generar versión de producción
```bash
npm run build
npm run preview
```

La compilación genera la carpeta `dist/` e incluye el manifiesto y el service worker de la PWA.

## Publicar y obtener el enlace de la PWA
Para obtener un enlace público, publica el contenido de `dist/` en un hosting estático como Vercel, Netlify o GitHub Pages. La PWA se podrá instalar desde el navegador cuando esté publicada mediante HTTPS. El ZIP contiene el proyecto listo para compilar, pero no está publicado en un dominio público.
