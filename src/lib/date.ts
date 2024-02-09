const START_DATE = '2024/02/01'
const END_DATE = '2024/03/10'

const today = new Date().getTime()
const startDate = new Date(START_DATE).getTime()
const endDate = new Date(END_DATE).getTime()

export const isTodayCampDay = (): boolean => {
  return today >= startDate && today <= endDate
}
