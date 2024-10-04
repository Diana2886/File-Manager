import { argv } from 'node:process'
import { INVALID_INPUT_MSG } from '../constants/error-msgs.js'

export const getUserName = () => {
  const args = argv.slice(2)
  let userName

  try {
    if (args.length === 0 || !args[0].startsWith('--username=')) {
      throw new Error(INVALID_INPUT_MSG)
    }
    userName = args[0].split('=')[1]
    if (!userName) throw new Error(INVALID_INPUT_MSG)
  } catch (error) {
    console.error(error.message)
  }

  return userName
}
