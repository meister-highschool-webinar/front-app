import React, { useState, useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import AdminMain from 'components/Admin/AdminMain'
import { useHistory, withRouter } from 'react-router-dom'
import { stores } from 'stores'
import Swal from 'sweetalert2'
import moment from 'moment'
import TimeTableTemp from 'components/TimeTable/TimeTableTemp/TimeTableTemp'
import AdminTimetable from 'components/Admin/AdminTimetable'
import * as apis from 'utils/apis'
import { DATE } from 'config/config.json'

// config/config.json 에 DATE를 2020-09-11 처럼 특정 날짜로 지정해주세요.

const AdminMainContainer = observer(() => {
  const history = useHistory()

  const { getWebinarInfo } = stores.WebinarInfoStore
  const { createWebinarInfo, getFile, chatlog, timetable } = stores.AdminStore
  const { timeTableList, tableStartTime, getTimeTable } = stores.WebinarTimeTableStore

  const [linkInput, setLinkInput] = useState('')
  const [titleInput, setTitleInput] = useState('')
  const [detailInput, setDetailInput] = useState('')
  const [popup, setPopup] = useState(false)

  const [track, setTrack] = useState('')
  const [speech, setSpeech] = useState('')
  const [start, setStart] = useState(moment().format('HH:mm'))
  const [end, setEnd] = useState(moment().format('HH:mm'))

  const luckydrawStart = async () => {
    const { value: event } = await Swal.fire({
      title: 'Event를 입력해주세요.',
      input: 'text',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return '필수 입력 항목입니다.'
        }
      },
    })

    if (event) {
      await apis
        .startLuckyDraw({ event: Number(event) })
        .then(() => {
          Swal.fire({ title: 'Success', text: '럭키드로우가 시작되었습니다.', icon: 'success' })
        })
        .catch((err) => {
          if (err.response.status === 400) {
            Swal.fire({ title: 'Error', text: '해당 상품이 소진되었습니다.', icon: 'error' })
          }
        })
    }
  }

  const luckydrawReset = async () => {
    const { isConfirmed } = await Swal.fire({
      title: '정말 초기화 하시겠습니까?',
      showCancelButton: true,
    })
    if (isConfirmed) {
      await apis
        .resetLuckyDraw()
        .then(() => {
          Swal.fire({ title: 'Success', text: '럭키드로우가 초기화되었습니다.', icon: 'success' })
        })
        .catch((err) => {
          if (err.response.status === 400) {
            Swal.fire({ title: 'Error', text: '럭키드로우 초기화에 실패했습니다.', icon: 'error' })
          }
        })
    }
  }

  const handleTimetable = useCallback(async () => {
    if (track === '' || speech === '') {
      Swal.fire({
        title: '경고',
        text: '빈칸을 모두 채워주세요.',
        icon: 'warning',
      })
    } else {
      const start_time = new Date(`${DATE} ${start}:00`)
      const end_time = new Date(`${DATE} ${end}:00`)
      console.log(moment.parseZone(start_time).format('YYYY-MM-DD HH:mm:ss'))
      await apis.createTimetable({
        tableList: [
          {
            track_name: track,
            speech: speech,
            start_time: moment.parseZone(start_time).format('YYYY-MM-DD HH:mm:ss'),
            end_time: moment.parseZone(end_time).format('YYYY-MM-DD HH:mm:ss'),
          },
        ],
      })
      history.go(0)
    }
  }, [end, start, track, speech])

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
          console.log('create err', err)
          if (err.response && err.response.status === 401) {
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
      console.log('err', err)
      if (err.response && err.response.status === 401) {
        history.push('/adminLogin')
      }
    })
  }

  const timeTableListMap =
    timeTableList &&
    timeTableList.map((data, i) => {
      const { start_time, end_time, speech, track_name } = data
      // const start_time_min = moment(start_time).format('HH:mm')
      // const end_time_min = moment(end_time).format('HH:mm')
      // const time_result = (end_time_min - start_time_min) / 60000
      const time_result = (moment(end_time) - moment(start_time)) / 60000

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
        luckydrawStart={luckydrawStart}
        luckydrawReset={luckydrawReset}
      />
      {popup && (
        <AdminTimetable
          handleTimetable={handleTimetable}
          track={track}
          setTrack={setTrack}
          speech={speech}
          setSpeech={setSpeech}
          setStart={setStart}
          setEnd={setEnd}
          setPopup={setPopup}
        />
      )}
    </>
  )
})

export default withRouter(AdminMainContainer)
