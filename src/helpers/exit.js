export const exit = (userName) => {
  console.log(
    `Thank you for using File Manager${
      userName ? ', ' + userName : ''
    }, goodbye!`
  )
  process.exit()
}
