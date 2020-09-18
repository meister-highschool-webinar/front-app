import { observable, action, computed } from 'mobx'
import { persist } from 'mobx-persist'
import io from 'socket.io-client'
import { DEV_SERVER, PROD_SERVER } from 'config/config.json'

const server = process.env.NODE_ENV === 'production' ? PROD_SERVER : DEV_SERVER

export default class UserStore {
  @persist @observable accessToken = ''
  @persist @observable adminToken = ''

  @action
  userLogin = (token) => {
    this.accessToken = token
  }

  @action
  adminLogin = (data) => {
    this.adminToken = data
  }

  @computed
  get socket() {
    let socket
    if (this.accessToken.length === 0) {
      socket = io(server)
    } else {
      socket = io(server, {
        query: {
          token: this.accessToken,
        },
      })
    }
    return socket
  }
}
