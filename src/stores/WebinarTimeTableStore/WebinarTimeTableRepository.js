import axios from 'axios'
import { SERVER } from 'config/config.json'

class WebinarTimeTableRepository {
  getTimeTable = async () => {
    const data = await axios.get(`${SERVER}/timetable-list`)
    return data
  }
}

export default new WebinarTimeTableRepository()
