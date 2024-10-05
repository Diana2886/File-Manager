import { access, readdir } from 'fs/promises'
import { logOperationFailedMsg } from '../helpers/logErrorMsg.js'

export const ls = async (currentDir) => {
  const dirList = []
  const fileList = []

  try {
    const files = await readdir(currentDir, { withFileTypes: true })

    files.forEach((file) => {
      if (file.isDirectory()) {
        dirList.push({ Name: file.name, Type: 'directory' })
      } else {
        fileList.push({ Name: file.name, Type: 'file' })
      }
    })

    dirList.sort((a, b) => a.Name.localeCompare(b.Name))
    fileList.sort((a, b) => a.Name.localeCompare(b.Name))

    const allFiles = [...dirList, ...fileList]
    console.table(allFiles)
  } catch (err) {
    logOperationFailedMsg()
  }
}
