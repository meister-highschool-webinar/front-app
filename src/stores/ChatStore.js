import { action, observable } from 'mobx'

export default class ChatStore {
  @observable chatData
  @observable chatList

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
    this.chatList.push(data)
  }
}
