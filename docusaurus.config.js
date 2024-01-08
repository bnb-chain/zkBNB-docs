// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "zkBNB - Official Documentation",
  tagline: "A trustless and scaling solution for BNB Smart Chain",
  url: "https://docs.bnbchain.org",
  baseUrl: "/zkBNB-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bnb-chain", // Usually your GitHub org/user name.
  projectName: "zkBNB-docs", // Usually your repo name. 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,


  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/bnb-chain/zkBNB-docs/blob/master/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/bnb-chain/zkBNB-docs/blob/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '3LF005YNGZ',

        // Public API key: it is safe to commit it
        apiKey: 'dbc11ec6638f9c767ef6ed2856871f58',

        indexName: 'bnbchain',

        // Optional: see doc section below
        // contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'https://docs.bnbchain.org/',

        // Optional: Algolia search parameters
        //searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        //  searchPagePath: 'search',

        //... other Algolia params
      },
      navbar: {
        logo: {
          alt: "zkBNB Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Guide",
            position: "left",
            to: "/docs/guide/introduction/getting-started"
          },
          {
            label: "zkBNB API",
            position: "left",
            to: "/docs/zkbnb-api"
          },
          {
            label: "zkBNB SDKs",
            position: "left",
            to: "/docs/zkbnb-sdk-guides/"
          },
          {
            label: "FAQs",
            position: "left",
            to: "/docs/faqs/zkbnb-faqs"
          },
          {
            href: 'https://github.com/bnb-chain/zkBNB-docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ]
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php",]
      }
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          zkbnb: {
            specPath: "swagger/zkbnb.yaml",
            outputDir: "docs/zkbnb",
            downloadUrl:
              "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            },
          }
        }
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-LSRFL0KHRR',
        anonymizeIP: true,
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
