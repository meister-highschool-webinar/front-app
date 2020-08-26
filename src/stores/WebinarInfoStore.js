import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import * as api from 'utils/apis'

@autobind
class WebinarInfoStore {
  @observable link = ''
  @observable title = ''
  @observable detail = ''
  @action
  async getWebinarInfo() {
    const response = await api.getWebinarInfo()
    this.link = response.data.link
    this.title = response.data.title
    this.detail = response.data.detail
    return response
  }
}

export default WebinarInfoStore
