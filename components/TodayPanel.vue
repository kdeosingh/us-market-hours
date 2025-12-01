<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full">
    <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750 flex-shrink-0">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">Market Status</h2>
    </div>

    <div v-if="loading" class="p-12 text-center flex-1 flex items-center justify-center">
      <div>
        <div class="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">Loading data...</p>
      </div>
    </div>

    <div v-else-if="error" class="p-12 text-center flex-1 flex items-center justify-center">
      <div>
        <div class="text-red-500 dark:text-red-400 mb-2">
          <svg class="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p class="text-sm text-red-600 dark:text-red-400 font-medium">{{ error }}</p>
        <button @click="fetchData" class="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
          Retry
        </button>
      </div>
    </div>

    <div v-else-if="todayData" class="p-6 flex-1 flex flex-col justify-between">
      <div>
        <!-- Enhanced Status Section -->
        <div class="relative overflow-hidden rounded-xl mb-6" :class="statusBgClasses">
          <div class="absolute inset-0 opacity-10">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
              <path fill="currentColor" d="M0,20 L20,25 L40,18 L60,30 L80,22 L100,35 L120,28 L140,40 L160,32 L180,45 L200,38 L220,50 L240,43 L260,55 L280,48 L300,60 L320,53 L340,65 L360,58 L380,70 L400,63 L400,100 L0,100 Z"/>
            </svg>
          </div>
          
          <div class="relative px-6 py-8 text-center">
            <div class="flex items-center justify-center mb-3">
              <div 
                class="w-3 h-3 rounded-full animate-pulse mr-3"
                :class="statusDotClasses"
              ></div>
              <span class="text-2xl font-bold text-white tracking-wide uppercase">
                {{ todayData.status.replace('_', ' ') }}
              </span>
            </div>
            
            <p class="text-sm text-white/90 mb-2">{{ formattedDate }}</p>
            <p class="text-xs text-white/75">{{ todayData.notes }}</p>
          </div>
        </div>

        <!-- Trading Hours -->
        <div v-if="todayData.is_open" class="grid grid-cols-2 gap-4 mb-6">
          <div class="text-center p-4 rounded bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700">
            <p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Market Open</p>
            <p class="text-2xl font-mono font-semibold text-gray-900 dark:text-white">{{ openTimeLocal }}</p>
          </div>
          <div class="text-center p-4 rounded bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700">
            <p class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Market Close</p>
            <p class="text-2xl font-mono font-semibold text-gray-900 dark:text-white">{{ closeTimeLocal }}</p>
          </div>
        </div>

        <!-- Countdown Timer -->
        <CountdownTimer />
      </div>

      <!-- Timezone Info -->
      <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Times shown in: <span class="font-medium">{{ userTimezone }} ({{ timezoneAbbr }})</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MarketHoursResponse } from '~/types/api'
import { DateTime } from 'luxon'

const { fetchToday } = useMarketHours()
const { formatTimeOnly, getTimezoneAbbr, userTimezone, loadSavedTimezone } = useTimezone()

// Ensure timezone is loaded
onMounted(() => {
  if (!userTimezone.value) {
    loadSavedTimezone()
  }
})

const todayData = ref<MarketHoursResponse | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const statusBgClasses = computed(() => {
  if (!todayData.value) return ''
  
  const status = todayData.value.status
  if (status === 'OPEN') {
    return 'bg-gradient-to-br from-green-500 to-emerald-600'
  } else if (status === 'EARLY_CLOSE') {
    return 'bg-gradient-to-br from-amber-500 to-orange-600'
  } else {
    return 'bg-gradient-to-br from-gray-600 to-gray-700'
  }
})

const statusDotClasses = computed(() => {
  if (!todayData.value) return ''
  
  const status = todayData.value.status
  if (status === 'OPEN') {
    return 'bg-white shadow-lg shadow-green-500/50'
  } else if (status === 'EARLY_CLOSE') {
    return 'bg-white shadow-lg shadow-amber-500/50'
  } else {
    return 'bg-gray-300'
  }
})

const formattedDate = computed(() => {
  if (!todayData.value) return ''
  const dt = DateTime.fromISO(todayData.value.date)
  return dt.toFormat('EEEE, MMMM d, yyyy')
})

const openTimeLocal = computed(() => {
  if (!todayData.value?.open_time_utc) return 'N/A'
  try {
    // Force reactivity by accessing userTimezone.value here
    const tz = userTimezone.value || 'America/New_York'
    return formatTimeOnly(todayData.value.open_time_utc, tz)
  } catch (e) {
    console.error('Error formatting open time:', e)
    return 'N/A'
  }
})

const closeTimeLocal = computed(() => {
  if (!todayData.value?.close_time_utc) return 'N/A'
  try {
    // Force reactivity by accessing userTimezone.value here
    const tz = userTimezone.value || 'America/New_York'
    return formatTimeOnly(todayData.value.close_time_utc, tz)
  } catch (e) {
    console.error('Error formatting close time:', e)
    return 'N/A'
  }
})

const timezoneAbbr = computed(() => {
  try {
    // Force reactivity by accessing userTimezone.value here
    const tz = userTimezone.value || 'America/New_York'
    return getTimezoneAbbr(tz)
  } catch (e) {
    console.error('Error getting timezone abbreviation:', e)
    return 'ET'
  }
})

const fetchData = async () => {
  loading.value = true
  error.value = null
  
  try {
    todayData.value = await fetchToday()
  } catch (e: any) {
    error.value = e.message || 'Failed to fetch market data'
    console.error('Error fetching today data:', e)
  } finally {
    loading.value = false
  }
}

let refreshInterval: NodeJS.Timeout | null = null

onMounted(() => {
  fetchData()
  
  // Refresh every 60 seconds
  refreshInterval = setInterval(fetchData, 60000)
})

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})

watch(userTimezone, () => {
  // Don't refetch - just let computed properties update
  // The data is already in UTC, we just need to reformat
  console.log('Timezone changed to:', userTimezone.value)
})
</script>
