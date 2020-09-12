import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import * as api from 'utils/apis'

@autobind
class AdminStore {
  @observable chatlog = []
  @observable timetable = []

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

    if (name === 'timetable') {
      this.timetable = response
        .replace(/\"/g, '')
        .split('\n')
        .map((data) => {
          return data.split(',')
        })
    } else {
      this.chatlog = response
        .replace(/\"/g, '')
        .split('\n')
        .map((data) => {
          return data.split(',')
        })
    }

    return response
  }
}

export default AdminStore
