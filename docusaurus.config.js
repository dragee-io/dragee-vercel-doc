// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dragee.io",
  tagline: "Software architecture analysis and modeling",

  // Set the production url of your site here
  url: "https://dragee.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dragee-io", // Usually your GitHub org/user name.
  projectName: "dragee-io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  // staticDirectories: ["static"],
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: ["./projects/**/rules/**", "./projects/**/graphs/**"],
        tsconfig: "./tsconfig.json",
        plugin: ["./typedoc-plugin.mjs"],
        readme: "none",
        indexFormat: "table",
        disableSources: true,
        groupOrder: ["Classes", "Interfaces", "Enums"],
        sidebar: { pretty: true },
        textContentMappings: {
          "title.indexPage": "Dragee.io API",
          "title.memberPage": "{name}",
        },
        parametersFormat: "table",
        enumMembersFormat: "table",
        useCodeBlocks: true,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Dragee.io",
        items: [
          {
            type: "docSidebar",
            sidebarId: "mySidebar",
            position: "left",
            label: "API",
          },
          {
            href: "https://github.com/dragee-io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Blog HoppR",
                href: "https://blog.hoppr.tech/",
              },
              {
                label: "LinkedIn HoppR",
                href: "https://fr.linkedin.com/company/hopprtech",
              }
            ],
          }
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
