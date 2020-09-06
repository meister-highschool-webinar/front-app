import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import * as api from 'utils/apis'

@autobind
class AdminStore {
  @action
  async handleAdminLogin(data) {
    const response = api.adminLogin(data)

    return response
  }

  @action
  async createWebinarInfo(data) {
    const response = api.createWebinarInfo(data)

    return response
  }
}

export default AdminStore
