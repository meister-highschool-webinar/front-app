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
    qna.info = filterSurvey.filterInfo(res.qna.info)
    qna.language = filterSurvey.filterLanguage(res.qna.language)
    qna.field = filterSurvey.filterField(res.qna.field)
    qna.company = filterSurvey.filterCompany(res.qna.company)

    this.surveyData = qna

    return res
  }
}
