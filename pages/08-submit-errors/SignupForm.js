import React from 'react'
import { Form, Field } from 'react-final-form'

import onSubmit from './onSubmit'

/**
 * Objective: Display form-wide submit error and
 * field-level submit errors when they occur.
 *
 * Requirements:
 *  - Submit errors should be displayed next to the inputs
 *    in a `<span>` just like client-side validation errors
 *  - Form-wide error should be displayed in a
 *    `<div className="error"/>` above the Submit button.
 */
export default function SignupForm() {
  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {}
        if (!values.username) {
          errors.username = 'Required'
        }
        if (!values.secret) {
          errors.secret = 'Required'
        }
        return errors
      }}
    >
      {({ handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit}>
          <p>
            Username <code>"erikras"</code> will fail, and any secret other than{' '}
            <code>"42"</code> will also fail.
          </p>
          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label htmlFor="username">Username</label>
                <input
                  {...input}
                  id="username"
                  type="text"
                  placeholder="Username"
                />
                {meta.touched &&
                  ((meta.error && <span>{meta.error}</span>) ||
                    (meta.submitError && !meta.dirtySinceLastSubmit && (
                      <span>{meta.submitError}</span>
                    )))}
              </div>
            )}
          </Field>
          <Field name="secret">
            {({ input, meta }) => (
              <div>
                <label htmlFor="secret">Secret</label>
                <input
                  {...input}
                  id="secret"
                  type="password"
                  placeholder="Secret"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          {submitError && <div className="error">{submitError}</div>}

          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  )
}
