<template>
  <div class="wrapper">
    <va-navibar></va-navibar>
    <va-slider :slideMenuItems="slideMenuItems"></va-slider>
    <va-content-wrap></va-content-wrap>
    <Modal></Modal>
  </div>
</template>

<script>
  import VANaviBar from './naviBar.vue'
  import VASlider from './slider.vue'
  import VAContentWrap from './contentWrap.vue'
  import Modal from '../Modal.vue'
  import store from '../../vuex/store.js'
  import slideMenuItems from '../../lib/slideMenuItems.js'

  export default {
    data () {
      return {
        slideMenuItems: slideMenuItems
      }
    },
    methods: {},
    components: {
      'va-navibar': VANaviBar,
      'va-slider': VASlider,
      'va-content-wrap': VAContentWrap,
      Modal
    },
    store
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
