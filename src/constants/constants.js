// 현재는 임시로 TalkTalk-token 으로 이름으로 적었는데 추후 개발에 따라 토큰 이름을 바꿔야 할 수 있습니다.
// 이 파일은 tokenVerifcation 파일과 연동되는 파일입니다. setItem Toekn이름이 바뀐다면 둘다 수정을 해야 합니다.

import TokenVerification from 'token/tokenVerification'

class Constants {
  TOKEN_EMPTY = () => {
    return TokenVerification() === 'empty'
  }

  GET_TOKEN = () => {
    return TokenVerification() === 'localT' ? localStorage.getItem('TalkTalk-token') : sessionStorage.getItem('TalkTalk-token')
  }
}

export default new Constants()
