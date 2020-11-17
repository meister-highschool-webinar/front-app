export const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000
  const refreshToken = async () => {
    const newAuthResult = await res.reloadAuthResponse()
    console.log('newAuthRes: ', newAuthResult)
    console.log('new auth Token: ', newAuthResult.id_token)

    setTimeout(refreshToken, refreshTiming)
  }
  setTimeout(refreshToken, refreshTiming)
}