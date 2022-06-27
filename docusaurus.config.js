const theme = require("./core/PrismTheme");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Midnight",
  tagline: "Midnight wiki",
  url: "https://midnight-docs.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "karlend", // Usually your GitHub org/user name.
  projectName: "midnight-docs", // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl:
            "https://github.com/Karlend/midnight-docs/tree/main/docs",
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },
      navbar: {
        title: "Midnight",
        logo: {
          alt: "Midnight.im",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://midnight.im/",
            position: "left",
            label: "🖥️",
          },
          {
            href: "https://midnight.im/usercp/",
            position: "left",
            label: "🔑",
          },
          {
            href: "https://github.com/Karlend/midnight-docs",
            position: "right",
            label: "🤖",
          },
        ],
      },
      prism: {
        theme: theme,
        additionalLanguages: [
          'lua',
          'ebnf'
        ],
      },
      algolia: {
        // Application ID provided by Algolia
        appId: "9DKG8FPSZZ",
        // Public API key
        apiKey: "2b748f4d7a02bd9a65c96f481b9a6766",
        indexName: "midnight-docs",
      },
    }),
};

module.exports = config;