/**
 * Type definitions for Market Hours API
 */

export type MarketStatus = 'OPEN' | 'CLOSED' | 'EARLY_CLOSE'

export interface MarketHoursResponse {
  date: string
  open_time_utc: string | null
  close_time_utc: string | null
  is_open: boolean
  is_early_close: boolean
  notes: string
  status: MarketStatus
}

export interface WeekScheduleResponse {
  start_date: string
  end_date: string
  days: MarketHoursResponse[]
}

export interface NextEventResponse {
  event_type: 'open' | 'close'
  event_time_utc: string
  time_until_seconds: number
  next_date: string
  is_early_close: boolean
  notes: string
}

export interface MarketDayDisplay extends MarketHoursResponse {
  open_time_local?: string
  close_time_local?: string
  day_of_week?: string
}

