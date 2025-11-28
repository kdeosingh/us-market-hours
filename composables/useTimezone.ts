/**
 * Composable for timezone utilities
 */
import { DateTime, IANAZone } from 'luxon'

// Create shared state outside the composable so it's truly global
const userTimezone = ref<string>('America/New_York')

export const useTimezone = () => {
  const availableTimezones = [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'America/Phoenix',
    'Pacific/Honolulu',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Hong_Kong',
    'Asia/Singapore',
    'Australia/Sydney'
  ]

  const detectTimezone = () => {
    // Always default to New York (Eastern Time)
    userTimezone.value = 'America/New_York'
  }

  const setTimezone = (tz: string) => {
    console.log('Setting timezone to:', tz)
    if (IANAZone.isValidZone(tz)) {
      userTimezone.value = tz
      localStorage.setItem('user_timezone', tz)
      console.log('Timezone set successfully:', userTimezone.value)
    } else {
      console.error('Invalid timezone:', tz)
    }
  }

  const loadSavedTimezone = () => {
    const saved = localStorage.getItem('user_timezone')
    if (saved && IANAZone.isValidZone(saved)) {
      userTimezone.value = saved
      console.log('Loaded saved timezone:', saved)
    } else {
      detectTimezone()
    }
  }

  const convertUtcToLocal = (utcTimeString: string, timezone?: string): string => {
    const tz = timezone || userTimezone.value || 'America/New_York'
    const dt = DateTime.fromISO(utcTimeString, { zone: 'utc' })
    if (!dt.isValid) return 'Invalid Time'
    return dt.setZone(tz).toFormat('h:mm a ZZZZ')
  }

  const convertUtcToLocalFull = (utcTimeString: string, timezone?: string): string => {
    const tz = timezone || userTimezone.value || 'America/New_York'
    const dt = DateTime.fromISO(utcTimeString, { zone: 'utc' })
    if (!dt.isValid) return 'Invalid Time'
    return dt.setZone(tz).toFormat('EEE, MMM d, yyyy h:mm a ZZZZ')
  }

  const formatTimeOnly = (utcTimeString: string, timezone?: string): string => {
    const tz = timezone || userTimezone.value || 'America/New_York'
    const dt = DateTime.fromISO(utcTimeString, { zone: 'utc' })
    if (!dt.isValid) return 'Invalid Time'
    return dt.setZone(tz).toFormat('h:mm a')
  }

  const getTimezoneAbbr = (timezone?: string): string => {
    const tz = timezone || userTimezone.value || 'America/New_York'
    const now = DateTime.now().setZone(tz)
    return now.offsetNameShort || now.toFormat('ZZZZ')
  }

  return {
    userTimezone,
    availableTimezones,
    detectTimezone,
    setTimezone,
    loadSavedTimezone,
    convertUtcToLocal,
    convertUtcToLocalFull,
    formatTimeOnly,
    getTimezoneAbbr
  }
}


