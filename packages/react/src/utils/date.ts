import { addDays, format, parseISO } from 'date-fns'

export function formatDate(inputDate?: string) {
  try {
    if (!inputDate) return
    const parsedDate = parseISO(inputDate)
    const formattedDate = format(parsedDate, 'dd/MM/yyyy')
    return formattedDate
  } catch (err) {
    return inputDate
  }
}

export function formatDateWithAddedDays(
  inputDate: string,
  daysToAdd: number,
): string {
  const parsedDate = parseISO(inputDate)
  const dateWithAddedDays = addDays(parsedDate, daysToAdd)
  const formattedDate = format(dateWithAddedDays, 'dd/MM/yyyy')
  return formattedDate
}

export function isValidBrazilianDate(date: string) {
  return /^\d{2}\/\d{2}\/\d{4}$/.test(date)
}

export function brazilianToAmericanDate(date: string) {
  const [day, month, year] = date.split('/').map(Number)
  return `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  }`
}

export function americanToBrazilianDate(date: string) {
  const parts = date.split('-')
  const year = parts[0]
  const month = parts[1]
  const day = parts[2]
  return `${day}/${month}/${year}`
}

export function isInBrazilianPattern(date: string) {
  const parts = date.split('/')
  return parts.length === 3
}

export function transformMonthAndYearInBrazilianPattern(inputDate: string) {
  const [year, month] = inputDate.split('-')
  return `${month}/${year}`
}
