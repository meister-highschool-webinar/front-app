import axios from 'axios'
import { SERVER } from 'config/config.json'

class AdminRepository {
  handleAdminLogin = async (request) => {
    try {
      const data = await axios.post(`${SERVER}/auth/admin-login`, request)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new AdminRepository()
