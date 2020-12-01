const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (values.tshirt) {
    if (!values.tshirtSize) {
      errors.tshirtSize = 'Required'
    }
    if (!values.tshirtColor) {
      errors.tshirtColor = 'Required'
    }
  }
  return errors
}
export default validate
