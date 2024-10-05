import { resolve, parse } from 'path'
import { chdir } from 'process'

export const up = (currentDir) => {
  const parsedPath = parse(currentDir)
  let targetDir

  if (currentDir === parsedPath.root) {
    targetDir = currentDir
  } else {
    targetDir = resolve(currentDir, '..')
  }

  chdir(targetDir)
}
