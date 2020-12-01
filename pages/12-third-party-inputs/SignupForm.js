import React from 'react'
import { Form } from 'react-final-form'
import validate from './validate'
import {
  Paper,
  Grid,
  Button,
  Checkbox,
  InputLabel,
  Radio,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormControl,
  FormControlLabel,
  Select,
  TextField
} from '@material-ui/core'
import onSubmit from '../../common/onSubmit'

/**
 * Objective: Control this Material-UI form with React Final Form.
 *
 * https://material-ui.com/components/text-fields/
 * https://material-ui.com/components/checkboxes/
 * https://material-ui.com/components/radio-buttons/
 * https://material-ui.com/components/selects/
 * https://material-ui.com/components/buttons/
 *
 * For bonus points, display validation errors using
 * Material-UI's API for displaying errors on text
 * and select fields.
 */
export default function SignupForm() {
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={{ tshirtColor: '#ff0000' }}
    >
      {({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Paper style={{ padding: 16, maxWidth: 500, margin: '20px auto' }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="tshirt" color="primary" fullWidth />}
                  label="T-Shirt?"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="tshirtSize">T-Shirt Size</InputLabel>
                  <Select name="tshirtSize" fullWidth disabled={!values.tshirt}>
                    <MenuItem value="xs">Extra Small</MenuItem>
                    <MenuItem value="s">Small</MenuItem>
                    <MenuItem value="m">Medium</MenuItem>
                    <MenuItem value="l">Large</MenuItem>
                    <MenuItem value="xl">Extra Large</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">T-Shirt Color</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel
                      label="Red"
                      control={
                        <Radio
                          name="tshirtColor"
                          value="#ff0000"
                          disabled={!values.tshirt}
                        />
                      }
                    />
                    <FormControlLabel
                      label="Green"
                      control={
                        <Radio
                          name="tshirtColor"
                          value="#00ff00"
                          disabled={!values.tshirt}
                        />
                      }
                    />
                    <FormControlLabel
                      label="Blue"
                      control={
                        <Radio
                          name="tshirtColor"
                          value="#0000ff"
                          disabled={!values.tshirt}
                        />
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={submitting}
              >
                Submit
              </Button>
            </Grid>
          </Paper>
          <Paper style={{ padding: 16, maxWidth: 500, margin: '20px auto' }}>
            <pre>{JSON.stringify(values, undefined, 2)}</pre>
          </Paper>
        </form>
      )}
    </Form>
  )
}
