import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { createBrotliDecompress } from 'node:zlib'
import { access, constants } from 'node:fs/promises'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'
import { getAbsolutePath } from '../helpers/getAbsolutePath.js'

export const decompress = async (currentDir, filePath, destPath) => {
  const absoluteFilePath = getAbsolutePath(currentDir, filePath)
  const absoluteDestPath = getAbsolutePath(currentDir, destPath)

  try {
    await access(absoluteFilePath, constants.F_OK)

    const readStream = createReadStream(absoluteFilePath)
    const brotliDecompress = createBrotliDecompress()

    await pipeline(readStream, brotliDecompress)

    const finalReadStream = createReadStream(absoluteFilePath)
    const writeStream = createWriteStream(absoluteDestPath)
    const finalBrotliDecompress = createBrotliDecompress()

    await pipeline(finalReadStream, finalBrotliDecompress, writeStream)
  } catch (err) {
    logOperationFailedMsg()
  }
}
