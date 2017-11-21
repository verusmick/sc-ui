// import api from '../api'
export default {
  name: 'Login',
  data (router) {
    return {
      section: 'Login',
      loading: '',
      username: '',
      password: '',
      response: ''
    }
  },
  methods: {
    checkCreds () {
      const {username, password} = this
      this.toggleLoading()
      this.resetResponse()
      this.$store.commit('TOGGLE_LOADING')
      /* Making API call to authenticate a user */
      // api.request('post', '/login', {username, password})
      //   .then(response => {
      //     this.toggleLoading()
      //     var data = response.data
      //     /* Checking if error object was returned from the server */
      //     if (data.error) {
      //       var errorName = data.error.name
      //       if (errorName) {
      //         this.response = errorName === 'InvalidCredentialsError'
      //           ? 'Username/Password incorrect. Please try again.'
      //           : errorName
      //       } else {
      //         this.response = data.error
      //       }
      //       return
      //     }
      //     /* Setting user in the state and caching record to the localStorage */
      //     if (data.user) {
      //       var token = 'Bearer ' + data.token
      //       this.$store.commit('SET_USER', data.user)
      //       this.$store.commit('SET_TOKEN', token)
      //       if (window.localStorage) {
      //         window.localStorage.setItem('user', JSON.stringify(data.user))
      //         window.localStorage.setItem('token', token)
      //       }
      //       this.$router.push(data.redirect ? data.redirect : '/')
      //     }
      //   })
      //   .catch(error => {
      //     this.$store.commit('TOGGLE_LOADING')
      //     console.log(error)
      //     this.response = 'Server appears to be offline'
      //     this.toggleLoading()
      //   })
    },
    toggleLoading () {
      this.loading = (this.loading === '') ? 'loading' : ''
    },
    resetResponse () {
      this.response = ''
    }
  }
}
