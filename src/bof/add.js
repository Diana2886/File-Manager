import { open } from 'fs/promises'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'
import { join } from 'path'

export const add = async (currentDir, fileName) => {
  const filePath = join(currentDir, fileName)

  try {
    const fileHandle = await open(fileName, 'w')
    await fileHandle.close()
  } catch (err) {
    logOperationFailedMsg()
  }
}
