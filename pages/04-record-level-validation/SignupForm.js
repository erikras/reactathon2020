import React from 'react'
import { Form, Field } from 'react-final-form'
import onSubmit from '../../common/onSubmit'
import isEmail from 'sane-email-validation'

/**
 * Objective: Add record-level validation to <Form>
 *
 * Requirements:
 *  - It should call `onSubmit` when the form is submitted.
 *  - The form should not submit if the values are invalid
 *    (React Final Form will handle this for you)
 *  - Errors should be displayed next to the inputs in a `<span>`
 */
export default function SignupForm() {
  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {}
        if (!values.firstName) {
          errors.firstName = 'Required'
        }
        if (!values.lastName) {
          errors.lastName = 'Required'
        }
        if (!values.email) {
          errors.email = 'Required'
        } else if (!isEmail(values.email)) {
          errors.email = 'Invalid Email'
        }
        return errors
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName">
              {({ input, meta }) => (
                <>
                  <input {...input} id="firstName" placeholder="First Name" />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </>
              )}
            </Field>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName">
              {({ input, meta }) => (
                <>
                  <input {...input} id="lastName" placeholder="Last Name" />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </>
              )}
            </Field>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email">
              {({ input, meta }) => (
                <>
                  <input {...input} id="email" placeholder="Email" />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </>
              )}
            </Field>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  )
}
