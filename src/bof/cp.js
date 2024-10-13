import { createReadStream, createWriteStream } from 'node:fs'
import { access, constants, mkdir } from 'node:fs/promises'
import { pipeline } from 'node:stream/promises'
import { basename, join } from 'node:path'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'
import { getAbsolutePath } from '../helpers/getAbsolutePath.js'

export const cp = async (currentDir, filePath, dirPath) => {
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
  } catch (err) {
    logOperationFailedMsg()
  }
}
