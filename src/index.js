import { stdin, cwd } from 'node:process'
import { getUserName } from './helpers/getUserName.js'
import { exit } from './helpers/exit.js'
import { printWorkingDirectory } from './helpers/printWorkingDirectory.js'
import { prompt } from './helpers/prompt.js'
import { handleCommand } from './helpers/handleCommand.js'

const runApp = () => {
  const userName = getUserName()

  console.log(`Welcome to the File Manager${userName ? ', ' + userName : ''}!`)
  printWorkingDirectory(cwd())
  prompt()

  stdin.on('data', async (data) => {
    const input = data.toString()

    await handleCommand(input, userName)

    printWorkingDirectory(cwd())
    prompt()
  })

  process.on('SIGINT', () => {
    exit(userName)
  })
}

runApp()
