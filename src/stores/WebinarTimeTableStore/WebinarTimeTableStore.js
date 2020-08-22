import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import WebinarTimeTableRepository from './WebinarTimeTableRepository'

@autobind
class WebinarTimeTableStore {
  @observable TimeTableList = []

  async getTimeTable() {
    try {
      const response = await WebinarTimeTableRepository.getTimeTable()
      this.TimeTableList = response.data.timeTableList
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
