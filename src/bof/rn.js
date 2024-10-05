import { rename } from 'fs/promises'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'
import { join, resolve, isAbsolute } from 'path'
import { getAbsolutePath } from '../helpers/getAbsolutePath.js'

export const rn = async (currentDir, filePath, newFileName) => {
  const absolutePath = getAbsolutePath(currentDir, filePath)
  const newFilePath = join(currentDir, newFileName)

  try {
    const fileHandle = await rename(absolutePath, newFilePath)
  } catch (err) {
    logOperationFailedMsg()
  }
}
