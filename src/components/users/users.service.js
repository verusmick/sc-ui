import { HTTP } from '../../http-common'

export default {
  getLicensesTree () {
    return HTTP.get('/users')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error.response))
  }
}
