import React from 'react'
import { Form, Field, FormSpy } from 'react-final-form'
import validate from './validate'
import RenderCount from './RenderCount'
import onSubmit from '../../common/onSubmit'

/**
 * Objective: Minimize rerenders of `<Form/>` and all `<Field/>`s
 *
 * Requirements:
 *  - The entire form should not rerender when a value changes
 *  - You must continue to show the current form values at the bottom
 */
export default function SignupForm() {
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      subscription={{ submitting: true }}
    >
      {({ handleSubmit, values, submitting }) => (
        <form onSubmit={handleSubmit}>
          <RenderCount />
          <Field
            name="firstName"
            subscription={{ value: true, error: true, touched: true }}
          >
            {({ input, meta }) => (
              <div>
                <RenderCount />
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
          <Field
            name="lastName"
            subscription={{ value: true, error: true, touched: true }}
          >
            {({ input, meta }) => (
              <div>
                <RenderCount />
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
            subscription={{ value: true, error: true, touched: true }}
          >
            {({ input, meta }) => (
              <div>
                <RenderCount />
                <label htmlFor="email">Email</label>
                <input {...input} id="email" type="email" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <FormSpy subscription={{ values: true }}>
            {({ values }) => (
              <pre>
                <RenderCount />
                {JSON.stringify(values, undefined, 2)}
              </pre>
            )}
          </FormSpy>
        </form>
      )}
    </Form>
  )
}
