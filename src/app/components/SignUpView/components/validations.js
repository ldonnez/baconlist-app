export default values => {
  const errors = {}
  if (!values.first_name) {
    errors.first_name = "Required"
  }
  if (!values.last_name) {
    errors.last_name = "Required"
  }
  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  if (!values.password) {
    errors.password = "Required"
  }
  if (values.password !== values.password_confirmation) {
    errors.password_confirmation = "Passwords do not match"
  }
  if (!values.password_confirmation) {
    errors.password_confirmation = "Required"
  }
  return errors
}
