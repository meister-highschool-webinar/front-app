import axios from 'axios'
import { SERVER } from 'config/config.json'

class WebinarInfoRepository {
  getWebinarInfo = async () => {
    try {
      const data = await axios.get(`${SERVER}/webinar-info`)
      console.log(data)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new WebinarInfoRepository()
