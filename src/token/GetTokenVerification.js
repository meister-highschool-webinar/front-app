// empty는 토큰이 비어있는 것이고, localT는 localStorage에 저장한 토큰을 의미합니다.
// 현재는 임시로 TalkTalk-token 으로 이름으로 적었는데 추후 개발에 따라 토큰 이름을 바꿔야 할 수 있습니다.

const GetTokenVerification = () => {
  let Token = null

  const session = sessionStorage.getItem('TalkTalk-token')

  if (session !== null) Token = session

  return Token
}

export default GetTokenVerification