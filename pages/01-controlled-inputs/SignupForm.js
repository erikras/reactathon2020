import React from 'react'
import onSubmit from '../../common/onSubmit'

/**
 * Objective: Maintain the values of firstName, lastName and email in
 * local state using `React.useState`, and call `onSubmit` with
 * the two values when the form is submitted.
 *
 * Example submission:
 *   {
 *     firstName: 'Erik',
 *     lastName: 'Rasmussen',
 *     email: 'erik@final-form.org'
 *   }
 */
export default function SignupForm() {
  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
