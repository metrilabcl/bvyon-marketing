#!/usr/bin/env node
/**
 * Creates a new MDX blog post with pre-filled frontmatter.
 * Usage: npm run blog:new -- --title "My Post" --category guias
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, "..", "content", "blog");

const CATEGORIES = ["tendencias"];

function toKebabCase(str) {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseArgs(args) {
  const result = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const key = args[i].slice(2);
      result[key] = args[i + 1] || "";
      i++;
    }
  }
  return result;
}

const args = parseArgs(process.argv.slice(2));

if (!args.title) {
  console.error("Error: --title is required\n");
  console.error("Usage: npm run blog:new -- --title \"Mi post\" --category guias");
  process.exit(1);
}

if (!args.category) {
  console.error("Error: --category is required\n");
  console.error(`Available categories: ${CATEGORIES.join(", ")}`);
  process.exit(1);
}

if (!CATEGORIES.includes(args.category)) {
  console.error(`Error: category "${args.category}" is not valid.\nAvailable: ${CATEGORIES.join(", ")}`);
  process.exit(1);
}

const slug = toKebabCase(args.title);
const today = new Date().toISOString().split("T")[0];
const filePath = path.join(CONTENT_DIR, args.category, `${slug}.mdx`);

if (fs.existsSync(filePath)) {
  console.error(`Error: file already exists at ${filePath}`);
  process.exit(1);
}

const template = `---
title: "${args.title}"
date: ${today}
category: ${args.category}
excerpt: "Descripción de hasta 160 caracteres que aparece en el listado del blog."
coverImage: /images/blog/${slug}.jpg
seo:
  title: "${args.title.slice(0, 60)}"
  description: "Descripción SEO de hasta 160 caracteres para el snippet en Google."
# Metadatos internos de geo-targeting — NUNCA renderizar en UI.
# targetCity: ""   # ej: "antofagasta"
# targetRegion: "" # ej: "antofagasta"
---

Escribe tu contenido aquí. El build validará el frontmatter antes de publicar.

## Primer sección

Agrega tu contenido...

## Segunda sección

Más contenido...
`;

fs.writeFileSync(filePath, template, "utf-8");
console.log(`\n✓ Post creado: ${filePath}`);
console.log(`\nPróximos pasos:`);
console.log(`  1. Edita el archivo: ${filePath}`);
console.log(`  2. Agrega la imagen: public/images/blog/${slug}.jpg`);
console.log(`  3. git add . && git commit -m "blog: agregar ${slug}"`);
console.log(`  4. git push → Vercel despliega automáticamente\n`);
