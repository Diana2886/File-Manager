import { resolve, parse } from 'path'
import { chdir, cwd } from 'process'

export const up = () => {
  const currentDir = cwd()
  const parsedPath = parse(currentDir)
  let targetDir

  if (currentDir === parsedPath.root) {
    targetDir = currentDir
  } else {
    targetDir = resolve(currentDir, '..')
  }

  chdir(targetDir)
}
