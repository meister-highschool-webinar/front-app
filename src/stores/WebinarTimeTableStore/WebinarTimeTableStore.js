import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import WebinarTimeTableRepository from './WebinarTimeTableRepository'

@autobind
class WebinarTimeTableStore {
  @observable timeTableList = []
  @observable tableStartTime = ''

  async getTimeTable() {
    try {
      const response = await WebinarTimeTableRepository.getTimeTable()
      this.timeTableList = response.data.timeTableList
      this.tableStartTime = response.data.timeTableList[0].start_time
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

export default WebinarTimeTableStore
