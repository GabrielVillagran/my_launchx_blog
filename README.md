# Gabriel Villagrán — portfolio y blog

Sitio estático hecho con **Astro** y **React**, publicado gratis en [GitHub Pages](https://gabrielvillagran.github.io/Gabriel-Portfolio/). Astro genera las páginas; React se usa en la búsqueda y los filtros de artículos. Los siete textos de LaunchX conservan su fecha original de 2022 y muestran por separado la fecha de revisión.

El diseño toma como referencia la composición de la [plantilla compartida](https://steady-fudge-0fb909.netlify.app/): presentación, publicaciones y trabajo destacado. La identidad visual, el símbolo rúnico, el contenido y la sección de proyectos son propios. Los antiguos enlaces `/posts/.../` y `/pages/about/` siguen redirigiendo a las páginas actuales.

## Ver los cambios en tu computadora

Instala Node.js 24 o posterior y ejecuta:

```bash
npm ci
npm run dev
```

Abre la dirección local que muestre Astro. Antes de subir cambios ejecuta `npm run check` y `npm run build`. La configuración del repositorio calcula automáticamente la ruta `/Gabriel-Portfolio/` al publicar.

## Publicar un nuevo post

1. Crea un archivo Markdown en `src/content/posts/`, por ejemplo `my-new-post.md`.
2. Agrega los datos del encabezado y después escribe el contenido en Markdown:

   ```md
   ---
   title: "What I learned building an API"
   description: "A short summary shown in the article list."
   published: 2026-10-01
   category: "Backend"
   readingMinutes: 6
   ---

   Your introduction goes here.

   ## The first lesson

   Your article continues here.
   ```

3. El nombre del archivo forma la URL: `my-new-post.md` → `/blog/my-new-post/`. Los posts se ordenan por `published`; la portada muestra automáticamente los tres más recientes.

Si revisas un artículo ya publicado, conserva su fecha `published` y añade o actualiza `revised: AAAA-MM-DD`. Evita cambiar el nombre del archivo si quieres conservar su enlace. Para cambiar la búsqueda o filtros, edita `src/components/PostSearch.tsx`.

## Actualizar la experiencia profesional

Edita `src/lib/experience.ts`. Cada puesto contiene `company`, `role`, `period`, `location`, `summary`, `overview`, `highlights` y `tags`. `summary` aparece en la portada y en Work; `overview` es una lista de párrafos y, junto con `highlights`, aparece en el detalle del puesto. Para agregar otro empleo, copia un objeto, cambia `number` y dale un `slug` único: su página `/work/slug/` se genera automáticamente.

Los textos actuales de Cincinnati AI, Walmart Global Tech y Transom se actualizaron con la información que proporcionaste. Comprueba los detalles que quieras publicar antes de seguir ampliándolos.

## Agregar o actualizar proyectos personales

Edita `src/lib/projects.ts`. Cada proyecto tiene `name`, `status`, `type`, `description`, `next` y `tags`. Se muestra en la portada y en `/projects/`. El juego **Battleship on Paper** está marcado como *Under construction*: la descripción separa la idea del menú del siguiente trabajo de colocación de barcos y combate. Cuando tengas un demo o repositorio público, podrás agregar un enlace a la tarjeta y a la página de proyectos.

## Corregir textos o cambiar el diseño

| Qué quieres cambiar | Archivo |
| --- | --- |
| Presentación y secciones de la portada | `src/pages/index.astro` |
| Texto de About y agradecimientos | `src/pages/about.astro` |
| Introducción de Work | `src/pages/work.astro` |
| Textos y progreso de proyectos | `src/lib/projects.ts` |
| Colores, tipografía, tamaños y vista móvil | `src/styles.css` |
| Navegación, pie y metadatos | `src/layouts/BaseLayout.astro` |
| Foto de la portada | `public/images/gabriel-profile.webp` |
| Ícono de rombo inspirado en tu imagen | `public/favicon-diamond.svg` |

Los colores de la versión oscura están definidos al final de `src/styles.css` en las variables `:root`. La marca se dibuja como SVG y reproduce la forma de rombo de la referencia. Para cambiar la foto, sustituye el archivo conservando su nombre; la portada la recorta con CSS. La copia publicada está optimizada en WebP.

## Subir y desplegar

Este repositorio publica automáticamente después de integrar cambios en `master`. Flujo sugerido:

```bash
git switch master
git pull origin master
git switch -c update-my-blog
# Edita los archivos y verifica con npm run check && npm run build
git add .
git commit -m "Update portfolio content"
git push -u origin update-my-blog
```

Abre un Pull Request de `update-my-blog` a `master` en GitHub y haz **Merge**. La acción `.github/workflows/deploy.yml` compila y publica el sitio en la misma URL. Consulta la pestaña **Actions** y espera a que **Deploy portfolio to GitHub Pages** termine correctamente; después recarga la página. No necesitas pagar hosting ni subir la carpeta `dist/`.

El sitio es público: no incluyas teléfonos, correos privados ni detalles de clientes que no quieras compartir.
