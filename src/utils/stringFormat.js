import parse from 'html-react-parser'

export const makeLineBreak = (str) => {
  return parse(str.replace(/\(/g, '<br/>('))
}

export const limitEnterNum = (str) => {
  return str.replace(/\n{2,}/g, '\n')
}

export const checkLineOver = (text, maxRow) => {
  const lineNum = (text.match(/\n/g) || []).length + 1
  return lineNum > maxRow
}

export const checkLength = (text, maxLen) => {
  return text.length > maxLen
}
