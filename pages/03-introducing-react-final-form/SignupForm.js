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
  // DELETE ALL CALLS TO useState
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  return (
    <form
      onSubmit={event => {
        // hint: this changes to the handleSubmit provided by Form
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
