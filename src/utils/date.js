export const normalizedDate = date => {
	if (date && isValidDate(date)) {
		return new Date(date).toDateString()
export const dateToISO = (dateString) => {
	if (dateString) {
		const d = new Date(dateString)
		return d.toISOString()
	}
}

const isValidDate = s => {
	const bits = s.split("-")
	return bits[0] !== "0001"
}
