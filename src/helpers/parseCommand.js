export const parseCommand = (input) => {
  const [command, ...args] = input.trim().split(/\s+/)
  return { command, args }
}
