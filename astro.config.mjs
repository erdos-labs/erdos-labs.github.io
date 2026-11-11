import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';

// Landing page: src/pages/index.astro (served at /). Docs: src/content/docs/docs/** (served at /docs/).
export default defineConfig({
  site: 'https://erdos-labs.github.io',
  integrations: [
    icon(),
    starlight({
      title: 'erdos',
      description: 'Documentation for erdos, an open-source entity relationship diagram tool that lives in git.',
      logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg', alt: 'erdos' },
      favicon: '/favicon.svg',
      components: { SocialIcons: './src/components/SocialIcons.astro', Search: './src/components/Search.astro', Head: './src/components/Head.astro' },
      editLink: { baseUrl: 'https://github.com/erdos-labs/erdos-labs.github.io/edit/main/' },
      customCss: [
        '@fontsource-variable/manrope',
        '@fontsource/ibm-plex-mono/400.css',
        './src/styles/tokens.css',
        './src/styles/starlight.css',
      ],
      sidebar: [
        { label: 'Start', items: [
          { label: 'What is erdos', slug: 'docs' },
          { label: 'Quick start', slug: 'docs/quick-start' },
        ] },
        { label: 'Concepts', items: [
          { label: 'ERD concepts in erdos', slug: 'docs/concepts/erd-concepts' },
          { label: 'Projects', slug: 'docs/concepts/projects' },
          { label: 'Repository layout', slug: 'docs/concepts/repository-layout' },
          { label: 'Branches and roles', slug: 'docs/concepts/branches-and-roles' },
        ] },
        { label: 'Guides', items: [
          { label: 'Using the workspace', slug: 'docs/guides/workspace' },
          { label: 'Import a dbt project', slug: 'docs/guides/import-dbt' },
          { label: 'Governance and standards', slug: 'docs/guides/governance' },
          { label: 'Share standards', slug: 'docs/guides/sharing-standards' },
          { label: 'Published views', slug: 'docs/guides/published-views' },
          { label: 'Validate in CI', slug: 'docs/guides/ci-validation' },
          { label: 'Theming', slug: 'docs/guides/theming' },
        ] },
        { label: 'Reference', items: [
          { label: 'Configuration', slug: 'docs/reference/configuration' },
          { label: 'Rule kinds', slug: 'docs/reference/governance-rules' },
          { label: 'dbt mapping', slug: 'docs/reference/dbt-mapping' },
          { label: 'HTTP API', slug: 'docs/reference/http-api' },
        ] },
        { label: 'Project', items: [
          { label: 'Architecture', slug: 'docs/project/architecture' },
          { label: 'Roadmap', slug: 'docs/project/roadmap' },
          { label: 'License', slug: 'docs/project/license' },
        ] },
      ],
    }),
  ],
});
