# panda-preset-utopia

A [Panda CSS][panda-github] [preset][panda-docs-presets] that generates fluid and responsive scales using the [Utopia][utopia] approach. 

This preset generates `fontSize` and `spacing` tokens using [`utopia-core`][utopia-core-github].

This repository and package inspired by the work of [amandaguthrie/panda-css-presets][inspiration].

## Contents

- [Install](#install)
- [Configure](#configure)
- [License](#license)

## Install

**npm**

```shell
npm install -D panda-preset-utopia
```

**pnpm**

```shell
pnpm install -D panda-preset-utopia
```

**yarn**

```shell
yarn add -D panda-preset-utopia
```

**bun**

```shell
bun add -D panda-preset-utopia
```

---

[> Back to Contents](#contents)

---

## Configure

In your `panda.config.{ts,js}` file, import the preset functions and include them in your presets list.

```typescript
import { defineConfig } from '@pandacss/dev';
import {
  utopiaSpaceScalePreset,
  utopiaTypeScalePreset,
  type SpaceScaleOptions,
  type TypeScaleOptions,
} from 'panda-css-utopia'

const typeScaleOptions: TypeScaleOptions = {
    minWidth: 320,
    minFontSize: 18,
    minTypeScale: 1.2,
    maxWidth: 1240,
    maxFontSize: 20,
    maxTypeScale: 1.25,
    negativeSteps: 2,
    positiveSteps: 5,
};

const spaceScaleOptions: TypeScaleOptions = {
    minWidth: 320,
    maxWidth: 1240,
    minSize: 18,
    maxSize: 20,
    positiveSteps: [1.5, 2, 3, 4, 5, 6],
    negativeSteps: [0.75, 0.5, 0.25],
    customSizes: ['s-l', 'l-3xl'],
};

export default defineConfig({
  // ...
  presets: [
    // ... Other presets
    utopiaTypeScalePreset(typeScaleOptions),
    utopiaSpaceScalePreset(spaceScaleOptions),
  ],
  // ...
});
```

---

[> Back to Contents](#contents)

---

## License

[MIT][license] © 2025 [James Greenaway][author]

---

[> Back to Contents](#contents)

---

<!-- Internal Links -->

[license]: LICENSE

<!-- External Links -->

[author]: https://github.com/jvgomg

[inspiration]: https://github.com/amandaguthrie/panda-css-presets

[utopia]: https://utopia.fyi

[utopia-core-github]: https://github.com/trys/utopia-core

[panda-docs-presets]: https://panda-css.com/docs/customization/presets

[panda-github]: https://github.com/chakra-ui/panda
