const GetTokenVerification = () => {
  let Token = null

  const session = sessionStorage.getItem('adminToken')

  if (session !== null) Token = session

  return Token
}

export default GetTokenVerification
