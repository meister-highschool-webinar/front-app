import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import WebinarInfoRepository from './WebinarInfoRepository'

@autobind
class WebinarInfoStore {
  @observable link = ''
  @action
  async getWebinarInfo() {
    try {
      const response = WebinarInfoRepository.getWebinarInfo()
      this.link = response.data.link
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

export default WebinarInfoStore
