import { observable } from 'mobx'

export default class UserStore {
  @observable userInfo
  constructor() {
    this.userInfo = {}
  }

  login = (data) => {
    this.userInfo = data
  }
}
