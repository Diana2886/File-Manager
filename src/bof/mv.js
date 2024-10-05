import { createReadStream, createWriteStream } from 'fs'
import { access, constants, mkdir, rm } from 'fs/promises'
import { pipeline } from 'stream/promises'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'
import { basename, join } from 'path'
import { getAbsolutePath } from '../helpers/getAbsolutePath.js'

export const mv = async (currentDir, filePath, dirPath) => {
  const absoluteFilePath = getAbsolutePath(currentDir, filePath)
  const absoluteDirPath = getAbsolutePath(currentDir, dirPath)

  try {
    await access(absoluteFilePath, constants.F_OK)
    await mkdir(absoluteDirPath, { recursive: true })

    const fileName = basename(absoluteFilePath)
    const newFilePath = join(absoluteDirPath, fileName)

    const readStream = createReadStream(absoluteFilePath)
    const writeStream = createWriteStream(newFilePath)

    await pipeline(readStream, writeStream)
    await rm(absoluteFilePath)
  } catch (err) {
    logOperationFailedMsg()
  }
}
