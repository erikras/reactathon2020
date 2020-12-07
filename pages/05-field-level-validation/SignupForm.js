import React from 'react'
import { Form, Field } from 'react-final-form'
import isEmail from 'sane-email-validation'
import onSubmit from '../../common/onSubmit'

const required = value => (value ? undefined : 'Required')
const isValidEmail = value => (isEmail(value) ? undefined : 'Invalid Email')

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

/**
 * Objective: Convert from record-level to field-level validation
 *
 * Requirements:
 *  - It should call `onSubmit` when the form is submitted.
 *  - The form should not submit if the values are invalid
 *    (React Final Form will handle this for you)
 *  - Errors should be displayed next to the inputs in a `<span>`
 */
export default function SignupForm() {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName" validate={required}>
            {({ input, meta }) => (
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  {...input}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="lastName" validate={required}>
            {({ input, meta }) => (
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  {...input}
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="email"
            validate={composeValidators(required, isValidEmail)}
          >
            {({ input, meta }) => (
              <div>
                <label htmlFor="email">Email</label>
                <input {...input} id="email" type="email" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  )
}
