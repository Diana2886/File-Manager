import { EOL, cpus, homedir, userInfo, arch } from 'node:os'
import { logInvalidInputMsg } from '../helpers/logErrorMsg.js'

export const handleOsCommand = (option) => {
  switch (option) {
    case '--EOL':
      console.log(JSON.stringify(EOL))
      break
    case '--cpus':
      const cpuInfo = cpus()
      console.log(`Number of CPUs: ${cpuInfo.length}`)
      cpuInfo.forEach((cpu, index) => {
        console.log(`CPU ${index + 1}: ${cpu.model} (${cpu.speed / 1000} GHz)`)
      })
      break
    case '--homedir':
      console.log(homedir())
      break
    case '--username':
      console.log(userInfo().username)
      break
    case '--architecture':
      console.log(arch())
      break
    default:
      logInvalidInputMsg()
  }
}
