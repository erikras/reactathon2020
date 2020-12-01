import React from 'react'
import { Form, Field } from 'react-final-form'
import onSubmit from '../../common/onSubmit'

/**
 * Objective: Add a "hobbies" array to the form.
 *
 * Requirements:
 *  - The user should be able to add any number of hobbies
 *  - The user should be able to remove any hobbie individually
 */
export default function SignupForm() {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
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

          <button type="button" className="add">
            Add Hobby
          </button>
          <div>
            <label htmlFor="hobby[0]">Hobby #1</label>
            <input name="hobby[0]" type="text" placeholder="Hobby #1" />
            <button type="button" className="remove">
              Remove
            </button>
          </div>
          <div>
            <label htmlFor="hobby[1]">Hobby #2</label>
            <input name="hobby[1]" type="text" placeholder="Hobby #2" />
            <button type="button" className="remove">
              Remove
            </button>
          </div>
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    </Form>
  )
}
