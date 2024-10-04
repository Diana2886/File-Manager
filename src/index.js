import { stdin, stdout } from 'node:process'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { getUserName } from './helpers/getUserName.js'
import { exit } from './helpers/exit.js'
import { printWorkingDirectory } from './helpers/printWorkingDirectory.js'
import { up } from './helpers/up.js'
import { cd } from './helpers/cd.js'
import { ls } from './helpers/ls.js'
import {
  INVALID_INPUT_MSG,
  OPERATION_FAILED_MSG,
} from './constants/error-msgs.js'

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
            console.error(INVALID_INPUT_MSG + '\n')
          }
          cd(argument)
          break
        case 'ls':
          ls()
          break
        default:
          console.error(INVALID_INPUT_MSG + '\n')
          break
      }
    } catch (error) {
      console.error(error + '\n')
      console.error(OPERATION_FAILED_MSG + '\n')
    }

    printWorkingDirectory()
  })
}

runApp()
