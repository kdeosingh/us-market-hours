<template>
  <div class="max-w-6xl mx-auto space-y-6">
    <!-- Page Header -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 text-white">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="w-14 h-14 flex items-center justify-center">
            <svg class="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="10" width="52" height="44" rx="4" fill="white" opacity="0.15"/>
              <rect x="6" y="10" width="52" height="44" rx="4" stroke="white" stroke-width="2"/>
              <text x="18" y="32" font-family="monospace" font-size="16" font-weight="bold" fill="white">API</text>
              <path d="M 12 42 L 18 42 M 24 42 L 30 42 M 36 42 L 42 42" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold">API Documentation</h1>
            <p class="text-blue-100 mt-1">Market Open Time API</p>
          </div>
        </div>
        <div class="flex items-center space-x-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-amber-300/30">
          <svg class="w-5 h-5 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-sm font-semibold text-amber-100">Coming Soon</span>
        </div>
      </div>
    </div>

    <!-- API Overview -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Overview</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        Access real-time US stock market hours, holiday schedules, and trading day information through our REST API. 
        All times are provided in UTC and include timezone conversion support.
      </p>
      
      <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
        <div class="flex items-start space-x-3">
          <svg class="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 class="text-sm font-semibold text-amber-900 dark:text-amber-200 mb-1">Public API Coming Soon</h3>
            <p class="text-xs text-amber-800 dark:text-amber-300">
              The API is currently in development. Public access with API key authentication will be available soon. 
              Contact us if you're interested in early access.
            </p>
          </div>
        </div>
      </div>
      
      <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p class="text-sm text-blue-800 dark:text-blue-300">
          <strong>Base URL:</strong> <code class="bg-white dark:bg-gray-800 px-2 py-1 rounded">{{ config.public.apiBase }}</code>
        </p>
      </div>
    </div>

    <!-- Endpoints -->
    <div class="space-y-4">
      <div
        v-for="endpoint in endpoints"
        :key="endpoint.path"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div class="p-6">
          <div class="flex items-center space-x-3 mb-3">
            <span 
              class="px-3 py-1 rounded text-xs font-bold uppercase"
              :class="endpoint.method === 'GET' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'"
            >
              {{ endpoint.method }}
            </span>
            <code class="text-sm font-mono text-gray-900 dark:text-white">{{ endpoint.path }}</code>
          </div>
          
          <p class="text-gray-600 dark:text-gray-400 mb-4">{{ endpoint.description }}</p>
          
          <!-- Parameters -->
          <div v-if="endpoint.parameters && endpoint.parameters.length > 0" class="mb-4">
            <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Parameters</h4>
            <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-2">
              <div v-for="param in endpoint.parameters" :key="param.name" class="flex items-start space-x-3">
                <code class="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">{{ param.name }}</code>
                <div>
                  <span class="text-xs text-gray-600 dark:text-gray-400">{{ param.type }}</span>
                  <span v-if="param.required" class="ml-2 text-xs text-red-600 dark:text-red-400">(required)</span>
                  <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">{{ param.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Example Response -->
          <div>
            <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example Response</h4>
            <pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{{ endpoint.exampleResponse }}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Rate Limiting & Notes -->
    <div class="space-y-4">
      <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
        <div class="flex items-start space-x-3">
          <svg class="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">API Authentication</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">
              When API authentication is enabled, all requests must include an API key in the header:
            </p>
            <pre class="bg-gray-900 text-gray-100 rounded p-3 text-xs overflow-x-auto mb-3"><code>X-API-Key: your-api-key-here</code></pre>
            <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li>API keys will be provided upon request during beta</li>
              <li>Requests without valid API keys will receive 401/403 errors</li>
              <li>Keep your API key secure and don't share it publicly</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <div class="flex items-start space-x-3">
          <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important Notes</h3>
            <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li>All times are returned in UTC format (ISO 8601)</li>
              <li>Data is updated daily at 6:00 AM UTC</li>
              <li>Currently in development - API subject to change</li>
              <li>Rate limiting will be applied for public access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const endpoints = [
  {
    method: 'GET',
    path: '/market-hours/today',
    description: 'Get current day market hours and status',
    parameters: [],
    exampleResponse: JSON.stringify({
      date: "2025-12-01",
      day_of_week: "Monday",
      is_open: true,
      status: "OPEN",
      open_time_utc: "2025-12-01T14:30:00Z",
      close_time_utc: "2025-12-01T21:00:00Z",
      notes: "Regular trading hours"
    }, null, 2)
  },
  {
    method: 'GET',
    path: '/market-hours/week',
    description: 'Get 7-day schedule starting from today',
    parameters: [],
    exampleResponse: JSON.stringify({
      days: [
        {
          date: "2025-12-01",
          day_of_week: "Monday",
          is_open: true,
          status: "OPEN",
          open_time_utc: "2025-12-01T14:30:00Z",
          close_time_utc: "2025-12-01T21:00:00Z",
          notes: "Regular trading hours"
        }
      ]
    }, null, 2)
  },
  {
    method: 'GET',
    path: '/market-hours/date/{date}',
    description: 'Get market hours for a specific date',
    parameters: [
      {
        name: 'date',
        type: 'string',
        required: true,
        description: 'Date in YYYY-MM-DD format (e.g., 2025-12-25)'
      }
    ],
    exampleResponse: JSON.stringify({
      date: "2025-12-25",
      day_of_week: "Thursday",
      is_open: false,
      status: "CLOSED",
      open_time_utc: null,
      close_time_utc: null,
      notes: "Christmas Day - Market Closed"
    }, null, 2)
  },
  {
    method: 'GET',
    path: '/market-hours/range',
    description: 'Get market hours for a date range',
    parameters: [
      {
        name: 'start_date',
        type: 'string (query)',
        required: true,
        description: 'Start date in YYYY-MM-DD format'
      },
      {
        name: 'end_date',
        type: 'string (query)',
        required: true,
        description: 'End date in YYYY-MM-DD format'
      }
    ],
    exampleResponse: JSON.stringify({
      start_date: "2025-12-01",
      end_date: "2025-12-07",
      days: [
        {
          date: "2025-12-01",
          is_open: true,
          status: "OPEN"
        }
      ]
    }, null, 2)
  },
  {
    method: 'GET',
    path: '/news',
    description: 'Get latest market news from trusted financial sources',
    parameters: [],
    exampleResponse: JSON.stringify({
      articles: [
        {
          title: "Market Update: Stocks Rally on Economic Data",
          link: "https://example.com/article",
          description: "US stocks climbed as economic indicators...",
          pubDate: "2025-12-01T10:30:00Z",
          source: "Reuters"
        }
      ]
    }, null, 2)
  },
  {
    method: 'GET',
    path: '/health',
    description: 'Health check endpoint',
    parameters: [],
    exampleResponse: JSON.stringify({
      status: "healthy"
    }, null, 2)
  }
]

// Enhanced SEO for API docs page
useHead({
  title: 'API Documentation - Market Open Time REST API',
  meta: [
    { name: 'description', content: 'Market Open Time REST API documentation. Access NYSE & NASDAQ market hours data programmatically. Free API for developers building trading tools.' },
    { name: 'keywords', content: 'market hours API, NYSE API, NASDAQ API, stock market API, trading hours API, REST API, financial API' },
    { property: 'og:title', content: 'API Documentation - Market Open Time REST API' },
    { property: 'og:description', content: 'REST API for NYSE & NASDAQ market hours data. Free API for developers.' },
    { name: 'twitter:title', content: 'API Documentation - Market Open Time REST API' },
    { name: 'twitter:description', content: 'REST API for NYSE & NASDAQ market hours data.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://marketopentime.com/api-docs' }
  ]
})
</script>

