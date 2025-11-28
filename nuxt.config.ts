export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },

  app: {
    head: {
      title: 'US Market Hours Calendar',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Real-time US stock market hours and holiday schedules' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000'
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  // Production settings
  nitro: {
    preset: 'node-server',
    compressPublicAssets: true
  },

  // Railway-specific: Listen on all interfaces
  devServer: {
    host: process.env.NUXT_HOST || '0.0.0.0',
    port: parseInt(process.env.NUXT_PORT || '3000')
  },

  compatibilityDate: '2024-11-28'
})

