import { action, computed, observable } from 'mobx'
import { persist } from 'mobx-persist'

export default class ChatStore {
  @observable qnaCheck
  @observable chatText
  @observable @persist('list') chatList = []

  constructor() {
    this.qnaCheck = false
    this.chatText = ''
    this.chatList = []
  }

  @action
  toggleCheck = (e) => {
    this.qnaCheck = !this.qnaCheck
  }

  @action
  onChatChange = (value) => {
    this.chatText = value
  }

  @action
  chatListUpdate = (data) => {
    if (this.chatList.length > 99) this.chatList.splice(0, this.chatList.length - 99)
    this.chatList.push(data)
  }

  @action
  removeChat = (id) => {
    this.chatList.splice(this.chatList.findIndex((chat) => chat.id === id), 1)
  }

  @action
  removeAllChat = () => {
    this.chatList = []
  }

  @action
  removeQnaList = () => {
    this.chatList = this.chatList.filter((chatData) => chatData.question === false)
  }

  @computed
  get questionList() {
    return this.chatList.filter((chatData) => chatData.question === true)
  }
}
