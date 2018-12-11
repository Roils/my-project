<template>
  <div id="app">
    <app-header v-bind:title="title">111</app-header>
    <app-users v-bind:users="users">2222</app-users>
    <app-users v-bind:users="users">3333</app-users>
    <app-footer v-bind:title="title">44444</app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Users from './components/Users'
export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-users': Users
  },
  data () {
    return {
      users: [
        {name: 'Roil', position: 'Roil', show: false},
        {name: 'Roil', position: 'Roil', show: false},
        {name: 'Roil', position: 'Roil', show: false},
        {name: 'Roil', position: 'Roil', show: false},
        {name: 'Roil', position: 'Roil', show: false},
        {name: 'Roil', position: 'Roil', show: false},
        {name: 'Roil', position: 'Roil', show: false}
      ]
    }
  }
}
</script>

<style scoped>
</style>
