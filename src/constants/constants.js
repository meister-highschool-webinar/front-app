// 현재는 임시로 TalkTalk-token 으로 이름으로 적었는데 추후 개발에 따라 토큰 이름을 바꿔야 할 수 있습니다.
// 로컬스토리지를 사용합니다.

import GetTokenLocation from 'token/GetTokenLocation'

class Constants {
  TOKEN_EMPTY = () => {
    return GetTokenLocation() === null
  }

  GET_TOKEN = () => {
    return GetTokenLocation() === 'local' && localStorage.getItem('TalkTalk-token')
  }
}

export default new Constants()
