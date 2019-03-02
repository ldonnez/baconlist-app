import { dateToISO } from "utils"

export const serializedList = (data) => {
	return {
		...data,
		due_to: dateToISO(data.due_to),
	}
}

	}
}

