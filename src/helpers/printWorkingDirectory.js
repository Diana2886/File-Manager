import { cwd } from 'node:process'

export const printWorkingDirectory = () => {
  const currentDir = cwd()

  console.log(`You are currently in ${currentDir}`)
}
