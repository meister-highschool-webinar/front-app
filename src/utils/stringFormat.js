import parse from 'html-react-parser'

export const makeLineBreak = (str) => {
  if(str.length <= 0) return '-'
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

export const gsmReg = /([a-zA-Z0-9]+)([a-zA-Z0-9._]*)\@gsm([\.])hs([\.])kr/g
export const dsmReg = /([a-zA-Z0-9]+)([a-zA-Z0-9._]*)\@dsm([\.])hs([\.])kr/g
export const dgswReg = /([a-zA-Z0-9]+)([a-zA-Z0-9._]*)\@dgsw([\.])hs([\.])kr/g