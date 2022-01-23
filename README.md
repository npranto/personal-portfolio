<div align="center">
  <a href="https://npranto.dev/">
    <img src="./docs/assets/img/nsp-logo-v2.png" alt="Cover" width="80" height="80">
  </a>

  <h2 align="center">npranto.dev</h2>

[![Live](https://img.shields.io/badge/Demo-Live.svg)](https://npranto.dev/)
[![Live](https://img.shields.io/badge/LinkedIn-blue.svg)](https://www.linkedin.com/in/npranto/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d16a376-43ef-47af-8b95-ee54bcffd93c/deploy-status)](https://app.netlify.com/sites/npranto/deploys)
[![personal-portfolio](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/9d9vq3&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/9d9vq3/runs)

</div>

<!-- ABOUT THE PROJECT -->

## About

A static personal portfolio website to showcase projects, work experiences and blogs. See it [live](https://npranto.dev/).

<div>
  <img src="./docs/assets/img/cover.png" alt="Portfolio Shot" style="width: 100%; max-width: 640px">
</div>

## Built With

- HTML
- CSS
- JavaScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Parcel](https://parceljs.org/)
- [Cypress](https://www.cypress.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Prerequisites

To get started on development, let's install a few prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/npranto/personal-portfolio.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start up local development server
   ```sh
   npm run dev
   ```
4. To keep E2E test running on the background
   ```sh
   npm run cypress:open
   ```

## Contributing

Follow the list of procedures below to start contributing or make updates to portfolio

1. Create a new issue on the [issue](https://github.com/npranto/personal-portfolio/issues) board
2. Create a new branch from `master` branch, i.e., `git checkout -b pp-105`. _Note: `105` refers to the issue id and `pp` is just a prefix, stands for personal portfolio_
3. Make changes inside `index.html` file and `styles`, `scripts` and `vendor` directories for content changes
4. Before committing all changes:
   1. Ensure all end-to-end tests are passing w/ Cypress - `npm run cypress:open`
   2. If needed, add new tests inside cypress for new functionalities or features added
   3. Create a new production build, run `npm run build`.
   4. To see preview of build, run `npm run preview`
   5. Verify all changes are reflected correctly on the new build
5. Commit and push changes to remote origin on the new branch
6. Create a pull request from the new branch => `master` branch
7. Notice, Netlify will automatically create a preview URL w/ the new changes on the pull request
8. Verify all changes and merge the pull request
9. Refer back to the original issue, link the pull request, add assignee, and mark issue as closed

**Note**: Before deploying to production, update the following settings inside Netlify:

- Build command - `npm run build`
- Publish directory - `dist`

## License

[MIT](https://tldrlegal.com/license/mit-license)

## Contributors

<div>
  <a href="https://github.com/npranto">
    <img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt="Nazmuz Shakib pranto" width="50" />
  </a>
</div>
