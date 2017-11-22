<template>
  <div class="container container-table">
    <div class="row vertical-10p">
      <div class="container">
        <img src="/static/img/logo.png" class="center-block logo">
        <div class="text-center col-md-4 col-sm-offset-4">
          <!-- login form -->
          <form class="ui form loginForm"  v-on:submit.prevent="login()">

            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
              <input class="form-control" name="username" placeholder="Usuario" type="text" v-model.trim="username">
            </div>

            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock"></i></span>
              <input class="form-control" name="password" placeholder="Contraseña" type="password" v-model.trim="password">
            </div>
            <button type="submit" v-bind:class="'btn btn-primary btn-lg '">Entrar</button>
          </form>

          <!-- errors -->
          <div v-if="errors.emptyFields" class="text-red"><p>Introduzca Usuario y Contraseña</p></div>
          <div v-if="errors.wrongFields" class="text-red"><p> Usuario o contraseña incorrecta </p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./login.js"></script>
<style lang="scss" src="./login.scss"></style>
