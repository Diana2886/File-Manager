export const parseCommand = (input) => {
  const regex = /[^\s'"]+|'([^']*)'|"([^"]*)"/g
  const args = []
  let match

  while ((match = regex.exec(input)) !== null) {
    args.push(match[1] || match[2] || match[0])
  }

  const [command, ...commandArgs] = args
  return { command, args: commandArgs }
}
