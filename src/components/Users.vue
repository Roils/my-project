<template>
  <div class="users">
      <h1>欢迎来到vue商城</h1>
      <ul>
          <li v-for="user in users" @click="user.show = !user.show" :key="user.show">
              <h2>{{ user.name }}</h2>
              <h3 v-show="user.show">{{ user.position }}</h3>
          </li>
      </ul>
      <button v-on:click="deletedata">删除</button>
  </div>
</template>

<script>
export default {
  name: 'users',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    deletedata: function () {
      this.users.pop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
    margin: 0 auto;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
}
h1{
    text-align: center;
}
li{
    list-style: none;
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 20px;
    border: 1px solid black;
    margin: 10px;
}
</style>
