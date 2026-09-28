import { readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { defineConfig } from 'vitepress'
import { siteConfig } from './theme/site-config.js'

const { seo, brand } = siteConfig

function collectLegacyMarkdown(dir = '.') {
  const results = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') continue
    const absolute = join(dir, entry.name)
    if (entry.isDirectory()) results.push(...collectLegacyMarkdown(absolute))
    else if (entry.name.endsWith('.md') && relative('.', absolute) !== 'index.md') results.push(relative('.', absolute))
  }
  return results
}

const legacyMarkdownPages = collectLegacyMarkdown()

// Internal repository documents must never become public pages or sitemap entries.
const sitemapExcludedPaths = new Set([
  '/AI-PROJECT-GUIDE',
  '/DEPLOYMENT-RECOVERY',
  '/EDITORIAL_UNIQUENESS_GUIDE',
])

export default defineConfig({
  vite: {
    ssr: {
      noExternal: [],
    },
    build: {
      rollupOptions: {
        external: (id) => id.startsWith('/manus-storage/'),
      },
    },
  },

  title: brand.name,
  description: brand.description,
  lang: 'en-US',

  head: [
    // Google tag (gtag.js) — site-wide Google Analytics property supplied by the site owner
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-9WJTE8DY0P' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9WJTE8DY0P');
    `],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['link', { rel: 'preload', as: 'image', href: '/images/hero-1200w.webp', fetchpriority: 'high' }],
    ['link', { rel: 'preconnect', href: 'https://www.googletagmanager.com', crossorigin: '' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: seo.title }],
    ['meta', { property: 'og:description', content: seo.description }],
    ['meta', { property: 'og:image', content: '/favicon.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: seo.title }],
    ['meta', { name: 'twitter:description', content: seo.description }],
    ['meta', { name: 'keywords', content: seo.keywords.join(', ') }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: brand.name,
      url: seo.hostname,
      description: brand.description,
    })],
  ],

  themeConfig: {
    nav: [],

    notFound: {
      quote: 'The page you are looking for does not exist.',
      linkLabel: 'Back to Home',
      linkUrl: '/',
    },

    docFooter: {
      prev: false,
      next: false,
    },

    lastUpdated: false,
    editLink: undefined,
  },

  sitemap: {
    hostname: seo.hostname,
    transformItems(items) {
      return items.filter((item) => !sitemapExcludedPaths.has(item.url))
    },
  },

  ignoreDeadLinks: [
    /^\/blog\//,
    /^http:\/\/localhost/,
    /^\/Usfans-/,
    /^\/is-/,
  ],

  cleanUrls: 'with-subfolders',

  // Generate canonical URLs for each page
  transformPageData(pageData) {
    const canonicalUrl = `${seo.hostname}/${pageData.relativePath.replace(/\.md$/, '').replace(/index$/, '')}`
    pageData.frontmatter.head = pageData.frontmatter.head || []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }]
    )
    return pageData
  },

  // This project is intentionally a single-page reference site. Keep all legacy
  // markdown content in the repository for archival purposes, but do not render it.
  srcExclude: [
    ...legacyMarkdownPages,
    // Root-level internal documents (should not be indexed)
    'AI-PROJECT-GUIDE.md',
    'ARTICLE_PROMPT_GUIDE.md',
    'BANNED_TERMS.md',
    'BATCH_MODIFICATION_PLAN.md',
    'DEPLOYMENT-RECOVERY.md',
    'EDITORIAL_UNIQUENESS_GUIDE.md',
    'WEBSITE_POSITIONING.md',
    'flexible-article-generator.md',
    'ideas.md',
    // Blog-level internal documents
    'blog/usfans-article-prompt.md',
    'blog/usfans-internal-link-rules.md',
    'blog/usfans-product-reference.md',
    'blog/usfans-review-report.md',
    'blog/usfans-topic-list.md',
    'blog/flexible-article-generator.md',
    'blog/topic-matrix.md',
    'blog/ideas.md',
    'blog/content-checklist.md',
    'blog/local-setup.md',
    'blog/product-workflow.md',
    'blog/website-structure.md',
  ],
})
