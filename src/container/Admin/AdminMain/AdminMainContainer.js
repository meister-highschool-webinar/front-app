import React, { useState, useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import AdminMain from 'components/Admin/AdminMain'
import { useHistory, withRouter } from 'react-router-dom'
import { stores } from 'stores'
import Swal from 'sweetalert2'

const AdminMainContainer = observer(() => {
  const history = useHistory()

  const { getWebinarInfo, link, title, detail } = stores.WebinarInfoStore
  const { createWebinarInfo } = stores.AdminStore

  const [linkInput, setLinkInput] = useState('')
  const [titleInput, setTitleInput] = useState('')
  const [detailInput, setDetailInput] = useState('')

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
      await createWebinarInfo(data).catch((error) => {
        return error
      })
      Swal.fire({
        title: '성공',
        text: '저장되었습니다.',
        icon: 'success',
      })
      history.push('/')
    } else {
      Swal.fire({
        title: '오류',
        text: '빈칸을 모두 채워주세요.',
        icon: 'error',
      })
    }
  }, [createWebinarInfo, linkInput, titleInput, detailInput])

  useEffect(() => {
    handleGetWebinarInfo()
  }, [handleGetWebinarInfo])

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
      />
    </>
  )
})

export default withRouter(AdminMainContainer)
