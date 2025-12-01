<template>
  <div class="max-w-4xl mx-auto space-y-6 py-8">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Market Open Time</h1>
      
      <div class="prose dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Mission</h2>
          <p class="text-gray-700 dark:text-gray-300">
            Market Open Time provides traders, investors, and financial professionals with accurate, real-time information 
            about NYSE and NASDAQ stock market hours, holiday schedules, and trading day status.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">What We Offer</h2>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Real-Time Market Status:</strong> Know instantly if markets are open, closed, or on holiday</li>
            <li><strong>Timezone Conversion:</strong> View market hours in your local timezone</li>
            <li><strong>Holiday Calendar:</strong> Complete 2025 market holiday schedule</li>
            <li><strong>7-Day Schedule:</strong> Plan ahead with upcoming trading days</li>
            <li><strong>Market News:</strong> Aggregated financial news from trusted sources</li>
            <li><strong>API Access:</strong> Programmatic access for developers (coming soon)</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Sources</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            Our market hours data is sourced from:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Official NYSE and NASDAQ exchange calendars</li>
            <li>Verified holiday schedules published by exchanges</li>
            <li>Regular updates to ensure accuracy</li>
          </ul>
          <p class="text-gray-700 dark:text-gray-300 mt-3">
            News content is aggregated from Reuters, CNBC, MarketWatch, and Yahoo Finance RSS feeds.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">For Traders & Investors</h2>
          <p class="text-gray-700 dark:text-gray-300">
            Whether you're day trading, managing a portfolio, or simply keeping track of market schedules, 
            Market Open Time helps you stay informed about when markets are open for trading. Never miss 
            an early close or holiday again.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Accuracy & Updates</h2>
          <p class="text-gray-700 dark:text-gray-300">
            Our data is automatically updated daily at 6:00 AM UTC. While we strive for accuracy, always verify 
            critical trading times with your broker or official exchange sources.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Contact</h2>
          <p class="text-gray-700 dark:text-gray-300">
            Have questions, suggestions, or found an error? We'd love to hear from you. Contact us through 
            our website or reach out via social media.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us - Market Open Time',
  meta: [
    { name: 'description', content: 'Learn about Market Open Time, your trusted source for NYSE and NASDAQ market hours, holiday schedules, and real-time trading status.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>

