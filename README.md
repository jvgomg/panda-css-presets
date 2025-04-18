# Panda CSS Presets

A collection of Panda CSS presets…

---

## Highlights

- changesets
- GitHub issue templates
- GitHub quality and release workflows
- pnpm workspace monorepo
- biome
- Top-level build, reset, biome, test, typecheck, and release scripts.
- Typescript

## Initial Configuration

### GitHub Repository

- [x] Set an NPM auth token as a GitHub secret with key `NPM_TOKEN` to be used to publish to NPM via release workflow.
- [ ] Set a GitHub personal access token as a GitHub secret with key `GH_PAT` to automate changeset pull requests via
  release workflow.

### Project Files

#### `.changeset` directory

##### `config.json`

- Update `changelog` settings, including `repo`.

#### `.github` directory

##### `composite-actions/install/action.yml`

- [x] Update `Setup Git User` command email and name

##### `ISSUE_TEMPLATE` directory

- [x] Update `config.yml` with repository discussions link

For each template:

- [ ] Update package `options`

##### `workflows` directory

**`quality.yml`**

- Runs on branch `main` for any push or pull request.
- Runs prettier, eslint, and TypeScript type checks.

**`release.yml`**
> [!CAUTION]
> - Requires an NPM auth token to be set as `NPM_TOKEN` in repository secrets to publish to NPM.
> - Requires a GitHub personal access token to be set in repository secrets as `GH_PAT` to automate changeset pull
    requests.

- Runs on branch `main` for any pushes that contain changes in `.changeset` or `packages`.
- Builds and publishes packages if there is a changeset version, otherwise releases changes to the `dev` tag.

- [x] Update repository in if statement to your repo

#### `packages/_template` directory

##### `package.json`

- [x] Update `name`
- [x] Update `description`
- [x] Update `author`
- [x] Update `repository.url` and `repository.directory`
- [x] Remove `private` if publishing to registry
- [x] If npm registry is public, update `publishConfig`