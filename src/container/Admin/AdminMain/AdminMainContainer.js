import React, { useState, useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import AdminMain from 'components/Admin/AdminMain'
import { useHistory, withRouter } from 'react-router-dom'
import { stores } from 'stores'
import Swal from 'sweetalert2'
import moment from 'moment'
import TimeTableTemp from 'components/TimeTable/TimeTableTemp/TimeTableTemp'
import AdminTimetable from 'components/Admin/AdminTimetable'

const AdminMainContainer = observer(() => {
  const history = useHistory()

  const { getWebinarInfo } = stores.WebinarInfoStore
  const { createWebinarInfo, getFile, chatlog, timetable } = stores.AdminStore
  const { timeTableList, tableStartTime, getTimeTable } = stores.WebinarTimeTableStore

  const [linkInput, setLinkInput] = useState('')
  const [titleInput, setTitleInput] = useState('')
  const [detailInput, setDetailInput] = useState('')
  const [popup, setPopup] = useState(false)

  const handleGetTimeTable = useCallback(() => {
    getTimeTable().catch((error) => {
      return error
    })
  }, [getTimeTable])

  const handleGetWebinarInfo = useCallback(async () => {
    await getWebinarInfo()
      .then((res) => {
        setLinkInput(res.link)
        setTitleInput(res.title)
        setDetailInput(res.detail)
      })
      .catch((error) => {
        return error
      })
  }, [getWebinarInfo])

  const handleCreateWebinarInfo = useCallback(async () => {
    if (linkInput !== '' && titleInput !== '' && detailInput !== '') {
      const data = {
        link: linkInput,
        title: titleInput,
        detail: detailInput,
      }
      await createWebinarInfo(data)
        .then((res) => {
          Swal.fire({
            title: '성공',
            text: '저장되었습니다.',
            icon: 'success',
          })
          history.push('/')
        })
        .catch((err) => {
          const { status } = err.response

          if (status === 401) {
            history.push('/adminLogin')
          }
        })
    } else {
      Swal.fire({
        title: '오류',
        text: '빈칸을 모두 채워주세요.',
        icon: 'error',
      })
    }
  }, [createWebinarInfo, linkInput, titleInput, detailInput])

  const getFileInfo = (name) => {
    getFile(name).catch((err) => {
      const { status } = err.response

      if (status === 401) {
        history.push('/adminLogin')
      }
    })
  }

  const timeTableListMap =
    timeTableList &&
    timeTableList.map((data, i) => {
      const { start_time, end_time, speech, track_name } = data
      const start_time_min = moment.duration(moment(start_time).format('HH:mm'))
      const end_time_min = moment.duration(moment(end_time).format('HH:mm'))
      const time_result = (end_time_min - start_time_min) / 60000

      return (
        <tr key={i}>
          <TimeTableTemp start_time={start_time} end_time={end_time} speech={speech} track_name={track_name} result={time_result} />
        </tr>
      )
    })

  const timeTableStartTime = moment(tableStartTime).format('MM/DD')

  useEffect(() => {
    handleGetTimeTable()
  }, [handleGetTimeTable])

  useEffect(() => {
    handleGetWebinarInfo()
    getFileInfo('timetable')
    getFileInfo('chatlog')
  }, [handleGetWebinarInfo, getFile])

  return (
    <>
      <AdminMain
        handleCreateWebinarInfo={handleCreateWebinarInfo}
        linkInput={linkInput}
        setLinkInput={setLinkInput}
        titleInput={titleInput}
        setTitleInput={setTitleInput}
        detailInput={detailInput}
        setDetailInput={setDetailInput}
        chatlogFile={chatlog}
        timetableFile={timetable}
        timeTableListMap={timeTableListMap}
        timeTableStartTime={timeTableStartTime}
        setPopup={setPopup}
      />
      {popup && <AdminTimetable setPopup={setPopup} />}
    </>
  )
})

export default withRouter(AdminMainContainer)
