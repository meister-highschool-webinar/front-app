import React from 'react'
import './MainSurvey.scss'
import MainSurveyPie from './MainSurveyPie'

const MainSurvey = ({ surveyData, loading }) => {
  return (
    <div className="main_survey">
      <div className="main_survey_container">
        {!loading && (
          <>
            <MainSurveyPie datas={surveyData.school} />
            <MainSurveyPie datas={surveyData.grade} />
            <MainSurveyPie datas={surveyData.major} />
          </>
        )}
      </div>
    </div>
  )
}

export default MainSurvey
