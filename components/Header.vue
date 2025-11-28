<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-6xl mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-base font-bold text-gray-900 dark:text-white tracking-tight">
              US Market Hours
            </h1>
            <p class="text-xs text-gray-500 dark:text-gray-400">Real-time Trading Schedule</p>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <TimezoneSelector />
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>
