---
title: "Publish a local project on GitHub"
description: "A short, current workflow for creating a repository, making a commit, and pushing it online."
published: 2022-04-27
revised: 2026-09-27
category: "Developer tools"
readingMinutes: 4
---

The earlier [Git and GitHub article](../git-and-github-foundations/) explains the concepts. This one shows a practical first workflow. You need [Git installed](https://git-scm.com/downloads) and a GitHub account. The examples use a branch named `main`; if your repository uses a different name, adjust the commands.

## Start with your local project

Open a terminal in the project directory. Before committing, add a `.gitignore` that excludes generated files, dependencies, and secrets. For a Node.js project, `node_modules/` is a common entry. Never commit passwords or API keys.

```bash
git init
git branch -M main
git status
git add .
git diff --cached
git commit -m "Add initial project"
```

`git diff --cached` shows the changes you staged. Review them before you create the commit. If Git asks for your name and email, follow the [Git setup guide](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) to configure your commit identity.

## Create the remote repository

Create an empty repository on GitHub. If your local project already has a README or `.gitignore`, avoid initializing the remote with duplicate files; otherwise you may need to reconcile two starting histories. Copy the repository URL that GitHub displays, then connect and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Use your actual repository URL. GitHub may ask you to authenticate through a supported credential flow. Your ordinary account password is not pasted into a Git command.

For later changes, inspect, stage, commit, and push again:

```bash
git status
git add path/to/changed-file
git commit -m "Explain the change"
git push
```

On a team, create a branch for your work and open a pull request so others can review it before it reaches the main branch. Learn what each command changes instead of treating the sequence as a recipe: `git status`, `git log`, and `git diff` are the best places to start when something is unclear.

### Further reading

- [Pro Git: Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [Pro Git: Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
