import router from '../../router'
import store from '../../vuex/store'

import LoginService from './login.service'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      showPassword: false,
      errors: {
        emptyFields: false,
        wrongFields: false
      }
    }
  },
  beforeCreate () {
    if (store.state.isLogged) {
      router.push('/')
    }
  },
  methods: {
    login () {
      this.resetErrors()
      let loginDetails = {username: this.username, password: this.password}
      if (loginDetails.username === '' && loginDetails.password === '') {
        this.errors.emptyFields = true
        return
      }
      LoginService.login(loginDetails).then((response) => {
        let token = response.token
        localStorage.setItem('token', token)
        localStorage.setItem('usr', response.user.username)
        store.commit('LOGIN_USER')
        router.push('/')
      }).catch(() => {
        this.errors.wrongFields = true
        store.commit('LOGOUT_USER')
      })
    },
    resetErrors () {
      this.errors.emptyFields = false
      this.errors.wrongFields = false
    }
  }
}
