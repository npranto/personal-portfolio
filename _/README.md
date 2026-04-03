<div align="center">
  <a href="https://npranto.dev/">
    <img src="./docs/nsp-logo-v2.png" alt="Cover" width="80" height="80">
  </a>
  <h2 align="center">npranto.dev</h2>

[![Live](https://img.shields.io/badge/Demo-Live.svg)](https://npranto.dev/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4d16a376-43ef-47af-8b95-ee54bcffd93c/deploy-status)](https://app.netlify.com/sites/npranto/deploys)
[![Live](https://img.shields.io/badge/LinkedIn-blue.svg)](https://www.linkedin.com/in/npranto/)

</div>

## About

A static personal portfolio website to showcase projects, work experiences and blog posts. See it [live](https://npranto.dev/).

<div>
  <img src="./docs/cover.png" alt="Portfolio Shot" style="width: 100%; max-width: 640px; border-radius: 10px;"/>
</div>

## Built With

- HTML/CSS
- JavaScript
- [React.js](https://react.dev/)
- [Next.js](https://nextjs.org/) (Pages Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Prerequisites

To get started on development, let's install a few prerequisites

- [Node](https://nodejs.org/en) (v.22.x.x or above)
- NPM
  ```sh
  npm install npm@latest -g
  ```

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/npranto/personal-portfolio.git
   ```
2. Checkout branch `v5`
   ```sh
   git checkout main
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start up local development server
   ```sh
   npm run dev
   ```
   _Note: You will need to setup a `.env` file with a few environmental variables to fetch contents as blog and video posts via web scraping. Refer to `.env.example` file for all the environment examples in the root_

## Contribution

Follow the list of procedures below to start contributing or make updates to portfolio

1. Create a new issue on the [issue](https://github.com/npranto/personal-portfolio/issues) board
2. Create a new branch from `main` branch, i.e., `git checkout -b pp-105`. _Note: `105` refers to the issue id and `pp` is just a prefix, stands for personal-portfolio_
3. Make code or content changes as necessary. Code changes usually go inside `src` directory. All content changes go inside `src/content` directory as all content is stored in JSON files divided by sections.
4. Before committing all changes:
   1. Ensure formatting and linting passes via the following 2 commands:
      - `npm run format`
      - `npm run lint`
   2. You may also want to run `npm run dev` and ensure all code or content changes reflect correctly in local development.
   3. To see production preview, create a new production build - `npm run build`, run preview local server - `npm start` and open http://localhost:3000/.
   4. Verify all changes are reflected correctly on the preview environment as well.
5. Commit and push changes to remote origin on the new branch.
6. Create a pull request from the new branch => `main` branch
7. After creating a new pull request to merge to the main branch, you will notice a preview / demo URL will pop up after Netlify preview deployment gets kicked off
8. Once the preview URL is available, open it up and ensure all of your changes are reflecting correctly
9. Once changes are verified, merge in the changes and shortly after you should see your changes up on the production site - [npranto.dev](https://npranto.dev/).
10. Check to ensure that a new patch, minor or major version is bumped on the `package.json` file and note that a new tag will be created based on the semver version as well.
11. Note(s): In case you run into issues where the preview URL is not available or log into [Netlify](https://app.netlify.com/sites/npranto/deploys) to see if build finished or failed. You may need to debug and fix the build issue in this case, but in most cases, this is very unlikely to occur.
12. Refer back to the original issue, link the pull request, add assignee, and mark issue as closed

## License

[MIT](https://tldrlegal.com/license/mit-license)

## Contributors

<div>
  <a href="https://github.com/npranto">
    <img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt="Nazmuz Shakib Pranto" width="50" style="border-radius: 50%" />
  </a>
</div>
