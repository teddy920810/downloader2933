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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3000/api'
    }
  },

  sitemap: {
    siteUrl: 'https://getvio.online',
    gzip: true
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: (req: { headers: { host: string } }) => `https://${req.headers.host}/sitemap.xml`
  },

  compatibilityDate: '2025-03-23'
})