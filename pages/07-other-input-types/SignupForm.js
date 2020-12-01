import React from 'react'
import { Form, Field } from 'react-final-form'
import onSubmit from '../../common/onSubmit'

/**
 * Objective: Implement a checkbox for a boolean, a set of
 * checkboxes for an array, a radio button, a single select,
 * and a multiple select.
 *
 * We are ignoring validation and going back to the
 * component="input" pattern.
 */
export default function SignupForm() {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <h3>Do you agree to the terms?</h3>
          <div>
            <div>
              <label>
                <input name="agreed" type="checkbox" /> Yes
              </label>
            </div>
          </div>
          <h3>Which months have 30 days?</h3>
          <div>
            <div>
              <label>
                <input name="months" type="checkbox" value="January" /> January
              </label>
            </div>
            <div>
              <label>
                <input name="months" type="checkbox" value="February" />{' '}
                February
              </label>
            </div>
            <div>
              <label>
                <input name="months" type="checkbox" value="March" /> March
              </label>
            </div>
            <div>
              <label>
                <input name="months" type="checkbox" value="April" /> April
              </label>
            </div>
            <div>
              <label>
                <input name="months" type="checkbox" value="May" /> May
              </label>
            </div>
            <div>
              <label>
                <input name="months" type="checkbox" value="June" /> June
              </label>
            </div>
            <div>
              <label>
                <input name="months" type="checkbox" value="July" /> July
              </label>
            </div>
            <div>
              <label>
                <input name="months" type="checkbox" value="August" /> August
              </label>
            </div>
            <div>
              <label>
                <input name="months" type="checkbox" value="September" />{' '}
                September
              </label>
            </div>
            <div>
              <label>
                <input name="months" type="checkbox" value="October" /> October
              </label>
            </div>
            <div>
              <label>
                <input name="months" type="checkbox" value="November" />{' '}
                November
              </label>
            </div>
            <div>
              <label>
                <input name="months" type="checkbox" value="December" />{' '}
                December
              </label>
            </div>
          </div>
          <h3>This workshop is amazing</h3>
          <div>
            <div>
              {' '}
              <label>
                {' '}
                <input name="rating" type="radio" value="5" /> Strongly Agree
              </label>{' '}
            </div>
            <div>
              {' '}
              <label>
                {' '}
                <input name="rating" type="radio" value="4" /> Agree
              </label>{' '}
            </div>
            <div>
              {' '}
              <label>
                {' '}
                <input name="rating" type="radio" value="3" /> Meh
              </label>{' '}
            </div>
            <div>
              {' '}
              <label>
                {' '}
                <input name="rating" type="radio" value="2" /> Disagree
              </label>{' '}
            </div>
            <div>
              {' '}
              <label>
                {' '}
                <input name="rating" type="radio" value="1" /> Strongly Disagree
              </label>{' '}
            </div>
          </div>
          <h3>Favorite Simpson?</h3>
          <div>
            <select name="favoriteSimpson">
              <option />
              <option value="bart">Bart</option>
              <option value="lisa">Lisa</option>
              <option value="maggie">Maggie</option>
              <option value="marge">Marge</option>
              <option value="homer">Homer</option>
              <option value="grandpa">Grandpa</option>
            </select>
          </div>
          <h3>Toppings</h3>
          <div>
            <select name="toppings" multiple>
              <option value="pepperoni">Pepperoni</option>
              <option value="sausage">Sausage</option>
              <option value="ham">Ham</option>
              <option value="mushrooms">Mushrooms</option>
              <option value="olives">Olives</option>
              <option value="pineapple">Pineapple</option>
            </select>
          </div>
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    </Form>
  )
}
