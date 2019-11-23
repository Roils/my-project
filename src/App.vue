<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/footer.vue'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
