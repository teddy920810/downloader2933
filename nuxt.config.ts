// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  app: {
    head: {
      title: '我的 SEO 网站',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '这是一个优化的 SEO 网站' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3000/api'
    }
  },
  sitemap: {
    hostname: 'https://your-domain.com',
    gzip: true
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://your-domain.com/sitemap.xml'
  }
})