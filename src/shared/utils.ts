export enum rangeDates {
  week = 'week',
  month = 'month',
  year = 'year'
}

export const addDays = (date: Date, days: number) => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

export const formatDate = (date: string) => {
    const d = new Date(date)
    let month = `${d.getMonth() + 1}`
    let day = `${d.getDate()}`
    const year = d.getFullYear()

    if (month.length < 2) month = `0${month}`
    if (day.length < 2) day = `0${day}`

    return [year, month, day].join('-')
  }
  
  export const getRange = (range: string) => {
    const today: Date = new Date()
    const to = today.toISOString()
    switch (range) {
      case rangeDates.week:
        return { to, from: formatDate(addDays(today, -7).toISOString()) }
      case rangeDates.month:
        return { to, from: formatDate(addDays(today, -30).toISOString()) }
      default:
        return { to, from: formatDate(addDays(today, -1).toISOString()) }
    }
  }
  