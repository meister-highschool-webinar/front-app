const filter = {
  school: ['광주SW 마이스터고등학교', '대구SW 고등학교', '대덕SW 마이스터고등학교'],
  major: ['SW개발과', '임베디드SW과', '정보보안과'],
}

const filterMajor = (datas) => {
  let filterdDatas = [...datas]
  let count = 0

  filterdDatas = filterdDatas.filter((data) => {
    let checked = false
    filter.major.map((check) => {
      if (data.name === check) {
        checked = true
      }
    })
    if (!checked) {
      count += data.count
    }
    return checked
  })

  if (count !== 0) {
    console.log(filterdDatas)
    filterdDatas = [...filterdDatas, { name: '기타', count }]
  }

  return filterdDatas
}

export default {
  filterMajor,
}
