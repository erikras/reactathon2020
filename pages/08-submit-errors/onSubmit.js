import { FORM_ERROR } from 'final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default async function onSubmit(values) {
  await sleep(100)

  if (values.username === 'erikras') {
    return { username: "You're not Erik!" }
  }

  if (values.secret !== '42') {
    return { [FORM_ERROR]: 'Signup Failed' }
  }

  window.alert(JSON.stringify(values, undefined, 2))
}
