import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { createBrotliCompress } from 'node:zlib'
import { access, constants } from 'node:fs/promises'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'
import { getAbsolutePath } from '../helpers/getAbsolutePath.js'

export const compress = async (currentDir, filePath, destPath) => {
  const absoluteFilePath = getAbsolutePath(currentDir, filePath)
  const absoluteDestPath = getAbsolutePath(currentDir, destPath)

  try {
    await access(absoluteFilePath, constants.F_OK)

    const readStream = createReadStream(absoluteFilePath)
    const writeStream = createWriteStream(absoluteDestPath + '.br')
    const brotliCompress = createBrotliCompress()

    await pipeline(readStream, brotliCompress, writeStream)
  } catch (err) {
    logOperationFailedMsg()
  }
}
