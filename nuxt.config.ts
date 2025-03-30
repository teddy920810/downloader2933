// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
    'nuxt-icon'
  ],

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  },

  app: {
    head: {
      title: 'YouTube Video Downloader - Download HD Videos with One Click',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Easily download YouTube videos with multiple resolution and format options, featuring AI transcription to make video content acquisition simpler.' },
        { name: 'keywords', content: 'YouTube downloader, video download, AI transcription, video tools, online download' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3000/api',
      gtmId: 'GTM-5SS5W9HT'
    }
  },

  sitemap: {
    hostname: 'https://getvio.online',
    gzip: true,
    exclude: [
      '/admin/**',
      '/private/**',
      '/login',
      '/register'
    ]
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://getvio.online/sitemap.xml'
  },

  compatibilityDate: '2025-03-23'
})