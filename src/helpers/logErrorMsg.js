import {
  INVALID_INPUT_MSG,
  OPERATION_FAILED_MSG,
} from '../constants/error-msgs.js'
import * as os from 'node:os'

const eol = os.EOL

export const logInvalidInputMsg = () => {
  console.error(INVALID_INPUT_MSG + eol)
}

export const logOperationFailedMsg = () => {
  console.error(OPERATION_FAILED_MSG + eol)
}
