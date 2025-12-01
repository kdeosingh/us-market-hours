<template>
  <div class="max-w-6xl mx-auto space-y-6">
    <!-- Main Content Grid -->
    <div class="grid md:grid-cols-3 gap-6 items-start">
      <!-- Today Panel - Takes 2 columns -->
      <div class="md:col-span-2 flex flex-col">
        <TodayPanel />
      </div>

      <!-- Week Calendar in Sidebar -->
      <div class="flex flex-col">
        <WeekCalendar />
      </div>
    </div>

    <!-- Extended Hours Info Section -->
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800 p-6">
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">Pre-Market Trading</h3>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">
          <span class="font-semibold">4:00 AM - 9:30 AM ET</span>
        </p>
        <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
          Extended hours allow trading outside regular market hours. Lower liquidity and wider spreads may apply. Pre-market activity often indicates market sentiment.
        </p>
      </div>

      <div class="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800 p-6">
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">After-Hours Trading</h3>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">
          <span class="font-semibold">4:00 PM - 8:00 PM ET</span>
        </p>
        <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
          Post-market trading continues after the closing bell. Earnings reports released after hours can cause significant price movements. Use caution with lower volume.
        </p>
      </div>
    </div>

    <!-- Key Holidays Section -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">2025 Market Holidays</h2>
      </div>
      <div class="p-6">
        <div class="grid md:grid-cols-2 gap-4">
          <div v-for="holiday in holidays" :key="holiday.date" class="flex items-center space-x-3 p-3 rounded bg-gray-50 dark:bg-gray-750">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center flex-shrink-0">
              <span class="text-lg font-bold text-red-600 dark:text-red-400">{{ holiday.icon }}</span>
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ holiday.name }}</p>
              <p class="text-xs text-gray-600 dark:text-gray-400">{{ holiday.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Info -->
    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-6">
      <div class="flex items-start space-x-4">
        <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">About This Data</h3>
          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            Market hours are sourced from official NYSE and NASDAQ calendars. All times are automatically converted to your selected timezone. 
            Data is updated daily at 6:00 AM UTC to ensure accuracy for holidays and special trading days.
          </p>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            <strong>Note:</strong> This tool is for informational purposes. Always verify critical trading times with your broker or official exchange sources.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const holidays = [
  { name: "New Year's Day", date: "January 1, 2025", icon: "🎉" },
  { name: "Martin Luther King Jr. Day", date: "January 20, 2025", icon: "✊" },
  { name: "Presidents' Day", date: "February 17, 2025", icon: "🇺🇸" },
  { name: "Good Friday", date: "April 18, 2025", icon: "✝️" },
  { name: "Memorial Day", date: "May 26, 2025", icon: "🎖️" },
  { name: "Juneteenth", date: "June 19, 2025", icon: "🎊" },
  { name: "Independence Day", date: "July 4, 2025", icon: "🎆" },
  { name: "Labor Day", date: "September 1, 2025", icon: "⚒️" },
  { name: "Thanksgiving", date: "November 27, 2025", icon: "🦃" },
  { name: "Christmas", date: "December 25, 2025", icon: "🎄" }
]

// Enhanced SEO for homepage
useHead({
  title: 'Market Open Time - NYSE & NASDAQ Real-Time Market Hours & Trading Status',
  meta: [
    { name: 'description', content: 'Check NYSE & NASDAQ market hours in real-time. View current market status, holiday schedule, trading hours with timezone conversion. Know instantly when US stock markets are open.' },
    { name: 'keywords', content: 'is NYSE open, is NASDAQ open, market hours today, stock market open, market holiday, trading hours, US market hours, pre-market, after-hours, market status' },
    { property: 'og:title', content: 'Market Open Time - NYSE & NASDAQ Real-Time Market Hours' },
    { property: 'og:description', content: 'Check NYSE & NASDAQ market hours in real-time. View current market status, holiday schedule, and trading hours.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Market Open Time - NYSE & NASDAQ Real-Time Market Hours' },
    { name: 'twitter:description', content: 'Check NYSE & NASDAQ market hours in real-time. Know instantly when US stock markets are open.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://marketopentime.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Market Open Time - NYSE & NASDAQ Market Hours",
        "description": "Real-time NYSE & NASDAQ market hours, holiday schedules, and trading status",
        "url": "https://marketopentime.com",
        "mainEntity": {
          "@type": "Table",
          "about": "NYSE and NASDAQ market hours and holiday schedule"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://marketopentime.com"
            }
          ]
        }
      })
    }
  ]
})
</script>
