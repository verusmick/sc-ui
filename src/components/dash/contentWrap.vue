<template>
  <div id="content-wrap" class="content-wrapper">
    <section class="content-header">
      <h1>
        {{$route.meta.labelName }}
        <small>{{ $route.meta.description }}</small>
      </h1>
    </section>
    <section class="content">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: 'va-content-wrap',
  created () {

  }
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
