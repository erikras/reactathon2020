import React from 'react'
import { Form, Field } from 'react-final-form'
import isEmail from 'sane-email-validation'
import onSubmit from '../../common/onSubmit'

const required = value => (value ? undefined : 'Required')
const validEmail = value => (isEmail(value) ? undefined : 'Invalid Email')
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

const renderField = ({ input, meta, label }) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} id={input.name} placeholder={label} />
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
)
/**
 * Objective: Refactor to use a single render function, and put a
 * className="active" on the <div/> when the field it contains is
 * active.
 *
 * Requirements:
 *  - The `placeholder` prop should be given to `<Field/>` and
 *    used in both the `<label/>` and the `<input/>` components.
 */
export default function SignupForm() {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            validate={required}
            label="First Name"
            render={renderField}
          />
          <Field
            name="lastName"
            validate={required}
            label="Last Name"
            render={renderField}
          />
          <Field
            name="email"
            validate={required}
            label="Email"
            type="email"
            render={renderField}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  )
}
