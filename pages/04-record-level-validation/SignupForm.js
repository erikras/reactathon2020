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
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field
              component="input"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field
              component="input"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              component="input"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  )
}
