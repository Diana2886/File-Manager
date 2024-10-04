import { resolve, isAbsolute } from 'path'
import { chdir, cwd } from 'process'

export const cd = (path) => {
  const currentDir = cwd()
  let targetDir

  if (isAbsolute(path)) {
    targetDir = path
  } else {
    targetDir = resolve(currentDir, path)
  }

  chdir(targetDir)
}
