const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function onSubmit(values) {
  await sleep(100)
  window.alert(JSON.stringify(values, undefined, 2))
}
