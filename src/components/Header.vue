<template>
  <header @click="change">
      <p>{{ coperight }}{{ title1 }}</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      coperight: 'vue商城首页',
      title1: '初级商城'
    }
  },
  methods: {
    change: function () {
      this.title1 = '高级商城'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background-color: aquamarine;
    height: 60px;
    line-height: 60px;
}
p{
    text-align: center;
    font-size: 16px;
}
</style>
