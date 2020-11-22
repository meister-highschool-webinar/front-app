import { useGoogleLogin } from 'react-google-login'
import { GOOGLE_ID } from '../config/config.json'

const getGoogleAuth = () => {
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: GOOGLE_ID,
    isSignedIn: true,
    accessType: 'offline',
  })
}