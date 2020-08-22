import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import AdminRepository from './AdminRepository'

@autobind
class AdminStore {
  @action
  async handleAdminLogin(request) {
    try {
      const response = AdminRepository.handleAdminLogin(request)
      return new Promise((resolve, reject) => {
        resolve(response)
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }

  @action
  async createWebinarInfo(request) {
    try {
      const response = AdminRepository.createWebinarInfo(request)
      return new Promise((resolve, reject) => {
        resolve(response)
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }
}

export default AdminStore
