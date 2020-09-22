import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'

export default class LuckyStore {
  @persist('object') @observable winner = {}

  @action
  setCurrentWinner = (winner) => {
    this.winner = winner
  }
}
