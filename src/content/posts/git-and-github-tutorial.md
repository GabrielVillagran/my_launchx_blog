---
title: "Publish a local project on GitHub"
description: "A step-by-step Git tutorial: prepare a project, commit it, push to GitHub, and keep working with branches."
published: 2022-04-27
revised: 2026-09-28
category: "Developer tools"
readingMinutes: 9
---

When I started sharing projects, the gap between “the code works on my computer” and “someone else can see it on GitHub” felt larger than it needed to be. This tutorial is the workflow I would give a classmate today. It starts with a local folder that has **not** already been set up as a Git repository and ends with a published repository and a repeatable way to make changes. For the underlying ideas, see my [introduction to Git and GitHub](../git-and-github-foundations/).

Git records versions of your work locally. GitHub hosts a remote copy and adds tools for collaboration, including pull requests. Pushing a repository to GitHub makes its files available there; **deploying an application or website is a separate step**.

## 1. Prepare the project

Install [Git](https://git-scm.com/downloads), create a [GitHub account](https://github.com/signup), and open a terminal in your project's folder. Check that Git is available:

```bash
git --version
git status
```

The second command may report that this folder is not a Git repository yet. That is expected for a new project. If it already shows a branch and tracked files, you have an existing repository: inspect its state and skip the initialization step below.

Give the project a useful `README.md`: describe what it does, how to run it, and any setup another person needs. Add a `.gitignore` for files you do not want to track. For a Node.js project, a minimal example is:

```text
node_modules/
dist/
.env
.env.*
!.env.example
```

Review this list for your framework and operating system. Do not include passwords, API keys, or private credentials in either code or Git history. An `.env.example` can document variable names with harmless sample values; it must not contain real secrets.

## 2. Make the first commit locally

In the project's root directory, run:

```bash
git init -b main
git status
git add .
git diff --staged
git commit -m "Add initial project"
```

`git init -b main` creates a repository with `main` as its initial branch. `git add .` selects files for the next commit, while `git diff --staged` lets you review the selected content. Read that diff before committing, especially when adding a whole directory. `git commit` saves a named snapshot in your local history. Nothing has reached GitHub yet [1].

If Git asks for an author identity, configure the name and email you want associated with commits, then retry the commit:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Choose an email you are comfortable associating with the repository, or use a GitHub-provided no-reply address if you want to keep your personal address private. These settings identify commits; they do not sign you in to GitHub [2].

## 3. Create an empty repository on GitHub

In GitHub, use **New repository**. Choose a descriptive name and whether it should be public or private. Because this project already has a local README and first commit, leave the GitHub options to generate a README, `.gitignore`, or license unchecked. This avoids creating two separate starting histories [1].

Copy the HTTPS repository URL shown on GitHub, then connect your local repository. Replace the example URL with your own:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git remote -v
git push -u origin main
```

`origin` is a conventional name for the remote. `git remote -v` verifies its URL. The `-u` option makes `origin/main` the upstream branch, so later pushes from `main` can usually be written as `git push` [1, 3]. Open the repository page in your browser and check that your files and README appear.

GitHub will require authentication to push. Use a supported credential manager, GitHub CLI, SSH setup, or an appropriate token for HTTPS. **Your ordinary GitHub account password is not used as the Git HTTPS password** [4]. Follow the sign-in prompt or GitHub's documentation rather than placing a credential in the remote URL.

## 4. Make the next change on a branch

For a small solo change, you can commit on `main`; for work you want reviewed or discussed, create a branch. Start from an up-to-date `main` with a clean working tree:

```bash
git switch main
git pull --ff-only origin main
git switch -c improve-readme
```

Edit your files, then inspect and publish the change:

```bash
git status
git diff
git add README.md
git diff --staged
git commit -m "Clarify project setup"
git push -u origin improve-readme
```

On GitHub, open a **pull request** from `improve-readme` into `main`. Review the changed files, explain the reason for the change, and merge it when it is ready [5]. Afterwards, switch back to `main` and pull the merged commit. Notice the distinction: committing records work locally; pushing uploads your branch; merging the pull request updates the destination branch.

## If something goes wrong

- **`remote origin already exists`:** Run `git remote -v` and check whether `origin` already points to your repository. If it is the wrong URL, use `git remote set-url origin NEW_URL` [3].
- **Push rejected because the remote has commits you do not have:** This often happens when the new GitHub repository was initialized with a README. Do not force-push simply to silence the error. Inspect the remote history and reconcile the two histories, or start from a fresh empty remote [1].
- **Authentication failed:** Check the authentication method and account permissions. A password typed into a Git HTTPS prompt will not work as your GitHub account password [4].
- **A secret was committed:** Removing it from the latest file is not enough if it remains in history. Revoke or rotate the credential immediately and follow GitHub's guidance for removing sensitive data [6].

I use `git status`, `git diff`, and `git log --oneline` whenever I am unsure what state a project is in. Understanding the difference between a local commit, a remote branch, and a merged pull request makes the commands much easier to remember than memorizing a single sequence.

### References and official guides

1. GitHub Docs, [*Adding locally hosted code to GitHub*](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github).
2. *Pro Git*, [*First-Time Git Setup*](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).
3. GitHub Docs, [*Managing remote repositories*](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories).
4. GitHub Docs, [*About authentication to GitHub*](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github).
5. GitHub Docs, [*Creating a pull request*](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).
6. GitHub Docs, [*Removing sensitive data from a repository*](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).
