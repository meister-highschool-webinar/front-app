export const getTokenVerification = () => {
  const adminToken = sessionStorage.getItem('adminToken')
  return !!adminToken ? adminToken : ''
}