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
      title: 'Market Open Time - NYSE & NASDAQ Real-Time Market Hours',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Real-time NYSE & NASDAQ market hours, holiday schedules, and trading status. Know instantly when US stock markets are open. Includes timezone conversion and 7-day calendar.' },
        { name: 'keywords', content: 'NYSE market hours, NASDAQ hours, stock market open, market holiday schedule, trading hours, market status, stock market calendar, US market hours, pre-market hours, after-hours trading' },
        { name: 'author', content: 'Market Open Time' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://marketopentime.com' },
        { property: 'og:title', content: 'Market Open Time - NYSE & NASDAQ Real-Time Market Hours' },
        { property: 'og:description', content: 'Real-time NYSE & NASDAQ market hours, holiday schedules, and trading status. Know instantly when US stock markets are open.' },
        { property: 'og:image', content: 'https://marketopentime.com/og-image.png' },
        { property: 'og:site_name', content: 'Market Open Time' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://marketopentime.com' },
        { name: 'twitter:title', content: 'Market Open Time - NYSE & NASDAQ Real-Time Market Hours' },
        { name: 'twitter:description', content: 'Real-time NYSE & NASDAQ market hours, holiday schedules, and trading status. Know instantly when US stock markets are open.' },
        { name: 'twitter:image', content: 'https://marketopentime.com/twitter-card.png' },
        
        // Additional SEO
        { name: 'theme-color', content: '#2563eb' },
        { name: 'msapplication-TileColor', content: '#2563eb' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'canonical', href: 'https://marketopentime.com' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-DSZ6Z7RT3L',
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DSZ6Z7RT3L');
          `
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Market Open Time",
            "description": "Real-time NYSE & NASDAQ market hours, holiday schedules, and trading status",
            "url": "https://marketopentime.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://marketopentime.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Market Open Time",
            "description": "Real-time NYSE & NASDAQ market hours and holiday schedules",
            "url": "https://marketopentime.com",
            "logo": "https://marketopentime.com/logo.svg",
            "sameAs": []
          })
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000',
      apiKey: process.env.NUXT_PUBLIC_API_KEY || ''
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

