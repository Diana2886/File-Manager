import { resolve, parse } from 'node:path'
import { chdir } from 'node:process'

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
