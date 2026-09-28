# Gabriel Villagrán — portfolio and blog

A static portfolio and technical blog built with **Astro** and **React**. Astro generates fast, individually addressable pages for each Markdown article. React powers the search and category filters on the writing page. No backend, database, paid service, or API key is required.

The seven LaunchX articles keep their original 2022 publication dates. Each revised article separately identifies its 2026 revision. The writing and project descriptions should be kept accurate as the work evolves.

If this project replaces the old LaunchX repository, static redirect pages retain the old `/posts/post2/` through `/posts/post7/`, `/posts/intro/`, `/posts/`, and `/pages/about/` links. A different repository URL cannot preserve links from the old domain path.

## Run locally

Requires Node.js 24 or later and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Astro. Before publishing:

```bash
npm run check
npm run build
npm run preview
```

## Publish on GitHub Pages for free

1. Create a **public** GitHub repository. You can name it `gabriel-portfolio`, replace the old `my_launchx_blog` repository, or use `GabrielVillagran.github.io` for a root-domain site. Push this project's files to `main` or `master`. The workflow calculates the correct site path from the repository name.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. In **Actions**, wait for **Deploy portfolio to GitHub Pages** to finish. The deployed URL appears in the deployment and in **Settings → Pages**. Future pushes to the branch you chose redeploy automatically.

For a new repository created from a local folder, one possible sequence is:

```bash
git init
git branch -M main
git add .
git commit -m "Create portfolio and blog"
git remote add origin https://github.com/GabrielVillagran/YOUR_REPOSITORY.git
git push -u origin main
```

Use the repository URL GitHub gives you. If you publish over the existing LaunchX repository, make a branch in a fresh clone, remove its old Hugo source, generated `docs/` directory, and `.github/workflows/build_launchx_blog.yml`, then copy this project's files into the clone. Review the diff, commit, and merge normally. Do not force-push over the LaunchX history. The new workflow also runs on the old repository's `master` branch.

## Edit content

- Home, About, Work, and Writing pages: `src/pages/`
- Project descriptions and status: `src/lib/projects.ts`
- Blog articles and original dates: `src/content/posts/*.md`
- Theme and responsive design: `src/styles.css`
- Metadata and navigation: `src/layouts/BaseLayout.astro`

To add an article, create a `.md` file in `src/content/posts/` with `title`, `description`, `published`, `category`, and `readingMinutes` in its frontmatter. Add `revised` only when you later change a previously published article substantially. Its filename becomes its URL slug.

The site deliberately avoids an invented contact address or links to unpublished code. Update the public work and contact options as you release them. Keep professional or client details within the bounds you are allowed to share.

## Deployment notes

The GitHub Actions workflow builds only published Markdown files; it does not use the former Hugo `-D` drafts flag or commit generated output into the source branch. The site uses a repository-aware base path, so assets and internal navigation work under both a project URL (`/repo/`) and a user site (`/`).
