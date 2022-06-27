const themeLight = require('prism-react-renderer/themes/vsLight');
const themeDark = require('prism-react-renderer/themes/dracula');

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
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Karlend/midnight-docs/tree/main/docs",
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/custom.scss"),
          ],
        },
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: themeLight,
        darkTheme: themeDark,
        additionalLanguages: [
          'lua',
          'ebnf'
        ],
      },
      algolia: {
        appId: "9DKG8FPSZZ",
        apiKey: "2b748f4d7a02bd9a65c96f481b9a6766",
        indexName: "midnight-docs",
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
    }),
};

module.exports = config;