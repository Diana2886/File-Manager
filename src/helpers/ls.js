import { access, readdir } from 'fs/promises'
import { cwd } from 'process'
import { logOperationFailedMsg } from './logErrorMsg.js'

export const ls = async () => {
  const currentDir = cwd()

  const dirList = []
  const fileList = []

  try {
    const files = await readdir(currentDir, { withFileTypes: true })

    files.forEach((file) => {
      if (file.isDirectory()) {
        dirList.push({ name: file.name, type: 'directory' })
      } else {
        fileList.push({ name: file.name, type: 'file' })
      }
    })

    dirList.sort((a, b) => a.name.localeCompare(b.name))
    fileList.sort((a, b) => a.name.localeCompare(b.name))

    const allFiles = [...dirList, ...fileList]
    console.table(allFiles)
  } catch (err) {
    logOperationFailedMsg()
  }
}
