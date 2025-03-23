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
      title: 'GetVio - Video Download & Processing Service',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'GetVio provides professional video download and processing services. Download videos from various platforms and convert them to your desired format.' }
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
    hostname: 'https://getvio.online',
    gzip: true
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://getvio.online/sitemap.xml'
  },

  compatibilityDate: '2025-03-23'
})