import { access, constants } from 'fs/promises'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'
import { getAbsolutePath } from '../helpers/getAbsolutePath.js'
import { createHash } from 'crypto'
import { createReadStream } from 'fs'
import { pipeline } from 'stream/promises'
import { stdout } from 'process'
import * as os from 'os'

export const hash = async (currentDir, filePath) => {
  const absolutePath = getAbsolutePath(currentDir, filePath)

  try {
    const readStream = createReadStream(absolutePath)
    const hash = createHash('sha256').setEncoding('hex')
    await pipeline(readStream, hash, stdout, { end: false })
    stdout.write(os.EOL)
  } catch (err) {
    logOperationFailedMsg()
  }
}
