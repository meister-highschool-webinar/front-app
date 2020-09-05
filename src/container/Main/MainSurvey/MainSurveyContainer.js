import React, { useCallback, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import MainSurvey from 'components/Main/MainSurvey'
import { stores } from 'stores'

const MainSurveyContainer = observer(() => {
  const { handleSurveyData, surveyData } = stores.surveyStore

  const [loading, setLoading] = useState(true)

  const handleSurveyDataCallback = useCallback(async () => {
    if (!surveyData.school) {
      setLoading(true)
      await handleSurveyData()
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [handleSurveyData])

  useEffect(() => {
    handleSurveyDataCallback()
  }, [handleSurveyDataCallback])

  console.log(surveyData)

  return <MainSurvey surveyData={surveyData} loading={loading} />
})

export default MainSurveyContainer
