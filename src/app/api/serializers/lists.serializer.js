export const serializedList = (data) => {
  return {
    ...data,
    due_to: dateToISO(data.due_to)
  }
}

const dateToISO = (dateString) => {
  const d = new Date(dateString)
  return d.toISOString()
}

