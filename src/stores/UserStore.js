import { observable } from 'mobx'

const UserStore = observable({
  userInfo: {},
  login(data) {
    this.userInfo = data
  },
})

export default UserStore
