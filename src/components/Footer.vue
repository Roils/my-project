<template>
  <footer>
      <p>{{ foots }}{{ title1 }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    title1: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      foots: '©Roil项目组出品'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    background-color: black;
    height: 60px;
    line-height: 60px;
}
p{
    text-align: center;
    font-size: 16px;
    color: green;
}
</style>
