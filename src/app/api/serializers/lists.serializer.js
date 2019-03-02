import { dateToISO } from "utils"

export const serializedList = (data) => {
  return {
    ...data,
    due_to: dateToISO(data.due_to),
    tags: tagsToStringArray(data.tags)
  }
}

const tagsToStringArray = (tags) => {
  if (tags && tags.length > 0) {
    return tags.map(t => {
      if (!t.value) {
        return t
      }
      return t.value
    })
  }
}

