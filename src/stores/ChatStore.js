import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'

export default class ChatStore {
  @observable chatData
  @observable @persist('list') chatList = []

  constructor() {
    this.chatData = ''
    this.chatList = []
  }

  @action
  onChatChange = (value) => {
    this.chatData = value
  }

  @action
  chatListUpdate = (data) => {
    if (this.chatList.length > 99) this.chatList.splice(0, this.chatList.length - 99)
    this.chatList.push(data)
  }
}
