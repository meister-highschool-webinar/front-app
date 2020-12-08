import { observable, action, computed } from 'mobx'
import { persist } from 'mobx-persist'
import io from 'socket.io-client'
import { getTokenVerification } from 'utils/token'
import { DEV_SERVER, TEST_SERVER, PROD_SERVER } from 'config/config.json'

// const server = process.env.NODE_ENV === 'production' ? PROD_SERVER : DEV_SERVER
let SERVER_URL
const host = window.location.hostname
switch (host) {
  case 'test-front-app-meister-highschool-webinar.endpoint.ainize.ai':
    SERVER_URL = `${DEV_SERVER}`
    break
  case 'master-backend-meister-highschool-webinar.endpoint.ainize.ai':
  case 'www.sw-webinar.com':
    SERVER_URL = `${PROD_SERVER}`
    break
  default:
    SERVER_URL = `${TEST_SERVER}`
}

export default class UserStore {
  @persist @observable accessToken = ''
  // @persist @observable adminToken = ''
  @persist('object') @observable userData = {}

  @action
  userLogin = (data, token) => {
    this.userData = data
    if(token === null) this.accessToken = ''
    else this.accessToken = token
  }

  // @action
  // adminLogin = (data) => {
  //   this.adminToken = data
  // }

  @action
  userLogout = () => {
    this.userData = {}
    this.accessToken = ''
  }

  @computed
  get socket() {
    let socket
    const adminToken = getTokenVerification()
    if (adminToken.length > 0) {
      socket = io(SERVER_URL, {
        query: {
          admin_token: adminToken
        }
      })
    } else {
      if (this.accessToken.length === 0) {
        socket = io(SERVER_URL)
      } else {
        socket = io(SERVER_URL, {
          query: {
            user_token: this.accessToken,
          },
        })
      }
    }

    return socket
  }
}