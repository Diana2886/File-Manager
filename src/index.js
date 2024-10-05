import { stdin, stdout, cwd } from 'process'
import { getUserName } from './helpers/getUserName.js'
import { exit } from './helpers/exit.js'
import { parseCommand } from './helpers/parseCommand.js'
import { validateArgs } from './helpers/validateArgs.js'
import { printWorkingDirectory } from './helpers/printWorkingDirectory.js'
import { handleOsCommand } from './osi/handleOsCommand.js'
import {
  logInvalidInputMsg,
  logOperationFailedMsg,
} from './helpers/logErrorMsg.js'
import { INVALID_INPUT_MSG } from './constants/error-msgs.js'
import { up } from './nwd/up.js'
import { cd } from './nwd/cd.js'
import { ls } from './nwd/ls.js'
import { cat } from './bof/cat.js'
import { add } from './bof/add.js'
import { rn } from './bof/rn.js'
import { cp } from './bof/cp.js'
import { mv } from './bof/mv.js'
import { remove as rm } from './bof/rm.js'
import { hash } from './hash/hash.js'

const runApp = () => {
  const userName = getUserName()

  printWorkingDirectory(cwd())
  console.log(`Welcome to the File Manager, ${userName}!`)

  stdin.on('data', (data) => {
    const input = data.toString()
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
          ls(cwd())
          break
        case 'cat':
          cat(cwd(), args[0])
          break
        case 'add':
          add(cwd(), args[0])
          break
        case 'rn':
          rn(cwd(), args[0], args[1])
          break
        case 'cp':
          cp(cwd(), args[0], args[1])
          break
        case 'mv':
          mv(cwd(), args[0], args[1])
          break
        case 'rm':
          rm(cwd(), args[0])
          break
        case 'os':
          handleOsCommand(args[0])
          break
        case 'hash':
          hash(cwd(), args[0])
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

    printWorkingDirectory(cwd())
  })
}

runApp()
