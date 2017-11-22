const state = {
  main: {
    name: localStorage.getItem('usr'),
    // position: 'Web Developer',
    state: {
      color: '#3c763d',
      name: 'Online'
    },
    createdAt: new Date()
  }
}

const mutations = {

}

export default {
  state,
  mutations
}
