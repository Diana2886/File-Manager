import { createReadStream } from 'fs'
import { pipeline } from 'stream/promises'
import { stdout } from 'process'
import * as os from 'os'
import { logOperationFailedMsg } from './logErrorMsg.js'

const eol = os.EOL

export const cat = async (filePath) => {
  try {
    const readStream = createReadStream(filePath)

    await pipeline(readStream, stdout, { end: false })
    stdout.write(eol)
  } catch (err) {
    logOperationFailedMsg()
  }
}
