import parse from 'html-react-parser'

export const makeLineBreak = (str) => {
  return parse(str.replace(/\(/g, '<br/>('))
}

export const enterLineBreak = (str) => {
  return parse(str.replace(/\n/g, '<br/>'))
}
