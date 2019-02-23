export const normalizedDate = date => {
  if (date && isValidDate(date)) {
    return new Date(date).toDateString()
  }
}

const isValidDate = s => {
  const bits = s.split("-")
  return bits[0] !== "0001"
}
