import { resolve, isAbsolute } from 'path'
import { cwd } from 'process'
import { stripQuotes } from './stripQuotes.js'

export const getAbsolutePath = (path) => {
  const pathWithoutQuotes = stripQuotes(path)
  let absolutePath

  if (isAbsolute(pathWithoutQuotes)) {
    absolutePath = pathWithoutQuotes
  } else {
    absolutePath = resolve(cwd(), pathWithoutQuotes)
  }

  return absolutePath
}
