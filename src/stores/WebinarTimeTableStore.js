import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import * as api from 'utils/apis'

@autobind
class WebinarTimeTableStore {
  @observable timeTableList = []
  @observable tableStartTime = ''

  @action
  async getTimeTable() {
    const response = await api.getTimeTable()
    this.timeTableList = response.data.timeTableList
    this.tableStartTime = response.data.timeTableList[0].start_time
    return response
  }
}

export default WebinarTimeTableStore
