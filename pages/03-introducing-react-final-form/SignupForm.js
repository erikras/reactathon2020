import React from 'react'
import onSubmit from '../../common/onSubmit'
import { Form, Field } from 'react-final-form'

/**
 * Objective: Rewrite our form using 🏁 React Final Form.
 * Ignore validation for now.
 *
 * Requirements:
 *  - It should call `onSubmit` when the form is submitted.
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
