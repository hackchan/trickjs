const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const main = async () => {
  console.log('wait for 5seg 🏃‍♂️')

  await wait(5000)
  console.log('time out!!! ⌛')
}

main()
