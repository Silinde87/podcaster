# Podcaster by Pau Rodríguez

![](https://img.shields.io/github/deployments/Silinde87/phone-catalog/production?label=Vercel&logo=Vercel&logoColor=white)
![](https://img.shields.io/w3c-validation/html?targetUrl=https://phone-catalog-sandy.vercel.app/)

## How it looks

🔗 [Live Demo](https://podcaster-five.vercel.app/)

This React application is a catalog where you can find a collection of 100 podcasts.
These podcasts can be visualized thanks to [Itunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1).

You can search for podcasts through the search engine.

I have developed this application using atomic design.

## Quick Start

```
git clone https://github.com/Silinde87/podcaster.git
cd podcaster
yarn install
yarn dev
```

## Available scripts in the application

### yarn install

> **Install app dependencies**

### yarn dev

> **Runs the app** in the development mode. Open http://localhost:3000 to view it in the browser.

### yarn build

> **Generates a build version ready for deploy**.

### yarn preview

> **Runs the app** in the production mode. Open http://localhost:3000 to view it in the browser.

### yarn test:unit:ci

> **Launches the unit test runner** (Jest/RTL) in the interactive watch mode.

---

## Stack

| Package                         | Version |
| ------------------------------- | ------- |
| React & react-dom               | 18.2.0  |
| styled-components               | 5.3.5   |
| react-html-parser               | 2.0.2   |
| axios                           | 0.27.2  |
| eslint                          | 8.23.1  |
| prettier                        | 2.7.1   |
| typescript                      | 4.8.3   |

## Output

```
.
├── README.md
├── package.json
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── public                  # Assets
└── src                     # React App folder
    ├── components          # All the components of the application
    │   ├── atoms           # The smallest components
    │   └── molecules       # A combination of atoms components
    ├── providers           # The React Providers for this app.
    ├── pages               # The pages components
    ├── services            # The controllers that manage the communication with API
    ├── theme               # Shared styles or colors
    ├── utils               # Shared utilites and files such as utils, constants or rules
    ├── App.tsx
    └── main.tsx
```

---

## Author

👤 **Pau Rodríguez**

- Website: https://www.linkedin.com/in/paurodriguezmolina/
- Github: [@Silinde87](https://github.com/Silinde87)
- LinkedIn: [@paurodriguezmolina](https://linkedin.com/in/paurodriguezmolina)
- Twitter: [@Silinde87](https://twitter.com/Silinde87)

## License

[GNU General Public License](https://opensource.org/licenses/gpl-license)
