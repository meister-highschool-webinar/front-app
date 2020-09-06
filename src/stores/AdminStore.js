import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import * as api from 'utils/apis'

@autobind
class AdminStore {
  @action
  async handleAdminLogin(data) {
    const response = await api.adminLogin(data)

    return response
  }

  @action
  async createWebinarInfo(data) {
    const response = await api.createWebinarInfo(data)

    return response
  }

  @action
  async getFile(name) {
    const response = await api.getFile(name)

    return response
  }
}

export default AdminStore
