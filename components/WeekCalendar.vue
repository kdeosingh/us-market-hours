<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
    <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750 flex-shrink-0">
      <h2 class="text-base font-semibold text-gray-900 dark:text-white tracking-tight">7-Day Schedule</h2>
    </div>

    <div v-if="loading" class="p-8 text-center flex-1 flex items-center justify-center">
      <div>
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    </div>

    <div v-else-if="error" class="p-8 text-center flex-1 flex items-center justify-center">
      <div>
        <p class="text-xs text-red-600 dark:text-red-400">{{ error }}</p>
        <button @click="fetchData" class="mt-2 px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
          Retry
        </button>
      </div>
    </div>

    <div v-else-if="weekData" class="divide-y divide-gray-200 dark:divide-gray-700 flex-1 overflow-auto">
      <div
        v-for="(day, index) in weekData.days"
        :key="day.date"
        class="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
        :class="{ 'bg-blue-50 dark:bg-blue-900/10': index === 0 }"
      >
        <div class="space-y-1.5">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <div 
                class="w-2 h-2 rounded-full flex-shrink-0"
                :class="getStatusColor(day)"
              ></div>
              <p class="text-xs font-semibold text-gray-900 dark:text-white">
                {{ formatDate(day.date) }}
              </p>
              <span v-if="index === 0" class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Today
              </span>
            </div>
            <span v-if="!day.is_open" class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              Closed
            </span>
          </div>
          
          <p class="text-[11px] text-gray-600 dark:text-gray-400 pl-4">{{ day.notes }}</p>
          
          <div v-if="day.is_open" class="pl-4">
            <p class="text-xs font-mono font-medium text-gray-900 dark:text-white">
              {{ getFormattedTime(day.open_time_utc!) }} - {{ getFormattedTime(day.close_time_utc!) }}
            </p>
            <span v-if="day.is_early_close" class="inline-flex items-center mt-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              Early Close
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WeekScheduleResponse, MarketHoursResponse } from '~/types/api'
import { DateTime } from 'luxon'

const { fetchWeek } = useMarketHours()
const { formatTimeOnly, userTimezone } = useTimezone()

const weekData = ref<WeekScheduleResponse | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const formatDate = (dateStr: string): string => {
  const dt = DateTime.fromISO(dateStr)
  return dt.toFormat('EEE, MMM d')
}

const getStatusColor = (day: MarketHoursResponse): string => {
  if (!day.is_open) return 'bg-gray-400 dark:bg-gray-600'
  if (day.is_early_close) return 'bg-amber-500'
  return 'bg-green-500'
}

const getFormattedTime = (utcTimeString: string): string => {
  // Access userTimezone.value to make it reactive
  const tz = userTimezone.value || 'America/New_York'
  return formatTimeOnly(utcTimeString, tz)
}

const fetchData = async () => {
  loading.value = true
  error.value = null
  
  try {
    weekData.value = await fetchWeek()
  } catch (e: any) {
    error.value = e.message || 'Failed to fetch week schedule'
    console.error('Error fetching week data:', e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})

watch(userTimezone, () => {
  // Don't refetch - just let the component re-render with new timezone
  // Data is in UTC, we just reformat on display
  console.log('Week calendar timezone changed to:', userTimezone.value)
})
</script>
