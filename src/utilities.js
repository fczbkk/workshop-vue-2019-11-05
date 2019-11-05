export function price (input, currency = 'Kč') {
  return `${Number(input).toFixed(2)} ${currency}`
}
