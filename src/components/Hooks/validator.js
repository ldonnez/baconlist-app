import { useState, useEffect } from "react"

export default function useValidator(data, errors, validations) {
  const [validationErrors, setValidationErrors] = useState()

  useEffect(() => {
    setValidationErrors({ ...validations(data), ...errors })
  }, [data, errors])
  return validationErrors
}
