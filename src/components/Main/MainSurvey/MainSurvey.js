import React from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'
import './MainSurvey.scss'
import MainSurveyBar from './MainSurveyBar/index'
import MainSurveyPie from './MainSurveyPie'

const StyledSpin = styled(Spin)`
  margin-top: 325px;
`

const MainSurvey = ({ surveyData, loading }) => {
  return (
    <div className="main_survey">
      <div className="main_survey_container">
        {loading ? (
          <StyledSpin spinning={loading} tip={'...loading'} />
        ) : (
          <>
            {/*<MainSurveyPie datas={surveyData.school} title={'학교'} />*/}
            {/*<MainSurveyPie datas={surveyData.grade} title={'학년'} />*/}
            {/*<MainSurveyPie datas={surveyData.major} title={'전공'} />*/}
            <MainSurveyBar datas={surveyData.info} title={'학교 외에 학습 관련 정보를 얻는 곳'} />
            <MainSurveyBar datas={surveyData.language} title={'사용 언어'} />
            <MainSurveyBar datas={surveyData.field} title={'향후 진출하고 싶은 분야'} />
            {/*<MainSurveyBar datas={surveyData.company} title={'향후 입사하고 싶은 기업'} />*/}
          </>
        )}
      </div>
    </div>
  )
}

export default MainSurvey
