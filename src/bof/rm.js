import { access, constants, rm } from 'node:fs/promises'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'
import { getAbsolutePath } from '../helpers/getAbsolutePath.js'

export const remove = async (currentDir, filePath) => {
  const absoluteFilePath = getAbsolutePath(currentDir, filePath)

  try {
    await access(absoluteFilePath, constants.F_OK)
    await rm(absoluteFilePath)
  } catch (err) {
    logOperationFailedMsg()
  }
}
