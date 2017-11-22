import UsersServices from './users.service'
export default {
  name: 'Users',
  data () {
    return {
      usersList: []
    }
  },
  beforeCreate () {
    UsersServices.getLicensesTree().then(response => {
      console.log(response)
      this.usersList = response
    })
  },
  methods: {}
}
