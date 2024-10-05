import { chdir } from 'process'
import { getAbsolutePath } from '../helpers/getAbsolutePath.js'

export const cd = (currentDir, path) => {
  const targetDir = getAbsolutePath(currentDir, path)

  chdir(targetDir)
}
