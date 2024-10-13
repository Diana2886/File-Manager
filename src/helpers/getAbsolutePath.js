import { resolve, isAbsolute } from 'node:path'
import { stripQuotes } from './stripQuotes.js'

export const getAbsolutePath = (currentDir, path) => {
  const pathWithoutQuotes = stripQuotes(path)
  let absolutePath

  if (isAbsolute(pathWithoutQuotes)) {
    absolutePath = pathWithoutQuotes
  } else {
    absolutePath = resolve(currentDir, pathWithoutQuotes)
  }

  return absolutePath
}
