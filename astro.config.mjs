import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// The workflow sets these values from the GitHub repository name. Locally,
// the site runs at /, so no edits are needed before previewing it.
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://gabrielvillagran.github.io';

export default defineConfig({
  site,
  base,
  integrations: [react()],
  output: 'static',
  trailingSlash: 'always',
});
