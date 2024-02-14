const START_DATE = '2024/02/01'
const END_DATE = '2024/03/10'

const today = new Date().getTime()
const startDate = new Date(START_DATE).getTime()
const endDate = new Date(END_DATE).getTime()

export const isTodayRegis = (): boolean => {
  return today >= startDate && today <= endDate
}

export const isTodayInTimeline = (from: string, until: string): boolean => {
  return today >= new Date(from).getTime() && today <= new Date(until).getTime()
}
