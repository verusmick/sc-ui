<template>
  <div class="hello" style="min-height: 550px;">
    <div>
      <img class="logo" src="../assets/logoTextura.png">
    </div>
    <div>
      <h1>Bienvenidos - Demo list</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false
    }
  },
  methods: {
    clickBtn () {
      this.loading = !this.loading
      setTimeout(() => {
        this.loading = !this.loading
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.logo {
  width: 30em;
  padding: 6em;
}
</style>
