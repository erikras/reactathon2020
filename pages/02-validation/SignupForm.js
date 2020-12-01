import React from 'react'
import onSubmit from '../../common/onSubmit'
import isEmail from 'sane-email-validation'

/**
 * Objective: Add required validation for all fields,
 * and email validation, using `isEmail` for the email field.
 *
 * Requirements:
 *  - The form should not submit if the values are invalid.
 *  - Errors should be shown next to each field when it is invalid.
 *  - Errors should disappear when a field becomes valid.
 */
export default function SignupForm() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmit({
          firstName,
          lastName,
          email
        })
      }}
    >
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
        <span>
          Errors go in <code>&lt;span&gt;</code>'s
        </span>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
