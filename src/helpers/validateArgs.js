import { INVALID_INPUT_MSG } from '../constants/error-msgs.js'

export const validateArgs = (command, args) => {
  switch (command) {
    case 'cd':
    case 'cat':
    case 'add':
    case 'rm':
    case 'hash':
      if (args.length !== 1) {
        throw new Error(INVALID_INPUT_MSG)
      }
      break

    case 'rn':
    case 'cp':
    case 'mv':
      if (args.length !== 2) {
        throw new Error(INVALID_INPUT_MSG)
      }
      break

    case 'up':
    case 'ls':
      if (args.length !== 0) {
        throw new Error(INVALID_INPUT_MSG)
      }
      break
  }
}
