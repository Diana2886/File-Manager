export const stripQuotes = (path) => {
  if (path.startsWith('"') && path.endsWith('"')) {
    return path.slice(1, -1)
  }
  return path
}
