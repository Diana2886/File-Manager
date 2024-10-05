import { chdir } from 'process'
import { getAbsolutePath } from '../getAbsolutePath.js'

export const cd = (path) => {
  const targetDir = getAbsolutePath(path)

  chdir(targetDir)
}
