import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import WebinarTimeTableRepository from './WebinarTimeTableRepository'

@autobind
class WebinarTimeTableStore {
  @observable timeTableList = []
  @observable tableStartTime = ''

  async getTimeTable() {
    const response = await WebinarTimeTableRepository.getTimeTable()
    this.timeTableList = response.data.timeTableList
    this.tableStartTime = response.data.timeTableList[0].start_time
    return response
  }
}

export default WebinarTimeTableStore
