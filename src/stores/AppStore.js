import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'

export default class AppStore {
  @persist @observable appInfo
  @observable webinarInfo
  timeTable
  constructor() {
    this.appInfo = {}
    this.webinarInfo = {}
    this.timeTable = {}
  }
  
  @action
  loadAppInfo = () => {
    // load some infos
  }
}
