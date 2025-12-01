<template>
  <footer class="bg-gray-900 text-gray-300 mt-12">
    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- About -->
        <div>
          <h3 class="text-white font-semibold mb-3">Market Open Time</h3>
          <p class="text-sm text-gray-400">
            Real-time NYSE & NASDAQ market hours, holiday schedules, and trading status.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold mb-3">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/news" class="hover:text-white transition-colors">Market News</NuxtLink></li>
            <li><NuxtLink to="/api-docs" class="hover:text-white transition-colors">API Documentation</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">About Us</NuxtLink></li>
          </ul>
        </div>
        
        <!-- Legal -->
        <div>
          <h3 class="text-white font-semibold mb-3">Legal</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:text-white transition-colors">Terms of Service</NuxtLink></li>
            <li><a href="https://adssettings.google.com" target="_blank" rel="noopener" class="hover:text-white transition-colors">Ad Settings</a></li>
          </ul>
        </div>
        
        <!-- Info -->
        <div>
          <h3 class="text-white font-semibold mb-3">Information</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>Data updated daily at 6:00 AM UTC</li>
            <li>For informational purposes only</li>
            <li>Not investment advice</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p class="text-gray-400">
          © {{ currentYear }} Market Open Time. All rights reserved.
        </p>
        <p class="text-gray-500 text-xs mt-2 md:mt-0">
          Market data sourced from NYSE & NASDAQ official calendars
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
