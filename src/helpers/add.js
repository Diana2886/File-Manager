import { open } from 'fs/promises'
import { cwd } from 'process'
import { logOperationFailedMsg } from './logErrorMsg.js'
import { join } from 'path'

export const add = async (fileName) => {
  const currentDir = cwd()
  const filePath = join(currentDir, fileName)

  try {
    const fileHandle = await open(fileName, 'w')
    await fileHandle.close()
  } catch (err) {
    logOperationFailedMsg()
  }
}
