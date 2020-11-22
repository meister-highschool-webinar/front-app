import { observable, action, computed } from 'mobx'
import { persist } from 'mobx-persist'
import io from 'socket.io-client'
import { DEV_SERVER, PROD_SERVER } from 'config/config.json'

// const server = process.env.NODE_ENV === 'production' ? PROD_SERVER : DEV_SERVER
// const server = PROD_SERVER
const server = DEV_SERVER

export default class UserStore {
  @persist @observable accessToken = ''
  @persist @observable adminToken = ''
  @persist('object') @observable userData = {}

  @action
  userLogin = (data, token) => {
    this.userData = data
    if(token === null) this.accessToken = ''
    else this.accessToken = token
  }

  @action
  adminLogin = (data) => {
    this.adminToken = data
  }

  @action
  userLogout = () => {
    this.userData = {}
    this.accessToken = ''
  }

  @computed
  get socket() {
    let socket
    if (this.accessToken.length === 0) {
      socket = io(server)
    } else {
      socket = io(server, {
        query: {
          user_token: this.accessToken,
        },
      })
    }
    return socket
  }
}
