import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Crud Test Documentation",
  description: "Documentation of Crud Test website",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kentforth/crud-test' }
    ]
  }
})
