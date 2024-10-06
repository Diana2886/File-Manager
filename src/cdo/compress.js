import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'
import { getAbsolutePath } from '../helpers/getAbsolutePath.js'
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import { createBrotliCompress } from 'zlib'
import { access, constants } from 'fs/promises'

export const compress = async (currentDir, filePath, destPath) => {
  const absoluteFilePath = getAbsolutePath(currentDir, filePath)
  const absoluteDestPath = getAbsolutePath(currentDir, destPath)

  try {
    await access(absoluteFilePath, constants.F_OK)

    const readStream = createReadStream(absoluteFilePath)
    const writeStream = createWriteStream(absoluteDestPath)
    const brotliCompress = createBrotliCompress()

    await pipeline(readStream, brotliCompress, writeStream)
  } catch (err) {
    logOperationFailedMsg()
  }
}
