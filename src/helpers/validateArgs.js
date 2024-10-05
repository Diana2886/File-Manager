import { logInvalidInputMsg } from './logErrorMsg.js'

export const validateArgs = (command, args) => {
  switch (command) {
    case 'cd':
    case 'cat':
    case 'add':
    case 'rm':
      if (args.length !== 1) {
        logInvalidInputMsg()
      }
      break

    case 'rn':
    case 'cp':
    case 'mv':
      if (args.length !== 2) {
        logInvalidInputMsg()
      }
      break

    case 'up':
    case 'ls':
      if (args.length !== 0) {
        logInvalidInputMsg()
      }
      break
  }
}
