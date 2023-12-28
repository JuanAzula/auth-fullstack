import axios from 'axios'

const baseUrl = 'http://localhost:3002/api/login'

export default class LoginService {
  static async LoginUser (logindata) {
    const respuesta = await axios.post('http://localhost:3002/api/login', logindata, {
      headers: { 'Content-Type': 'application/json' }
    })
    return respuesta.data
  }
}
