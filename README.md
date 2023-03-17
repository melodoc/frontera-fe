# Frontera 

Frontera app helps in learning Frontend development

+ authorization;
+ registration;
+ selection of videos by preferences and topics during initialization;
+ a selection of top videos on the main page;
+ search;
+ view the course card.

## Prerequisites

You need NodeJS installed on your computer to run this application. The requirements are:

+ node@v16.15.0
+ npm@8.5.5
+ reactjs@17.0.0

## How to install

``` shell
npm install
```

## How to run application

``` shell
npm start
```

The Frontera application will boot op on http://localhost:3000.

## Build application

``` shell
npm run build
```

This will create a dist folder with compiled and minimised components.

## Contribute

Check the [trello board](https://trello.com/b/0jTn9HiJ/frontera) with future plans.

> You need to install the [Trello Card Numbers](https://chrome.google.com/webstore/detail/trello-card-numbers/kadpkdielickimifpinkknemjdipghaf) plugin to see tasks' numbers.

Open pull requests to **develop** branch, please.

## Git Rules

Below are some guidelines for naming branches and commits in a Git repository, specifically for branches with species names.

### Branches

#### Use a prefix to indicate the type of branch

- `feature/` — for new features being added to the project.
- `bugfix/` — for fixing bugs or issues in the code.
- `hotfix/` — for critical bug fixes that need to be addressed immediately.
- `release/` — for preparing a new release of the project.
- `experiment/` — for experimental features that may not be included in the main codebase.

#### Include a reference number or identifier to the branch's name

1. Include a reference number or identifier after the prefix to tie the branch to a specific issue or task. 
2. You should start all the reference numbers or identifiers with `FE-` and use uppercase letters and hyphens to separate words.

Branch name format: `{type}/FE-{issue number}`. 

**Examples**: `feature/FE-43`, `bugfix/FE-12`, `hotfix/FE-27`.

### Commits

#### One Commit. One Change.

Before creating a PR, you should have only one commit in a branch. You have two ways to achieve a single commit:

1. All subsequent commits must update the first commit: 
```git commit --amend --no-edit```

This way, your branch will only have 1 commit, making it easier to merge branches later on.

2. Before creating a PR, do a `git squash` to squash all the commits into one.

#### Commit message
1. Commits are written only in English.

2. Use a concise and descriptive commit message:
    - Begin with a short summary of the changes made in the commit.
    - Use the imperative mood and present tense to describe the changes.
    - Be specific about what was changed, and why.

3. Include a reference to the issue or task being addressed at the end:
    - Use the issue or task identifier in the commit message to tie the commit to a specific issue or task at the end. Example: `Issue: FE-41`
    - Use uppercase letters and hyphens to separate words.

Commit message format: `{Commit message}. Issue: FE-{issue number}`. 

**Examples**: `Add id prop to themes. Issue: FE-41`

4. Keep commits focused and atomic:
    - Make each commit focused on a specific change or set of changes.
    - Avoid committing unrelated changes together in a single commit.
    - If a change spans multiple commits, use descriptive commit messages to tie them together.