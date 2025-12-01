<template>
  <div class="max-w-6xl mx-auto space-y-6">
    <!-- Page Header -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div class="flex items-center space-x-4">
        <div class="w-12 h-12 flex items-center justify-center">
          <svg class="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="12" width="48" height="44" rx="4" fill="#3b82f6" opacity="0.1"/>
            <rect x="8" y="12" width="48" height="44" rx="4" stroke="#3b82f6" stroke-width="2"/>
            <line x1="14" y1="20" x2="50" y2="20" stroke="#3b82f6" stroke-width="2" stroke-linecap="round"/>
            <line x1="14" y1="28" x2="38" y2="28" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="14" y1="34" x2="44" y2="34" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="14" y1="40" x2="40" y2="40" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="14" y1="46" x2="36" y2="46" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Market News</h1>
          <p class="text-sm text-gray-600 dark:text-gray-400">Latest financial news and market updates</p>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="grid md:grid-cols-2 gap-6">
      <div v-for="i in 6" :key="i" class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
        <div class="h-3 bg-gray-200 dark:bg-gray-600 rounded w-full mb-2"></div>
        <div class="h-3 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
      <div class="flex items-center space-x-3">
        <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-red-600 dark:text-red-400">{{ error }}</p>
      </div>
    </div>

    <!-- News Grid -->
    <div v-else class="grid md:grid-cols-2 gap-6">
      <article
        v-for="article in newsItems"
        :key="article.link"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow group"
      >
        <div class="p-6">
          <div class="flex items-center space-x-2 mb-3">
            <span class="text-xs font-semibold px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {{ article.source }}
            </span>
            <span class="text-xs text-gray-500 dark:text-gray-400">{{ formatDate(article.pubDate) }}</span>
          </div>
          
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <a :href="article.link" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ article.title }}
            </a>
          </h3>
          
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {{ article.description }}
          </p>
          
          <a 
            :href="article.link" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            Read more
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </article>
    </div>

    <!-- Empty State -->
    <div v-if="!loading && !error && newsItems.length === 0" class="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-12 text-center">
      <svg class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
      <p class="text-gray-600 dark:text-gray-400">No news articles available at this time.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'

interface NewsArticle {
  title: string
  link: string
  description: string
  pubDate: string
  source: string
}

const config = useRuntimeConfig()
const newsItems = ref<NewsArticle[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const getHeaders = () => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  }
  if (config.public.apiKey) {
    headers['X-API-Key'] = config.public.apiKey
  }
  return headers
}

const formatDate = (dateString: string) => {
  try {
    const dt = DateTime.fromISO(dateString)
    const now = DateTime.now()
    const diff = now.diff(dt, ['days', 'hours', 'minutes'])
    
    if (diff.days >= 1) {
      return `${Math.floor(diff.days)}d ago`
    } else if (diff.hours >= 1) {
      return `${Math.floor(diff.hours)}h ago`
    } else {
      return `${Math.floor(diff.minutes)}m ago`
    }
  } catch (e) {
    return dateString
  }
}

const fetchNews = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await fetch(`${config.public.apiBase}/news`, {
      headers: getHeaders()
    })
    if (!response.ok) {
      throw new Error('Failed to fetch news')
    }
    const data = await response.json()
    newsItems.value = data.articles || []
  } catch (e: any) {
    error.value = e.message || 'Failed to load news'
    console.error('Error fetching news:', e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchNews()
})

// Enhanced SEO for news page
useHead({
  title: 'Market News - Latest Financial News & Stock Market Updates',
  meta: [
    { name: 'description', content: 'Latest financial news and stock market updates from Reuters, CNBC, MarketWatch, and Yahoo Finance. Stay informed about market trends and trading news.' },
    { name: 'keywords', content: 'market news, stock market news, financial news, NYSE news, NASDAQ news, trading news, market updates, stock updates' },
    { property: 'og:title', content: 'Market News - Latest Financial News & Stock Market Updates' },
    { property: 'og:description', content: 'Latest financial news from Reuters, CNBC, MarketWatch, and Yahoo Finance.' },
    { name: 'twitter:title', content: 'Market News - Latest Financial News & Stock Market Updates' },
    { name: 'twitter:description', content: 'Latest financial news from Reuters, CNBC, MarketWatch, and Yahoo Finance.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://marketopentime.com/news' }
  ]
})
</script>

