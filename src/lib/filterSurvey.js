const filter = {
  school: ['광주SW 마이스터고등학교', '대구SW 고등학교', '대덕SW 마이스터고등학교'],
  major: ['SW개발과', '임베디드SW과', '정보보안과'],
  info: ['구글', '깃헙', '스택오버플로우', '유튜브', '유데미', '인프런', '개발자 커뮤니티(페이스북 등)'],
  language: ['Java', 'C#', 'Node.js', 'Python', 'Django', 'C / C++', 'Dart', 'Kotlin', 'Go'],
  field: ['백엔드', '웹 프론트엔드', '모바일 프론트엔드', '임베디드 개발자', '인공지능 개발자(머신러닝, 데이터사이언스 등)', '보안', '게임'],
  company: ['네이버', '우아한형제들', '넥슨', '안랩', '토스', '카카오', '넷마블', '구글', '페이스북', '마이크로소프트', '삼성/LG/SK 등 대기업'],
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
    filterdDatas = [...filterdDatas, { name: '기타', count }]
  }

  return filterdDatas
}

const filterInfo = (datas) => {
  let filterdDatas = [...datas]
  let count = 0

  filterdDatas = filterdDatas.filter((data) => {
    let checked = false
    filter.info.map((check) => {
      if (data.name === check) {
        if (data.name.indexOf('(페이스북 등)')) {
          data.name = data.name.replace('(페이스북 등)', '')
        }
        if (data.name.indexOf('스택오버플로우') !== -1) {
          data.name = '스택 오버플로우'
        }
        checked = true
      }
    })
    if (!checked) {
      count += data.count
    }
    return checked
  })

  if (count !== 0) {
    filterdDatas = [...filterdDatas, { name: '기타', count }]
  }

  return filterdDatas
}

const filterLanguage = (datas) => {
  let filterdDatas = [...datas]
  let count = 0

  filterdDatas = filterdDatas.filter((data) => {
    let checked = false
    filter.language.map((check) => {
      if (data.name === check) {
        if (data.name.indexOf('(페이스북 등)') !== -1) {
          data.name = data.name.replace('(페이스북 등)', '')
        } else if (data.name.indexOf('스택오버플로우') !== -1) {
          data.name = '스택 오버플로우'
        }
        checked = true
      }
    })
    if (!checked) {
      count += data.count
    }
    return checked
  })

  if (count !== 0) {
    filterdDatas = [...filterdDatas, { name: '기타', count }]
  }

  return filterdDatas
}

const filterField = (datas) => {
  let filterdDatas = [...datas]
  let count = 0

  filterdDatas = filterdDatas.filter((data) => {
    let checked = false
    filter.field.map((check) => {
      if (data.name === check) {
        if (data.name.indexOf('(머신러닝, 데이터사이언스 등)')) {
          data.name = data.name.replace('(머신러닝, 데이터사이언스 등)', '')
        }
        checked = true
      }
    })
    if (!checked) {
      count += data.count
    }
    return checked
  })

  if (count !== 0) {
    filterdDatas = [...filterdDatas, { name: '기타', count }]
  }

  return filterdDatas
}

const filterCompany = (datas) => {
  let filterdDatas = [...datas]
  let count = 0

  filterdDatas = filterdDatas.filter((data) => {
    let checked = false
    filter.company.map((check) => {
      if (data.name === check) {
        if (data.name.indexOf('마이크로소프트') !== -1) {
          data.name = '마이크로 소프트'
        } else if (data.name.indexOf('삼성/LG/SK 등 대기업') !== -1) {
          data.name = '대기업'
        }
        checked = true
      }
    })
    if (!checked) {
      count += data.count
    }
    return checked
  })

  if (count !== 0) {
    filterdDatas = [...filterdDatas, { name: '기타', count }]
  }

  return filterdDatas
}

export default {
  filterMajor,
  filterInfo,
  filterLanguage,
  filterField,
  filterCompany,
}
