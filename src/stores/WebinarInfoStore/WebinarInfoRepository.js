import axios from 'axios'
import { SERVER } from 'config/config.json'

class WebinarInfoRepository {
  getWebinarInfo = async () => {
    const data = await axios.get(`${SERVER}/webinar-info`)
    return data
  }
}

export default new WebinarInfoRepository()
