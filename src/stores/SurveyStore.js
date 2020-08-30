import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import * as api from 'utils/apis'
import filterSurvey from 'lib/filterSurvey'

@autobind
export default class SurveyStore {
  @observable surveyData = []

  @action
  async handleSurveyData() {
    const res = await api.getQna()
    let qna = res.qna
    qna.major = filterSurvey.filterMajor(res.qna.major)

    this.surveyData = qna

    return res
  }
}
