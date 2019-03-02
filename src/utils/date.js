export const normalizedDate = date => {
	if (date && isValidDate(date)) {
		return dateToISO(date).split("T")[0]
	}
}

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
