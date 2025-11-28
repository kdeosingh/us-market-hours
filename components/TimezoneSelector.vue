<template>
  <div class="relative">
    <select
      v-model="selectedTimezone"
      @change="handleTimezoneChange"
      class="px-3 py-2 pr-8 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none cursor-pointer"
    >
      <option v-for="tz in availableTimezones" :key="tz" :value="tz">
        {{ formatTimezone(tz) }}
      </option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const { userTimezone, availableTimezones, setTimezone, loadSavedTimezone } = useTimezone()

const selectedTimezone = ref(userTimezone.value || 'America/New_York')

// Ensure timezone is loaded on mount
onMounted(() => {
  if (!userTimezone.value) {
    loadSavedTimezone()
  }
  selectedTimezone.value = userTimezone.value || 'America/New_York'
})

watch(userTimezone, (newTz) => {
  selectedTimezone.value = newTz || 'America/New_York'
})

const handleTimezoneChange = () => {
  setTimezone(selectedTimezone.value)
}

const formatTimezone = (tz: string): string => {
  const cityMap: Record<string, string> = {
    'America/New_York': 'New York (ET)',
    'America/Chicago': 'Chicago (CT)',
    'America/Denver': 'Denver (MT)',
    'America/Los_Angeles': 'Los Angeles (PT)',
    'America/Phoenix': 'Phoenix (MST)',
    'Pacific/Honolulu': 'Honolulu (HT)',
    'Europe/London': 'London (GMT)',
    'Europe/Paris': 'Paris (CET)',
    'Asia/Tokyo': 'Tokyo (JST)',
    'Asia/Hong_Kong': 'Hong Kong (HKT)',
    'Asia/Singapore': 'Singapore (SGT)',
    'Australia/Sydney': 'Sydney (AEST)'
  }
  return cityMap[tz] || tz.split('/').pop()?.replace(/_/g, ' ') || tz
}
</script>

