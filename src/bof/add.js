import { open } from 'node:fs/promises'
import { join } from 'node:path'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'

export const add = async (currentDir, fileName) => {
  const filePath = join(currentDir, fileName)

  try {
    const fileHandle = await open(fileName, 'w')
    await fileHandle.close()
  } catch (err) {
    logOperationFailedMsg()
  }
}
