import { createReadStream } from 'fs'
import { pipeline } from 'stream/promises'
import { stdout } from 'process'
import * as os from 'os'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'
import { getAbsolutePath } from '../helpers/getAbsolutePath.js'

const eol = os.EOL

export const cat = async (currentDir, filePath) => {
  try {
    const absolutePath = getAbsolutePath(currentDir, filePath)
    const readStream = createReadStream(absolutePath)

    await pipeline(readStream, stdout, { end: false })
    stdout.write(eol)
  } catch (err) {
    logOperationFailedMsg()
  }
}
