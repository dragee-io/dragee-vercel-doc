// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Dragee.io',
    tagline: 'Analyze and secure your software architecture',

    customFields: {
        subline:
            "Don't let poor architecture design ruin your project. Dragee is your solution for building modern software architecture"
    },

    // Set the production url of your site here
    url: 'https://dragee.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'dragee-io', // Usually your GitHub org/user name.
    projectName: 'dragee-io', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace 'en' with 'zh-Hans'.
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    },
    staticDirectories: ['static'],
    plugins: [
        // DDD asserter docs
        [
            'docusaurus-plugin-typedoc',
            {
                id: 'ddd-asserter',
                entryPoints: ['./projects/ddd-asserter/src/rules/**'],
                tsconfig: './projects/ddd-asserter/tsconfig.json',
                plugin: ['./typedoc-plugin.mjs'],
                readme: 'none',
                out: 'docs/asserters/ddd-asserter',
                membersWithOwnFile: ['Class', 'Enum', 'Interface'],
                sanitizeComments: true,
                sidebar: { pretty: true },
                textContentMappings: {
                    'title.indexPage': 'DDD Asserter',
                    'title.memberPage': '{name}'
                },
                useCodeBlocks: true
            }
        ],
        // Clean asserter docs
        [
            'docusaurus-plugin-typedoc',
            {
                id: 'clean-asserter',
                entryPoints: ['./projects/clean-asserter/src/rules/**'],
                tsconfig: './projects/clean-asserter/tsconfig.json',
                plugin: ['./typedoc-plugin.mjs'],
                readme: 'none',
                out: 'docs/asserters/clean-asserter',
                membersWithOwnFile: ['Class', 'Enum', 'Interface'],
                sanitizeComments: true,
                sidebar: { pretty: true },
                textContentMappings: {
                    'title.indexPage': 'Clean Asserter',
                    'title.memberPage': '{name}'
                },
                useCodeBlocks: true
            }
        ],
        // DDD grapher docs
        [
            'docusaurus-plugin-typedoc',
            {
                id: 'ddd-grapher',
                entryPoints: ['./projects/ddd-grapher/src/graphs/**'],
                tsconfig: './projects/ddd-grapher/tsconfig.json',
                plugin: ['./typedoc-plugin.mjs'],
                readme: 'none',
                out: 'docs/graphers/ddd-grapher',
                membersWithOwnFile: ['Class', 'Enum', 'Interface'],
                sanitizeComments: true,
                sidebar: { pretty: true },
                textContentMappings: {
                    'title.indexPage': 'DDD Grapher',
                    'title.memberPage': '{name}'
                },
                useCodeBlocks: true
            }
        ],
        // Search Bar
        ['@cmfcmf/docusaurus-search-local', {}]
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.ts'
                },
                theme: {
                    customCss: './src/css/custom.css'
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            announcementBar: {
                id: `announcementBar-drageeBuilding`,
                content: `🚧 Dragee is building... - ⭐️ If you like Dragee, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/dragee-io/dragee-cli">GitHub</a>`
                // id: `announcementBar-v${announcedVersion}`,
                // content: `🎉️ <b><a target="_blank" href="">Dragee v${announcedVersion}</a> is out!</b> 🥳️`,
            },
            navbar: {
                title: 'Dragee.io',
                hideOnScroll: true,
                logo: {
                    alt: 'Dragee logo',
                    src: 'img/dragee_logo.png',
                    width: 32,
                    height: 32
                },
                items: [
                    {
                        to: '/docs/asserters/clean-asserter',
                        label: 'Asserters',
                        position: 'left',
                        activeBaseRegex: '/asserters/',
                        sidebarId: 'assertersSidebar'
                    },
                    {
                        to: '/docs/graphers/ddd-grapher',
                        label: 'Graphers',
                        position: 'left',
                        activeBaseRegex: '/graphers/',
                        sidebarId: 'graphersSidebar'
                    },
                    {
                        href: 'https://github.com/dragee-io',
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository'
                    }
                ]
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'About HoppR',
                        items: [
                            {
                                label: 'Website',
                                href: 'https://www.hoppr.tech/'
                            },
                            {
                                label: 'Blog',
                                href: 'https://blog.hoppr.tech/'
                            },
                            {
                                label: 'LinkedIn',
                                href: 'https://fr.linkedin.com/company/hopprtech'
                            }
                        ]
                    }
                ],
                copyright: `Built with ❤️ + ☕ by HoppR. Crafters building tools for crafters. Learn more <a href="https://www.hoppr.tech/?utm_source=dragee" target="_blank" aria-label="Learn more about HoppR">about us</a>.`
            }
        })
};

export default config;
