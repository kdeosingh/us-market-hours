<template>
  <div v-if="nextEvent" class="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded border border-blue-200 dark:border-blue-800">
    <p class="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-3 text-center">
      Next {{ nextEvent.event_type === 'open' ? 'Market Open' : 'Market Close' }}
    </p>
    
    <div class="flex items-center justify-center space-x-2 mb-3">
      <div class="text-center">
        <div class="text-3xl font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums">{{ hours }}</div>
        <div class="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mt-1">Hours</div>
      </div>
      <div class="text-2xl font-bold text-gray-400 dark:text-gray-600 pb-4">:</div>
      <div class="text-center">
        <div class="text-3xl font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums">{{ minutes }}</div>
        <div class="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mt-1">Minutes</div>
      </div>
      <div class="text-2xl font-bold text-gray-400 dark:text-gray-600 pb-4">:</div>
      <div class="text-center">
        <div class="text-3xl font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums">{{ seconds }}</div>
        <div class="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mt-1">Seconds</div>
      </div>
    </div>

    <p class="text-xs text-center text-gray-600 dark:text-gray-400">
      {{ eventTimeFormatted }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { NextEventResponse } from '~/types/api'
import { DateTime } from 'luxon'

const { fetchNextEvent } = useMarketHours()
const { convertUtcToLocalFull } = useTimezone()

const nextEvent = ref<NextEventResponse | null>(null)
const timeRemaining = ref(0)

const hours = computed(() => {
  const h = Math.floor(timeRemaining.value / 3600)
  return h.toString().padStart(2, '0')
})

const minutes = computed(() => {
  const m = Math.floor((timeRemaining.value % 3600) / 60)
  return m.toString().padStart(2, '0')
})

const seconds = computed(() => {
  const s = timeRemaining.value % 60
  return s.toString().padStart(2, '0')
})

const eventTimeFormatted = computed(() => {
  if (!nextEvent.value) return ''
  try {
    // Force reactivity by using a reactive composable access
    const { userTimezone, convertUtcToLocalFull } = useTimezone()
    const tz = userTimezone.value || 'America/New_York'
    return convertUtcToLocalFull(nextEvent.value.event_time_utc, tz)
  } catch (e) {
    console.error('Error formatting event time:', e)
    return nextEvent.value.event_time_utc
  }
})

const fetchData = async () => {
  try {
    const event = await fetchNextEvent()
    nextEvent.value = event
    timeRemaining.value = Math.max(0, event.time_until_seconds)
  } catch (e) {
    console.error('Error fetching next event:', e)
  }
}

let countdownInterval: NodeJS.Timeout | null = null

onMounted(() => {
  fetchData()
  
  // Update countdown every second
  countdownInterval = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value -= 1
    } else {
      // Re-fetch when countdown reaches zero
      fetchData()
    }
  }, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>
