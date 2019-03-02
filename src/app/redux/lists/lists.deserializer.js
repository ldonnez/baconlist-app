import { normalizedDate } from "utils"

export const deserializedLists = (data) => {
  return data.map(l => {
    return {
      ...l,
      due_to: normalizedDate(l.due_to),
      tags: tagsToObjectsArray(l.tags)
    }
  })
}

const tagsToObjectsArray = (tags) => {
  if (tags && tags.length > 0) {
    return tags.map(t => {
      if(t.value) {
        return t
      }
      return { label: t, value: t }
    })
  }
}


