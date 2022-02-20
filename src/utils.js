export const truncate = (str, len = 8) => {
  if (str.length <= len) {
    return str
  }
  return str.slice(0, len) + '...'
}
