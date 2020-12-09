import { action, computed, observable } from 'mobx'
import { persist } from 'mobx-persist'

export default class ChatStore {
  @observable qnaCheck
  @observable chatText
  @observable @persist('list') chatList = []
  @observable @persist('list') qnaList = []

  constructor() {
    this.qnaCheck = false
    this.chatText = ''
    this.chatList = []
    this.qnaList = []
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
    // this.setQnaList(this.chatList)
    this.qnaList = this.qnaList.concat(this.chatList.filter((chatData) => chatData.question === true))
  }

  @action
  removeChat = (msg_id) => {
    this.chatList.splice(
      this.chatList.findIndex((chat) => chat.msg_id === msg_id),
      1
    )
    this.qnaList.splice(
      this.qnaList.findIndex((qna) => qna.msg_id === msg_id),
      1
    )
  }

  @action
  removeAllChat = () => {
    this.chatList = []
  }

  @action
  removeQnaList = () => {
    this.qnaList = []
    this.chatList = this.chatList.filter((chatData) => chatData.question === false)
  }

  @action
  setQnaList = (chatList) => {
    this.qnaList = []
    this.qnaList = chatList.filter((chatData) => chatData.question === true)
  }

  // @computed
  // get questionList() {
  //   return this.chatList.filter((chatData) => chatData.question === true)
  // }
}
