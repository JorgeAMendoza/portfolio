# Jorge A. Mendoza Portfolio

<div align="center"><img src="./portfolio.gif" width=700 alt="image of desktop preview of markdown editor"></div>

This is the first version of my professional career portfolio, I would like to give thanks to [Brittany Chiang](https://brittanychiang.com/) and [Ram Maheshwari](https://www.rammaheshwari.com/) for the inspiration and ideas their execellent portfolios gave me.

I would also like to recommend the great reference guide provided by [Josh Comeau](https://www.joshwcomeau.com/) in his online book [Building an Effective Dev Portfolio](https://www.joshwcomeau.com/effective-portfolio/).

Please feel free to fork my portfolio and use it as a template for your own! If you have any feedback on my portfolio, please let me know!

## Technologies Used

This project was boostrapped using [Next.js](https://nextjs.org/) with the Typescript template. Initialized by using the `npx create-next-app@latest` command. The application is running on Next JS version 13, but is not using the [`/app`](https://nextjs.org/docs) directory feature.

The project is formatted using `prettier` and is linted with [`ESLint`](https://eslint.org/) using react, prettier, nextjs, and typescript plugins.

The application is styled using [`CSS Modules`](https://github.com/css-modules/css-modules), which allows the CSS to be scoped to the component it is used in and avoid CSS class name collisions.

The content seen in the _project_ pages is written in [`MDX`](https://mdxjs.com/), with meta information written in the `.mdx` file and extracted using the [`gray-matter`](https://github.com/jonschlinkert/gray-matter) package. All [project pages](./src/pages/project/%5Bslug%5D.tsx) are generated at bulid time using `getStaticProps`, the markdown is extracted from the `.mdx` file and rendered on the page using the [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) package.

## Installation and Setup

To run the portfolio locally on your machine, please follow the steps below:

1. Clone the repository to your local machine using `git clone https://github.com/JorgeAMendoza/portfolio` and `cd` into the directory.
2. Install the dependencies using `npm install` or `yarn install`.
3. Run the development server using `npm run dev`.

To run the _production build_, first run `npm run build` and then `npm run start`.
