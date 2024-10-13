import { access, constants } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { stdout } from 'node:process'
import * as os from 'node:os'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'
import { getAbsolutePath } from '../helpers/getAbsolutePath.js'

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
