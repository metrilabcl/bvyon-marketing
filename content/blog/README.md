# Blog — Cómo crear un post

## Flujo completo

```
1. npm run blog:new -- --title "Mi post" --category guias
2. Editar el archivo .mdx generado
3. git add .
4. git commit -m "blog: agregar post"
5. git push
→ Vercel despliega automáticamente en ~1 minuto
```

## Categorías disponibles

| Slug          | Nombre visible      |
|---------------|---------------------|
| `guias`       | Guías               |
| `tendencias`  | Tendencias          |
| `casos`       | Casos de Éxito      |
| `herramientas`| Herramientas        |
| `iquique`     | Iquique             |

## Frontmatter obligatorio

```yaml
---
title: "Título del post (incluye keyword principal)"
date: 2026-05-24
category: guias
excerpt: "Resumen de hasta 160 caracteres que aparece en el listado del blog."
coverImage: /images/blog/mi-post.jpg
seo:
  title: "Título SEO de hasta 60 caracteres"
  description: "Descripción SEO de hasta 160 caracteres para el snippet en Google."
---
```

## Imágenes

- Guardar en `public/images/blog/`
- Usar slug del post como nombre de archivo: `mi-post.jpg`
- Tamaño recomendado: 1200×630 px (ratio 16:9)

## Componentes MDX disponibles

Dentro del contenido MDX puedes usar:

```mdx
<Callout type="info">
  Texto de nota informativa.
</Callout>

<Callout type="warning">
  Advertencia importante.
</Callout>

<YouTubeEmbed id="dQw4w9WgXcQ" />
```

## Reglas de build

El build fallará si:
- Falta algún campo obligatorio del frontmatter
- El `excerpt` supera 160 caracteres
- El `seo.title` supera 60 caracteres
- El `seo.description` supera 160 caracteres
- La `date` no tiene formato `YYYY-MM-DD`
- La `category` no es una de las permitidas
