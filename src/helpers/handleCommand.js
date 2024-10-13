import { cwd } from 'node:process'
import { parseCommand } from './parseCommand.js'
import { validateArgs } from './validateArgs.js'
import { exit } from './exit.js'
import { logInvalidInputMsg, logOperationFailedMsg } from './logErrorMsg.js'
import { up } from '../nwd/up.js'
import { cd } from '../nwd/cd.js'
import { ls } from '../nwd/ls.js'
import { cat } from '../bof/cat.js'
import { add } from '../bof/add.js'
import { rn } from '../bof/rn.js'
import { cp } from '../bof/cp.js'
import { mv } from '../bof/mv.js'
import { remove as rm } from '../bof/rm.js'
import { hash } from '../hash/hash.js'
import { compress } from '../cdo/compress.js'
import { decompress } from '../cdo/decompress.js'
import { handleOsCommand } from '../osi/handleOsCommand.js'
import { INVALID_INPUT_MSG } from '../constants/error-msgs.js'

export const handleCommand = async (input, userName) => {
  const { command, args } = parseCommand(input)
  try {
    validateArgs(command, args)

    switch (command) {
      case '.exit':
        exit(userName)
        break
      case 'up':
        up(cwd())
        break
      case 'cd':
        cd(cwd(), args[0])
        break
      case 'ls':
        await ls(cwd())
        break
      case 'cat':
        await cat(cwd(), args[0])
        break
      case 'add':
        await add(cwd(), args[0])
        break
      case 'rn':
        await rn(cwd(), args[0], args[1])
        break
      case 'cp':
        await cp(cwd(), args[0], args[1])
        break
      case 'mv':
        await mv(cwd(), args[0], args[1])
        break
      case 'rm':
        await rm(cwd(), args[0])
        break
      case 'os':
        handleOsCommand(args[0])
        break
      case 'hash':
        await hash(cwd(), args[0])
        break
      case 'compress':
        await compress(cwd(), args[0], args[1])
        break
      case 'decompress':
        await decompress(cwd(), args[0], args[1])
        break
      default:
        logInvalidInputMsg()
        break
    }
  } catch (error) {
    error.message === INVALID_INPUT_MSG
      ? logInvalidInputMsg()
      : logOperationFailedMsg()
  }
}
