import { stdin, stdout } from 'node:process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { getUserName } from './helpers/getUserName.js'
import { exit } from './helpers/exit.js'
import { printWorkingDirectory } from './helpers/printWorkingDirectory.js'
import {
  logInvalidInputMsg,
  logOperationFailedMsg,
} from './helpers/logErrorMsg.js'
import { up } from './helpers/up.js'
import { cd } from './helpers/cd.js'
import { ls } from './helpers/ls.js'
import { cat } from './helpers/cat.js'
import { add } from './helpers/add.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const runApp = () => {
  const userName = getUserName()

  printWorkingDirectory()
  console.log(`Welcome to the File Manager, ${userName}!`)

  stdin.on('data', (data) => {
    const input = data.toString().trim().split(' ')
    const command = input[0]
    const argument = input[1]

    try {
      switch (command) {
        case '.exit':
          exit(userName)
          break
        case 'up':
          up()
          break
        case 'cd':
          if (!argument) {
            logInvalidInputMsg()
          } else {
            cd(argument)
          }
          break
        case 'ls':
          ls()
          break
        case 'cat':
          if (!argument) {
            logInvalidInputMsg()
          } else {
            cat(argument)
          }
          break
        case 'add':
          if (!argument) {
            logInvalidInputMsg()
          } else {
            add(argument)
          }
          break
        default:
          logInvalidInputMsg()
          break
      }
    } catch (error) {
      logOperationFailedMsg()
    }

    printWorkingDirectory()
  })
}

runApp()
