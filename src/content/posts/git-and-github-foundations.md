---
title: "Git and GitHub: the distinction that matters"
description: "What local version control does, what GitHub adds, and why both matter on a team."
published: 2022-04-10
revised: 2026-09-27
category: "Developer tools"
readingMinutes: 3
---

Git and GitHub often appear in the same conversation, but they solve different problems. **Git** is a distributed version control system. It records changes in a repository and lets you inspect, branch, and combine that history on your own machine. **GitHub** hosts repositories and adds tools for reviewing code, tracking work, and collaborating online.

You can use Git without a GitHub account. You can also host a Git repository elsewhere. Understanding that distinction makes the everyday commands easier to reason about.

## A simple mental model

- Your **working tree** holds the files you are editing.
- The **staging area** lets you choose what belongs in the next commit.
- A **commit** records a snapshot and a message explaining the change.
- A **branch** gives you a movable line of development.
- A **remote** is another copy of the repository, often hosted on GitHub.

When you run `git push`, you send commits to a remote. When you run `git fetch`, you bring remote history into your local repository without automatically combining it with your current work. A pull brings changes down and integrates them according to your Git configuration.

## A habit worth learning early

Before committing, read `git status` and `git diff`. They show which files changed and what you are about to record. Keep commits focused on one coherent change and write messages that help a teammate understand why it happened. These habits become more useful as a project grows.

Git gives you a history you can investigate. GitHub gives a team a shared place to discuss and review that history. Neither replaces communication, but both make it easier to work together.

### Further reading

- [Pro Git: Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [Pro Git: Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
