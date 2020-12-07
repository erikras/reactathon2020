import React from 'react'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
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
    <Form onSubmit={onSubmit} mutators={arrayMutators}>
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

          <FieldArray name="hobbies">
            {({ fields }) => (
              <>
                <button
                  type="button"
                  className="add"
                  onClick={() => fields.push()}
                >
                  Add Hobby
                </button>
                {fields.map((name, index) => (
                  <div>
                    <label htmlFor={name}>Hobby #{index + 1}</label>
                    <Field
                      component="input"
                      name={name}
                      type="text"
                      placeholder={`Hobby #${index + 1}`}
                    />
                    <button
                      type="button"
                      className="remove"
                      onClick={() => fields.remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </>
            )}
          </FieldArray>

          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    </Form>
  )
}
