<template>
  <div class="container container-table">
    <div class="row vertical-10p">
      <div class="container">
        <img src="/static/img/logo.png" class="center-block logo">
        <div class="text-center col-md-4 col-sm-offset-4">
          <!-- login form -->
          <form class="ui form loginForm"  @submit.prevent="checkCreds">

            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
              <input class="form-control" name="username" placeholder="Username" type="text" v-model="username">
            </div>

            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock"></i></span>
              <input class="form-control" name="password" placeholder="Password" type="password" v-model="password">
            </div>
            <button type="submit" v-bind:class="'btn btn-primary btn-lg ' + loading">Entrar</button>
          </form>

          <!-- errors -->
          <div v-if=response class="text-red"><p>{{response}}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./login.js"></script>
<style lang="scss" src="./login.scss"></style>
