import { observable } from 'mobx'

const ChatStore = observable({
  chatInfo: {},
  chat(data) {
    this.chatInfo = data
  },
})

export default ChatStore
