/**
 * Composable for fetching market hours data
 */
import type { 
  MarketHoursResponse, 
  WeekScheduleResponse, 
  NextEventResponse 
} from '~/types/api'

export const useMarketHours = () => {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase
  const apiKey = config.public.apiKey

  // Helper to add API key to headers if provided
  const getHeaders = () => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    }
    if (apiKey) {
      headers['X-API-Key'] = apiKey
    }
    return headers
  }

  const fetchToday = async (): Promise<MarketHoursResponse> => {
    const response = await $fetch<MarketHoursResponse>(`${apiBase}/market-hours/today`, {
      headers: getHeaders()
    })
    return response
  }

  const fetchWeek = async (startDate?: string): Promise<WeekScheduleResponse> => {
    const url = startDate 
      ? `${apiBase}/market-hours/week?start_date=${startDate}`
      : `${apiBase}/market-hours/week`
    
    const response = await $fetch<WeekScheduleResponse>(url, {
      headers: getHeaders()
    })
    return response
  }

  const fetchNextEvent = async (): Promise<NextEventResponse> => {
    const response = await $fetch<NextEventResponse>(`${apiBase}/market-hours/next`, {
      headers: getHeaders()
    })
    return response
  }

  const fetchDate = async (date: string): Promise<MarketHoursResponse> => {
    const response = await $fetch<MarketHoursResponse>(`${apiBase}/market-hours/date/${date}`, {
      headers: getHeaders()
    })
    return response
  }

  const checkIsOpen = async (): Promise<{ is_open: boolean; message: string; timestamp: string }> => {
    const response = await $fetch<{ is_open: boolean; message: string; timestamp: string }>(
      `${apiBase}/market-hours/is-open`,
      { headers: getHeaders() }
    )
    return response
  }

  return {
    fetchToday,
    fetchWeek,
    fetchNextEvent,
    fetchDate,
    checkIsOpen
  }
}



