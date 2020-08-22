import axios from 'axios'
import { SERVER } from 'config/config.json'

class WebinarTimeTableRepository {
  getTimeTable = async () => {
    try {
      const data = await axios.get(`${SERVER}/timetable-list`)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new WebinarTimeTableRepository()
