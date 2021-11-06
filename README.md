<p align="center">
  <img width="140" src="assets/logo.svg" alt="Zap Logo" />
</p>
<h1 align="center">⚡ Zap</h1>
<p align="center">Fast and lightweight blog research project</p>
<p align="center">
  <a href="https://codeclimate.com/github/zap-lab/zap/maintainability"><img src="https://api.codeclimate.com/v1/badges/d797b7556019a23cf5bc/maintainability" /></a>
  <a href="https://codeclimate.com/github/zap-lab/zap/test_coverage"><img src="https://api.codeclimate.com/v1/badges/d797b7556019a23cf5bc/test_coverage" /></a>
</p>

# Overview

## What is zap?

Zap is a fast, lightweight, developer-specific blog open source built on top of Gatsby. The principles for developing Zap are as follows.

- It should be incredibly fast, the content should load within the user's browser in 50ms.
- It should be aesthetic. Readability is the most important principle, and for this we aim for simple functionality and UI.
- All information in the Zap project should be accessible to anyone. This applies to everything including design, decision, and remaining tasks.
- It should be easy, easy to install, easy to contribute, and easy to use.
- It must be multi-platform compatible.
- It must conform to the Modern Web Specification. This includes PWA, AMP, a11y, and means to prefer video instead of gif, svg instead of png, icon font set instead of svg icon whenever possible. 

## Getting started

If you type as follows, You can see the project structure.

```bash
tree -L 2 -I 'node_modules' .
```

Below is the project structure of zap.

```plaintext
zap/
|-- LICENSE            # project license (MIT)
|-- README.md          # project main document
|-- assets             # document assets (images)
|   `-- logo.svg
|-- commitlint.config.js
|-- gatsby-browser.js
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
|-- jest.config.js     # jest test settings
|-- package.json       # dependency list, yarn scripts
|-- node_modules/      # dependency packages
|-- public             # gatsby static folder
|   |-- chunk-map.json
|   |-- favicon-32x32.png
|   |-- favicon.svg
|   |-- icons
|   |-- manifest.webmanifest
|   |-- page-data
|   |-- render-page.js
|   |-- render-page.js.map
|   |-- static
|   `-- webpack.stats.json
|-- src                # project main sources
|   |-- __generated__
|   |-- components
|   |-- content
|   |-- images
|   |-- layouts
|   |-- pages
|   |-- stories
|   |-- styles
|   |-- templates
|   `-- typings.d.ts
|-- tsconfig.json      # typescript configuration
`-- yarn.lock          # package lock files
```

### Installation

This project uses [yarn](https://yarnpkg.com/) as a package manager, If you don't have yarn, Follow [this link](https://yarnpkg.com/getting-started/install) to get download one.

```bash
yarn install
```

Then, run following command.

```bash
yarn start
```

# Contribution

## Testing

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), If you want to run test, Run as follows.

```bash
yarn test
```

## Coverage

For coverage, You can run as follows.

```bash
yarn test:coverage
```

## Linting

This project uses two lint systems as follows.

- eslint ([link](https://eslint.org/))
- prettier ([link](https://prettier.io/))

And, if you commit the husky will handle the lint automatically.

- See husky setting

If you want to run the lint manually, You can run as follows.

```bash
# eslint
yarn lint

# prettier
yarn format
```

## Convention

This project has following conventions.

- Conventional Commits ([link](https://www.conventionalcommits.org/en/v1.0.0/))
- airbnb-typescript ([link](https://www.npmjs.com/package/eslint-config-airbnb-typescript))

# License

zap is under MIT license

MIT License

Copyright (c) 2020-2021 zap-lab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
